
function submit() {
    var currentindex = 0;
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    sessionStorage.setItem("username", user);
    sessionStorage.setItem("password", pass);
    var d = new Date();
    d.setMonth(d.getMonth() + 3);
    document.cookie = "userName=" + user + "; expires=" + d;
    document.cookie = "password=" + pass + "; expires=" + d;
    if (document.getElementById("check").checked) {
        localStorage.setItem("username", user);
        localStorage.setItem("password", pass);
        console.log(user)
    }
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            jsonObj = xhr.responseText;
            jsObj = JSON.parse(jsonObj);
            let obj = jsObj.find(function (o) {
                return o.username == user || o.email == user && o.password == pass
            });

            if (obj == null) {
                alert('wrong user name or password');

            } else {
                alert("welcome  " + user)
                window.open("myindex.html", "_self");
                
            }

        }
    }



    xhr.open("GET", "usrnames.json");
    xhr.send("")


}

function show() {
    document.getElementById("loginbar").style.display = "block";
}

function hide() {
    document.getElementById("loginbar").style.display = "none";

}

function control(){
    if(sessionStorage.username!=null && sessionStorage.username!=null){
        document.getElementById("loginbutton").style.display = "none";
        document.getElementById("logoutbutton").style.display = "block";
        console.log("SDdsfsdf")
    }
}
control()

function logout(){
    document.getElementById("loginbutton").style.display = "block";
        document.getElementById("logoutbutton").style.display = "none";
        sessionStorage.removeItem("username");
        sessionStorage.removeItem("password");
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        location.reload();
}

/*display protein*/

function showsupp(c){

    var product = c.innerHTML;
    
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            jsonObj = xhr.responseText;
            jsObj = JSON.parse(jsonObj);
            debugger;
            
            let obj = jsObj.find(function (o) {
                return o.category == product;
            });
            if(obj==null){
                alert("fi 8aga 3'lt")
            }else{
                console.log(obj);
            }
              
        }
    }


    xhr.open("GET", "products.json");
    xhr.send("")
}


/*view products*/
function viewSupps() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "products.json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                var jsobj = JSON.parse(xhr.response);
                Display(jsobj);
            }
        }
    }
    xhr.send();
    var boxs = document.getElementById('boxs');
    function Display(jsobj) {

        for (let i = 0; i < 10; i++) {
            var box = document.createElement('div');
            box.className = "box";
            var img = document.createElement('img');
            img.className = "imgproduct";
            img.src = jsobj[i].image;

            box.appendChild(img);
            var rate = document.createElement('div');
            rate.className = "rate";

            for (let j = 0; j < jsobj[i].rating.rate; j++) {
                var imgrate = document.createElement('img');
                imgrate.src = "./media/star.png";
                rate.appendChild(imgrate);
            }
            box.appendChild(rate);
            var info = document.createElement('div');
            info.className = "info";
            var title = document.createElement('h4');
            title.innerHTML = jsobj[i].title;
            info.appendChild(title);
            var price = document.createElement('span');
            price.innerHTML = jsobj[i].price + "LE";
            info.appendChild(price);
            var Tocard = document.createElement('a');
            Tocard.addEventListener('click',function(){
                    addtolocalstorag(i);
            });
            var icon = document.createElement('i');
            icon.className = "fas fa-shopping-cart icon";
            Tocard.appendChild(icon);
            info.appendChild(Tocard);
            box.appendChild(info);
            boxs.appendChild(box);
        }

    }
  function  addtolocalstorag(index){
      var user = localStorage.getItem("username");
      if(localStorage.getItem(user)){
        var x=  JSON.parse( localStorage.getItem(user));
        x.push(index)
      
        localStorage.setItem(user,JSON.stringify(x));
      }
      else{
        var data=[];
        data.push(index);
        localStorage.setItem(user,JSON.stringify(data));
      }
      
  }
}

viewSupps();