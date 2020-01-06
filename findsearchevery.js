var computers = [
    { name: 'compaq', ram:4 },
    { name: 'acer', ram:24 },
    { name: 'apple', ram:35 }
    ];
  
  var allComputersCanRun = true;
  var onlySomeComputersCanRun = false;
  
  for(var i=0;i<computers.length;i++){
    var computer=computers[i];
    if(computer.ram < 10){
      allComputersCanRun = false;
    }else{
      onlySomeComputersCanRun = true;
    }
  }
  "---------------------"
  
  console.log(allComputersCanRun);
  console.log(onlySomeComputersCanRun);
  
  "++++++++++++"
  computers.every(function(computer){
    return computer.ram >16;
  });