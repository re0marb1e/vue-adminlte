<template>
  <div id="app">
    <va-tamplate :slideMenuItems="slideMenuItems"></va-tamplate>
  </div>
</template>

<script>
  import VATemplate from './layout/VATemplate'
  import slideMenuItems from './lib/slideMenuItems.js'

  export default {
    name: 'app',
    data () {
      return {
        slideMenuItems: slideMenuItems
      }
    },
    created () {
    },
    components: {
      'va-tamplate': VATemplate
    }
  }
</script>
