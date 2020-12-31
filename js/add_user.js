$(document).ready(function () {

    $('#txt_user').keyup(function(){
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

});