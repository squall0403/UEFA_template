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

UEFA Nations League" href="https://pt.uefa.com/uefanationsleague/"
            data-tracking="{&quot;action&quot;:&quot;Footer - Access  logo&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">


            UEFA Nations League </a>
        </div>
        <div class="footer-comp-nav pk-d--flex pk-justify-content--around">

          <div>
            <ul class="comp-menu-1">
              <li class=" ">
                <a class="js-tracking-link" href="https://pt.uefa.com/uefanationsleague/fixtures-results/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Matches&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Jogos</a>
              </li>
              <li class=" ">
                <a class="js-tracking-link" href="https://pt.uefa.com/uefanationsleague/standings/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Standings&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Grupos</a>
              </li>
              <li class=" ">
                <a class="js-tracking-link" href="https://pt.uefa.com/uefanationsleague/video/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Video&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Vídeos</a>
              </li>
              <li class=" ">
                <a class="js-tracking-link" href="https://pt.uefa.com/uefanationsleague/statistics/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Stats&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Estatísticas</a>
              </li>
              <li class=" ">
                <a class="js-tracking-link" href="https://pt.uefa.com/uefanationsleague/teams/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Teams&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Equipas</a>
              </li>
            </ul>
          </div>
          <div>
            <ul class="comp-menu-1">
              <li class=" ">
                <a class="js-tracking-link" href="https://pt.uefa.com/uefanationsleague/news/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access News&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Notícias</a>
              </li>
              <li class=" ">
                <a class="js-tracking-link" href="https://pt.uefa.com/uefanationsleague/event-guide/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Final&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Fase
                  Final</a>
              </li>
              <li class=" ">
                <a class="js-tracking-link" href="https://pt.uefa.com/uefanationsleague/history/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access History&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">História</a>
              </li>
              <li class=" ">
                <a class="js-tracking-link" href="https://pt.uefa.com/uefanationsleague/about/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access About&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Sobre</a>
              </li>
              <li class=" ">
                <a class="js-tracking-link" href="https://www.shopuefa.com/en/?_s=bm-fi-psc-uefa-hpshopnav"
                  target="_blank"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Store - NTC&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Loja</a>
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
              data-tracking="{&quot;action&quot;:&quot;Footer - Access Uefa.org&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Por
              dentro da UEFA</a>
          </li>
          <li class=" ">
            <a class="js-tracking-link" href="https://uefafoundation.org"
              data-tracking="{&quot;action&quot;:&quot;Footer - Access Uefa Foundation&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Fundação
              UEFA</a>
          </li>
          <li class=" ">
            <a class="js-tracking-link" href="https://www.shopuefa.com/en/?_s=bm-fi-psc-uefa-hpshopnav" target="_blank"
              data-tracking="{&quot;action&quot;:&quot;Footer - Access Store - NTC&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Loja</a>
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
      <h2 class="hidden">Links das redes sociais e apps</h2>
      <!--social-->
      <div class="pk-col pk-col--span-12 pk-col--span-md-6">
      </div>
      <!--apps-->
      <div class="pk-col pk-col--span-12 pk-col--span-md-6">
        <ul class="apps-tool">
          <li class="app-a">
            <a href="https://itunes.apple.com/pt/app/id1061115611?mt=8" target="_blank">
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
                data-tracking="{&quot;action&quot;:&quot;Footer - Access Cookie Settings&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Definições
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