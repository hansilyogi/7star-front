$(document).ready(function () {

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
            console.log(EMPLOYEE);
            for (i = 0; i < data.Data.length; i++) {
              $("#employee").append(
                "<option value=" +
                  data.Data[i]._id +
                  ">" +
                  data.Data[i].Name +
                  "</option>"
              );
            }
            // loadsingleemployee();
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


    $(document).on("click", "#btn-submit", function (e) {
        e.preventDefault();
        var s_date = $('#sdate').val();
        var e_date = $('#edate').val();
        $("#displaydata_e").html("");
        $("#totaldays").html("");
        $("#totalpresent").html("");
        $("#totalabsent").html("");
        var c = 0;
        var p = 0;
        var a = 0;
        // console.log("start date --------" + s_date);
        // console.log("end date --------" + e_date);
        // console.log("Employeeeeee--------" + EMPLOYEE);
        
        $.ajax({
          type: "POST",
          url: "http://localhost:3000/api/getEmpAttendance",
          data: { "date" : s_date,"date2" : e_date},
          dataType: "json",
          cache: false,
          success(response){
            console.log(response);
            console.log("EID1-------------------------" + EMPLOYEE);
            console.log("EID2-------------------------" + response.Data[0].DutyIn.EmployeeId._id);
            if (response.isSuccess == true) {
              console.log("1");
                for (i = 0; i < response.Count; i++) {
                    var v = response.Data[i].DutyOut[0].Time == undefined ? "A" : "P";
                    if(EMPLOYEE == response.Data[i].DutyIn.EmployeeId._id){
                        console.log("EMP ID--------------" + response.Data[i].DutyIn.EmployeeId._id);
                        c+=1;
                        if(response.Data[i].DutyOut[0].Time != undefined){
                            p+=1;
                        }
                        else{
                          a+=1;
                        }
                        $("#displaydata_e").append(
                            "<tr><td>" +
                            response.Data[i].DutyIn.EmployeeId.Name +
                            "</td><td>" +
                            response.Data[i].DutyIn.Day+
                            "</td><td>" +
                            response.Data[i].DutyIn.Date+
                            "</td><td>" +
                            v+
                            "</td><td>" +
                            response.Data[i].DutyIn.Area+
                            "</td><td>" +
                            response.Data[i].DutyIn.Time+
                            "</td><td>"+
                            response.Data[i].DutyOut[0].Area+
                            "</td><td>"+
                            response.Data[i].DutyOut[0].Time+
                            "</td></tr>"
                        );
                    }
                }
                $("#totaldays").append(response.DaysCount);
                $("#totalpresent").append(p);
                $("#totalabsent").append(a);
            }
          },
        });

    });

    $(document).on("change", "#company", function () {
        COMPANY = $("#company").val();
        subcompany();
    });
    $(document).on("change", "#subcompany", function () {
        SUBCOMPANY = $("#subcompany").val();
        employee();
    });

    $(document).on("change", "#employee", function () {
          EMPLOYEE = $("#employee").val();
    });

});