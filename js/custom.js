/* ===== login ===== */
function login(){
   
    var x = document.getElementById("loginbutton");
    var closebutton = document.getElementById("closebutton");
    var uname = document.getElementById("username").value;
    var pwd = document.getElementById("password").value;
    // x.className += " close-login-screen";
    //$.ajax({
    //url: 'http://localhost/polyglot_auth/login.php',
    //type: 'post',
    //data: {username: uname, password: pwd},
    //success: function(response) {
        //console.log(response);
         //if login is true
         //x.className += " close-login-screen";
    
        //else
        
       //}
   // });
    
    $$.post('http://polyglot.world/polyglot_auth/login.php', {username: uname, password: pwd}, function (data) {
       var datas = JSON.parse(data);
        var user = datas.numberofuser;
        console.log(datas);
        //alert(data);
        //alert(datas.numberofuser);
        //test(response);
       
        
        if(user == "1"){
             console.log(user);
            closebutton.click();
             //x.className += " close-login-screen";
            //x.click();
            //user = "0";
            //$("loginbutton").trigger("select");
            //end();
            //x.click;
        }
        
        
        
    },JSON);
    
    //alert("data");
   
    

}