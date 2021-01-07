$(document).ready(function () {

    var COMPANY;
    var SUBCOMPANY;
    var EMPLOYEE;
    var SUBCOUNT;

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
          $('#company').append(
              "<option value=" +""+ "> Select Company"
              + "</option>"
            );
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
          // subcompany();
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
          // console.log(data); 
          $("#subcompany").html("");
          $('#subcompany').append(
            "<option value=" +""+ "> Select Sub-Company"
            + "</option>"
          );
          // SUBCOMPANY = data.Data[0]._id;
          console.log("Subbbb----------------" + SUBCOMPANY);
          for (i = 0; i < data.Data.length; i++) {
            $("#subcompany").append(
              "<option value=" +
                data.Data[i]._id +
                ">" +
                data.Data[i].Name +
                "</option>"
            );
          }
          // employee();
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
          console.log(data);
          SUBCOUNT = data.Data.length;
          console.log("EMP COUNT--------------" + SUBCOUNT);
            $("#employee").html("");
            // EMPLOYEE = data.Data[0]._id;
            // console.log(EMPLOYEE);
            $('#employee').append(
              "<option value=" +""+ "> All Member"
              + "</option>"
            );
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
  };

  function checkStatus(status) {
    return status === "A" ? "color: red" : "color: green";
  }

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }


    $(document).on("click", "#btn-submit", function (e) {
        e.preventDefault();
        var s_date = $('#sdate').val();
        var e_date = $('#edate').val();
        var subid = $('#subcompany').val();
        $("#displaydata_e").html("");
        $("#totaldays").html("");
        $("#totalpresent").html("");
        $("#totalabsent").html("");
        var c = 0;
        var p = 0;
        var a = 0;
        var h = 0;
        var timediff;
        var timestart;
        var timeend;
        // console.log("start date --------" + s_date);
        // console.log("end date --------" + e_date);
        // console.log("Employeeeeee--------" + EMPLOYEE);
        
        $.ajax({
          type: "POST",
          url: $("#website-url").attr("value") + "getEmpAttendance",
          data: { "date" : s_date,"date2" : e_date, "SubCompany" :subid},
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
          success(response){
            $("#staticmessage")
            .removeClass("text-success text-danger")
            .addClass("text-success font-weight-bold");
          $("#staticmessage").html(response["Message"]).fadeOut(10000);
          $.when($("#staticmessage").fadeOut()).then(function () {
            $("#staticmessage").html("");
            $("#staticmessage").removeAttr("style");
            $("#staticmessage");
          });
            if (response.isSuccess == true && response.Data != 0){
              // onlyUnique()
              var pid=[];
              console.log(response);
              for(k=0;k<response.empcount.length;k++){
                for(l=0;l<response.Count;l++){
                  if(response.empcount[k] == response.Data[l].DutyIn.EmployeeId._id){
                    pid[l] = response.Data[l].DutyIn.EmployeeId._id;
                  }
                }
              }
              var unique = pid.filter(onlyUnique);
              // console.log("uniq-------------"+unique.length);
              // console.log("1");
              // console.log(EMPLOYEE);
              if(EMPLOYEE){
                // console.log("2");
                for (i = 0; i < response.Count; i++) {
                  if(response.Data[i].DutyIn.Time != undefined){
                    var v = response.Data[i].DutyOut[0].Time == undefined ? "Half-Day" : "P";
                  }
                  else{
                    v = "A";
                  }
                  timestart = moment(response.Data[i].DutyIn.Time, "HH:mm:ss a");
                  timeend = moment(response.Data[i].DutyOut[0].Time, "HH:mm:ss a");
                  var duration = moment.duration(timeend.diff(timestart));
                  var hours = parseInt(duration.asHours());
                  var minutes = parseInt(duration.asMinutes())%60;
                  timediff = hours + ' hour and '+ minutes+' minutes.';
                  // console.log("Start : "+ timestart);
                  // console.log("End : "+ timeend);
                  // console.log("Diff : " + timediff);
                  var outtime = response.Data[i].DutyOut[0].Time == undefined ? "" : response.Data[i].DutyOut[0].Time;
                  var outArea = response.Data[i].DutyOut[0].Area == undefined ? "" : response.Data[i].DutyOut[0].Area;
                  if(EMPLOYEE == response.Data[i].DutyIn.EmployeeId._id){
                    if(response.Data[i].DutyOut[0].Time != undefined){
                        p+=1;
                    }
                    else{
                      h+=1;
                    }
                    // else{
                    //   a+=1
                    // }
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
                      outArea+
                      "</td><td>"+
                      outtime+
                      "</td><td>"+
                      timediff+
                      "</td></tr>"
                    );
                  }
                }
                a = response.DaysCount - p - h;
                if(i){
                  $('#displaydata_e').append(
                      "<tr>"+
                      "<td colspan='2'>"+
                      "<label style='color:blue'>Total Days :"+response.DaysCount+"</label>"+
                      "</td>"+
                      "<td colspan='2'>"+
                      "<label style='color:green'>Total Present :"+p+"</label>"+
                      "</td>"+
                      "<td colspan='2'>"+
                      "<label style='color:red'>Half Days :"+h+"</label>"+
                      "</td>"+
                      "<td colspan='3'>"+
                      "<label style='color:red'>Total Absent :"+a+"</label>"+
                      "</td></tr>"
                  );
                }
              }
              else{
                // console.log("3");
                for(i=0;i<unique.length+1;i++){
                  p=0;a=0;h=0;
                  var EMP = response.empcount[i];
                  // console.log("loop-------"+ i);
                  for(j=0;j<response.Count;j++){
                    var flag = 0;
                    if(EMP == response.Data[j].DutyIn.EmployeeId._id){
                      flag = 1;
                      if(response.Data[j].DutyIn.Time != undefined){
                        var v = response.Data[j].DutyOut[0].Time == undefined ? "Half-Day" : "P";
                      }
                      else{
                        v = "A";
                      }
                      timestart = moment(response.Data[i].DutyIn.Time, "HH:mm:ss a");
                      timeend = moment(response.Data[i].DutyOut[0].Time, "HH:mm:ss a");
                      var duration = moment.duration(timeend.diff(timestart));
                      var hours = parseInt(duration.asHours());
                      var minutes = parseInt(duration.asMinutes())%60;
                      timediff = hours + ' hour and '+ minutes+' minutes.';
                      // var v = response.Data[j].DutyOut[0].Time == undefined ? "A" : "P";
                      var outtime = response.Data[j].DutyOut[0].Time == undefined ? "" : response.Data[j].DutyOut[0].Time;
                      var outArea = response.Data[j].DutyOut[0].Area == undefined ? "" : response.Data[j].DutyOut[0].Area;
                      if(response.Data[j].DutyOut[0].Time != undefined){
                          p+=1;
                          // console.log("P--------------"+p);
                      }
                      else{
                        h+=1;
                      }
                      $("#displaydata_e").append(
                        "<tr><td>" +
                        response.Data[j].DutyIn.EmployeeId.Name +
                        "</td><td>" +
                        response.Data[j].DutyIn.Day+
                        "</td><td>" +
                        response.Data[j].DutyIn.Date+
                        "</td><td>" +
                        v+
                        "</td><td>" +
                        response.Data[j].DutyIn.Area+
                        "</td><td>" +
                        response.Data[j].DutyIn.Time+
                        "</td><td>"+
                        outArea+
                        "</td><td>"+
                        outtime+
                        "</td><td>"+
                        timediff+
                        "</td></tr>"
                      );
                    }
                  }
                  a = response.DaysCount - p - h;
                  // console.log("A---------------"+a);
                  if(i != -1 && a != response.DaysCount){
                    $('#displaydata_e').append(
                        "<tr>"+
                        "<td colspan='2'>"+
                        "<label style='color:blue'>Total Days :"+response.DaysCount+"</label>"+
                        "</td>"+
                        "<td colspan='2'>"+
                        "<label style='color:green'>Total Present :"+p+"</label>"+
                        "</td>"+
                        "<td colspan='2'>"+
                        "<label style='color:red'>Half Days :"+h+"</label>"+
                        "</td>"+
                        "<td colspan='3'>"+
                        "<label style='color:red'>Total Absent :"+a+"</label>"+
                        "</td></tr><br>"
                    );
                  }
                  else{
                    continue;
                  }
                  // else if(i != -1){
                  //   console.log("");
                  // }
                  
                  if(j != -1 && response.empcount > 0){
                    $("#displaydata_e").append(
                      "<tr style='font-style:bold'>"+
                      "<td><b>EMP-Name"+i+"</b></td>"+
                      "<td><b>Day</b></td>"+
                      "<td><b>Date</b></td>"+
                      "<td><b>Attendence</b></td>"+
                      "<td><b>Duty-In Area</b></td>"+
                      "<td><b>Duty-In Time</b></td>"+
                      "<td><b>Duty-Out Area</b></td>"+
                      "<td><b>Duty-Out Time</b></td>"+
                      "</tr>"
                    );
                  }
                  else{
                    continue;
                  }
                }
              }
              // else{
              //   console.log("asd");
              // }
            }
          },
          complete: function () {
            $("#btn-submit-on").html(
              '<button type="submit" class="btn btn-success" id="btn-submit">Submit</button>'
            );
          },
        });

    });

    $(document).on("change", "#company", function () {
        COMPANY = $("#company").val();
        subcompany();
    });
    $(document).on("change", "#subcompany", function () {
        SUBCOMPANY = $("#subcompany").val();
        console.log("Sub-------------" + SUBCOMPANY);
        employee();
    });

    $(document).on("change", "#employee", function () {
          EMPLOYEE = $("#employee").val();
        console.log("Emp -------------" + EMPLOYEE);
    });

});