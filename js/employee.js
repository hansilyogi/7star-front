$(document).ready(function () {
  
  loaddata();
  loadsubcompany();
  loadtiming();

  var UPDATEID;
  var TIMING;
  //Date format for dd/mm/yyyy
  function dateformatechange(date){
    date = date.split("-");
    date = date[2]+'/'+date[1]+'/'+date[0];
    return date;
  }

  //Date formate for yyyy-mm-dd
  function RevDateformate(date){
    if(date.includes('-')){
      date = date.split("-");
      date = date[2]+'-'+date[1]+'-'+date[0];
    }
    else if(date.includes('/')){
      date = date.split("/");
      date = date[2]+'-'+date[1]+'-'+date[0];
    }
    return date;
  }
  
  $('#txt_emp').keyup(function(){
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

  function loadsubcompany() {
    $.ajax({
      type: "POST",
      url: $("#website-url").attr("value") + "employee",
      data: { type: "getsubcompany" },
      dataType: "json",
      cache: false,
      success: function (data) {
        if (data.isSuccess == true) {
          $("#subcompany").html("");
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

  function loadtiming() {
    $.ajax({
      type: "POST",
      url: $("#website-url").attr("value") + "timing",
      data: { type: "getdata" },
      dataType: "json",
      cache: false,
      success: function (data) {
        if (data.isSuccess == true) {
          $("#timing").html("");
          TIMING = data.Data[0]._id;
          for (i = 0; i < data.Data.length; i++) {
            $("#timing").append(
              "<option value=" +
                data.Data[i]._id +
                ">" +
                data.Data[i].Name +
                " - " +
                data.Data[i].StartTime +
                " - " +
                data.Data[i].EndTime +
                "</option>"
            );
          }
        }
      },
    });
  }

  function loaddata() {
    $.ajax({
      type: "POST",
      url: $("#website-url").attr("value") + "employee",
      data: { type: "getdata" },
      dataType: "json",
      cache: false,
      beforeSend: function () {
        $("#displaydata").html(
          '<tr><td colspan="5" class="text-center font-weight-bold">Loading...</td></tr></center>'
        );
      },
      success: function (data) {       
        if (data.isSuccess == true) {
          $("#displaydata").html("");
          for (i = 0; i < data.Data.length; i++) {
            data.Data[i]["MailId"] =
              data.Data[i]["MailId"] == undefined
                ? "-"
                : data.Data[i]["MailId"];
            if(data.Data[i]["Timing"] == undefined || data.Data[i]["Timing"]["StartTime"] == undefined || data.Data[i]["Timing"]["EndTime"] == undefined ){
              i++;
            }
           else{
            $("#displaydata").append(
              "<tr><td>" +
                parseInt(i+1)+"</td><td>"+
                data.Data[i]["Name"] +
                "</td><td>" +
                data.Data[i]["Department"] +
                "</td><td>" +
                data.Data[i]["Timing"]["StartTime"] +" To " + data.Data[i]["Timing"]["EndTime"] +
                "</td><td>" +
                '<a id="edit-data" href="employee.php?id=' +
                data.Data[i]["_id"] +
                '"><i class="fas fa-edit" aria-hidden="true"></i></a>' +
                "</td><td>" +
                "<a href=singleemployee.php?id=" +
                data.Data[i]["_id"] +
                ">View More</a></td></tr>"
            );
           }
            
          }
        } else {
          $("#displaydata").html(
            '<tr><td colspan="4" class="text-center font-weight-bold">No Records Found.</td></tr></center>'
          );
        }
      },
    });
  }

  $('#txt_searchshift').keyup(function(){
    var search = $(this).val();
    $('table tbody tr').hide();
    var len = $('table tbody tr:not(.notfound) td:contains("'+search+'")').length;
    if(len > 0){
      $('table tbody tr:not(.notfound) td:contains("'+search+'")').each(function(){
        $(this).closest('tr').show();
      });
    }else{
      $('.notfound').show();
    }
  });


  $(document).on("click", "#edit-data", function (e) {
    e.preventDefault();
    var id = $(this).attr("href").split("=")[1];
    $.ajax({
      type: "POST",
      url: $("#website-url").attr("value") + "employee",
      data: { type: "getemployee", id: id },
      dataType: "json",
      cache: false,
      success: function (data) {
        if (data.isSuccess == true) {
          UPDATEID = id;
          time =
            data.Data[0].Timing == undefined ? TIMING : data.Data[0].Timing;
          $("#firstname").val(data.Data[0].FirstName);
          $("#middlename").val(data.Data[0].MiddleName);
          $("#lastname").val(data.Data[0].LastName);
          $("#gender").val(data.Data[0].Gender);
          if(data.Data[0].DOB.includes("-")){
            $("#dob").val(data.Data[0].DOB);

          }else{
            $("#dob").val(RevDateformate(data.Data[0].DOB));
          }
          $("#mobile").val(data.Data[0].Mobile);
          $("#mail").val(data.Data[0].Mail);
          $("#married").val(data.Data[0].MartialStatus);
          // $("#joindate").val(RevDateformate(data.Data[0].JoinDate));
          $("#subcompany").val(data.Data[0].SubCompany);
          if(data.Data[0].ConfirmationDate.includes("-")){
            $("#confirmationdate").val(data.Data[0].ConfirmationDate);
          }else{
            $("#confirmationdate").val(RevDateformate(data.Data[0].ConfirmationDate));
          }
          if(data.Data[0].TerminationDate.includes("-")){
            $("#terminationdate").val(data.Data[0].TerminationDate);

          } else{
            $("#terminationdate").val(RevDateformate(data.Data[0].TerminationDate));
          } 
          if((data.Data[0].JoinDate).includes("-")){
            $("#joindate").val(data.Data[0].JoinDate);

          } else{
            $("#joindate").val(RevDateformate(data.Data[0].JoinDate));
          }
          $("#prohibition").val(data.Data[0].Prohibition);
          $("#department").val(data.Data[0].Department);
          $("#designation").val(data.Data[0].Designation);
          $("#idtype").val(data.Data[0].IDtype);
          $("#idnumber").val(data.Data[0].IDNumber);
          $("#timing").val(time);
          window.scrollTo(0, 0);
          $("#btn-submit-on").html(
            "<button type='submit' class='btn btn-success' id='btn-update'>Update</button>" +
            "<button type='submit' class='btn btn-danger ml-2' id='btn-cancel'>Cancel</button>"
          );
        }
      },
    });
  });

  $(document).on("click", "#btn-cancel", function (e) {
    e.preventDefault();
    $("form")[0].reset();
    $("#btn-submit-on").html(
      "<button type='submit' class='btn btn-success' id='btn-submit'>Submit</button>" +
        "<button type='submit' class='btn btn-danger ml-2' id='btn-cancel'>Cancel</button>"
    );
  });

  $(document).on("click", "#btn-update", function (e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: $("#website-url").attr("value") + "employee",
      data: {
        type: "update",
        id: UPDATEID,
        firstname: $("#firstname").val(),
        middlename: $("#middlename").val(),
        lastname: $("#lastname").val(),
        gender: $("#gender").val(),
        dob: $("#dob").val(),
        mobile: $("#mobile").val(),
        mail: $("#mail").val(),
        martialstatus: $("#married").val(),
        joindate: $("#joindate").val(),
        subcompany: $("#subcompany").val(),
        confirmationdate: $("#confirmationdate").val(),
        terminationdate: $("#terminationdate").val(),
        prohibition: $("#prohibition").val(),
        department: $("#department").val(),
        designation: $("#designation").val(),
        idtype: $("#idtype").val(),
        idnumber: $("#idnumber").val(),
        timing: $("#timing").val(),
      },
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
          $("#staticmessage")
            .removeClass("text-success text-danger")
            .addClass("text-success font-weight-bold");
          $("#staticmessage").html(data["Message"]).fadeOut(10000);
          $.when($("#staticmessage").fadeOut()).then(function () {
            $("#staticmessage").html("");
            $("#staticmessage").removeAttr("style");
            $("#staticmessage");
          });
          loaddata();
          $("#btn-submit-on").html(
            "<button type='submit' class='btn btn-success' id='btn-submit'>Submit</button>" +
              "<button type='submit' class='btn btn-danger ml-2' id='btn-cancel'>Cancel</button>"
          );
        } else {
          $("#btn-submit-on").html(
            "<button type='submit' class='btn btn-success' id='btn-update'>Update</button>" +
              "<button type='submit' class='btn btn-danger ml-2' id='btn-cancel'>Cancel</button>"
          );
        }
      },
    });
  });

  // $(document).on("click", "#btn-submit", function (e) {
  //   e.preventDefault();
  //   $.ajax({
  //     type: "POST",
  //     url: $("#website-url").attr("value") + "employee",
  //     data: {
  //       type: "insert",
  //       firstname: $("#firstname").val(),
  //       middlename: $("#middlename").val(),
  //       lastname: $("#lastname").val(),
  //       gender: $("#gender").val(),
  //       dob: dateformatechange($("#dob").val()),
  //       mobile: $("#mobile").val(),
  //       mail: $("#mail").val(),
  //       martialstatus: $("#married").val(),
  //       joindate: dateformatechange($("#joindate").val()),
  //       subcompany: $("#subcompany").val(),
  //       confirmationdate: dateformatechange($("#confirmationdate").val()),
  //       terminationdate: dateformatechange($("#terminationdate").val()),
  //       prohibition: $("#prohibition").val(),
  //       department: $("#department").val(),
  //       designation: $("#designation").val(),
  //       idtype: $("#idtype").val(),
  //       idnumber: $("#idnumber").val(),
  //       timing: $("#timing").val(),
  //     },
  //     dataType: "json",
  //     cache: false,
  //     beforeSend: function () {
  //       $("#btn-submit-on").html(
  //         '<button class="btn btn-success" type="button">\
  //                               <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>\
  //                               Loading...\
  //                               </button>'
  //       );
  //     },
  //     success: function (data) {
  //       if (data.isSuccess == true) {
  //         $("#staticmessage")
  //           .removeClass("text-success text-danger")
  //           .addClass("text-success font-weight-bold");
  //         $("#staticmessage").html(data["Message"]).fadeOut(10000);
  //         $.when($("#staticmessage").fadeOut()).then(function () {
  //           $("#staticmessage").html("");
  //           $("#staticmessage").removeAttr("style");
  //           $("#staticmessage");
  //         });
  //         loaddata();
  //       }
  //     },
  //     complete: function () {
  //       $("#btn-submit-on").html(
  //         "<button type='submit' class='btn btn-success' id='btn-submit'>Submit</button>" +
  //           "<button type='submit' class='btn btn-danger ml-2' id='btn-cancel'>Cancel</button>"
  //       );
  //     },
  //   });
  // });

  $('#employeedata').submit(function (e) {
    e.preventDefault();
    var formData = new FormData(this);
    if( UPDATEID == undefined ){
      formData.append('type', 'insert');
    }
    else{
      formData.append('type','update');
      formData.append('id',UPDATEID);
    }
    formData.append('token',$("#website-token").attr("value"));
    $.ajax({
      type: "POST",
      url: $("#website-url").attr("value") + "employee",
      data: formData,
      dataType: 'json',
      cache: false,
      contentType: false,
      processData: false,
      beforeSend: function () {
        $("#btn-submit").html(
          '<button class="btn btn-primary float-right" type="button">\
                                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>\
                                Loading...\
                                </button>'
        );
      },
      success: function(data) {
        if (data.isSuccess == true) {
          $("#staticmessage")
            .removeClass("text-success text-danger")
            .addClass("text-success font-weight-bold");
          $("#staticmessage").html(data["Message"]).fadeOut(10000);
          $.when($("#staticmessage").fadeOut()).then(function () {
            $("#staticmessage").html("");
            $("#staticmessage").removeAttr("style");
            $("#staticmessage");
          });
          loaddata();
        }
      },
      complete: function () {
        $("#btn-submit-on").html(
        "<button type='submit' class='btn btn-success' id='btn-submit'>Submit</button>" +
        "<button type='submit' class='btn btn-danger ml-2' id='btn-cancel'>Cancel</button>"
      );
      },
    });
  });
});
