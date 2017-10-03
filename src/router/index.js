import Vue from 'vue'
import Router from 'vue-router'

import DefaultHeader from 'pages/DefaultHeader.vue'
import Admin from 'pages/Admin.vue'
import Login from 'pages/Login.vue'

import DashboardV1 from 'pages/dashboard/Dashboardv1.vue'
import DashboardV2 from 'pages/dashboard/Dashboardv2.vue'
import DashboardV1Header from 'pages/dashboard/Dashboardv1Header.vue'
import DashboardV2Header from 'pages/dashboard/Dashboardv2Header.vue'

import InfoBoxExample from 'pages/examples/InfoBoxExample'
import ChartExample from 'pages/examples/ChartExample'
import AlertExample from 'pages/examples/AlertExample'
import ModalExample from 'pages/examples/ModalExample'
import WidgetsExample from 'pages/examples/WidgetsExample'
import APIExample from 'pages/examples/APIExample'

// UI Element Groups
import General from 'pages/ui-elements/General.vue'
import Icons from 'pages/ui-elements/Icons.vue'
import Buttons from 'pages/ui-elements/Buttons.vue'
import Sliders from 'pages/ui-elements/Sliders.vue'
import Timeline from 'pages/ui-elements/Timeline.vue'
import Modals from 'pages/ui-elements/Modals.vue'

// forms
import GeneralElements from 'pages/forms/GeneralElements.vue'
import AdvancedElements from 'pages/forms/AdvancedElements.vue'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin',
      component: Admin,
      meta: {
        requireAuth: true
      },
      children: [
        {
          path: '/admin/dashboard/v1',
          alias: '/',
          name: 'DashboardV1',
          components: {
            default: DashboardV1,
            header: DashboardV1Header
          }
        },
        {
          path: '/admin/dashboard/v2',
          name: 'DashboardV2',
          components: {
            default: DashboardV2,
            header: DashboardV2Header
          }
        },
        {
          path: '/admin/examples/infobox',
          name: 'InfoBoxExample',
          components: {
            default: InfoBoxExample,
            header: DefaultHeader
          }
        },
        {
          path: '/admin/charts/chart',
          name: 'ChartExample',
          components: {
            default: ChartExample,
            header: DefaultHeader
          }
        },
        {
          path: '/admin/examples/alert',
          name: 'AlertExample',
          components: {
            default: AlertExample,
            header: DefaultHeader
          }
        },
        {
          path: '/admin/examples/modal',
          name: 'ModalExample',
          components: {
            default: ModalExample,
            header: DefaultHeader
          }
        },
        {
          path: '/admin/examples/widgets',
          name: 'WidgetsExample',
          components: {
            default: WidgetsExample,
            header: DefaultHeader
          }
        },
        {
          path: '/admin/examples/api-example',
          name: 'APIExample',
          components: {
            default: APIExample,
            header: DefaultHeader
          }
        },
        {
          path: '/admin/ui-elements/general',
          name: 'General',
          components: {
            default: General,
            header: DefaultHeader
          }
        },
        {
          path: '/admin/ui-elements/icons',
          name: 'Icons',
          components: {
            default: Icons,
            header: DefaultHeader
          }
        },
        {
          path: '/admin/ui-elements/buttons',
          name: 'Buttons',
          components: {
            default: Buttons,
            header: DefaultHeader
          }
        },
        {
          path: '/admin/ui-elements/sliders',
          name: 'Sliders',
          components: {
            default: Sliders,
            header: DefaultHeader
          }
        },
        {
          path: '/admin/ui-elements/timeline',
          name: 'Timeline',
          components: {
            default: Timeline,
            header: DefaultHeader
          }
        },
        {
          path: '/admin/ui-elements/modals',
          name: 'Modals',
          components: {
            default: Modals,
            header: DefaultHeader
          }
        },
        {
          path: '/admin/forms/general-elements',
          name: 'GeneralElements',
          components: {
            default: GeneralElements,
            header: DefaultHeader
          }
        },
        {
          path: '/admin/forms/advanced-elements',
          name: 'AdvancedElements',
          components: {
            default: AdvancedElements,
            header: DefaultHeader
          }
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    // do something
    next()
  } else {
    next()
  }
})

export default router
