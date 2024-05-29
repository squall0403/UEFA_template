<script setup>
import { onMounted, reactive } from "vue";
import DataHeaderOption from "@headerDataPath";
import UefaLogo from "../../assets/logos/uefa.vue";

const props = defineProps(["toggleAllSection", "menuOn", "menuOff", "setContactName", "isMobile"]);
const state = reactive({
  show: false,
});
onMounted(() => {
  props.setContactName();
});
</script>
<template>
  <div
    id="headerWrapper"
    :class="[state.show && 'expanded-menu']">
    <div class="header_content">
      <div class="left_section">
        <UefaLogo
          v-if="!isMobile"
          :class="'uefa-logo'"
          @click="
            state.show = !state.show;
            toggleAllSection();
          " />
        <div
          v-if="!isMobile"
          :class="[state.show && 'rotated-arrow', 'dropdown']"
          @click="
            state.show = !state.show;
            toggleAllSection();
          ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="pk-svg__icon pk-svg__icon--product"
            part="svg">
            <path
              fill="#fff"
              d="M15.93 10.542l-3.507 4.924a.52.52 0 01-.846 0L8.07 10.543a.52.52 0 01.423-.82l7.014-.001a.52.52 0 01.423.82z"></path>
          </svg>
        </div>
        <a
          class="stx-menu"
          href="javascript:window.parent.SecuTixAPI.toggleSecutixMobileMenu();">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="pk-svg__icon pk-svg__icon--product"
            part="svg">
            <path
              fill="#fff"
              d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"></path>
          </svg>
        </a>
      </div>
      <div class="right_section">
        <pk-button
          appearance="text"
          high-contrast="true"
          width="auto"
          class="pk-d--flex pk-align-items--center high-contrast hydrated stx-profile"
          type="button">
          <span
            class="pk-font-size--s"
            id="secutix-login-label">
            <a href="javascript:window.parent.location.href='/account'">Log in</a></span
          >
          <pk-icon
            name="actions-profile"
            size="24"
            class="pk-ml--xs hydrated"
            role="img"
            title="actions profile icon"
            style="--icon--width: 24px"
            width="24px">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="pk-svg__icon pk-svg__icon--product"
              part="svg"
              width="24px"
              height="24px">
              <path
                fill="#fff"
                fill-rule="evenodd"
                d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zm-4.091 5.768C17.758 15.814 15.062 14.5 12 14.5c-3.058 0-5.756 1.312-6.909 3.268a9 9 0 1113.818 0zM12 13a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
                clip-rule="evenodd"></path>
            </svg>
          </pk-icon>
          <span
            class="pk-font-size--s"
            id="secutix-logout-label"
            ><a href="javascript:window.parent.location.href='/account/logout'">Logout</a></span
          >
        </pk-button>
        <div
          class="menu-close"
          @click="
            state.show = false;
            toggleAllSection();
          "
          v-if="state.show">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="pk-svg__icon pk-svg__icon--product"
            part="svg">
            <path
              fill="#fff"
              fill-rule="evenodd"
              d="M18.3 5.71a.996.996 0 00-1.41 0L12 10.59 7.11 5.7A.996.996 0 105.7 7.11L10.59 12 5.7 16.89a.996.996 0 101.41 1.41L12 13.41l4.89 4.89a.996.996 0 101.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
              clip-rule="evenodd"></path>
          </svg>
        </div>
      </div>
    </div>
    <Transition>
      <DataHeaderOption v-if="state.show" />
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

$color_1: #fff;
$background-color_1: #000000;
$background-color_2: #ffffff1a;
$background-color_3: #000d40;
#headerWrapper {
  background-color: $background-color_1;
  color: $color_1;
  .header_content {
    height: 40px;
    max-width: 1392px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    .left_section {
      display: flex;
      align-items: center;
      cursor: pointer;
      .dropdown {
        width: 24px;
        height: 24px;
      }
    }
    .right_section {
      display: flex;
      gap: 10px;
      flex-basis: 15%;
      justify-content: space-around;
      .stx-profile {
        cursor: pointer;
        font-weight: bold;
        column-gap: 10px;
        pk-icon {
          margin-left: 0px !important;
          margin-right: 24px;
        }
      }
      .menu-close {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background-color: $background-color_2;
        padding: 2px;
        cursor: pointer;
      }
    }
  }
}

.rotated-arrow {
  transform: rotate(180deg);
}

.expanded-menu {
  background-color: #000d40 !important;
}

a {
  color: #fff;
}

@media screen and (max-width: 990px) {
  #headerWrapper {
    .header_content {
      padding: 0px 16px;
      position: -webkit-sticky;
      position: sticky;
      width: 100%;
      background-color: $background-color_1;
      z-index: 99;
      top: 0px;
      .dropdown {
        display: none !important;
      }
      .uefa-logo {
        display: none !important;
      }
    }
    .stx-menu {
      width: 25px;
      height: 25px;
    }
  }
  #headerWrapper.expanded-menu {
    .header_content {
      background-color: $background-color_3 !important;
    }
  }
  .stx-profile {
    display: none !important;
  }
  .menu-close {
    display: none !important;
  }
}
</style>
