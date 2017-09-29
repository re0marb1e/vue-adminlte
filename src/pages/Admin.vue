<template>
  <va-tamplate :slideMenuItems="slideMenuItems"></va-tamplate>
</template>

<script>
  import VATemplate from '../layout/VATemplate'
  import slideMenuItems from '../lib/slideMenuItems.js'

  export default {
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
