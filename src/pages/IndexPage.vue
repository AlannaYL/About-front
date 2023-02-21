<template lang="pug">
#Section_01
  swiper.height(:modules="modules" :spaceBetween="30" :slidesPerView="'auto'" )
    swiper-slide(v-for="i in filterView()")
      SwiperModal(v-bind="i")
  q-btn.scorll-btn(@click="scrollToSection()" icon="fa-solid fa-arrow-down" outline color="pink" ) list
#Section_02
  .col-12(data-aos="fade-up")
    swiper(:modules="modules" :spaceBetween="40" :slidesPerView="'auto'" )
      swiper-slide(v-for="i in filterCard()")
        CardModel(v-bind="i")
  .col-12(data-aos="fade-up")
    swiper(:modules="modules" :spaceBetween="40" :slidesPerView="'auto'" )
      swiper-slide(v-for="i in filterinfo()")
        CardModel(v-bind="i")
  #footer

</template>
<script setup>
import { reactive, nextTick } from 'vue'
import { api } from 'src/boot/axios'
import { useQuasar } from 'quasar'
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperModal from 'src/components/SwiperModal.vue'
import CardModel from 'src/components/CardModel.vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import AOS from 'aos'
import 'aos/dist/aos.css'

const $q = useQuasar()
const exhibitions = reactive([])

const filterView = () => {
  return exhibitions.filter(item => item.category === '展覽')
}
const filterCard = () => {
  return exhibitions.filter(item => item.category === '活動')
}
const filterinfo = () => {
  return exhibitions.filter(item => item.category === '藝文')
}
const scrollToSection = () => {
  AOS.init({
    duration: 1300
  })
  document.getElementById('Section_02').scrollIntoView({ behavior: 'smooth' })
}

;(async () => {
  try {
    const { data } = await api.get('/exhibitions')
    await nextTick()
    AOS.init()
    exhibitions.push(...data.result)
  } catch (error) {
    $q.notify({
      message: '失敗',
      caption: error?.response?.data?.message || '發生錯誤',
      color: 'pink'
    })
  }
})()
</script>
