$(document).ready(function () {
    var TOTATLIN;
    var TOTALEMP;
    var TOTALOUT;
    var TOTALPRE;
    var ABSENT;

    // var url = "http://localhost:3000/api/";
    var url = $("#website-url").attr("value");

    presentemployee();
    function presentemployee(){
        $.ajax({
            type: "POST",
            url: url + "dashboard",
            data: { type: "presentemployee" },
            dataType: "json",
            cache: false,
            success: function(data){
                console.log("present :");
                console.log(data);
                if(data.isSuccess == true){
                    TOTALPRE = (data.Data);
                    $("#present").text(data.Data.length);
                    // totalemployee();
                    for(i=0;i< data.Data.length;i++){
                        $("#displaydata_p").append(
                            "<tr>"+
                            "<td>"+
                            data.Data[i].EmployeeId.Name +
                            "</td>"+
                            "<td>"+
                            data.Data[i].Area +
                            "</td>"+
                            "<td>"+
                            data.Data[i].Time +
                            "</td>"
                        );
                    };
                }
                totalemployee();
            }
        });
    }

    $('#txt_present').keyup(function(){
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

    function totalemployee(){
        $.ajax({
            type: "POST",
            url: url + "dashboard",
            data: { type: "totalemployee" },
            dataType: "json",
            cache: false,
            success: function(data){
                console.log("Total emp :");
                console.log(data.Data);
                if(data.IsSuccess == true){
                    TOTALEMP = (data.Data);
                    absentemp = TOTALEMP.length - TOTALPRE.length;
                    // totalout();
                    $("#total").text(data.Data.length);
                    $("#absent").text(absentemp);
                }
                totalout();
            },
        });
    }

    function totalout(){
        $.ajax({
            type: "POST",
            url: url + "dashboard",
            data: { type: "totalout" },
            dataType: "json",
            cache: false,
            success: function(data){
                console.log("out :")
                console.log(data);
                if(data.isSuccess == true){
                    TOTALOUT = (data.Data);
                    TOTATLIN = TOTALPRE.length - TOTALOUT.length;
                    ABSENT = (TOTALEMP) - (TOTALPRE);
                    $("#empabsent").text(ABSENT);
                    $("#inoffice").text(TOTATLIN);
                    $("#outoffice").text(data.Data.length);
                }
            }
        });
    }    
});
