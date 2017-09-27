<template>
  <li><!-- Task item -->
    <a :href="link">
      <h3>
        {{ name }}
        <small class="pull-right">{{ percent }}%</small>
      </h3>
      <div class="progress xs">
        <div :class="progressClass" :style="{ width: percent + '%' }" role="progressbar"
             aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
          <span class="sr-only">{{ percent }}% Complete</span>
        </div>
      </div>
    </a>
  </li>
</template>
<script>
  export default {
    props: {
      link: {
        type: String
      },
      name: {
        type: String
      },
      percent: {
        type: Number
      }
    },
    computed: {
      progressClass: function () {
        if (this.percent <= 20) {
          return {
            'progress-bar': true,
            'progress-bar-aqua': true
          }
        } else if (this.percent <= 40) {
          return {
            'progress-bar': true,
            'progress-bar-green': true
          }
        } else if (this.percent <= 60) {
          return {
            'progress-bar': true,
            'progress-bar-red': true
          }
        } else {
          return {
            'progress-bar': true,
            'progress-bar-yellow': true
          }
        }
      }
    }
  }
</script>
