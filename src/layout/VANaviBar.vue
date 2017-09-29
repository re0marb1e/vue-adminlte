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
          <va-dropdown headerText="You have :count messages" :count="7" footer-text="See All Messages">
            <va-message-item v-for="item in messageItems"
                             :sender="item.sender"
                             :time="item.time"
                             :content="item.content"
                             :avatar="item.avatar"
            >
            </va-message-item>
          </va-dropdown>
          <!-- Notifications: style can be found in dropdown.less -->
          <li class="dropdown notifications-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <i class="fa fa-bell-o"></i>
              <span class="label label-warning">{{ unreadNotificationsCount }}</span>
            </a>
            <ul class="dropdown-menu">
              <li class="header">You have {{ unreadNotificationsCount }} notifications</li>
              <li>
                <!-- inner menu: contains the actual data -->
                <ul class="menu">
                  <va-notification-item v-for="item in notificationItems"
                                        :link="item.link"
                                        :text="item.text"
                                        :icon="item.icon"
                  >
                  </va-notification-item>
                </ul>
              </li>
              <li class="footer"><a href="#">View all</a></li>
            </ul>
          </li>
          <!-- Tasks: style can be found in dropdown.less -->
          <li class="dropdown tasks-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <i class="fa fa-flag-o"></i>
              <span class="label label-danger">{{ remainTasksCount }}</span>
            </a>
            <ul class="dropdown-menu">
              <li class="header">You have {{ remainTasksCount }} tasks</li>
              <li>
                <!-- inner menu: contains the actual data -->
                <ul class="menu">
                  <va-task-item v-for="item in taskItems"
                                :name="item.name"
                                :percent="item.percent"
                  ></va-task-item>
                </ul>
              </li>
              <li class="footer">
                <a href="#">View all tasks</a>
              </li>
            </ul>
          </li>
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

  import img1 from 'admin-lte/dist/img/user2-160x160.jpg'
  import img2 from 'admin-lte/dist/img/user3-128x128.jpg'
  import img3 from 'admin-lte/dist/img/user4-128x128.jpg'

  const messageItems = [
    {
      sender: 'Support Team',
      time: '5 minutes',
      content: 'Why not buy a new awesome theme?',
      avatar: img1
    },
    {
      sender: 'AdminLTE Design Team',
      time: '2 hours',
      content: 'Why not buy a new awesome theme?',
      avatar: img2
    },
    {
      sender: 'Developers',
      time: 'Today',
      content: 'Why not buy a new awesome theme?',
      avatar: img3
    },
    {
      sender: 'Developers',
      time: 'Today',
      content: 'Why not buy a new awesome theme?',
      avatar: img3
    }
  ]

  const notificationItems = [
    {
      icon: 'fa fa-users text-aqua',
      text: '5 new members joined today'
    },
    {
      icon: 'fa fa-warning text-yellow',
      text: 'Very long description here that may not fit into the page and may cause design problems'
    },
    {
      icon: 'fa fa-users text-red',
      text: '5 new members joined'
    },
    {
      icon: 'fa fa-shopping-cart text-green',
      text: '25 sales made'
    },
    {
      icon: 'fa fa-user text-red',
      text: 'You changed your username'
    }
  ]

  const taskItems = [
    {
      name: 'Design some buttons',
      percent: 20
    },
    {
      name: 'Create a nice theme',
      percent: 40
    },
    {
      name: 'Some task I need to do',
      percent: 60
    },
    {
      name: 'Make beautiful transitions',
      percent: 80
    }
  ]

  export default {
    name: 'va-navibar',
    computed: {
      ...mapGetters([
        'unreadMessagesCount',
        'unreadNotificationsCount',
        'remainTasksCount',
        'currentUser'
      ])
    },
    components: {
      'va-message-item': VAMessageItem,
      'va-notification-item': VANotificationItem,
      'va-task-item': VATaskItem,
      'va-dropdown': VADropdown
    },
    data: function () {
      return {
        messageItems,
        notificationItems,
        taskItems
      }
    }
  }

</script>
