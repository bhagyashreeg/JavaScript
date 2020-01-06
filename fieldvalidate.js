function Field(value){
    this.value = value;
  }
  
  Field.prototype.validate = function(){
    return this.value.length > 0;
  }
  
  var username=new Field("2cool");
  var password = new Field("my_paswd");
  var birthdate = new Field("10-10-2010");
  
  //username.validate() && password.validate();
  
  var fields = [username,password,birthdate];
  
  var formIsValid=fields.every(function(field){
    return field.validate();
  });

  console.log(formIsValid);
  
  if(formIsValid){
    
  }else{
  
  }