<template>
  <header class="main-header">
    <!-- Logo -->
    <a href="#" class="logo">
      <!-- mini logo for sidebar mini 50x50 pixels -->
      <span class="logo-mini"><b>A</b>LT</span>
      <!-- logo for regular state and mobile devices -->
      <span class="logo-lg"><b>Admin</b>LTE</span>
    </a>

    <!-- Header Navbar: style can be found in header.less -->
    <nav class="navbar navbar-static-top">
      <!-- Sidebar toggle button-->
      <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>
      <!-- Navbar Right Menu -->
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <!-- Messages: style can be found in dropdown.less-->
          <va-dropdown class="messages-menu">
            <template slot="label">
              <i class="fa fa-envelope-o"></i>
              <span class="label label-success">{{ unreadMessagesCount }}</span>
            </template>
            <span slot="header">You have {{ unreadMessagesCount }} messages</span>
            <va-message-item v-for="item in messageItems"
                             :sender="item.sender"
                             :time="item.time"
                             :content="item.content"
                             :avatar="item.avatar">
            </va-message-item>
            <a slot="footer" href="#">View all messages</a>
          </va-dropdown>
          <!-- Notifications: style can be found in dropdown.less -->
          <va-dropdown class="notifications-menu">
            <template slot="label">
              <i class="fa fa-bell-o"></i>
              <span class="label label-warning">{{ unreadNotificationsCount }}</span>
            </template>
            <span slot="header">You have {{ unreadNotificationsCount }} notifications</span>
            <va-notification-item v-for="item in notificationItems"
                                  :link="item.link"
                                  :text="item.text"
                                  :icon="item.icon">
            </va-notification-item>
            <a slot="footer" href="#">View all notifications</a>
          </va-dropdown>
          <!-- Tasks: style can be found in dropdown.less -->
          <va-dropdown class="tasks-menu">
            <template slot="label">
              <i class="fa fa-flag-o"></i>
              <span class="label label-danger">{{ remainTasksCount }}</span>
            </template>
            <span slot="header">You have {{ remainTasksCount }} tasks</span>
            <va-task-item v-for="item in taskItems"
                          :name="item.name"
                          :percent="item.percent"
            ></va-task-item>
            <a slot="footer" href="#">View all tasks</a>
          </va-dropdown>
          <!-- User Account: style can be found in dropdown.less -->
          <li class="dropdown user user-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <img src="~admin-lte/dist/img/user2-160x160.jpg" class="user-image" alt="User Image">
              <span class="hidden-xs">{{ currentUser.name }}</span>
            </a>
            <ul class="dropdown-menu">
              <!-- User image -->
              <li class="user-header">
                <img src="~admin-lte/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
                <p>
                  {{ currentUser.name }} - {{ currentUser.position }}
                  <small>{{ currentUser.createdAt }}</small>
                </p>
              </li>
              <!-- Menu Body -->
              <li class="user-body">
                <row>
                  <div class="col-xs-4 text-center">
                    <a href="#">Followers</a>
                  </div>
                  <div class="col-xs-4 text-center">
                    <a href="#">Sales</a>
                  </div>
                  <div class="col-xs-4 text-center">
                    <a href="#">Friends</a>
                  </div>
                </row>
                <!-- /.row -->
              </li>
              <!-- Menu Footer-->
              <li class="user-footer">
                <div class="pull-left">
                  <a href="#" class="btn btn-default btn-flat">Profile</a>
                </div>
                <div class="pull-right">
                  <a href="#" class="btn btn-default btn-flat">Sign out</a>
                </div>
              </li>
            </ul>
          </li>
          <!-- Control Sidebar Toggle Button -->
          <li>
            <a href="#" data-toggle="control-sidebar"><i class="fa fa-gears"></i></a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
  import {mapGetters} from 'vuex'

  import VADropdown from './VADropdown'
  import VAMessageItem from './VAMessageItem'
  import VANotificationItem from './VANotificationItem'
  import VATaskItem from './VATaskItem'

  export default {
    name: 'va-navibar',
    computed: {
      ...mapGetters([
        'unreadMessagesCount',
        'unreadNotificationsCount',
        'remainTasksCount',
        'currentUser'
      ]),
      messageItems () {
        return this.$store.state.messages.main
      },
      notificationItems () {
        return this.$store.state.notifications.main
      },
      taskItems () {
        return this.$store.state.tasks.main
      }
    },
    components: {
      'va-message-item': VAMessageItem,
      'va-notification-item': VANotificationItem,
      'va-task-item': VATaskItem,
      'va-dropdown': VADropdown
    }
  }

</script>
