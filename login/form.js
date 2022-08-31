function validation(){
   var username=document.forms["form_id"]["username"].value;
    var password=document.forms["form_id"]["password"].value;
   
    if(username == "admin" && password == "123"){
        document.getElementById("container").innerHTML="Welcome ;)";
        return true;
        
    }
    else{
       
      document.getElementById("container").innerHTML="Not a valid username or password :(( !";
        return false;
    }
}
//document.getElementById("form_id").addEventListener("submit", validation());
