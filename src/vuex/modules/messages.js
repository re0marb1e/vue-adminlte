import img1 from 'admin-lte/dist/img/user2-160x160.jpg'
import img2 from 'admin-lte/dist/img/user3-128x128.jpg'
import img3 from 'admin-lte/dist/img/user4-128x128.jpg'

const state = {
  main: [
    {
      id: 1,
      sender: 'Support Team',
      time: '5 minutes',
      content: 'Why not buy a new awesome theme?',
      avatar: img1
    },
    {
      id: 2,
      sender: 'AdminLTE Design Team',
      time: '2 hours',
      content: 'Why not buy a new awesome theme?',
      avatar: img2
    },
    {
      id: 3,
      sender: 'Developers',
      time: 'Today',
      content: 'Why not buy a new awesome theme?',
      avatar: img3
    },
    {
      id: 4,
      sender: 'Developers',
      time: 'Today',
      content: 'Why not buy a new awesome theme?',
      avatar: img3
    }
  ]
}

const mutations = {

}

export default {
  state,
  mutations
}
