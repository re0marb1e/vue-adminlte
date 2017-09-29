<template>
  <div class="wrapper">
    <va-navibar></va-navibar>
    <va-slider :slideMenuItems="slideMenuItems"></va-slider>
    <va-content-wrap></va-content-wrap>
    <Modal></Modal>
  </div>
</template>

<script>
  import VANaviBar from './VANaviBar'
  import VASlider from './VASlider'
  import VAContentWrap from './VAContentWrap.vue'
  import Modal from '../components/Modal.vue'
  import store from '../vuex/store.js'

  export default {
    name: 'va-template',
    props: {
      slideMenuItems: {
        type: Array,
        default: []
      }
    },
    created () {
      document.body.classList.add('skin-blue', 'sidebar-mini')
    },
    components: {
      'va-navibar': VANaviBar,
      'va-slider': VASlider,
      'va-content-wrap': VAContentWrap,
      Modal
    },
    store
  }
</script>
