/* ===== login ===== */
function login(){
   
    var x = document.getElementById("loginbutton");
    var closebutton = document.getElementById("closebutton");
    var uname = document.getElementById("username").value;
    var pwd = document.getElementById("password").value;
    

    
    $$.post('http://polyglot.world/polyglot_auth/login.php', {username: uname, password: pwd}, function (data) {
       var datas = JSON.parse(data);
        var user = datas.userid;
        console.log(datas);
       
        
        if(user != undefined){
             console.log(user);
             var user_name = datas.firstname + " " + datas.lastname;
             var email_add = datas.email;
             
            closebutton.click();
            document.getElementById("user_name").innerHTML = user_name;
        }
        
        
        
    },JSON);
    

   
    

}