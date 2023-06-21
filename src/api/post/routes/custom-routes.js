module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/posts/example', 
        handler: 'api::post.post.exampleAction',
      },
    //   {
    //     method: 'GET',
    //     path: '/posts',
    //     handler: 'api::post.post.find',
    //   }
    ]
  }