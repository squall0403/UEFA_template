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

UEFA Europa League" href="https://es.uefa.com/uefaeuropaleague/"
            data-tracking="{&quot;action&quot;:&quot;Footer - Access  logo&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">


            UEFA Europa League </a>
        </div>
        <div class="footer-comp-nav pk-d--flex pk-justify-content--around">

          <div>
            <ul class="comp-menu-1">
              <li class=" ">
                <a class="js-tracking-link" href="https://es.uefa.com/uefaeuropaleague/fixtures-results/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Matches&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Partidos</a>
              </li>
              <li class=" ">
                <a class="js-tracking-link" href="https://es.uefa.com/uefaeuropaleague/draws/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Draw&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Sorteos</a>
              </li>
              <li class=" ">
                <a class="js-tracking-link" href="https://es.uefa.com/uefaeuropaleague/standings/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Standings&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Grupos</a>
              </li>
              <li class=" ">
                <a class="js-tracking-link" href="https://es.uefa.com/uefaeuropaleague/video/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Video&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Vídeos</a>
              </li>
              <li class=" ">
                <a class="js-tracking-link" href="https://es.uefa.com/uefaeuropaleague/games/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Gaming&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Gaming</a>
              </li>
            </ul>
          </div>
          <div>
            <ul class="comp-menu-1">
              <li class=" ">
                <a class="js-tracking-link" href="https://es.uefa.com/uefaeuropaleague/statistics/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Stats&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Datos</a>
              </li>
              <li class=" ">
                <a class="js-tracking-link" href="https://es.uefa.com/uefaeuropaleague/clubs/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Teams&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Equipos</a>
              </li>
              <li class=" ">
                <a class="js-tracking-link" href="https://es.uefa.com/uefaeuropaleague/news/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access News&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Noticias</a>
              </li>
              <li class=" ">
                <a class="js-tracking-link" href="https://es.uefa.com/uefaeuropaleague/history/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access History&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Historia</a>
              </li>
              <li class=" ">
                <a class="js-tracking-link" href="https://es.uefa.com/uefaeuropaleague/about/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access About&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Sobre</a>
              </li>
              <li class=" ">
                <a class="js-tracking-link" href="https://www.uefa-store.com/pages/uefa-europa-league"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Store - CC&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Tienda</a>
              </li>
            </ul>
          </div>
        </div>
        <hr class="footer-section">
      </div>
      <!--column center-->
      <div class="pk-col pk-col--span-12 pk-col--span-md-3 pk-px--m footer-network">
        <h3 class="navbar-competitions-title">Visite también</h3>
        <ul>
          <li class=" ">
            <a class="js-tracking-link" href="https://es.uefa.com"
              data-tracking="{&quot;action&quot;:&quot;Footer - Access Uefa.com&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">UEFA.com</a>
          </li>
          <li class=" ">
            <a class="js-tracking-link" href="https://es.uefa.com/insideuefa/"
              data-tracking="{&quot;action&quot;:&quot;Footer - Access Inside Uefa&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Sobre
              la UEFA</a>
          </li>
          <li class=" ">
            <a class="js-tracking-link" href="https://uefafoundation.org"
              data-tracking="{&quot;action&quot;:&quot;Footer - Access Uefa Foundation&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Fundación
              de la UEFA</a>
          </li>
        </ul>
        <hr class="footer-section">
      </div>
      <!--column dx-->
      <div class="pk-col pk-col--span-12 pk-col--span-md-3">
        <div class="pk-px--m footer-lang-switcher">
          <h3 class="navbar-competitions-title">Elegir idioma</h3>
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
              <a href="https://twitter.com/EuropaLeague">
                <pk-icon name="social-twitter" size="24">
                  <TwitterIcon />
                </pk-icon>
                <span class="sr-only">twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/europaleague">
                <pk-icon name="social-facebook" size="24">
                  <FacebookIcon />
                </pk-icon>
                <span class="sr-only">facebook</span>
              </a>
            </li>
            <li>
              <a href="http://www.youtube.com/uefatv">
                <pk-icon name="social-youtube" size="24">
                  <YoutubeIcon />
                </pk-icon>
                <span class="sr-only">youtube</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/europaleague/">
                <pk-icon name="social-instagram" size="24">
                  <InstagramIcon />
                </pk-icon>
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
            <a href="http://appstore.com/uel" target="_blank">
              <img data-sizes="auto" srcset="https://img.uefa.com/imgml/2016/euro/common-elements/appstore.png"
                alt="App Store" title="App Store" width="130" height="40">
            </a>
          </li>
          <li class="app-g">
            <a href="https://play.google.com/store/apps/details?id=com.uefa.uel" target="_blank">
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
        <h2 class="hidden">Enlaces de servicio y descargo de responsabilidad</h2>
        <!-- SERVICES LINKS -->
        <div class="footer-service-nav">
          <ul>
            <li class=" ">
              <a class="js-tracking-link" href="https://es.uefa.com/privacypolicy/"
                data-tracking="{&quot;action&quot;:&quot;Footer - Access Privacy&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Privacidad</a>
            </li>
            <li class=" ">
              <a class="js-tracking-link" href="https://es.uefa.com/termsconditions/"
                data-tracking="{&quot;action&quot;:&quot;Footer - Access Terms and conditions&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Términos
                y condiciones</a>
            </li>
            <li class=" ">
              <a class="js-tracking-link" href="https://es.uefa.com/cookiepolicy/"
                data-tracking="{&quot;action&quot;:&quot;Footer - Access Cookie policy&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Política
                de cookies</a>
            </li>
            <li class=" ">
              <a class="js-tracking-link optanon-show-settings" href="javascript:void(0)" onclick="window.parent.OneTrust.ToggleInfoDisplay()"
                data-tracking="{&quot;action&quot;:&quot;Footer - Access Cookie settings&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Ajustes
                de cookies</a>
            </li>
          </ul>
        </div>
        <!-- DISCLAIMER -->
        <div class="footer-disclaimer">
          <p>© 1998-2023 UEFA. All rights reserved.</p>
          <p>La palabra UEFA, el logo de la UEFA y todas las marcas relacionadas con las competiciones de la UEFA están
            protegidas por las marcas registradas y/o por el copyright de UEFA. Se prohíbe el uso de estas marcas
            registradas para uso comercial. El uso de UEFA.com significa la aceptación de sus Términos, Condiciones y
          Política de Privacidad.</p>
      </div>
    </div>
  </div>
</section>
<div class="watermark-footer"></div></template>
<style>.footer-wrap .social-tool li svg path {
  fill: #fff;
}</style>