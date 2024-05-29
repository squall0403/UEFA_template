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

UEFA Women's EURO" href="https://de.uefa.com/womenseuro/"
            data-tracking="{&quot;action&quot;:&quot;Footer - Access  logo&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;,&quot;name&quot;:&quot;navigation_footer&quot;,&quot;more&quot;:{&quot;navigation_type&quot;:&quot;Footer - Access  logo&quot;}}">


            UEFA Women's EURO </a>
        </div>
        <div class="footer-comp-nav pk-d--flex pk-justify-content--around">

          <div>
            <ul class="comp-menu-1">
              <li class=" ">
<<<<<<< HEAD
                <a class="js-tracking-link" href="https://de.uefa.com/womenseuro/news/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access News&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;,&quot;name&quot;:&quot;navigation_footer&quot;,&quot;more&quot;:{&quot;navigation_type&quot;:&quot;Footer - Access News&quot;}}">News</a>
              </li>
              <li class=" ">
                <a class="js-tracking-link" href="https://de.uefa.com/womenseuro/hosts/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Hosts&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;,&quot;name&quot;:&quot;navigation_footer&quot;,&quot;more&quot;:{&quot;navigation_type&quot;:&quot;Footer - Access Hosts&quot;}}">Austragungsorte</a>
              </li>
              <li class=" ">
                <a class="js-tracking-link" href="https://de.uefa.com/womenseuro/history/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access History&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;,&quot;name&quot;:&quot;navigation_footer&quot;,&quot;more&quot;:{&quot;navigation_type&quot;:&quot;Footer - Access History&quot;}}">Geschichte</a>
              </li>
              <li class=" ">
                <a class="js-tracking-link" href="https://de.uefa.com/womenseuro/about/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access About&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;,&quot;name&quot;:&quot;navigation_footer&quot;,&quot;more&quot;:{&quot;navigation_type&quot;:&quot;Footer - Access About&quot;}}">Über</a>
=======
                  <a class="js-tracking-link" href="https://de.uefa.com/womenseuro/news/" data-tracking="{&quot;action&quot;:&quot;Footer - Access News&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;,&quot;name&quot;:&quot;navigation_footer&quot;,&quot;more&quot;:{&quot;navigation_type&quot;:&quot;Footer - Access News&quot;}}">News</a>
              </li>
              <li class=" ">
                  <a class="js-tracking-link" href="https://de.uefa.com/womenseuro/ticketing/" data-tracking="{&quot;action&quot;:&quot;Footer - Access Tickets&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;,&quot;name&quot;:&quot;navigation_footer&quot;,&quot;more&quot;:{&quot;navigation_type&quot;:&quot;Footer - Access Tickets&quot;}}">Tickets</a>
              </li>
              <li class=" ">
                  <a class="js-tracking-link" href="https://de.uefa.com/womenseuro/hosts/" data-tracking="{&quot;action&quot;:&quot;Footer - Access Hosts&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;,&quot;name&quot;:&quot;navigation_footer&quot;,&quot;more&quot;:{&quot;navigation_type&quot;:&quot;Footer - Access Hosts&quot;}}">Austragungsorte</a>
              </li>
              <li class=" ">
                  <a class="js-tracking-link" href="https://de.uefa.com/womenseuro/history/" data-tracking="{&quot;action&quot;:&quot;Footer - Access History&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;,&quot;name&quot;:&quot;navigation_footer&quot;,&quot;more&quot;:{&quot;navigation_type&quot;:&quot;Footer - Access History&quot;}}">Geschichte</a>
              </li>
              <li class=" ">
                  <a class="js-tracking-link" href="https://de.uefa.com/womenseuro/about/" data-tracking="{&quot;action&quot;:&quot;Footer - Access About&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;,&quot;name&quot;:&quot;navigation_footer&quot;,&quot;more&quot;:{&quot;navigation_type&quot;:&quot;Footer - Access About&quot;}}">Über</a>
