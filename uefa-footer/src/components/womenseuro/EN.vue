<script setup>
import TwitterIcon from '../../assets/icons/Twitter.vue';
import FacebookIcon from '../../assets/icons/Facebook.vue';
import YoutubeIcon from '../../assets/icons/Youtube.vue'
import InstagramIcon from '../../assets/icons/Instagram.vue'
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

UEFA Women's EURO" href="https://www.uefa.com/womenseuro/"
            data-tracking="{&quot;action&quot;:&quot;Footer - Access  logo&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">


            UEFA Women's EURO </a>
        </div>
        <div class="footer-comp-nav pk-d--flex pk-justify-content--around">

          <div>
            <ul class="comp-menu-1">
              <li class=" ">
                  <a class="js-tracking-link" href="https://www.uefa.com/womenseuro/news/" data-tracking="{&quot;action&quot;:&quot;Footer - Access News&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;,&quot;name&quot;:&quot;navigation_footer&quot;,&quot;more&quot;:{&quot;navigation_type&quot;:&quot;Footer - Access News&quot;}}">News</a>
              </li>
              <li class=" ">
                  <a class="js-tracking-link" href="https://www.uefa.com/womenseuro/ticketing/" data-tracking="{&quot;action&quot;:&quot;Footer - Access Tickets&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;,&quot;name&quot;:&quot;navigation_footer&quot;,&quot;more&quot;:{&quot;navigation_type&quot;:&quot;Footer - Access Tickets&quot;}}">Tickets</a>
              </li>
              <li class=" ">
                  <a class="js-tracking-link" href="https://www.uefa.com/womenseuro/hosts/" data-tracking="{&quot;action&quot;:&quot;Footer - Access Hosts&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;,&quot;name&quot;:&quot;navigation_footer&quot;,&quot;more&quot;:{&quot;navigation_type&quot;:&quot;Footer - Access Hosts&quot;}}">Host cities</a>
              </li>
              <li class=" ">
                  <a class="js-tracking-link" href="https://www.uefa.com/womenseuro/history/" data-tracking="{&quot;action&quot;:&quot;Footer - Access History&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;,&quot;name&quot;:&quot;navigation_footer&quot;,&quot;more&quot;:{&quot;navigation_type&quot;:&quot;Footer - Access History&quot;}}">History</a>
              </li>
              <li class=" ">
                  <a class="js-tracking-link" href="https://www.uefa.com/womenseuro/about/" data-tracking="{&quot;action&quot;:&quot;Footer - Access About&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;,&quot;name&quot;:&quot;navigation_footer&quot;,&quot;more&quot;:{&quot;navigation_type&quot;:&quot;Footer - Access About&quot;}}">About</a>
              </li>
            </ul>
          </div>
        </div>
        <hr class="footer-section">
      </div>
      <!--column center-->
      <div class="pk-col pk-col--span-12 pk-col--span-md-3 pk-px--m footer-network">
        <h3 class="navbar-competitions-title">Also visit</h3>
        <ul>
          <li class=" ">
            <a class="js-tracking-link" href="https://en.uefa.com"
              data-tracking="{&quot;action&quot;:&quot;Footer - Access Uefa.com&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">UEFA.com</a>
          </li>
          <li class=" ">
            <a class="js-tracking-link" href="https://www.uefa.com/insideuefa/"
              data-tracking="{&quot;action&quot;:&quot;Footer - Access Inside Uefa&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Inside
              UEFA</a>
          </li>
          <li class=" ">
            <a class="js-tracking-link" href="https://uefafoundation.org"
              data-tracking="{&quot;action&quot;:&quot;Footer - Access Uefa Foundation&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">UEFA
              Foundation</a>
          </li>
        </ul>
        <hr class="footer-section">
      </div>
      <!--column dx-->
      <div class="pk-col pk-col--span-12 pk-col--span-md-3">
        <div class="pk-px--m footer-lang-switcher">
          <h3 class="navbar-competitions-title">Change language</h3>
          <ul class="d3-plugin" data-plugin="langselection">
            <li v-for="l in allowedLange">
              <LanguageList :languageCode="l.code" :language="l.lang" @click="emitLangChange(l.code)" />
            </li>
          </ul>
          <hr class="footer-section">
        </div>
      </div>
    </div>
  </section>
  <section class="section social apps">
    <div class="pk-container">
      <h2 class="hidden">Social and apps links</h2>
      <!--social-->
      <div class="pk-col pk-col--span-12 pk-col--span-md-6">
        <div class="social-wrap">
          <ul class="social-tool">
            <li class="social-tool-lbl">Follow us on</li>
            <li>
              <a href="https://twitter.com/championsleague">
                <pk-icon name="social-twitter" size="24" role="img" class="hydrated" title="social twitter icon"
                  style="--icon--width: 24px;"><TwitterIcon /></pk-icon>
                <span class="sr-only">twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/championsleague">
                <pk-icon name="social-facebook" size="24" role="img" class="hydrated" title="social facebook icon"
                  style="--icon--width: 24px;"><FacebookIcon/></pk-icon>
                <span class="sr-only">facebook</span>
              </a>
            </li>
            <li>
              <a href="http://www.youtube.com/uefatv">
                <pk-icon name="social-youtube" size="24" role="img" class="hydrated" title="social youtube icon"
                  style="--icon--width: 24px;"><YoutubeIcon/></pk-icon>
                <span class="sr-only">youtube</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/championsleague/">
                <pk-icon name="social-instagram" size="24" role="img" class="hydrated" title="social instagram icon"
                  style="--icon--width: 24px;"><InstagramIcon/></pk-icon>
                <span class="sr-only">instagram</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!--apps-->
      <div class="pk-col pk-col--span-12 pk-col--span-md-6">
        <ul class="apps-tool">
          <li class="app-a">
            <a href="http://appstore.com/ucl" target="_blank">
              <img data-sizes="auto" srcset="https://img.uefa.com/imgml/2016/euro/common-elements/appstore.png"
                alt="App Store" title="App Store" width="130" height="40">
            </a>
          </li>
          <li class="app-g">
            <a href="https://play.google.com/store/apps/details?id=com.uefa.ucl" target="_blank">
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
        <h2 class="hidden">Services links and disclaimer</h2>
        <!-- SERVICES LINKS -->
        <div class="footer-service-nav">
          <ul>
            <li class=" ">
              <a class="js-tracking-link" href="https://www.uefa.com/privacypolicy/"
                data-tracking="{&quot;action&quot;:&quot;Footer - Access Privacy&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Privacy</a>
            </li>
            <li class=" ">
              <a class="js-tracking-link" href="https://www.uefa.com/termsconditions/"
                data-tracking="{&quot;action&quot;:&quot;Footer - Access Terms and conditions&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Terms
              and conditions</a>
          </li>
          <li class=" ">
            <a class="js-tracking-link" href="https://www.uefa.com/cookiepolicy/"
              data-tracking="{&quot;action&quot;:&quot;Footer - Access Cookie policy&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Cookie
              policy</a>
          </li>
          <li class=" ">
            <a class="js-tracking-link optanon-show-settings" href="javascript:void(0)" onclick="javascript:window.parent.OneTrust.ToggleInfoDisplay()"
              data-tracking="{&quot;action&quot;:&quot;Footer - Access Cookie Settings&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Cookie Settings</a>
          </li>
        </ul>
      </div>
      <!-- DISCLAIMER -->
      <div class="footer-disclaimer">
        <p>© 1998-2024 UEFA. All rights reserved.</p>
        <p>The UEFA word, the UEFA logo and all marks related to UEFA competitions, are protected by trademarks and/or
          copyright of UEFA. No use for commercial purposes may be made of such trademarks. Use of UEFA.com signifies
          your agreement to the Terms and Conditions and Privacy Policy. </p>
      </div>
    </div>
  </div>
</section>
<div class="watermark-footer"></div></template>
<style>.footer-wrap .social-tool li svg path {
  fill: #fff;
}</style>