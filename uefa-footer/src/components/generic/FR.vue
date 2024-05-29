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

fr.UEFA.com" href="https://fr.uefa.com/"
              data-tracking="{&quot;action&quot;:&quot;Footer - Access  logo&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">


              fr.UEFA.com </a>
          </div>
        </div>
        <div class="pk-col pk-col--span-12 pk-col--span-md-11 pk-col--span-lg-11 comp-items">
          <h3 class="navbar-macro-sec-title">Compétitions</h3>
          <div class="pk-col pk-col--span-12">
            <div class="footer-uefaorg-menu footer-menu other-comp-link">
              <ul class="force2col">
                <li>
                  <a class="js-tracking-link" href="https://fr.uefa.com/tvguide/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access TV Guide&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Guide
                    TV</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://fr.uefa.com/livescores/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Live scores&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Direct</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://links.uefa.tv/uefacom-header"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access UEFA.tv&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">UEFA.tv</a>
                </li>
              </ul>
              <ul class="force2col">
                <li>
                  <a class="js-tracking-link" href="https://fr.uefa.com/tickets/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Tickets and hospitality&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Billets/Hospitalité</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://www.uefa-store.com" target="_blank"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Store - CC&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Boutique
                    des compétitions de clubs</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://store.uefa.com/eu_fr/" target="_blank"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Store - NTF&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Boutique
                    du football d'équipes nationales</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="pk-col pk-col--span-12 pk-d--flex pk-gap--xl2">
            <div class="footer-uefaorg-menu footer-menu">
              <h3 class="navbar-competitions-title">Clubs</h3>
              <ul class="force2col">
                <li>
                  <a class="js-tracking-link" href="https://fr.uefa.com/uefachampionsleague/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access UEFA Champions League&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">UEFA
                    Champions League</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://fr.uefa.com/uefaeuropaleague/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access UEFA Europa League&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">UEFA
                    Europa League</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://fr.uefa.com/uefaeuropaconferenceleague/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access UEFA Europa Conference League&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">UEFA
                    Europa Conference League</a>
                </li>
              </ul>
              <ul class="force2col">
                <li>
                  <a class="js-tracking-link" href="https://fr.uefa.com/uefasupercup/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access UEFA Super Cup&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Super
                    Coupe de l'UEFA</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://fr.uefa.com/uefayouthleague/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access UEFA Youth League&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">UEFA
                    Youth League</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://fr.uefa.com/under20intercontinental/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access U20 Intercontinental&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Coupe
                    intercontinentale des moins de 20&nbsp;ans</a>
                </li>
              </ul>
            </div>
            <div class="footer-uefaorg-menu footer-menu">
              <h3 class="navbar-competitions-title">Sélections</h3>
              <ul class="force2col">
                <li>
                  <a class="js-tracking-link" href="https://fr.uefa.com/european-qualifiers/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access European Qualifiers&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Éliminatoires
                    Européens</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://fr.uefa.com/euro2024/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access UEFA EURO 2024&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">UEFA
                    EURO 2024</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://fr.uefa.com/uefanationsleague/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access UEFA_Nations_League&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">UEFA
                    Nations League</a>
                </li>
              </ul>
              <ul class="force2col">
                <li>
                  <a class="js-tracking-link" href="https://fr.uefa.com/finalissima/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Finalissima&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Finalissima</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://fr.uefa.com/under21/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Under-21&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Moins
                    de 21 ans</a>
                </li>
              </ul>
            </div>
            <div class="footer-uefaorg-menu footer-menu">
              <h3 class="navbar-competitions-title">Football féminin</h3>
              <ul class="force2col">
                <li>
                  <a class="js-tracking-link" href="https://fr.uefa.com/womenseuro/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access UEFA Women's EURO&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">EURO
                    féminin de l'UEFA</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://fr.uefa.com/womenseuropeanqualifiers/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Women's European Qualifiers&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Éliminatoires
                    européens féminins</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://fr.uefa.com/womensnationsleague/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access UEFA Women's Nations League&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">UEFA
                    Women's Nations League</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://fr.uefa.com/womensfinalissima/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Women's Finalissima&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Finalissima
                    féminine</a>
                </li>
              </ul>
              <ul class="force2col">
                <li>
                  <a class="js-tracking-link" href="https://fr.uefa.com/womensworldcup/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access FIFA Women's World Cup&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Mondial
                    féminin</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://fr.uefa.com/womenschampionsleague/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access UEFA Women's Champions League&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">UEFA
                    Women's Champions League</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://fr.uefa.com/womensunder19/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Women's Under-19&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">EURO
                    féminin M-19</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://fr.uefa.com/womensunder17/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Women's Under-17&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">EURO
                    féminin M-17</a>
                </li>
              </ul>
            </div>
            <div class="footer-uefaorg-menu footer-menu">
              <h3 class="navbar-competitions-title">Juniors et Amateurs</h3>
              <ul class="force2col">
                <li>
                  <a class="js-tracking-link" href="https://fr.uefa.com/under19/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Under-19&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Moins
                    de 19 ans</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://fr.uefa.com/under17/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Under-17&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Moins
                    de 17 ans</a>
                </li>
              </ul>
              <ul class="force2col">
                <li>
                  <a class="js-tracking-link" href="https://fr.uefa.com/regionscup/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access UEFA Regions' Cup&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Coupe
                    des Régions</a>
                </li>
              </ul>
            </div>
            <div class="footer-uefaorg-menu footer-menu">
              <h3 class="navbar-competitions-title">Futsal</h3>
              <ul class="force2col">
                <li>
                  <a class="js-tracking-link" href="https://fr.uefa.com/futsaleuro/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Futsal EURO&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">EURO
                    de futsal</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://fr.uefa.com/futsalfinalissima/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Futsal Finalissima&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Finalissima
                    de futsal</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://fr.uefa.com/futsalworldcup/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access FIFA Futsal World Cup&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Coupe
                    du Monde de Futsal</a>
                </li>
              </ul>
              <ul class="force2col">
                <li>
                  <a class="js-tracking-link" href="https://fr.uefa.com/uefafutsalchampionsleague/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Futsal Champions League&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Futsal
                    Champions League</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://fr.uefa.com/womensfutsaleuro/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access UEFA Women's Futsal EURO&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">UEFA
                    Women's Futsal EURO</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://fr.uefa.com/futsalunder19/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Under-19 Futsal EURO&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">EURO
                    U19 de futsal</a>
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
            Dans les coulisses de l'UEFA </h3>
        </div>
        <div class="pk-col pk-col--span-2 pk-col--offset-md-1">
          <div class="footer-uefaorg-menu footer-menu">
            <ul class="force2col">
              <li>
                <a class="js-tracking-link" href="https://fr.uefa.com/insideuefa/about-uefa/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access About Uefa&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">L'UEFA</a>
              </li>
              <li>
                <a class="js-tracking-link" href="https://fr.uefa.com/insideuefa/mediaservices/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Media&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Médias</a>
              </li>
            </ul>
            <ul class="force2col">
              <li>
                <a class="js-tracking-link" href="https://fr.uefa.com/insideuefa/national-associations/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Member Association&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Associations
                  nationales</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="pk-col pk-col--span-2">
          <div class="footer-uefaorg-menu footer-menu">
            <ul class="force2col">
              <li>
                <a class="js-tracking-link" href="https://fr.uefa.com/insideuefa/football-development/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Football Development&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Développement</a>
              </li>
              <li>
                <a class="js-tracking-link" href="https://fr.uefa.com/insideuefa/careers/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Careers&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Emploi</a>
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
                <a class="js-tracking-link" href="https://fr.uefa.com/insideuefa/sustainability/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Sustainability&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Durabilité</a>
              </li>
              <li>
                <a class="js-tracking-link" href="https://fr.uefa.com/insideuefa/protecting-the-game/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Protecting the game&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Protéger
                  le jeu</a>
              </li>
            </ul>
            <ul class="force2col">
              <li>
                <a class="js-tracking-link" href="https://fr.uefa.com/insideuefa/stakeholders/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Stakeholders&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Partenariats</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="pk-col pk-col--span-2">
          <div class="footer-uefaorg-menu footer-menu">
            <ul class="force2col">
              <li>
                <a class="js-tracking-link" href="https://fr.uefa.com/insideuefa/awards/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Awards&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Prix</a>
              </li>
            </ul>
            <ul class="force2col">
              <li>
                <a class="js-tracking-link" href="https://fr.uefa.com/insideuefa/news/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access News&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">News</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="pk-col pk-col--span-2">
          <div class="footer-uefaorg-menu footer-menu">
            <ul class="force2col">
              <li>
                <a class="js-tracking-link" href="https://fr.uefa.com/insideuefa/video/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Video&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Vidéo</a>
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
            <h3 class="navbar-competitions-title">Voir également</h3>
            <ul class="">
              <li>
                <a class="js-tracking-link" href="https://uefafoundation.org"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access UEFA Foundation&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Fondation
                  UEFA</a>
              </li>
              <li>
                <a class="js-tracking-link" href="https://uefaacademy.com/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access UEFA Accademy&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">UEFA
                  Academy</a>
              </li>
              <li>
                <a class="js-tracking-link" href="https://www.uefa-store.com" target="_blank"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Store - CC&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Boutique
                  des compétitions de clubs</a>
              </li>
              <li>
                <a class="js-tracking-link" href="https://store.uefa.com/eu_fr/" target="_blank"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Store - NTF&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Boutique
                  du football d'équipes nationales</a>
              </li>
              <li>
                <a class="js-tracking-link" href="https://fr.uefa.com/nationalassociations/leaguesandcups/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Domestic European competitions&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Compétitions
                  nationales européennes</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="pk-col pk-col--span-12 pk-col--span-md-3">
          <div class="footer-uefaorg-menu footer-menu">
            <h3 class="navbar-competitions-title">Canaux</h3>
            <ul class="">
              <li>
                <a class="js-tracking-link" href="https://fr.uefa.com/insideuefa/news/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access News centre&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Toutes
                  les news</a>
              </li>
              <li>
                <a class="js-tracking-link" href="https://fr.uefa.com/insideuefa/video/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Video&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Vidéo</a>
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
            <h3 class="navbar-competitions-title">Langues</h3>
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
      <h2 class="hidden">Services et mise en garde</h2>
      <div class="pk-col pk-col--span-12 footer-menus">
        <div class="pk-col pk-col--span-xs-12">
          <div class="footer-menu footer-bottom-menu clearfix">
            <ul class="">
              <li>
                <a class="js-tracking-link" href="https://fr.uefa.com/privacypolicies/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Privacy&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Vie
                  privée</a>
              </li>
              <li>
                <a class="js-tracking-link" href="https://fr.uefa.com/termsconditions/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Terms and conditions&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Conditions
                  d'utilisation</a>
              </li>
              <li>
                <a class="js-tracking-link" href="https://fr.uefa.com/cookiepolicy/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Cookie policy&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Politique
                  de cookies</a>
              </li>
              <li>
                <a class="js-tracking-link optanon-show-settings" href="javascript:void(0)" onclick="javascript:window.parent.OneTrust.ToggleInfoDisplay()"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Cookie Settings&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Paramètres
                  des cookies</a>
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
        <h2 class="hidden">Liens réseaux sociaux et applications</h2>
        <div class="pk-col pk-col--span-xs-12">
          <div class="social-wrap">
            <ul class="social-tool">
              <li class="social-tool-lbl">Suivez-nous sur</li>
              <li>
                <a href="https://twitter.com/uefa?lang=en-gb" class="social-twitter js-tracking-link"
                  title="UEFA.org sur Twitter"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access twitter&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">
                  <pk-icon name="social-twitter" size="24" role="img" class="hydrated" title="social twitter icon"
                    style="--icon--width: 24px;">
                  <TwitterIcon/></pk-icon>
                  <span class="sr-only">UEFA.org sur Twitter</span>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/uefa/?fref=ts" class="social-facebook js-tracking-link"
                  title="UEFA.org sur Facebook"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access facebook&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">
                  <pk-icon name="social-facebook" size="24" role="img" class="hydrated" title="social facebook icon"
                    style="--icon--width: 24px;"><FacebookIcon/></pk-icon>
                  <span class="sr-only">UEFA.org sur Facebook</span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/uefa_official/?hl=en" class="social-instagram js-tracking-link"
                  title="UEFA.org sur Instagram"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access instagram&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">
                  <pk-icon name="social-instagram" size="24" role="img" class="hydrated" title="social instagram icon"
                    style="--icon--width: 24px;"><InstagramIcon/></pk-icon>
                  <span class="sr-only">UEFA.org sur Instagram</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/uefa" class="social-linkedin js-tracking-link"
                  title="UEFA.org sur LinkedIn"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access linkedin&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">
                  <pk-icon name="social-linkedin" size="24" role="img" class="hydrated" title="social linkedin icon"
                    style="--icon--width: 24px;"><LinkedInIcon/></pk-icon>
                  <span class="sr-only">UEFA.org sur LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/user/UEFA" class="social-youtube js-tracking-link" title="YouTube"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Uefa on Youtube&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">
                  <pk-icon name="social-youtube" size="24" role="img" class="hydrated" title="social youtube icon"
                    style="--icon--width: 24px;"><YoutubeIcon/></pk-icon>
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
            <p>© 1998-2023 UEFA. Tous droits réservés.</p>
            <p class="pk-d--none pk-d-sm--block">La désignation UEFA, le logo de l'UEFA et toutes les marques liées aux
              compétitions de l'UEFA sont protégés en tant que marques et/ou droits d'auteur de l'UEFA. Toute
              utilisation de ces marques déposées à des fins commerciales est interdite. L'utilisation de la plate-forme
              UEFA.com implique que vous acceptez les Conditions générales et les Dispositions en matière de vie privée.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div></template>
<style>.social-tool li svg path {
  fill: #3c3c3c !important;
}

.social-tool li {
  height: 36px;
}</style>