>>>>>>> 1059b3db9c498141f59ca417dac7d2fc7f7f104f
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
              data-tracking="{&quot;action&quot;:&quot;Footer - Access Uefa.com&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;,&quot;name&quot;:&quot;navigation_footer&quot;,&quot;more&quot;:{&quot;navigation_type&quot;:&quot;Footer - Access Uefa.com&quot;}}">UEFA.com</a>
          </li>
          <li class=" ">
            <a class="js-tracking-link" href="https://de.uefa.com/insideuefa/"
              data-tracking="{&quot;action&quot;:&quot;Footer - Access Inside Uefa&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;,&quot;name&quot;:&quot;navigation_footer&quot;,&quot;more&quot;:{&quot;navigation_type&quot;:&quot;Footer - Access Inside Uefa&quot;}}">Die
              UEFA</a>
          </li>
          <li class=" ">
            <a class="js-tracking-link" href="https://uefafoundation.org"
              data-tracking="{&quot;action&quot;:&quot;Footer - Access Uefa Foundation&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;,&quot;name&quot;:&quot;navigation_footer&quot;,&quot;more&quot;:{&quot;navigation_type&quot;:&quot;Footer - Access Uefa Foundation&quot;}}">UEFA-Stiftung</a>
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
      <h2 class="hidden">Social und Apps-Links</h2>
      <!--social-->
      <div class="pk-col pk-col--span-12 pk-col--span-md-6">
        <div class="social-wrap">
          <ul class="social-tool">
            <li class="social-tool-lbl">Uns folgen auf </li>
            <li>
              <a href="https://twitter.com/UEFAcom_de">
                <pk-icon name="social-twitter" size="24" role="img" class="hydrated" title="social twitter icon"
                  style="--icon--width: 24px;">
                  <TwitterIcon />
                </pk-icon>
                <span class="sr-only">twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/championsleague">
                <pk-icon name="social-facebook" size="24" role="img" class="hydrated" title="social facebook icon"
                  style="--icon--width: 24px;"><FacebookIcon /></pk-icon>
                <span class="sr-only">facebook</span>
              </a>
            </li>
            <li>
              <a href="http://www.youtube.com/uefatv">
                <pk-icon name="social-youtube" size="24" role="img" class="hydrated" title="social youtube icon"
                  style="--icon--width: 24px;"><YoutubeIcon /></pk-icon>
                <span class="sr-only">youtube</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/championsleague/">
                <pk-icon name="social-instagram" size="24" role="img" class="hydrated" title="social instagram icon"
                  style="--icon--width: 24px;"><InstagramIcon /></pk-icon>
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
        <h2 class="hidden">Services-Links und Disclaimer</h2>
        <!-- SERVICES LINKS -->
        <div class="footer-service-nav">
          <ul>
            <li class=" ">
              <a class="js-tracking-link" href="https://de.uefa.com/privacypolicy/"
                data-tracking="{&quot;action&quot;:&quot;Footer - Access Privacy&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;,&quot;name&quot;:&quot;navigation_footer&quot;,&quot;more&quot;:{&quot;navigation_type&quot;:&quot;Footer - Access Privacy&quot;}}">Datenschutz</a>
            </li>
            <li class=" ">
              <a class="js-tracking-link" href="https://de.uefa.com/termsconditions/"
                data-tracking="{&quot;action&quot;:&quot;Footer - Access Terms and conditions&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;,&quot;name&quot;:&quot;navigation_footer&quot;,&quot;more&quot;:{&quot;navigation_type&quot;:&quot;Footer - Access Terms and conditions&quot;}}">Nutzungsbedingungen</a>
            </li>
            <li class=" ">
              <a class="js-tracking-link" href="https://de.uefa.com/cookiepolicy/"
                data-tracking="{&quot;action&quot;:&quot;Footer - Access Cookie policy&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;,&quot;name&quot;:&quot;navigation_footer&quot;,&quot;more&quot;:{&quot;navigation_type&quot;:&quot;Footer - Access Cookie policy&quot;}}">Cookie-Politik</a>
            </li>
            <li class=" ">
              <a class="js-tracking-link optanon-show-settings" href="javascript:void(0)"
                onclick="javascript:window.parent.OneTrust.ToggleInfoDisplay()"
                data-tracking="{&quot;action&quot;:&quot;Footer - Access Cookie Settings&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;,&quot;name&quot;:&quot;navigation_footer&quot;,&quot;more&quot;:{&quot;navigation_type&quot;:&quot;Footer - Access Cookie Settings&quot;}}">Cookie-Einstellungen</a>
            </li>
          </ul>
        </div>
        <!-- DISCLAIMER -->
        <div class="footer-disclaimer">
          <p>© 1998-2024 UEFA. All rights reserved.</p>
          <p>Der Name UEFA, das UEFA-Logo und alle Marken von UEFA-Wettbewerben sind geschützte Marken und/oder von der
            UEFA urheberrechtlich geschützt. Sie dürfen nicht für kommerzielle Zwecke verwendet werden. Mit der Verwendung
            von UEFA.com erklären Sie sich mit den Nutzungsbedingungen und der Datenschutzpolitik für die Website
            einverstanden.</p>
        </div>
      </div>
    </div>
  </section>
  <div class="watermark-footer"></div>
</template>
<style>
.footer-wrap .social-tool li svg path {
  fill: #fff;
}</style>