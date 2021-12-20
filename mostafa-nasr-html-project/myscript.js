
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

var xhr = new XMLHttpRequest();
xhr.open("GET", "products.json");
xhr.onreadystatechange= function(){
    if(xhr.readyState==4){
        if(xhr.status==200){
            var jsobj = JSON.parse( xhr.response);
            Display(jsobj);
        }
    }
}
xhr.send();
var boxs = document.getElementById('boxs');
function Display(jsobj){
 
    for(let i =0;i<10;i++){
        var box= document.createElement('div');
        box.className="box";
        var img = document.createElement('img');
        img.className="imgproduct";
        img.src= jsobj[i].image;

         box.appendChild(img);
         var rate = document.createElement('div');
         rate.className="rate";
        
         for(let j=0;j<jsobj[i].rating.rate;j++){
                var imgrate= document.createElement('img');
                imgrate.src="./media/star.png";
                rate.appendChild(imgrate);
         }
         box.appendChild(rate);
         var info = document.createElement('div');
         info.className="info";
         var title =  document.createElement('h4');
         title.innerHTML=jsobj[i].title;
         info.appendChild(title);
         var price = document.createElement('span');
         price.innerHTML=jsobj[i].price+"LE";
         info.appendChild(price);
         var Tocard  = document.createElement('a');
         var icon = document.createElement('i');
         icon.className="fas fa-shopping-cart icon";
         Tocard.appendChild(icon);
         info.appendChild(Tocard);
         box.appendChild(info);
        boxs.appendChild(box);
    }

}