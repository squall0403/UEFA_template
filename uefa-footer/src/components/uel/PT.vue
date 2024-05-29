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

UEFA Europa League" href="https://pt.uefa.com/uefaeuropaleague/"
            data-tracking="{&quot;action&quot;:&quot;Footer - Access  logo&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">


            UEFA Europa League </a>
        </div>
        <div class="footer-comp-nav pk-d--flex pk-justify-content--around">

          <div>
            <ul class="comp-menu-1">
              <li class=" ">
                <a class="js-tracking-link" href="https://pt.uefa.com/uefaeuropaleague/fixtures-results/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Matches&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Jogos</a>
              </li>
              <li class=" ">
                <a class="js-tracking-link" href="https://pt.uefa.com/uefaeuropaleague/draws/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Draw&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Sorteios</a>
              </li>
              <li class=" ">
                <a class="js-tracking-link" href="https://pt.uefa.com/uefaeuropaleague/standings/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Standings&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Grupos</a>
              </li>
              <li class=" ">
                <a class="js-tracking-link" href="https://pt.uefa.com/uefaeuropaleague/video/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Video&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Vídeos</a>
              </li>
              <li class=" ">
                <a class="js-tracking-link" href="https://pt.uefa.com/uefaeuropaleague/games/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Gaming&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Passatempos</a>
              </li>
            </ul>
          </div>
          <div>
            <ul class="comp-menu-1">
              <li class=" ">
                <a class="js-tracking-link" href="https://pt.uefa.com/uefaeuropaleague/statistics/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Stats&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Estatísticas</a>
              </li>
              <li class=" ">
                <a class="js-tracking-link" href="https://pt.uefa.com/uefaeuropaleague/clubs/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Teams&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Equipas</a>
              </li>
              <li class=" ">
                <a class="js-tracking-link" href="https://pt.uefa.com/uefaeuropaleague/news/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access News&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Notícias</a>
              </li>
              <li class=" ">
                <a class="js-tracking-link" href="https://pt.uefa.com/uefaeuropaleague/history/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access History&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">História</a>
              </li>
              <li class=" ">
                <a class="js-tracking-link" href="https://pt.uefa.com/uefaeuropaleague/about/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access About&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Sobre</a>
              </li>
              <li class=" ">
                <a class="js-tracking-link" href="https://www.uefa-store.com/pages/uefa-europa-league"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Store - CC&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Loja</a>
              </li>
            </ul>
          </div>
        </div>
        <hr class="footer-section">
      </div>
      <!--column center-->
      <div class="pk-col pk-col--span-12 pk-col--span-md-3 pk-px--m footer-network">
        <h3 class="navbar-competitions-title">Visite também</h3>
        <ul>
          <li class=" ">
            <a class="js-tracking-link" href="https://pt.uefa.com"
              data-tracking="{&quot;action&quot;:&quot;Footer - Access Uefa.com&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">UEFA.com</a>
          </li>
          <li class=" ">
            <a class="js-tracking-link" href="https://pt.uefa.com/insideuefa/"
              data-tracking="{&quot;action&quot;:&quot;Footer - Access Inside Uefa&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Por
              dentro da UEFA</a>
          </li>
          <li class=" ">
            <a class="js-tracking-link" href="https://uefafoundation.org"
              data-tracking="{&quot;action&quot;:&quot;Footer - Access Uefa Foundation&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Fundação
              UEFA</a>
          </li>
        </ul>
        <hr class="footer-section">
      </div>
      <!--column dx-->
      <div class="pk-col pk-col--span-12 pk-col--span-md-3">
        <div class="pk-px--m footer-lang-switcher">
          <h3 class="navbar-competitions-title">Mudar idioma</h3>
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
            <li class="social-tool-lbl">Siga-nos em</li>
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
        <h2 class="hidden">Links de serviços e cláusula de desresponsabilização</h2>
        <!-- SERVICES LINKS -->
        <div class="footer-service-nav">
          <ul>
            <li class=" ">
              <a class="js-tracking-link" href="https://pt.uefa.com/privacypolicy/"
                data-tracking="{&quot;action&quot;:&quot;Footer - Access Privacy&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Privacidade</a>
            </li>
            <li class=" ">
              <a class="js-tracking-link" href="https://pt.uefa.com/termsconditions/"
                data-tracking="{&quot;action&quot;:&quot;Footer - Access Terms and conditions&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Termos
                e condições</a>
            </li>
            <li class=" ">
              <a class="js-tracking-link" href="https://pt.uefa.com/cookiepolicy/"
                data-tracking="{&quot;action&quot;:&quot;Footer - Access Cookie policy&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Política
                de cookies</a>
            </li>
            <li class=" ">
              <a class="js-tracking-link optanon-show-settings" href="javascript:void(0)" onclick="window.parent.OneTrust.ToggleInfoDisplay()"
                data-tracking="{&quot;action&quot;:&quot;Footer - Access Cookie settings&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Definições
                de cookies</a>
            </li>
          </ul>
        </div>
        <!-- DISCLAIMER -->
        <div class="footer-disclaimer">
          <p>© 1998-2023 UEFA. All rights reserved.</p>
          <p>A palavra UEFA, o logótipo da UEFA e todas as marcas relativas às competições da UEFA estão protegidas por
            marcas registadas e/ou direitos de autor da UEFA. As referidas marcas registadas não podem ser utilizadas para
            qualquer fim comercial. A utilização do UEFA.com implica o seu acordo com os Termos e Condições, e com a
            Política de Privacidade.</p>
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