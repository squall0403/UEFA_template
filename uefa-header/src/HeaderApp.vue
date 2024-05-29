<script setup>
import { reactive, provide, onMounted } from "vue";
import UefaHeader from "/src/components/header/Header.vue";
import DataOption from "@dataPath";

const state = reactive({
  sectionopen: false,
});
const isGeneric = import.meta.env.VITE_COMPETITION == "generic" ? true : false;
const isolated_header_iframe = $("#isolated_header_iframe", window.parent.document);
const stx_custom_header = $("#stx-custom-header", window.parent.document);
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const menuOn = function () {
  $(isolated_header_iframe).css({
    height: "400px",
    "margin-bottom": "-280px",
    "z-index": "2000",
  });
  $(stx_custom_header).css({
    height: "460px",
    "margin-bottom": "-310px",
    "z-index": "2000",
  });
};
const menuOff = function () {
  $(isolated_header_iframe).css({
    height: "120px",
    "margin-bottom": "0px",
    "z-index": "unset",
  });
  if (isMobile) {
    $(stx_custom_header).css({
      height: "95px",
      "margin-bottom": "0px",
      "z-index": "unset",
    });
  } else {
    $(stx_custom_header).css({
      height: "150px",
      "margin-bottom": "0px",
      "z-index": "unset",
    });
  }
  $(".lvl1-item.has-subitem").removeClass("rotate_arrow");
};
const toggleAllSection = function () {
  $(isolated_header_iframe).css("height") == "1090px"
    ? $(isolated_header_iframe).css("height", "120px")
    : $(isolated_header_iframe).css("height", "1090px");

  $(stx_custom_header).css("height") == "1090px"
    ? $(stx_custom_header).css("height", "150px")
    : $(stx_custom_header).css("height", "1090px");
};
const toggleMobile = function () {
  toggleAllSection();
  $(".mobile-menu").toggle("drop", { direction: "up" }, 300);
};
const setContactName = function () {
  let r = false;
  const checkSTXAPI = setInterval(() => {
    // check if secutixAPI is rendered, then clear interval
    if (parent.window.SecuTixAPI !== null) {
      let SecuTixAPI = parent.window.SecuTixAPI;
      if (parent.window.location.href.indexOf("/content") > 0) {
        if (SecuTixAPI.getContact().firstName !== undefined) {
          r = true;
        }
      } else {
        if (SecuTixAPI.getContact()) {
          r = true;
        }
      }
      if (r) {
        const SecuTixAPI = window.parent.SecuTixAPI;
        const ctc = SecuTixAPI.getContact();
        $("#secutix-login-label a").html(ctc.firstName);
      } else {
        $("#secutix-logout-label").css("display", "none");
      }
      clearInterval(checkSTXAPI);
    }
  }, 200);
};
$(isolated_header_iframe).css("position", "relative");
$(stx_custom_header).css("position", "relative");

provide("menuOn", menuOn);
provide("menuOff", menuOff);
provide("toggleMobile", toggleMobile);
provide("isGeneric", isGeneric);

onMounted(() => {
  setTimeout(() => {
    menuOff();
  }, 500);
});
</script>

<template>
  <header
    class="row header-wrap"
    style="margin-left: 0px; margin-right: 0px">
    <UefaHeader
      :toggleAllSection="toggleAllSection"
      :menuOn="menuOn"
      :menuOff="menuOff"
      :setContactName="setContactName"
      @sectionOpen="state.sectionopen = $event"
      :isMobile="isMobile">
    </UefaHeader>
  </header>
  <DataOption v-if="!state.sectionopen && !isGeneric" />
</template>
