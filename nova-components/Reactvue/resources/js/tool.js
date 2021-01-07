Nova.booting((Vue, router, store) => {
  router.addRoutes([
    {
      name: 'reactvue',
      path: '/reactvue',
      component: require('./components/Tool'),
    },
  ])
})
