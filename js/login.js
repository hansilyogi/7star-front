$(document).ready(function () {

    // var URL = "http://localhost:8080/";
    var URL = "http://demo.webnappmaker.in/7star/";
      // var URL = "https://star7-front.herokuapp.com/";
    // BASE_URL = "https://star7-backend.herokuapp.com/";
    BASE_URL = "https://back7star.herokuapp.com/";

    $(document).on("click", "#login-btn", function (e) {
      e.preventDefault();
      console.log("1");
      $.ajax({
        type : "POST",
        url : BASE_URL + "api/adminlogin",
        data : {
          "username" : $("#username").val(),
          "password" : $("#password").val(),
        },
        dataType: "json",
        cache: false,
        beforeSend: function () {
          $("#login-btn").html(
            '<button class="btn btn-success" type="button">\
                                  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>\
                                  Loading...\
                                  </button>'
          );
        },
        success : function(data) {
          $("#staticmessage")
            .removeClass("text-success text-danger")
            .addClass("text-Primary font-weight-bold");
          $("#staticmessage").html(data["Message"]).fadeOut(10000);
          $.when($("#staticmessage").fadeOut()).then(function () {
            $("#staticmessage").html("");
            $("#staticmessage").removeAttr("style");
            $("#staticmessage");
          });
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
        },
        complete: function () {
          $("#btn-submit-on").html(
            '<button type="submit" class="btn btn-success" id="btn-submit">Submit</button>'
          );
        },
      })
    });
    
});
