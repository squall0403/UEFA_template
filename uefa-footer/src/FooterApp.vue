<script setup>
import FooterVue from '@dataPath'

const updateLanguage = function (value) {
  const key = 'lang';
  value = encodeURI(value);
  const doc = window.parent.document
  var url = doc.location.href;
  if (url.indexOf('/lang/') > 0) {
    var kvp1 = url.split('/lang/');
    var i = kvp1.length;
    if (i == 2) {
      doc.location.href = [kvp1[0], value].join('/lang/');
    }
  }
  else {
    var kvp = doc.location.search.substr(1).split('&');

    var i = kvp.length;
    var x;
    while (i--) {
      x = kvp[i].split('=');

      if (x[0] == key) {
        x[1] = value;
        kvp[i] = x.join('=');
        break;
      }
    }

    if (i < 0) {
      kvp[kvp.length] = [key, value].join('=');
    }
    doc.location.search = kvp.join('&');
  }
}
</script>

<template>
  <div class="main-wrap thirdparty_page">
    <div class="body">
      <div class="content-wrap">
        <footer class="footer-wrap">
          <FooterVue @langChanged="updateLanguage($event)" />
        </footer>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
