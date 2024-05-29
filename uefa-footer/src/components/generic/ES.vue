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

UEFA.com" href="https://es.uefa.com/"
              data-tracking="{&quot;action&quot;:&quot;Footer - Access  logo&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">


              UEFA.com </a>
          </div>
        </div>
        <div class="pk-col pk-col--span-12 pk-col--span-md-11 pk-col--span-lg-11 comp-items">
          <h3 class="navbar-macro-sec-title">Competiciones</h3>
          <div class="pk-col pk-col--span-12">
            <div class="footer-uefaorg-menu footer-menu other-comp-link">
              <ul class="force2col">
                <li>
                  <a class="js-tracking-link" href="https://es.uefa.com/tvguide/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access TV Guide&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Guía
                    de TV</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://es.uefa.com/livescores/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Live scores&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Marcadores</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://links.uefa.tv/uefacom-header"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access UEFA.tv&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">UEFA.tv</a>
                </li>
              </ul>
              <ul class="force2col">
                <li>
                  <a class="js-tracking-link" href="https://es.uefa.com/tickets/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Tickets and hospitality&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Entradas/Hospitalidad</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://www.uefa-store.com" target="_blank"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Store - CC&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Tienda
                    de las competiciones de clubes</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://store.uefa.com/eu_es/" target="_blank"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Store - NTF&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Tienda
                    de las fútbol de selecciones nacionales</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="pk-col pk-col--span-12 pk-d--flex pk-gap--xl2">
            <div class="footer-uefaorg-menu footer-menu">
              <h3 class="navbar-competitions-title">Equipos</h3>
              <ul class="force2col">
                <li>
                  <a class="js-tracking-link" href="https://es.uefa.com/uefachampionsleague/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access UEFA Champions League&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">UEFA
                    Champions League</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://es.uefa.com/uefaeuropaleague/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access UEFA Europa League&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">UEFA
                    Europa League</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://es.uefa.com/uefaeuropaconferenceleague/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access UEFA Europa Conference League&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">UEFA
                    Europa Conference League</a>
                </li>
              </ul>
              <ul class="force2col">
                <li>
                  <a class="js-tracking-link" href="https://es.uefa.com/uefasupercup/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access UEFA Super Cup&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Supercopa
                    de la UEFA</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://es.uefa.com/uefayouthleague/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access UEFA Youth League&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">UEFA
                    Youth League</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://es.uefa.com/under20intercontinental/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access U20 Intercontinental&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Copa
                    Intercontinental Sub-20</a>
                </li>
              </ul>
            </div>
            <div class="footer-uefaorg-menu footer-menu">
              <h3 class="navbar-competitions-title">Selecciones</h3>
              <ul class="force2col">
                <li>
                  <a class="js-tracking-link" href="https://es.uefa.com/european-qualifiers/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access European Qualifiers&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Clasificatorios
                    Europeos</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://es.uefa.com/euro2024/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access UEFA EURO 2024&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">UEFA
                    EURO 2024</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://es.uefa.com/uefanationsleague/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access UEFA_Nations_League&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">UEFA
                    Nations League</a>
                </li>
              </ul>
              <ul class="force2col">
                <li>
                  <a class="js-tracking-link" href="https://es.uefa.com/finalissima/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Finalissima&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Finalissima</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://es.uefa.com/under21/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Under-21&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Europeo
                    sub-21</a>
                </li>
              </ul>
            </div>
            <div class="footer-uefaorg-menu footer-menu">
              <h3 class="navbar-competitions-title">Fútbol femenino</h3>
              <ul class="force2col">
                <li>
                  <a class="js-tracking-link" href="https://es.uefa.com/womenseuro/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access UEFA Women's EURO&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Campeonato
                    de Europa Femenino de la UEFA</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://es.uefa.com/womenseuropeanqualifiers/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Women's European Qualifiers&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Clasificatorios
                    Europeos Femeninos</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://es.uefa.com/womensnationsleague/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access UEFA Women's Nations League&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">UEFA
                    Women's Nations League</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://es.uefa.com/womensfinalissima/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Women's Finalissima&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Finalissima
                    Femenina</a>
                </li>
              </ul>
              <ul class="force2col">
                <li>
                  <a class="js-tracking-link" href="https://es.uefa.com/womensworldcup/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access FIFA Women's World Cup&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Copa
                    Mundial Femenino de la FIFA</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://es.uefa.com/womenschampionsleague/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access UEFA Women's Champions League&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">UEFA
                    Women's Champions League</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://es.uefa.com/womensunder19/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Women's Under-19&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Europeo
                    femenino sub-19</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://es.uefa.com/womensunder17/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Women's Under-17&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Europeo
                    femenino sub-17</a>
                </li>
              </ul>
            </div>
            <div class="footer-uefaorg-menu footer-menu">
              <h3 class="navbar-competitions-title">Juvenil y Amateur</h3>
              <ul class="force2col">
                <li>
                  <a class="js-tracking-link" href="https://es.uefa.com/under19/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Under-19&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Europeo
                    sub-19</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://es.uefa.com/under17/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Under-17&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Europeo
                    sub-17</a>
                </li>
              </ul>
              <ul class="force2col">
                <li>
                  <a class="js-tracking-link" href="https://es.uefa.com/regionscup/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access UEFA Regions' Cup&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Copa
                    de las Regiones</a>
                </li>
              </ul>
            </div>
            <div class="footer-uefaorg-menu footer-menu">
              <h3 class="navbar-competitions-title">Fútbol sala</h3>
              <ul class="force2col">
                <li>
                  <a class="js-tracking-link" href="https://es.uefa.com/futsaleuro/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Futsal EURO&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Eurocopa
                    de Fútbol Sala de la UEFA</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://es.uefa.com/futsalfinalissima/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Futsal Finalissima&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Finalissima
                    de fútbol sala</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://es.uefa.com/futsalworldcup/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access FIFA Futsal World Cup&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Copa
                    Mundial de Fútbol Sala de la FIFA</a>
                </li>
              </ul>
              <ul class="force2col">
                <li>
                  <a class="js-tracking-link" href="https://es.uefa.com/uefafutsalchampionsleague/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Futsal Champions League&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Champions
                    League de Fútbol Sala</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://es.uefa.com/womensfutsaleuro/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access UEFA Women's Futsal EURO&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Eurocopa
                    Femenina de Fútbol Sala de la UEFA</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://es.uefa.com/futsalunder19/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Under-19 Futsal EURO&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Europeo
                    sub-19 de fútbol sala</a>
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
            Sobre la UEFA </h3>
        </div>
        <div class="pk-col pk-col--span-2 pk-col--offset-md-1">
          <div class="footer-uefaorg-menu footer-menu">
            <ul class="force2col">
              <li>
                <a class="js-tracking-link" href="https://es.uefa.com/insideuefa/about-uefa/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access About Uefa&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Sobre
                  UEFA</a>
              </li>
              <li>
                <a class="js-tracking-link" href="https://es.uefa.com/insideuefa/mediaservices/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Media&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Medios</a>
              </li>
            </ul>
            <ul class="force2col">
              <li>
                <a class="js-tracking-link" href="https://es.uefa.com/insideuefa/national-associations/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Member Association&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Federaciones
                  Nacionales</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="pk-col pk-col--span-2">
          <div class="footer-uefaorg-menu footer-menu">
            <ul class="force2col">
              <li>
                <a class="js-tracking-link" href="https://es.uefa.com/insideuefa/football-development/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Football Development&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Desarrollo</a>
              </li>
              <li>
                <a class="js-tracking-link" href="https://es.uefa.com/insideuefa/careers/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Careers&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Empleo</a>
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
                <a class="js-tracking-link" href="https://es.uefa.com/insideuefa/sustainability/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Sustainability&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Sostenibilidad</a>
              </li>
              <li>
                <a class="js-tracking-link" href="https://es.uefa.com/insideuefa/protecting-the-game/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Protecting the game&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Protegiendo
                  el juego</a>
              </li>
            </ul>
            <ul class="force2col">
              <li>
                <a class="js-tracking-link" href="https://es.uefa.com/insideuefa/stakeholders/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Stakeholders&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Partes
                  interesadas</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="pk-col pk-col--span-2">
          <div class="footer-uefaorg-menu footer-menu">
            <ul class="force2col">
              <li>
                <a class="js-tracking-link" href="https://es.uefa.com/insideuefa/awards/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Awards&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Premios</a>
              </li>
            </ul>
            <ul class="force2col">
              <li>
                <a class="js-tracking-link" href="https://es.uefa.com/insideuefa/news/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access News&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Noticias</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="pk-col pk-col--span-2">
          <div class="footer-uefaorg-menu footer-menu">
            <ul class="force2col">
              <li>
                <a class="js-tracking-link" href="https://es.uefa.com/insideuefa/video/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Video&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Vídeos</a>
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
            <h3 class="navbar-competitions-title">Visite también</h3>
            <ul class="">
              <li>
                <a class="js-tracking-link" href="https://uefafoundation.org"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access UEFA Foundation&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Fundación
                  de la UEFA</a>
              </li>
              <li>
                <a class="js-tracking-link" href="https://uefaacademy.com/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access UEFA Accademy&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">UEFA
                  Academy</a>
              </li>
              <li>
                <a class="js-tracking-link" href="https://www.uefa-store.com" target="_blank"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Store - CC&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Tienda
                  de las competiciones de clubes</a>
              </li>
              <li>
                <a class="js-tracking-link" href="https://store.uefa.com/eu_es/" target="_blank"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Store - NTF&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Tienda
                  de las fútbol de selecciones nacionales</a>
              </li>
              <li>
                <a class="js-tracking-link" href="https://es.uefa.com/nationalassociations/leaguesandcups/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Domestic European competitions&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Competiciones
                  nacionales</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="pk-col pk-col--span-12 pk-col--span-md-3">
          <div class="footer-uefaorg-menu footer-menu">
            <h3 class="navbar-competitions-title">Canales</h3>
            <ul class="">
              <li>
                <a class="js-tracking-link" href="https://es.uefa.com/insideuefa/news/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access News centre&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Centro
                  de noticias</a>
              </li>
              <li>
                <a class="js-tracking-link" href="https://es.uefa.com/insideuefa/video/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Video&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Vídeos</a>
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
            <h3 class="navbar-competitions-title">Elegir idioma</h3>
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
        <h2 class="hidden">Enlaces de servicio y descargo de responsabilidad</h2>
        <div class="pk-col pk-col--span-12 footer-menus">
          <div class="pk-col pk-col--span-xs-12">
            <div class="footer-menu footer-bottom-menu clearfix">
              <ul class="">
                <li>
                  <a class="js-tracking-link" href="https://es.uefa.com/privacypolicies/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Privacy&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Privacidad</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://es.uefa.com/termsconditions/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Terms and conditions&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Términos
                    y condiciones</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://es.uefa.com/cookiepolicy/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Cookie policy&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Política
                    de cookies</a>
                </li>
                <li>
                  <a class="js-tracking-link optanon-show-settings" href="javascript:void(0)" onclick="javascript:window.parent.OneTrust.ToggleInfoDisplay()"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Cookie Settings&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Ajustes
                    de cookies</a>
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
          <h2 class="hidden">Enlaces de redes sociales y apps</h2>
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
              <p>© 1998-2023 UEFA. Todos los derechos reservados</p>
              <p class="pk-d--none pk-d-sm--block">La palabra UEFA, el logo de la UEFA y todas las marcas relacionadas con
                las competiciones de la UEFA están protegidas por las marcas registradas y/o por el copyright de UEFA. Se
                prohíbe el uso de estas marcas registradas para uso comercial. El uso de UEFA.com significa la aceptación
                de sus Términos, Condiciones y Política de Privacidad.</p>
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
}</style>