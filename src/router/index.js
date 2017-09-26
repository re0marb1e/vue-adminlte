import Vue from 'vue'
import Router from 'vue-router'

import DefaultHeader from 'pages/DefaultHeader.vue'

import DashboardV1 from 'pages/dashboard/Dashboardv1.vue'
import DashboardV2 from 'pages/dashboard/Dashboardv2.vue'
import DashboardV1Header from 'pages/dashboard/Dashboardv1Header.vue'
import DashboardV2Header from 'pages/dashboard/Dashboardv2Header.vue'

import InfoBoxExample from 'pages/InfoBoxExample'
import ChartExample from 'pages/ChartExample'
import AlertExample from 'pages/AlertExample'
import ModalExample from 'pages/ModalExample'
import WidgetsExample from 'pages/WidgetsExample'
import APIExample from 'pages/APIExample'

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

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard/v1',
      alias: '/',
      name: 'DashboardV1',
      components: {
        default: DashboardV1,
        header: DashboardV1Header
      }
    },
    {
      path: '/dashboard/v2',
      name: 'DashboardV2',
      components: {
        default: DashboardV2,
        header: DashboardV2Header
      }
    },
    {
      path: '/examples/infobox',
      name: 'InfoBoxExample',
      components: {
        default: InfoBoxExample,
        header: DefaultHeader
      }
    },
    {
      path: '/examples/chart',
      name: 'ChartExample',
      components: {
        default: ChartExample,
        header: DefaultHeader
      }
    },
    {
      path: '/examples/alert',
      name: 'AlertExample',
      components: {
        default: AlertExample,
        header: DefaultHeader
      }
    },
    {
      path: '/examples/modal',
      name: 'ModalExample',
      components: {
        default: ModalExample,
        header: DefaultHeader
      }
    },
    {
      path: '/examples/widgets',
      name: 'WidgetsExample',
      components: {
        default: WidgetsExample,
        header: DefaultHeader
      }
    },
    {
      path: '/examples/api-example',
      name: 'APIExample',
      components: {
        default: APIExample,
        header: DefaultHeader
      }
    },
    {
      path: '/ui-elements/general',
      name: 'General',
      components: {
        default: General,
        header: DefaultHeader
      }
    },
    {
      path: '/ui-elements/icons',
      name: 'Icons',
      components: {
        default: Icons,
        header: DefaultHeader
      }
    },
    {
      path: '/ui-elements/buttons',
      name: 'Buttons',
      components: {
        default: Buttons,
        header: DefaultHeader
      }
    },
    {
      path: '/ui-elements/sliders',
      name: 'Sliders',
      components: {
        default: Sliders,
        header: DefaultHeader
      }
    },
    {
      path: '/ui-elements/timeline',
      name: 'Timeline',
      components: {
        default: Timeline,
        header: DefaultHeader
      }
    },
    {
      path: '/ui-elements/modals',
      name: 'Modals',
      components: {
        default: Modals,
        header: DefaultHeader
      }
    },
    {
      path: '/forms/general-elements',
      name: 'GeneralElements',
      components: {
        default: GeneralElements,
        header: DefaultHeader
      }
    },
    {
      path: '/forms/advanced-elements',
      name: 'AdvancedElements',
      components: {
        default: AdvancedElements,
        header: DefaultHeader
      }
    }
  ],
  linkActiveClass: 'active'
})
