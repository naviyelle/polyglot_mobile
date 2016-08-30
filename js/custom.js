/* ===== login ===== */
function login(){
   
    var x = document.getElementById("loginbutton");
    var closebutton = document.getElementById("closebutton");
    var uname = document.getElementById("username").value;
    var pwd = document.getElementById("password").value;

    //alert(sessionId);
    $$.post('http://polyglot.world/polyglot_auth/login.php', {username: uname, password: pwd}, function (data) {
       var datas = JSON.parse(data);
        var user = datas.userid;
        console.log(datas);
       
        
        if(user != undefined){
             console.log(user);
             var user_name = datas.firstname + " " + datas.lastname;
             var email_add = datas.email;



            localStorage.setItem("firstname", datas.firstname);
            localStorage.setItem("lastname", datas.lastname);
            localStorage.setItem("nickname", datas.firstname);
            localStorage.setItem("email", datas.email);
            localStorage.setItem("password", datas.password);

                    
            closebutton.click();
            document.getElementById("user_name").innerHTML = user_name;
            document.getElementById("email_add").innerHTML = email_add;

        }
        
        
        
    },JSON);
    

   
    

}
$$(document).on('pageInit', '.page[data-page="setting"]', function (e) {

 myApp.showPreloader();
        setTimeout(function () {
            myApp.hidePreloader();
        }, 500);
})  
$$(document).on('pageInit', '.page[data-page="tabbar-labels"]', function (e) {

 myApp.showPreloader();
        setTimeout(function () {
            myApp.hidePreloader();
        }, 500);
})  
$$(document).on('pageInit', '.page[data-page="cards"]', function (e) {

 myApp.showPreloader();
        setTimeout(function () {
            myApp.hidePreloader();
        }, 500);
}) 

$$(document).on('pageAfterAnimation', '.page[data-page="setting"]', function (e) {
  // Do something here when page with data-page="about" attribute loaded and initialized
  document.getElementById('fname').value = localStorage.getItem("firstname");
  document.getElementById('lname').value = localStorage.getItem("lastname");
  document.getElementById('nname').value = localStorage.getItem("nickname");
  document.getElementById('email').value = localStorage.getItem("email");
  document.getElementById('password').value = localStorage.getItem("password");

  //alert("dsa");
})  

$$(document).on('pageAfterAnimation', '.page[data-page="profile"]', function (e) {

  console.log("pageanimate profile");

            document.getElementById("profile_user_name").innerHTML = localStorage.getItem("firstname");
            document.getElementById("email_add").innerHTML = localStorage.getItem("email");
})  

function logout(){

  localStorage.clear();
  //localStorage.setItem("email") == "";
  //alert("logout");
}


