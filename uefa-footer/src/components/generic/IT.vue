<script setup>
import TwitterIcon from '../../assets/icons/Twitter.vue';
import FacebookIcon from '../../assets/icons/Facebook.vue';
import YoutubeIcon from '../../assets/icons/Youtube.vue'
import InstagramIcon from '../../assets/icons/Instagram.vue'
import LinkedInIcon from '../../assets/icons/LinkedIn.vue'
import LanguageList from '../shared/LanguageList.vue';

const allowedLange = JSON.parse(import.meta.env.VITE_ALLOWED_LANG)
const emits = defineEmits(["langChanged"])
const emitLangChange = (lang) => {
  emits("langChanged", lang);
}

</script>
<template>
  <div class="footer-wrap-neutral">
    <section class="section footer-nav-neutral">
      <div class="pk-container">
        <div class="pk-col pk-col--span-xs-12 pk-col--span-12 pk-col--span-md-1 pk-col--span-lg-1">
          <div class="comp-info">
            <a class="logolink  js-tracking-link" title="

UEFA.com" href="https://it.uefa.com/"
              data-tracking="{&quot;action&quot;:&quot;Footer - Access  logo&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">


              UEFA.com </a>
          </div>
        </div>
        <div class="pk-col pk-col--span-12 pk-col--span-md-11 pk-col--span-lg-11 comp-items">
          <h3 class="navbar-macro-sec-title">Competizioni</h3>
          <div class="pk-col pk-col--span-12">
            <div class="footer-uefaorg-menu footer-menu other-comp-link">
              <ul class="force2col">
                <li>
                  <a class="js-tracking-link" href="https://it.uefa.com/tvguide/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access TV Guide&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Guida
                    TV</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://it.uefa.com/livescores/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Live scores&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Risultati
                    LIVE</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://links.uefa.tv/uefacom-header"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access UEFA.tv&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">UEFA.tv</a>
                </li>
              </ul>
              <ul class="force2col">
                <li>
                  <a class="js-tracking-link" href="https://it.uefa.com/tickets/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Tickets and hospitality&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Biglietti
                    e hospitality</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://www.uefa-store.com" target="_blank"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Store - CC&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Store
                    delle Competizioni UEFA per Club</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://www.shopuefa.com/en/?_s=bm-fi-psc-uefa-hpshopnav"
                    target="_blank"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Store - NTF&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Store
                    delle Nazionali di calcio UEFA</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="pk-col pk-col--span-12 pk-d--flex pk-gap--xl2">
            <div class="footer-uefaorg-menu footer-menu">
              <h3 class="navbar-competitions-title">Club</h3>
              <ul class="force2col">
                <li>
                  <a class="js-tracking-link" href="https://it.uefa.com/uefachampionsleague/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access UEFA Champions League&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">UEFA
                    Champions League</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://it.uefa.com/uefaeuropaleague/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access UEFA Europa League&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">UEFA
                    Europa League</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://it.uefa.com/uefaeuropaconferenceleague/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access UEFA Europa Conference League&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">UEFA
                    Europa Conference League</a>
                </li>
              </ul>
              <ul class="force2col">
                <li>
                  <a class="js-tracking-link" href="https://it.uefa.com/uefasupercup/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access UEFA Super Cup&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Supercoppa
                    UEFA</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://it.uefa.com/uefayouthleague/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access UEFA Youth League&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">UEFA
                    Youth League</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://it.uefa.com/under20intercontinental/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access U20 Intercontinental&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Coppa
                    Intercontinentale U20</a>
                </li>
              </ul>
            </div>
            <div class="footer-uefaorg-menu footer-menu">
              <h3 class="navbar-competitions-title">Nazionali</h3>
              <ul class="force2col">
                <li>
                  <a class="js-tracking-link" href="https://it.uefa.com/european-qualifiers/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access European Qualifiers&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Qualificazioni
                    Europee</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://it.uefa.com/euro2024/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access UEFA EURO 2024&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">UEFA
                    EURO 2024</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://it.uefa.com/uefanationsleague/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access UEFA_Nations_League&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">UEFA
                    Nations League</a>
                </li>
              </ul>
              <ul class="force2col">
                <li>
                  <a class="js-tracking-link" href="https://it.uefa.com/finalissima/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Finalissima&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Finalissima</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://it.uefa.com/under21/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Under-21&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Under
                    21</a>
                </li>
              </ul>
            </div>
            <div class="footer-uefaorg-menu footer-menu">
              <h3 class="navbar-competitions-title">Calcio femminile</h3>
              <ul class="force2col">
                <li>
                  <a class="js-tracking-link" href="https://it.uefa.com/womenseuro/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access UEFA Women's EURO&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">UEFA
                    Women's EURO</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://it.uefa.com/womenseuropeanqualifiers/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Women's European Qualifiers&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Qualificazioni
                    Europee Femminili</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://it.uefa.com/womensnationsleague/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access UEFA Women's Nations League&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">UEFA
                    Women's Nations League</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://it.uefa.com/womensfinalissima/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Women's Finalissima&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Finalissima
                    Femminile</a>
                </li>
              </ul>
              <ul class="force2col">
                <li>
                  <a class="js-tracking-link" href="https://it.uefa.com/womensworldcup/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access FIFA Women's World Cup&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Mondiali
                    Femminili FIFA</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://it.uefa.com/womenschampionsleague/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access UEFA Women's Champions League&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">UEFA
                    Women's Champions League</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://it.uefa.com/womensunder19/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Women's Under-19&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Europeo
                    U19 Femminile</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://it.uefa.com/womensunder17/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Women's Under-17&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Under
                    17 Femminile</a>
                </li>
              </ul>
            </div>
            <div class="footer-uefaorg-menu footer-menu">
              <h3 class="navbar-competitions-title">Giovani/Dilettanti</h3>
              <ul class="force2col">
                <li>
                  <a class="js-tracking-link" href="https://it.uefa.com/under19/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Under-19&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Under
                    19</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://it.uefa.com/under17/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Under-17&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Under
                    17</a>
                </li>
              </ul>
              <ul class="force2col">
                <li>
                  <a class="js-tracking-link" href="https://it.uefa.com/regionscup/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access UEFA Regions' Cup&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Coppa
                    della Regioni UEFA</a>
                </li>
              </ul>
            </div>
            <div class="footer-uefaorg-menu footer-menu">
              <h3 class="navbar-competitions-title">Futsal</h3>
              <ul class="force2col">
                <li>
                  <a class="js-tracking-link" href="https://it.uefa.com/futsaleuro/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Futsal EURO&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Futsal
                    EURO</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://it.uefa.com/futsalfinalissima/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Futsal Finalissima&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Finalissima
                    Futsal</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://it.uefa.com/futsalworldcup/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access FIFA Futsal World Cup&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Mondiali
                    FIFA Futsal</a>
                </li>
              </ul>
              <ul class="force2col">
                <li>
                  <a class="js-tracking-link" href="https://it.uefa.com/uefafutsalchampionsleague/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Futsal Champions League&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Futsal
                    Champions League</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://it.uefa.com/womensfutsaleuro/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access UEFA Women's Futsal EURO&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">UEFA
                    Women's Futsal EURO</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://it.uefa.com/futsalunder19/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Under-19 Futsal EURO&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Futsal
                    EURO Under 19</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section footer-nav-neutral corporate-items">
      <div class="pk-container">
        <div class="pk-col pk-col--span-12 pk-col--offset-md-1">
          <h3 class="navbar-macro-sec-title">
            La UEFA </h3>
        </div>
        <div class="pk-col pk-col--span-2 pk-col--offset-md-1">
          <div class="footer-uefaorg-menu footer-menu">
            <ul class="force2col">
              <li>
                <a class="js-tracking-link" href="https://it.uefa.com/insideuefa/about-uefa/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access About Uefa&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">La
                  UEFA</a>
              </li>
              <li>
                <a class="js-tracking-link" href="https://it.uefa.com/insideuefa/mediaservices/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Media&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Media</a>
              </li>
            </ul>
            <ul class="force2col">
              <li>
                <a class="js-tracking-link" href="https://it.uefa.com/insideuefa/national-associations/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Member Association&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Federazioni
                  Nazionali</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="pk-col pk-col--span-2">
          <div class="footer-uefaorg-menu footer-menu">
            <ul class="force2col">
              <li>
                <a class="js-tracking-link" href="https://it.uefa.com/insideuefa/football-development/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Football Development&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Sviluppo</a>
              </li>
              <li>
                <a class="js-tracking-link" href="https://it.uefa.com/insideuefa/careers/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Careers&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Carriere</a>
              </li>
            </ul>
            <ul class="force2col">
            </ul>
          </div>
        </div>
        <div class="pk-col pk-col--span-2">
          <div class="footer-uefaorg-menu footer-menu">
            <ul class="force2col">
              <li>
                <a class="js-tracking-link" href="https://it.uefa.com/insideuefa/sustainability/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Sustainability&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Sostenibilità</a>
              </li>
              <li>
                <a class="js-tracking-link" href="https://it.uefa.com/insideuefa/protecting-the-game/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Protecting the game&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Proteggere
                  il calcio</a>
              </li>
            </ul>
            <ul class="force2col">
              <li>
                <a class="js-tracking-link" href="https://it.uefa.com/insideuefa/stakeholders/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Stakeholders&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Stakeholders</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="pk-col pk-col--span-2">
          <div class="footer-uefaorg-menu footer-menu">
            <ul class="force2col">
              <li>
                <a class="js-tracking-link" href="https://it.uefa.com/insideuefa/awards/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Awards&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Premi</a>
              </li>
            </ul>
            <ul class="force2col">
              <li>
                <a class="js-tracking-link" href="https://it.uefa.com/insideuefa/news/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access News&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Notizie</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="pk-col pk-col--span-2">
          <div class="footer-uefaorg-menu footer-menu">
            <ul class="force2col">
              <li>
                <a class="js-tracking-link" href="https://it.uefa.com/insideuefa/video/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Video&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Video</a>
              </li>
            </ul>
            <ul class="force2col">
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="section footer-nav-neutral">
      <div class="pk-container footer-menus-other">
        <div class="pk-col pk-col--span-12 pk-col--span-md-3 pk-col--offset-md-1">
          <div class="footer-uefaorg-menu footer-menu">
            <h3 class="navbar-competitions-title">Visita anche</h3>
            <ul class="">
              <li>
                <a class="js-tracking-link" href="https://uefafoundation.org"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access UEFA Foundation&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Fondazione
                  UEFA</a>
              </li>
              <li>
                <a class="js-tracking-link" href="https://uefaacademy.com/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access UEFA Accademy&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">UEFA
                  Academy</a>
              </li>
              <li>
                <a class="js-tracking-link" href="https://www.uefa-store.com" target="_blank"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Store - CC&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Store
                  delle Competizioni UEFA per Club</a>
              </li>
              <li>
                <a class="js-tracking-link" href="https://www.shopuefa.com/en/?_s=bm-fi-psc-uefa-hpshopnav"
                  target="_blank"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Store - NTF&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Store
                  delle Nazionali di calcio UEFA</a>
              </li>
              <li>
                <a class="js-tracking-link" href="https://it.uefa.com/nationalassociations/leaguesandcups/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Domestic European competitions&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Competizioni
                  nazionali europee</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="pk-col pk-col--span-12 pk-col--span-md-3">
          <div class="footer-uefaorg-menu footer-menu">
            <h3 class="navbar-competitions-title">Canali</h3>
            <ul class="">
              <li>
                <a class="js-tracking-link" href="https://it.uefa.com/insideuefa/news/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access News centre&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Notizie</a>
              </li>
              <li>
                <a class="js-tracking-link" href="https://it.uefa.com/insideuefa/video/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Video&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Video</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="pk-col pk-col--span-12 pk-col--span-md-3">
          <div class="footer-uefaorg-menu footer-menu">
          </div>
        </div>
        <div class="pk-col pk-col--span-12 pk-col--span-md-3">
          <div class="footer-uefaorg-menu footer-menu">
          </div>
        </div>
      </div>
    </section>

    <section class="section footer-nav-neutral lang-items">
      <div class="pk-container pk-p-md--0">
        <div class="pk-col pk-col--span-12">
          <div class="pk-col pk-col--span-xs-12 footer-lang-switcher">
            <h3 class="navbar-competitions-title">Cambia lingua</h3>
            <ul class="d3-plugin" data-plugin="langselection">
              <li v-for="l in allowedLange">
                <LanguageList :languageCode="l.code" :language="l.lang" @click="emitLangChange(l.code)" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="section footer-nav-neutral services-items">
      <div class="pk-container">
        <h2 class="hidden">Link service e disclaimer</h2>
        <div class="pk-col pk-col--span-12 footer-menus">
          <div class="pk-col pk-col--span-xs-12">
            <div class="footer-menu footer-bottom-menu clearfix">
              <ul class="">
                <li>
                  <a class="js-tracking-link" href="https://it.uefa.com/privacypolicies/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Privacy&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Privacy</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://it.uefa.com/termsconditions/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Terms and conditions&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Termini
                    e condizioni</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://it.uefa.com/cookiepolicy/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Cookie policy&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Cookie
                    Policy</a>
                </li>
                <li>
                  <a class="js-tracking-link optanon-show-settings" href="javascript:void(0)" onclick="javascript:window.parent.OneTrust.ToggleInfoDisplay()"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Cookie Settings&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Impostazioni
                    cookie</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section social no-top-margin footer-nav-neutral">
      <div class="pk-container">
        <div class="pk-col pk-col--span-12">
          <h2 class="hidden">Link a social e app</h2>
          <div class="pk-col pk-col--span-xs-12">
            <div class="social-wrap">
              <ul class="social-tool">
                <li class="social-tool-lbl">Follow us on</li>
                <li>
                  <a href="https://twitter.com/uefa?lang=en-gb" class="social-twitter js-tracking-link"
                    title="UEFA.org on Twitter"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access twitter&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">
                    <pk-icon name="social-twitter" size="24">
                      <TwitterIcon />
                    </pk-icon>
                    <span class="sr-only">UEFA.org on Twitter</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/uefa/?fref=ts" class="social-facebook js-tracking-link"
                    title="UEFA.org on Facebook"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access facebook&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">
                    <pk-icon name="social-facebook" size="24">
                      <FacebookIcon />
                    </pk-icon>
                    <span class="sr-only">UEFA.org on Facebook</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/uefa_official/?hl=en" class="social-instagram js-tracking-link"
                    title="UEFA.org on Instagram"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access instagram&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">
                    <pk-icon name="social-instagram" size="24">
                      <InstagramIcon />
                    </pk-icon>
                    <span class="sr-only">UEFA.org on Instagram</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/uefa" class="social-linkedin js-tracking-link"
                    title="UEFA.org on LinkedIn"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access linkedin&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">
                    <pk-icon name="social-linkedin" size="24">
                      <LinkedInIcon />
                    </pk-icon>
                    <span class="sr-only">UEFA.org on LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/user/UEFA" class="social-youtube js-tracking-link" title="YouTube"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Uefa on Youtube&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">
                    <pk-icon name="social-youtube" size="24">
                      <YoutubeIcon />
                    </pk-icon>
                    <span class="sr-only">YouTube</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section footer-nav-neutral disclaimer-item">
      <div class="pk-container">
        <div class="pk-col pk-col--span-12">
          <div class="pk-col pk-col--span-xs-12">
            <!-- DISCLAIMER -->
            <div class="footer-disclaimer">
              <p>© 1998-2023 UEFA. Tutti i diritti riservati</p>
              <p class="pk-d--none pk-d-sm--block">La parola UEFA, il logo UEFA e tutti i marchi che si riferiscono a
                competizioni UEFA, sono marchi registrati e/o copyright della UEFA. Tali marchi non possono essere
                utilizzati in nessun modo per scopi commerciali. L'utilizzo di UEFA.com sta a significare l'accettazione
                dei Termini e Condizioni e delle Norme sulla Privacy.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style>
.social-tool li svg path {
  fill: #3c3c3c !important;
}

.social-tool li {
  height: 36px;
}
</style>