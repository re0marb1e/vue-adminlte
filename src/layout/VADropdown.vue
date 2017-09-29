<template>
  <li class="dropdown">
    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
      <slot name="label"></slot>
    </a>
    <ul class="dropdown-menu">
      <li class="header">
        <slot name="header"></slot>
      </li>
      <li>
        <ul class="menu">
          <slot></slot>
        </ul>
      </li>
      <li class="footer">
        <slot name="footer"></slot>
      </li>
    </ul>
  </li>
</template>
<script>
  export default {}
</script>
