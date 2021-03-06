<?php
  session_start();
  if($_SESSION['id'] == "") {
    header("Location:index.php");
  }
?>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <!-- <meta value="https://sevenstar7.herokuapp.com/api/" id="website-url"/> -->
    <meta value="https://back7star.herokuapp.com/api/" id="website-url"/>
    <meta value="<?php echo $_SESSION['id']; ?>" id="website-token"/>
    <title>7 Star</title>
    <!-- Font Awesome Icons -->
    <link rel="stylesheet" href="plugins/fontawesome-free/css/all.min.css" />
    <!-- Theme style -->
    <link rel="stylesheet" href="dist/css/adminlte.min.css" />
    <!-- Google Font: Source Sans Pro -->
    <link
      href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700"
      rel="stylesheet"
    />
    <style>
      /* Set the size of the div element that contains the map */
      #map {
        height: 400px; /* The height is 400 pixels */
        width: 100%; /* The width is the width of the web page */
      }
    </style>
</head>