<template>
  <li class="dropdown messages-menu">
    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
      <i class="fa fa-envelope-o"></i>
      <span class="label label-success">{{ count }}</span>
    </a>
    <ul class="dropdown-menu">
      <li class="header">{{ headerText }}</li>
      <li>
        <ul class="menu">
          <slot></slot>
        </ul>
      </li>
      <li class="footer"><a :href="footerLink">{{ footerText }}</a></li>
    </ul>
  </li>
</template>
<script>
  export default {
    props: {
      icon: {
        type: String
      },
      count: {
        type: Number
      },
      headerText: {
        type: String
      },
      footerLink: {
        type: String,
        default: '#'
      },
      footerText: {
        type: String
      }
    }
  }
</script>
