var users = [
    { name:'Bhagya'},
    { name: 'Joy'},
    { name: 'Prajwal'}
    ];
  
  var user;
  for(var i=0;i< users.length;i++){
    if(users[i].name === 'Bhagya'){
      user = users[i];
      break;
    }
  }
    
  //console.log(user);
  
  users.find(function(user){
    return user.name === 'Prajwal';
  });
  
  console.log(user);