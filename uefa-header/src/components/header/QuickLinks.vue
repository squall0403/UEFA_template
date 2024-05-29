<script setup>
const props = defineProps(['quickLinks'])
</script>
<template>
 <div class="quick-link-wrapper">
  <div class="quick-link-items">
   <a :class="['item-container', item.tag]" v-for="item in quickLinks.menuItems" :href="item.href" target="_blank">
    <div class="icon">
    </div>
    <div class="text">
     <span :href="item.href">{{ item.text }}</span>
    </div>
   </a>
  </div>
 </div>
</template>
<style scoped>
.quick-link-items {
 display: flex;
 flex-direction: row;
 flex-wrap: wrap;
 gap: 16px;
}

.quick-link-items .item-container {
 cursor: pointer;
 padding: 16px;
 flex-basis: 40%;
 border-radius: 16px;
 border: 1px solid rgba(255, 255, 255, 0.247);
}

.nav_uefatv .icon,
.nav_uefagaming .icon {
 height: 84px;
 width: 84px;
 background-position: center;
 background-repeat: no-repeat;
 background-size: contain;
 margin-left: auto;
 margin-right: auto;
}

.match-calendar .icon,
.nav_teams_store .icon,
.nav_clubs_store .icon,
.nav_uefarankings .icon,
.ticketshospitality .icon{
 opacity: 0.7;
 height: 24px;
 width: 24px;
 background-position: center;
 background-repeat: no-repeat;
 background-size: contain;
 margin-bottom: 12px;
}

.nav_uefagaming .icon {
 background-image: url('../../assets/logos/uefagaming.svg');
}

.nav_uefatv .icon {
 background-image: url('../../assets/logos/uefatv.svg');
}

.match-calendar .icon {
 background-image: url('../../assets/logos/uefaMatchCalendar.svg');
}

.nav_teams_store .icon,
.nav_clubs_store .icon {
 background-image: url('../../assets/logos/uefaStore.svg');
}

.nav_uefarankings .icon
{
 background-image: url('../../assets/logos/uefaRanking.svg');
}
.ticketshospitality .icon
{
 background-image: url('../../assets/logos/uefaTicket.svg');
}

.nav_uefatv .text,
.nav_uefagaming .text {
 display: none;
}

.match-calendar .text,
.nav_teams_store .text,
.nav_clubs_store .text,
.nav_uefarankings .text,
.ticketshospitality .text{
 font-size: 20px;
}
.item-container{
 color: #fff;
}
@media screen and (max-width: 990px) {
 .quick-link-items .item-container{
  flex-basis: 47%;
 }
}
</style>