
var user={};

function createToken(){

   let ra = (Math.random() + 1).toString(36).substring(3);
   //console.log("random", ra);
   return ra;
}

function signup(){
    
   user.name= document.getElementById('name').value;
   user.email=document.getElementById('email').value;
   user.password=document.getElementById('password').value.toString();
   user.confirmPassword=document.getElementById('confirmpassword').value.toString();

   if ((user.name == "") || (user.email == "") || (user.password == "") || (user.confirmPassword=="")) {
      document.getElementById("error").style.display = 'block'
      document.getElementById("success").style.display = 'none'
  }
  else{
      document.getElementById("error").style.display = 'none'
      document.getElementById("success").style.display = 'block'

      localStorage.setItem('userDetails',JSON.stringify(user))

  //console.log(localStorage.getItem('userDetails'));
  const userDet=JSON.parse(localStorage.getItem('userDetails'));
  //console.log(userDet);



  window.location.href = "profile/profile.html";

  }

  
}


