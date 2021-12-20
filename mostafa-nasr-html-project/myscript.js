
function submit(){
    var user = document.getElementById("username").value;
var pass = document.getElementById("password").value;
var d = new Date();
d.setMonth(d.getMonth()+3);
document.cookie = "userName="+ user+"; expires="+d;
document.cookie =    "password="+pass+"; expires="+d;
if(document.getElementById("check").checked){
    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);
    console.log(user)
}
}

function show(){
    document.getElementById("loginbar").style.display = "block";
}

function hide(){
    document.getElementById("loginbar").style.display = "none";
   
}