$(document).ready(function () {
  
  loadcompany();


  //fetch year in drop-down
  var start = 2000;
  var end = new Date().getFullYear();
  var options = "";
  for(var year = start ; year <=end; year++){
    options += "<option>"+ year +"</option>";
  }
  document.getElementById("year").innerHTML = options;


  var now = new Date();
  var prevMonthLastDate = new Date(now.getFullYear(), now.getMonth(), 0);
  var prevMonthFirstDate = new Date(
    now.getFullYear() - (now.getMonth() > 0 ? 0 : 1),
    (now.getMonth() - 1 + 12) % 12,
    1
  );

  var formatDateComponent = function (dateComponent) {
    return (dateComponent < 10 ? "0" : "") + dateComponent;
  };

  var formatDate = function (date) {
    return (
      date.getFullYear() +
      "-" +
      formatDateComponent(date.getMonth() + 1) +
      "-" +
      formatDateComponent(date.getDate())
    );
  };

  //$("#startdate").val(formatDate(prevMonthFirstDate));
  //$("#enddate").val(formatDate(prevMonthLastDate));
  
  function loadcompany() {
    $.ajax({
      type: "POST",
      url: $("#website-url").attr("value") + "company",
      data: { type: "getdata" },
      dataType: "json",
      cache: false,
      success: function (data) {
        if (data.isSuccess == true) {
          COMPANY = data.Data[0]._id;
          for (i = 0; i < data.Data.length; i++) {
            $("#company").append(
              "<option value=" +
                data.Data[i]._id +
                ">" +
                data.Data[i].Name +
                "</option>"
            );
          }
          subcompany();
        }
      },
    });
  }

  function subcompany() {
    var id = COMPANY;
    $.ajax({
      type: "POST",
      url: $("#website-url").attr("value") + "subcompany",
      data: { type: "getsinglecompany", CompanyId: id },
      dataType: "json",
      cache: false,
      success: function (data) {
        if (data.isSuccess == true) {
          $("#subcompany").html("");
          SUBCOMPANY = data.Data[0]._id;
          for (i = 0; i < data.Data.length; i++) {
            $("#subcompany").append(
              "<option value=" +
                data.Data[i]._id +
                ">" +
                data.Data[i].Name +
                "</option>"
            );
          }
        }
      },
    });
  }

  $(document).on("change", "#company", function () {
    COMPANY = $("#company").val();
    subcompany();
  });

  $(document).on("click", "#btn-apply-filter", function () {
    var id = $("#subcompany").val();
    var name = $("#subcompany").find(":selected").text();
    var year = $("#year").val();
    var month = $("#months").val();
    var currentyear = new Date().getFullYear();
    var currentmonth = new Date().getMonth()+1;
    /*var startdate =
      $("#startdate").val().split("-")[2] +
      "/" +
      $("#startdate").val().split("-")[1] +
      "/" +
      $("#startdate").val().split("-")[0];
    var enddate =
      $("#enddate").val().split("-")[2] +
      "/" +
      $("#enddate").val().split("-")[1] +
      "/" +
      $("#enddate").val().split("-")[0];*/
    name = name.split(" ").join("-");
    console.log("current year",currentyear);
    console.log("current month",currentmonth);
    console.log("month",month);
    console.log(year);
    if(year == currentyear && month > currentmonth){
      alert("Check Month and Year");
      toastr.error("Please Check the Selected Month and Year");
    }
    else{
      $.ajax({
        type: "POST",
        url: $("#website-url").attr("value") + "testing",
        data: { company: id, name: name, month:month, year:year },
        dataType: "json",
        cache: false,
        beforeSend: function () {
          $("#btn-submit-on").html(
            '<button class="btn btn-success" type="button">\
                                  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>\
                                  Loading...\
                                  </button>'
          );
        },
        success: function (data) {
          if (data.isSuccess == true) {
            var link = document.createElement("a");
            document.body.appendChild(link);
            link.href = $("#website-url").attr("value") + "reports/" + data.Data;
            link.target = "_blank";
            link.click();
          } else {
            $("#errorMessage").html(data.Data).fadeOut(10000);
            $.when($("#errorMessage").fadeOut()).then(function () {
              $("#errorMessage").html("");
              $("#errorMessage").removeAttr("style");
              $("#errorMessage");
            });
          }
        },
        complete: function () {
          $("#btn-submit-on").html(
            '<button type="submit" class="btn btn-success"id="btn-apply-filter">Download Report</button>'
          );
        },
      });
    }
  });
});
