var posts = [
    {id:1,title:"newpost"},
    {id:2,title:"oldpost"}
    ];
  
  var comment = { postId:1,content:"Greatpost"};
  
  function postForComment(posts,comment){
    return posts.find(function(post){
      return post.id === comment.postId;
    });
  }
  postForComment(posts,comment)
  