$(document).ready(function () {
    var TOTATLIN;
    var TOTALEMP;
    var TOTALOUT;
    var TOTALPRE;
    var ABSENT;
    presentemployee();
    function presentemployee(){
        $.ajax({
            type: "POST",
            url: $("#website-url").attr("value") + "dashboard",
            data: { type: "presentemployee" },
            dataType: "json",
            cache: false,
            success: function(data){
                console.log("present :");
                console.log(data);
                if(data.isSuccess == true){
                    TOTALPRE = parseInt(data.Data);
                    $("#present").text(data.Data);
                    totalemployee();
                }
            }
        });
    }
    function totalemployee(){
        $.ajax({
            type: "POST",
            url: $("#website-url").attr("value") + "dashboard",
            data: { type: "totalemployee" },
            dataType: "json",
            cache: false,
            success: function(data){
                console.log("Total emp :");
                console.log(data);
                if(data.isSuccess == true){
                    TOTALEMP = parseInt(data.Data);
                    absentemp = TOTALEMP - TOTALPRE;
                    $("#total").text(data.Data);
                    $("#absent").text(absentemp);
                    totalout();
                }
            }
        });
    }
    function totalout(){
        $.ajax({
            type: "POST",
            url: $("#website-url").attr("value") + "dashboard",
            data: { type: "totalout" },
            dataType: "json",
            cache: false,
            success: function(data){
                console.log("out :")
                console.log(data);
                if(data.isSuccess == true){
                    TOTALOUT = parseInt(data.Data);
                    TOTATLIN = TOTALPRE - TOTALOUT;
                    ABSENT = parseInt(TOTALEMP) - parseInt(TOTALPRE);
                    $("#empabsent").text(ABSENT);
                    $("#inoffice").text(TOTATLIN);
                    $("#outoffice").text(data.Data);
                }
            }
        });
    }    
});
