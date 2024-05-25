export default {
  routes: [
    {
     method: 'GET',
     path: '/web/:id',
     handler: 'web.getConfig',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
