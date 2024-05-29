<script setup>
import LanguageList from '../shared/LanguageList.vue';

const allowedLange = JSON.parse(import.meta.env.VITE_ALLOWED_LANG)
const emits = defineEmits(["langChanged"])
const emitLangChange = (lang) => {
  emits("langChanged", lang);
}

</script>
<template>
  <section pk-theme="dark" class="section footer-nav">
    <div class="pk-container pk-pt--xl2">
      <!--column sx-->
      <div class="pk-col pk-col--span-12 pk-col--span-md-6">
        <div class="comp-info">
          <a class="logolink  js-tracking-link" title="

UEFA EURO 2024" href="https://fr.uefa.com/euro2024/"
            data-tracking="{&quot;action&quot;:&quot;Footer - Access  logo&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">


            UEFA EURO 2024 </a>
        </div>
        <div class="footer-comp-nav pk-d--flex pk-justify-content--around">

          <div>
            <ul class="comp-menu-1">
              <li class=" ">
                <a class="js-tracking-link" href="https://fr.uefa.com/euro2024/fixtures-results/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Matches&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Matches</a>
              </li>
              <li class=" ">
                <a class="js-tracking-link" href="https://fr.uefa.com/euro2024/draws/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Draws&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Tirages</a>
              </li>
              <li class=" ">
                <a class="js-tracking-link" href="https://fr.uefa.com/euro2024/standings/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Standings&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Groupes</a>
              </li>
              <li class=" ">
                <a class="js-tracking-link" href="https://fr.uefa.com/euro2024/video/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Video&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Vidéo</a>
              </li>
              <li class=" ">
                <a class="js-tracking-link" href="https://fr.uefa.com/euro2024/teams/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Teams&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Équipes</a>
              </li>
            </ul>
          </div>
          <div>
            <ul class="comp-menu-1">
              <li class=" ">
                <a class="js-tracking-link" href="https://fr.uefa.com/euro2024/news/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access News&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">News</a>
              </li>
              <li class=" ">
                <a class="js-tracking-link" href="https://fr.uefa.com/euro2024/ticketing/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Tickets&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Billets</a>
              </li>
              <li class=" ">
                <a class="js-tracking-link" href="https://fr.uefa.com/euro2024/event-guide/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Event Guide&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Guide
                  de l'Évènement</a>
              </li>
              <li class=" ">
                <a class="js-tracking-link" href="https://fr.uefa.com/uefaeuro/history/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access History&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Histoire</a>
              </li>
              <li class=" ">
                <a class="js-tracking-link" href="https://fr.uefa.com/euro2024/about/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access About&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">À
                  propos</a>
              </li>
              <li class=" ">
                <a class="js-tracking-link" href="https://store.uefa.com/eu_fr/" target="_blank"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Store - NTC&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Boutique</a>
              </li>
            </ul>
          </div>
        </div>
        <hr class="footer-section">
      </div>
      <!--column center-->
      <div class="pk-col pk-col--span-12 pk-col--span-md-3 pk-px--m footer-network">
        <h3 class="navbar-competitions-title">Voir également</h3>
        <ul>
          <li class=" ">
            <a class="js-tracking-link" href="https://fr.uefa.com"
              data-tracking="{&quot;action&quot;:&quot;Footer - Access Uefa.com&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">fr.UEFA.com</a>
          </li>
          <li class=" ">
            <a class="js-tracking-link" href="https://fr.uefa.com/insideuefa/"
              data-tracking="{&quot;action&quot;:&quot;Footer - Access Inside Uefa&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Dans
              les coulisses de l'UEFA</a>
          </li>
          <li class=" ">
            <a class="js-tracking-link" href="https://uefafoundation.org"
              data-tracking="{&quot;action&quot;:&quot;Footer - Access Uefa Foundation&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Fondation
              UEFA</a>
          </li>
          <li class=" ">
            <a class="js-tracking-link" href="https://store.uefa.com/eu_fr/" target="_blank"
              data-tracking="{&quot;action&quot;:&quot;Footer - Access Store - NTC&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Boutique</a>
          </li>
        </ul>
        <hr class="footer-section">
      </div>
      <!--column dx-->
      <div class="pk-col pk-col--span-12 pk-col--span-md-3">
        <div class="pk-px--m footer-lang-switcher">
          <h3 class="navbar-competitions-title">Langues</h3>
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
  <section pk-theme="dark" class="section footer-bottom">
    <div class="pk-container">
      <div class="pk-col pk-col--span-12">
        <h2 class="hidden">Services et mise en garde</h2>
      <!-- SERVICES LINKS -->
      <div class="footer-service-nav">
        <ul>
          <li class=" ">
            <a class="js-tracking-link" href="https://fr.uefa.com/privacypolicy/"
              data-tracking="{&quot;action&quot;:&quot;Footer - Access Privacy&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Vie
              privée</a>
          </li>
          <li class=" ">
            <a class="js-tracking-link" href="https://fr.uefa.com/termsconditions/"
              data-tracking="{&quot;action&quot;:&quot;Footer - Access Terms and conditions&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Conditions
              d'utilisation</a>
          </li>
          <li class=" ">
            <a class="js-tracking-link" href="https://fr.uefa.com/cookiepolicy/"
              data-tracking="{&quot;action&quot;:&quot;Footer - Access Cookie policy&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Politique
              de cookies</a>
          </li>
          <li class=" ">
            <a class="js-tracking-link optanon-show-settings" href="javascript:void(0)" onclick="window.parent.OneTrust.ToggleInfoDisplay()"
              data-tracking="{&quot;action&quot;:&quot;Footer - Access Cookie settings&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Paramètres
              des cookies</a>
          </li>
        </ul>
      </div>
      <!-- DISCLAIMER -->
      <div class="footer-disclaimer">
        <p>© 1998-2023 UEFA. All rights reserved.</p>
        <p>La désignation UEFA, le logo de l'UEFA et toutes les marques liées aux compétitions de l'UEFA sont protégés
          en tant que marques et/ou droits d'auteur de l'UEFA. Toute utilisation de ces marques déposées à des fins
          commerciales est interdite. L'utilisation de la plate-forme UEFA.com implique que vous acceptez les Conditions
          générales et les Dispositions en matière de vie privée.</p>
      </div>
    </div>
  </div>
</section>
<div class="watermark-footer"></div></template>