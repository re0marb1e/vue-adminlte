<template>
  <li><!-- start message -->
    <a href="#">
      <div class="pull-left">
        <img :src="avatar" class="img-circle" alt="User Image">
      </div>
      <h4>
        {{ sender }}
        <small><i class="fa fa-clock-o"></i> {{ time }}</small>
      </h4>
      <p>{{ content }}</p>
    </a>
  </li>
</template>

<script>
  export default {
    props: {
      sender: {
        type: String
      },
      avatar: {
        type: String
      },
      time: {
        type: String
      },
      content: {
        type: String
      }
    }
  }
</script>
