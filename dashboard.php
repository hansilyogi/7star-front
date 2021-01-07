<!DOCTYPE html>
<html lang="en">
<?php include('header.php'); ?>
  <body class="hold-transition sidebar-mini">
    <div class="wrapper">
    <?php include('navbar.php'); ?>
      <div class="content-wrapper">
        <div class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1 class="m-0 text-dark">Dashboard</h1>
              </div>
            </div>
              <!-- /.col -->
              
            <div class="row"> 
              <div class="col-lg-4 col-6">
                <a href="present.php">
                <div class="small-box" style="background-color:#06F6C3">
                  <div class="inner" style="text-align:center">
                    <h3><label style="color:black" id="present" name="present" text="0"></label></h3>
                    <h4><b style="color:black">TODAY PRESENT</b></h4>
                  </div>
                </div>
                </a>
              </div>

              <div class="col-lg-4 col-6">
                <a href="absent.php">
                <div class="small-box" style="background-color:#06F6C3">
                  <div class="inner" style="text-align:center">
                    <h3><label style="color:black" id="absent" name="absent" text="0"></label></h3>
                    <h4><b style="color:black">TODAY ABSENT</b></h4>
                  </div>
                </div>
                </a>
              </div>

              <!-- <div class="col-lg-4 col-6">
                <div class="small-box" style="background-color:#06F6C3">
                  <div class="inner">
                    <h3><label  id="late" name="present" text="0"></label></h3>
                    <h4><b>TODAY LATE</b></h4>
                  </div>
                </div>
              </div> -->

              <!-- <div class="col-lg-4 col-6">
                <div class="small-box" style="background-color:#06F6C3">
                  <div class="inner">
                    <h3><label  id="awayoffice" name="present" text="0"></label></h3>
                    <h4><b>TODAY AWAY FROM OFFICE</b></h4>
                  </div>
                </div>
              </div> -->

              <!-- <div class="col-lg-4 col-6">
                <div class="small-box" style="background-color:#06F6C3">
                  <div class="inner">
                    <h3><label  id="inoffice" name="present" text="0"></label></h3>
                    <h4><b>TODAY IN OFFICE</b></h4>
                  </div>
                </div>
              </div> -->

              <div class="col-lg-4 col-6">
                <a>
                <div class="small-box" style="background-color:#06F6C3">
                  <div class="inner" style="text-align:center">
                    <h3><label style="color:black" id="outoffice" name="present" text="0"></label></h3>
                    <h4><b style="color:black">TODAY OUT OFFICE</b></h4>
                  </div>
                </div>
                </a>
              </div>

              <div class="col-lg-4 col-6">
                <a>
                <div class="small-box" style="background-color:#06F6C3">
                  <div class="inner" style="text-align:center">
                    <h3><label style="color:black" id="total" name="total" text="0"></label></h3>
                    <h4><b style="color:black">TOTAL EMPLOYEE</b></h4>
                  </div>
                </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
        <footer class="main-footer">
          All rights reserved.
        </footer>
    </div>
    <?php include('script.php'); ?>
    <script src="js/dashboard.js"></script>
  </body>
</html>
