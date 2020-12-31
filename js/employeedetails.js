$(document).ready(function () {
  
console.log(sessionStorage);

  var COMPANY;
  var SUBCOMPANY;
  var EMPLOYEE;

  loadcompany();

  function loadcompany() {
    $.ajax({
      type: "POST",
      url: $("#website-url").attr("value") + "company",
      data: { type: "getdata" },
      dataType: "json",
      cache: false,
      success: function (data) {
        if (data.isSuccess == true) {
          $("#company").html("");
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
          employee();
        }
      },
    });
  }

  

  $(document).on("click", "#btn-submit", function () {
    var s_date = '#sdate';
    var e_date = '#edate';
    console.log("start date --------" + s_date);
    console.log("end date --------" + e_date);
    $.ajax({
      type: "POST",
      url: "http://localhost:3000/api/getEmpAttendance",
      data: { date : s_date, date2 : e_date},
      dataType: "json",
      cache: false,
      success(response){
        console.log(response);
      }
    })
  });
  
  $('#txt_searchemployee').keyup(function(){
    var search = $(this).val();
    $('table tbody tr').hide();
    var len = $('table tbody tr:not(.notfound) td:contains("'+search.charAt(0)+'")').length;
    if(len > 0){
      $('table tbody tr:not(.notfound) td:contains("'+search.charAt(0) + search.slice(1)+'")').each(function(){
        $(this).closest('tr').show();
      });
    }else{
      $('.notfound').show();
    }
  });

  function employee() {
    $.ajax({
      type: "POST",
      url: $("#website-url").attr("value") + "employee",
      data: { type: "getsubcompanyemployee", SubCompany: SUBCOMPANY },
      dataType: "json",
      cache: false,
      beforeSend: function () {
        $("#displaydata").html(
          '<tr><td colspan="5" class="text-center font-weight-bold">Loading...</td></tr></center>'
        );
      },
      success: function (data) {
        if (data.isSuccess == true) {
          if (data.isSuccess == true) {
            $("#employee").html("");
            EMPLOYEE = data.Data[0]._id;
            for (i = 0; i < data.Data.length; i++) {
              $("#employee").append(
                "<option value=" +
                  data.Data[i]._id +
                  ">" +
                  data.Data[i].Name +
                  "</option>"
              );
            }
            loadsingleemployee();
          };
          $("#displaydata").html("");
          // if (data.Data.length > 0) {
          //   for (i = 0; i < data.Data.length; i++) {
          //     $("#displaydata").append(
          //       "<tr><td>" +
          //         data.Data[i].Name +
          //         "</td><td>" +
          //         "<a href=attendance.php?id=" +
          //         data.Data[i]._id +
          //         ">View</a>" +
          //         "</td></tr>"
          //     );
          //   }
          // }
        } else {
          $("#displaydata").html(
            '<tr><td colspan="4" class="text-center font-weight-bold">No Records Found.</td></tr></center>'
          );
        }
      },
    });
  }

  function loadsingleemployee() {
    // var afilter = $("#area-filter").val();
    $.ajax({
      type: "POST",
      url: $("#website-url").attr("value") + "attendance",
      data: { type: "getsingle", EmployeeId: EMPLOYEE, afilter: "" },
      dataType: "json",
      cache: false,
      beforeSend: function () {
        $("#displaydata_e").html(
          '<tr><td colspan="8" class="text-center font-weight-bold">Loading...</td></tr></center>'
        );
      },
      success: function (data) {
        if (data.isSuccess == true) {
          $("#displaydata_e").html("");
          for (i = 0; i < data.Data.length; i++) {
            checkstring = "http://www.google.com/maps/place/";
            data.Data[i]["Day"] =
              data.Data[i]["Day"] == undefined ? "-" : data.Data[i]["Day"];
            data.Data[i]["Time"] =
              data.Data[i]["Time"] == undefined ? "-" : data.Data[i]["Time"];
            data.Data[i]["Area"] =
              data.Data[i]["Area"] == undefined ? "-" : data.Data[i]["Area"];
            console.log(data.Data[i]["Area"].search(checkstring));
            if (data.Data[i]["Area"].search(checkstring) == 0) {
              data.Data[i]["Area"] =
                "<a href=" +
                data.Data[i]["Area"] +
                " target=_blank>Outside Area</a>";
            }
            $("#displaydata_e").append(
              "<tr><td>" +
                data.Data[i].EmployeeId["Name"] +
                "</td><td>" +
                data.Data[i].EmployeeId["Mobile"] +
                "</td><td>" +
                data.Data[i]["Day"] +
                "</td><td>" +
                data.Data[i]["Date"] +
                "</td><td>" +
                data.Data[i]["Time"] +
                "</td><td>" +
                "<a href = " +
                $("#website-url").attr("value") +
                "uploads/" +
                data.Data[i]["Image"] +
                " target=_blank>View Image</a>" +
                "</td><td>" +
                data.Data[i]["Area"] +
                "</td><td>" +
                data.Data[i]["Status"].toUpperCase() +
                "</td></tr>"
            );
          }
        } else {
          $("#displaydata_e").html(
            '<tr><td colspan="8" class="text-center font-weight-bold">No Records Found.</td></tr></center>'
          );
        }
      },
    })
  };

  // $(document).on("change", "#company", function () {
  //   COMPANY = $("#company").val();
  //   subcompany();
  // });
  // $(document).on("change", "#subcompany", function () {
  //   SUBCOMPANY = $("#subcompany").val();
  //   employee();
  // });
  // $(document).on("change", "#employee", function () {
  //   EMPLOYEE = $("#employee").val();
  //   // loadsingleemployee();
  // });
});
