$(document).ready(function () {
    console.log("1");
    $(document).on("click", "#login-btn", function (e) {
        console.log("2")
        sessionStorage.clear();
        window.location.href = "index.php";
    });

});