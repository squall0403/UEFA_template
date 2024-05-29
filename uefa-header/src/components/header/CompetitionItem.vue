<script setup>
const props = defineProps(['items'])
</script>
<template>
 <div class="competitions-wrapper">
  <div class="title font-medium">
   {{ items.text }}
  </div>
  <div :class="[items.tag,'competiton-items']">
   <a :class="[item.tag, 'item-container']" :href="item.href" v-for="item in items.menuItems">
    <div class="icon"></div>
    <div class="text">
     <span>{{ item.text }}</span>
    </div>
   </a>
  </div>
 </div>
</template>
<style scoped>
.competitions-wrapper .title {
 font-size: 24px;
 margin-bottom: 24px;
}

.competitions-wrapper .competiton-items {
 display: flex;
 gap: 24px;
 margin-bottom: 24px;
}

.competitions-wrapper .competiton-items .item-container {
 display: flex;
 flex-direction: column;
 align-items: center;
 width: 105px;
}

.competitions-wrapper .competiton-items .item-container .text {
 color: #ffffffb2;
 text-align: center;
 line-height: 21px;
 font-size: 14px;
}

.item-container .icon {
 width: 43px;
 height: 43px;
 background-repeat: no-repeat;
 background-position: center;
 background-size: contain;
 margin-bottom: 8px;
}

.nav_uefachampionsleague .icon {
 background-image: url('../../assets/logos/ucl.svg');
}

.nav_uefaeuropaleague .icon {
 background-image: url('../../assets/logos/uel.svg');
}

.nav_uefasupercup .icon {
 background-image: url('../../assets/logos/usc.svg');
}

.nav_uefaeuropaconferenceleague .icon {
 background-image: url('../../assets/logos/uecl.svg');
}

.nav_uefayouthleague .icon {
 background-image: url('../../assets/logos/uyl.svg');
}

.nav_under20intercontinental .icon {
 background-image: url('../../assets/logos/iu20.svg');
}

.nav_euroqualifiers .icon {
 background-image: url('../../assets/logos/eq.svg');
}

.nav_euro-2024 .icon {
 background-image: url('../../assets/logos/euro2024.svg');
}

.nav_UEFA_Nations_League .icon {
 background-image: url('../../assets/logos/unl.svg');
}

.nav_finalissima .icon {
 background-image: url('../../assets/logos/fin.svg');
}

.nav_under21 .icon {
 background-image: url('../../assets/logos/u21.svg');
}

.nav_womenschampionsleague .icon {
 background-image: url('../../assets/logos/wucl.svg');
}

.nav_woco .icon {
 background-image: url('../../assets/logos/weuro.svg');
}

.nav_womenseuropeanqualifiers .icon {
 background-image: url('../../assets/logos/weq.svg');
}

.nav_uwnl .icon {
 background-image: url('../../assets/logos/uwnl.svg');
}

.nav_womensfinalissima .icon {
 background-image: url('../../assets/logos/wfin.svg');
}

.nav_wunder19 .icon {
 background-image: url('../../assets/logos/wu19.svg');
}

.nav_wunder17 .icon {
 background-image: url('../../assets/logos/wu17.svg');
}

.nav_under19 .icon {
 background-image: url('../../assets/logos/u19.svg');
}

.nav_under17 .icon {
 background-image: url('../../assets/logos/u17.svg');
}

.nav_regionscup .icon {
 background-image: url('../../assets/logos/rcup.svg');
}

.nav_uefafutsalchampionsleague .icon {
 background-image: url('../../assets/logos/fcl.svg');
}

.nav_futchamp .icon {
 background-image: url('../../assets/logos/feuro.svg');
}

.nav_futsalfinalissima .icon {
 background-image: url('../../assets/logos/futfin.svg');
}

.nav_womensfutsaleuro .icon {
 background-image: url('../../assets/logos/wfeuro.svg');
}

.nav_futsalunder19 .icon {
 background-image: url('../../assets/logos/fu19.svg');
}

@media screen and (max-width: 990px) {
 .competitions-wrapper .competiton-items {
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 24px;
  column-gap: 4px;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.247);
 }
 .nav_futsal.competiton-items{
  border: none;
 }
 .competitions-wrapper .title {
  font-size: 20px;
 }

 .competitions-wrapper .competiton-items .item-container {
  width: 110px;
 }
}
</style>