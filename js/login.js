$(document).ready(function () {

    var URL = "http://localhost:8080/";
    // var URL = "http://demo.webnappmaker.in/7star/";
    BASE_URL = "https://star7-backend.herokuapp.com/";

    $(document).on("click", "#login-btn", function (e) {
      e.preventDefault();
      console.log("1");
      $.ajax({
        type : "POST",
        url : "https://star7-backend.herokuapp.com/" + "api/adminlogin",
        data : {
          "username" : $("#username").val(),
          "password" : $("#password").val(),
        },
        dataType: "json",
        cache: false,
        success : function(data) {
          console.log(data);
          if(data.Data == 0){
            alert("Enter Proper Credentials");
          }
          else{
            $.post(URL + "session.php", { id: data.Data[0]._id })
              .done(function(data1) {
                console.log(data1);
              $(location).attr(
              "href",
              URL + "dashboard.php"
              );
            });  
          }
        }
      })
    });
    
});
