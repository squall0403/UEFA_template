<script setup>
import TwitterIcon from '../../assets/icons/Twitter.vue';
import FacebookIcon from '../../assets/icons/Facebook.vue';
import YoutubeIcon from '../../assets/icons/Youtube.vue';
import InstagramIcon from '../../assets/icons/Instagram.vue';
import LinkedInIcon from '../../assets/icons/LinkedIn.vue';
import VkIcon from '../../assets/icons/Vk.vue';
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

UEFA.com" href="https://ru.uefa.com/"
              data-tracking="{&quot;action&quot;:&quot;Footer - Access  logo&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">


              UEFA.com </a>
          </div>
        </div>
        <div class="pk-col pk-col--span-12 pk-col--span-md-11 pk-col--span-lg-11 comp-items">
          <h3 class="navbar-macro-sec-title">Турниры</h3>
          <div class="pk-col pk-col--span-12">
            <div class="footer-uefaorg-menu footer-menu other-comp-link">
              <ul class="force2col">
                <li>
                  <a class="js-tracking-link" href="https://ru.uefa.com/tvguide/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access TV Guide&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Телепрограмма</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://ru.uefa.com/livescores/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Live scores&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Результаты
                    Live</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://links.uefa.tv/uefacom-header"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access UEFA.tv&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">UEFA.tv</a>
                </li>
              </ul>
              <ul class="force2col">
                <li>
                  <a class="js-tracking-link" href="https://ru.uefa.com/tickets/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Tickets and hospitality&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Билеты
                    и прием</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://www.uefa-store.com" target="_blank"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Store - CC&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Магазин
                    турниров УЕФА для клубов</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://www.shopuefa.com/en/?_s=bm-fi-psc-uefa-hpshopnav"
                    target="_blank"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Store - NTF&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Магазин
                    турниров УЕФА для сборных</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="pk-col pk-col--span-12 pk-d--flex pk-gap--xl2">
            <div class="footer-uefaorg-menu footer-menu">
              <h3 class="navbar-competitions-title">Клубы</h3>
              <ul class="force2col">
                <li>
                  <a class="js-tracking-link" href="https://ru.uefa.com/uefachampionsleague/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access UEFA Champions League&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Лига
                    чемпионов УЕФА</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://ru.uefa.com/uefaeuropaleague/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access UEFA Europa League&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Лига
                    Европы УЕФА</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://ru.uefa.com/uefaeuropaconferenceleague/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access UEFA Europa Conference League&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Лига
                    конференций УЕФА</a>
                </li>
              </ul>
              <ul class="force2col">
                <li>
                  <a class="js-tracking-link" href="https://ru.uefa.com/uefasupercup/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access UEFA Super Cup&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Суперкубок
                    УЕФА</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://ru.uefa.com/uefayouthleague/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access UEFA Youth League&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Юношеская
                    лига УЕФА</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://ru.uefa.com/under20intercontinental/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access U20 Intercontinental&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Межконтинентальный
                    кубок U20</a>
                </li>
              </ul>
            </div>
            <div class="footer-uefaorg-menu footer-menu">
              <h3 class="navbar-competitions-title">Сборные</h3>
              <ul class="force2col">
                <li>
                  <a class="js-tracking-link" href="https://ru.uefa.com/european-qualifiers/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access European Qualifiers&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Европейская
                    квалификация</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://ru.uefa.com/euro2024/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access UEFA EURO 2024&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">ЕВРО-2024</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://ru.uefa.com/uefanationsleague/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access UEFA_Nations_League&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Лига
                    наций УЕФА</a>
                </li>
              </ul>
              <ul class="force2col">
                <li>
                  <a class="js-tracking-link" href="https://ru.uefa.com/finalissima/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Finalissima&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Финалиссима</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://ru.uefa.com/under21/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Under-21&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">ЕВРО
                    среди молодежи</a>
                </li>
              </ul>
            </div>
            <div class="footer-uefaorg-menu footer-menu">
              <h3 class="navbar-competitions-title">Женщины</h3>
              <ul class="force2col">
                <li>
                  <a class="js-tracking-link" href="https://ru.uefa.com/womenseuro/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access UEFA Women's EURO&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">ЕВРО
                    среди женщин</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://ru.uefa.com/womenseuropeanqualifiers/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Women's European Qualifiers&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Европейская
                    квалификация среди женщин</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://ru.uefa.com/womensnationsleague/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access UEFA Women's Nations League&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Лига
                    наций УЕФА среди женщин</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://ru.uefa.com/womensfinalissima/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Women's Finalissima&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Женская
                    Финалиссима</a>
                </li>
              </ul>
              <ul class="force2col">
                <li>
                  <a class="js-tracking-link" href="https://ru.uefa.com/womensworldcup/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access FIFA Women's World Cup&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">ЧМ
                    среди женщин</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://ru.uefa.com/womenschampionsleague/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access UEFA Women's Champions League&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Лига
                    чемпионов среди женщин</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://ru.uefa.com/womensunder19/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Women's Under-19&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">ЧЕ
                    - девушки до 19</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://ru.uefa.com/womensunder17/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Women's Under-17&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">ЧЕ
                    - девушки до 17</a>
                </li>
              </ul>
            </div>
            <div class="footer-uefaorg-menu footer-menu">
              <h3 class="navbar-competitions-title">Юноши и любители</h3>
              <ul class="force2col">
                <li>
                  <a class="js-tracking-link" href="https://ru.uefa.com/under19/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Under-19&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">ЧЕ
                    - юноши до 19</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://ru.uefa.com/under17/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Under-17&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">ЧЕ
                    - юноши до 17</a>
                </li>
              </ul>
              <ul class="force2col">
                <li>
                  <a class="js-tracking-link" href="https://ru.uefa.com/regionscup/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access UEFA Regions' Cup&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Кубок
                    регионов</a>
                </li>
              </ul>
            </div>
            <div class="footer-uefaorg-menu footer-menu">
              <h3 class="navbar-competitions-title">Футзал</h3>
              <ul class="force2col">
                <li>
                  <a class="js-tracking-link" href="https://ru.uefa.com/futsaleuro/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Futsal EURO&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">ЕВРО
                    по футзалу</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://ru.uefa.com/futsalfinalissima/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Futsal Finalissima&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Финалиссима
                    по футзалу</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://ru.uefa.com/futsalworldcup/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access FIFA Futsal World Cup&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">ЧМ
                    по футзалу</a>
                </li>
              </ul>
              <ul class="force2col">
                <li>
                  <a class="js-tracking-link" href="https://ru.uefa.com/uefafutsalchampionsleague/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Futsal Champions League&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Лига
                    чемпионов по футзалу</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://ru.uefa.com/womensfutsaleuro/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access UEFA Women's Futsal EURO&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">ЕВРО
                    по футзалу среди женщин</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://ru.uefa.com/futsalunder19/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Under-19 Futsal EURO&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">ЕВРО
                    по футзалу среди юношей до 19 лет</a>
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
            Об УЕФА </h3>
        </div>
        <div class="pk-col pk-col--span-2 pk-col--offset-md-1">
          <div class="footer-uefaorg-menu footer-menu">
            <ul class="force2col">
              <li>
                <a class="js-tracking-link" href="https://ru.uefa.com/insideuefa/about-uefa/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access About Uefa&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Об
                  УЕФА</a>
              </li>
              <li>
                <a class="js-tracking-link" href="https://ru.uefa.com/insideuefa/mediaservices/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Media&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Пресс-релизы</a>
              </li>
            </ul>
            <ul class="force2col">
              <li>
                <a class="js-tracking-link" href="https://ru.uefa.com/insideuefa/national-associations/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Member Association&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Национальные
                  ассоциации</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="pk-col pk-col--span-2">
          <div class="footer-uefaorg-menu footer-menu">
            <ul class="force2col">
              <li>
                <a class="js-tracking-link" href="https://ru.uefa.com/insideuefa/football-development/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Football Development&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Развитие
                  футбола</a>
              </li>
              <li>
                <a class="js-tracking-link" href="https://ru.uefa.com/insideuefa/careers/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Careers&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Карьера</a>
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
                <a class="js-tracking-link" href="https://ru.uefa.com/insideuefa/sustainability/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Sustainability&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Экология</a>
              </li>
              <li>
                <a class="js-tracking-link" href="https://ru.uefa.com/insideuefa/protecting-the-game/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Protecting the game&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">На
                  защите игры</a>
              </li>
            </ul>
            <ul class="force2col">
              <li>
                <a class="js-tracking-link" href="https://ru.uefa.com/insideuefa/stakeholders/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Stakeholders&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Партнеры</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="pk-col pk-col--span-2">
          <div class="footer-uefaorg-menu footer-menu">
            <ul class="force2col">
              <li>
                <a class="js-tracking-link" href="https://ru.uefa.com/insideuefa/awards/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Awards&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Награды</a>
              </li>
            </ul>
            <ul class="force2col">
              <li>
                <a class="js-tracking-link" href="https://ru.uefa.com/insideuefa/news/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access News&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Новости</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="pk-col pk-col--span-2">
          <div class="footer-uefaorg-menu footer-menu">
            <ul class="force2col">
              <li>
                <a class="js-tracking-link" href="https://ru.uefa.com/insideuefa/video/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Video&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Видео</a>
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
            <h3 class="navbar-competitions-title">Другие сайты</h3>
            <ul class="">
              <li>
                <a class="js-tracking-link" href="https://uefafoundation.org"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access UEFA Foundation&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Фонд
                  УЕФА</a>
              </li>
              <li>
                <a class="js-tracking-link" href="https://uefaacademy.com/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access UEFA Accademy&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">UEFA
                  Academy</a>
              </li>
              <li>
                <a class="js-tracking-link" href="https://www.uefa-store.com" target="_blank"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Store - CC&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Магазин
                  турниров УЕФА для клубов</a>
              </li>
              <li>
                <a class="js-tracking-link" href="https://www.shopuefa.com/en/?_s=bm-fi-psc-uefa-hpshopnav"
                  target="_blank"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Store - NTF&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Магазин
                  турниров УЕФА для сборных</a>
              </li>
              <li>
                <a class="js-tracking-link" href="https://ru.uefa.com/nationalassociations/leaguesandcups/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Domestic European competitions&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Внутренние
                  турниры</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="pk-col pk-col--span-12 pk-col--span-md-3">
          <div class="footer-uefaorg-menu footer-menu">
            <h3 class="navbar-competitions-title">Каналы</h3>
            <ul class="">
              <li>
                <a class="js-tracking-link" href="https://ru.uefa.com/insideuefa/news/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access News centre&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Новости</a>
              </li>
              <li>
                <a class="js-tracking-link" href="https://ru.uefa.com/insideuefa/video/"
                  data-tracking="{&quot;action&quot;:&quot;Footer - Access Video&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Видео</a>
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
            <h3 class="navbar-competitions-title">Сменить язык</h3>
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
        <h2 class="hidden">Служебные ссылки и оговорка</h2>
        <div class="pk-col pk-col--span-12 footer-menus">
          <div class="pk-col pk-col--span-xs-12">
            <div class="footer-menu footer-bottom-menu clearfix">
              <ul class="">
                <li>
                  <a class="js-tracking-link" href="https://ru.uefa.com/privacypolicies/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Privacy&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Конфиденциальность</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://ru.uefa.com/termsconditions/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Terms and conditions&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Правила
                    и условия</a>
                </li>
                <li>
                  <a class="js-tracking-link" href="https://ru.uefa.com/cookiepolicy/"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Cookie policy&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Правила
                    в отношении cookie</a>
                </li>
                <li>
                  <a class="js-tracking-link optanon-show-settings" href="javascript:void(0)" onclick="javascript:window.parent.OneTrust.ToggleInfoDisplay()"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access Cookie Settings&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">Настройки
                    куки</a>
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
          <h2 class="hidden">Ссылки на соцсети и приложения</h2>
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
                  <a href="https://vk.com/uefachampionsleague" class="social-vk js-tracking-link" title="ВКонтакте"
                    data-tracking="{&quot;action&quot;:&quot;Footer - Access vk&quot;,&quot;label&quot;:&quot;navigation&quot;,&quot;category&quot;:&quot;Click&quot;}">
                    <pk-icon name="social-vk" size="24" role="img" class="hydrated" title="social vk icon"
                      style="--icon--width: 24px;">
                    <VkIcon/></pk-icon>
                    <span class="sr-only">ВКонтакте</span>
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
              <p>© 1998-2023 УЕФА. Все права защищены</p>
              <p class="pk-d--none pk-d-sm--block">Название "UEFA", логотип УЕФА, а также элементы дизайна, относящиеся к
                соревнованиям УЕФА, являются зарегистрированными торговыми марками УЕФА и/или охраняются авторским правом.
                Использование этих торговых марок в коммерческих целях запрещено. Пользуясь сайтом UEFA.com, вы тем самым
                соглашаетесь с Правилами и условиями, а также с Политикой конфиденциальности информации.</p>
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