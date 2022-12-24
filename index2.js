var user=JSON.parse(localStorage.getItem('userDetails'));
//console.log(user.name);
document.getElementById('FullName').textContent=user.name;
document.getElementById('Email').textContent=user.email;
document.getElementById('Password').textContent=user.password;



function clearAll(){

    localStorage.clear();
    //console.log("All Cleared")
    window.location.href="index.html";
}