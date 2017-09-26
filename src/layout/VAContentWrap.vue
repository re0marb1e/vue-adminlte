<template>
  <!-- Content Wrapper. Contains page content -->
  <div id="content-wrap" class="content-wrapper">
    <!-- Content Header (Page header) -->
    <router-view name="header"></router-view>
    <section class="content">
      <transition name="page" mode="out-in">
        <router-view></router-view>
      </transition>
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
</template>

<script>
  export default {
    name: 'va-content-wrap',
    created () {

    }
  }
</script>

<style>
  .page-enter-active, .page-leave-active {
    transition: opacity 0.5s, transform 0.5s;
  }

  .page-enter, .page-leave-to {
    opacity: 0;
  }
</style>
