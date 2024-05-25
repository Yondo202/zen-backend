export default {
  routes: [
    {
     method: 'GET',
     path: '/contenttypes',
     handler: 'contenttypes.getContentTypes',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
