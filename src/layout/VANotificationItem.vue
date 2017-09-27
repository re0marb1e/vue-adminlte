<template>
  <li>
    <a :href="link">
      <i :class="icon"></i> {{ text }}
    </a>
  </li>
</template>

<script>
  export default {
    props: {
      link: {
        type: String,
        default: '#'
      },
      text: {
        type: String
      },
      icon: {
        type: String
      }
    }
  }
</script>
