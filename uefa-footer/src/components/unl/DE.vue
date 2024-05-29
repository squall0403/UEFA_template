<script setup>
import LanguageList from '../shared/LanguageList.vue';

const allowedLange = JSON.parse(import.meta.env.VITE_ALLOWED_LANG)
const emits = defineEmits(["langChanged"])
const emitLangChange = (lang) => {
  emits("langChanged", lang);
}

</script>
<template>
  <section pk-theme="light" class="section footer-nav">
    <div class="pk-container pk-pt--xl2">
      <!--column sx-->
      <div class="pk-col pk-col--span-12 pk-col--span-md-6">
        <div class="comp-info">
          <a class="logolink  js-tracking-link" title="

UEFA Nations League" href="https://de.uefa.com/uefanationsleague/"
            data-tracking="{&quot;action&quot;:&quot;Footer - Access  logo&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">


            UEFA Nations League </a>
        </div>
        <div class="footer-comp-nav pk-d--flex pk-justify-content--around">

          <div>
            <ul class="comp-menu-1">
              <li class=" ">
                <a class="js-tracking-link" href="https://de.uefa.com/uefanationsleague/fixtures-results/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Matches&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Spiele</a>
              </li>
              <li class=" ">
                <a class="js-tracking-link" href="https://de.uefa.com/uefanationsleague/standings/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Standings&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Gruppen</a>
              </li>
              <li class=" ">
                <a class="js-tracking-link" href="https://de.uefa.com/uefanationsleague/video/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Video&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Video</a>
              </li>
              <li class=" ">
                <a class="js-tracking-link" href="https://de.uefa.com/uefanationsleague/statistics/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Stats&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Stat.</a>
              </li>
              <li class=" ">
                <a class="js-tracking-link" href="https://de.uefa.com/uefanationsleague/teams/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Teams&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Teams</a>
              </li>
            </ul>
          </div>
          <div>
            <ul class="comp-menu-1">
              <li class=" ">
                <a class="js-tracking-link" href="https://de.uefa.com/uefanationsleague/news/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access News&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">News</a>
              </li>
              <li class=" ">
                <a class="js-tracking-link" href="https://de.uefa.com/uefanationsleague/event-guide/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Final&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Endrunde</a>
              </li>
              <li class=" ">
                <a class="js-tracking-link" href="https://de.uefa.com/uefanationsleague/history/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access History&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Geschichte</a>
              </li>
              <li class=" ">
                <a class="js-tracking-link" href="https://de.uefa.com/uefanationsleague/about/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access About&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Ãœber</a>
              </li>
              <li class=" ">
                <a class="js-tracking-link" href="https://store.uefa.com/eu_de/" target="_blank"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Store - NTC&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Shop</a>
              </li>
            </ul>
          </div>
        </div>
        <hr class="footer-section">
      </div>
      <!--column center-->
      <div class="pk-col pk-col--span-12 pk-col--span-md-3 pk-px--m footer-network">
        <h3 class="navbar-competitions-title">Auch besuchen</h3>
        <ul>
          <li class=" ">
            <a class="js-tracking-link" href="https://de.uefa.com"
              data-tracking="{&quot;action&quot;:&quot;Footer - Access Uefa.com&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">UEFA.com</a>
          </li>
          <li class=" ">
            <a class="js-tracking-link" href="https://de.uefa.com/insideuefa/"
              data-tracking="{&quot;action&quot;:&quot;Footer - Access Uefa.org&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Die
              UEFA</a>
          </li>
          <li class=" ">
            <a class="js-tracking-link" href="https://uefafoundation.org"
              data-tracking="{&quot;action&quot;:&quot;Footer - Access Uefa Foundation&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">UEFA-Stiftung</a>
          </li>
          <li class=" ">
            <a class="js-tracking-link" href="https://store.uefa.com/eu_de/" target="_blank"
              data-tracking="{&quot;action&quot;:&quot;Footer - Access Store - NTC&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Shop</a>
          </li>
        </ul>
        <hr class="footer-section">
      </div>
      <!--column dx-->
      <div class="pk-col pk-col--span-12 pk-col--span-md-3">
        <div class="pk-px--m footer-lang-switcher">
          <h3 class="navbar-competitions-title">Sprache ändern</h3>
          <ul class="d3-plugin" data-plugin="langselection">
            <li v-for="l in allowedLange">
              <LanguageList :languageCode="l.code" :language="l.lang" @click="emitLangChange(l.code)"/>
            </li>
          </ul>
          <hr class="footer-section">
        </div>
      </div>
    </div>
  </section>
  <section class="section social apps">
    <div class="pk-container">
      <h2 class="hidden">Social und Apps-Links</h2>
      <!--social-->
      <div class="pk-col pk-col--span-12 pk-col--span-md-6">
      </div>
      <!--apps-->
      <div class="pk-col pk-col--span-12 pk-col--span-md-6">
        <ul class="apps-tool">
          <li class="app-a">
            <a href="https://itunes.apple.com/de/app/id1061115611?mt=8" target="_blank">
              <img data-sizes="auto" srcset="https://img.uefa.com/imgml/2016/euro/common-elements/appstore.png"
                alt="App Store" title="App Store" width="130" height="40">
            </a>
          </li>
          <li class="app-g">
            <a href="https://play.google.com/store/apps/details?id=com.uefa.euro2016" target="_blank">
              <img data-sizes="auto" srcset="https://img.uefa.com/imgml/2016/euro/common-elements/googleplay.png"
                alt="Google Play" title="Google Play" width="130" height="40">
            </a>
          </li>
        </ul>
        <hr class="footer-section">
      </div>
    </div>
  </section>
  <section pk-theme="light" class="section footer-bottom">
    <div class="pk-container">
      <div class="pk-col pk-col--span-12">
        <h2 class="hidden">Services-Links und Disclaimer</h2>
      <!-- SERVICES LINKS -->
      <div class="footer-service-nav">
        <ul>
          <li class=" ">
            <a class="js-tracking-link" href="https://de.uefa.com/privacypolicy/"
              data-tracking="{&quot;action&quot;:&quot;Footer - Access Privacy&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Datenschutz</a>
          </li>
          <li class=" ">
            <a class="js-tracking-link" href="https://de.uefa.com/termsconditions/"
              data-tracking="{&quot;action&quot;:&quot;Footer - Access Terms and conditions&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Nutzungsbedingungen</a>
          </li>
          <li class=" ">
            <a class="js-tracking-link" href="https://de.uefa.com/cookiepolicy/"
              data-tracking="{&quot;action&quot;:&quot;Footer - Access Cookie policy&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Cookie-Politik</a>
          </li>
          <li class=" ">
            <a class="js-tracking-link optanon-show-settings" href="javascript:void(0)" onclick="window.parent.OneTrust.ToggleInfoDisplay()"
              data-tracking="{&quot;action&quot;:&quot;Footer - Access Cookie Settings&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Cookie-Einstellungen</a>
          </li>
        </ul>
      </div>
      <!-- DISCLAIMER -->
      <div class="footer-disclaimer">
        <p>© 1998-2023 UEFA. All rights reserved.</p>
        <p>Der Name UEFA, das UEFA-Logo und alle Marken von UEFA-Wettbewerben sind geschützte Marken und/oder von der UEFA urheberrechtlich geschützt. Sie dürfen nicht für kommerzielle Zwecke verwendet werden. Mit der Verwendung von UEFA.com erklären Sie sich mit den Nutzungsbedingungen und der Datenschutzpolitik für die Website einverstanden.</p>
      </div>
    </div>
  </div>
</section>
<div class="watermark-footer"></div></template>
<style>.footer-wrap .social-tool li svg path {
  fill: #fff;
}</style>