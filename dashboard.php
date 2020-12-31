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
                <div class="small-box" style="background-color:#06F6C3">
                  <div class="inner">
                    <h3><label  id="present" name="present" text="0"></label></h3>
                    <h4><b>TODAY PRESENT</b></h4>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-6">
                <div class="small-box" style="background-color:#06F6C3">
                  <div class="inner">
                    <h3><label  id="absent" name="absent" text="0"></label></h3>
                    <h4><b>TODAY ABSENT</b></h4>
                  </div>
                </div>
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

              <div class="col-lg-4 col-6">
                <div class="small-box" style="background-color:#06F6C3">
                  <div class="inner">
                    <h3><label  id="inoffice" name="present" text="0"></label></h3>
                    <h4><b>TODAY IN OFFICE</b></h4>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-6">
                <div class="small-box" style="background-color:#06F6C3">
                  <div class="inner">
                    <h3><label  id="outoffice" name="present" text="0"></label></h3>
                    <h4><b>TODAY OUT OFFICE</b></h4>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-6">
                <div class="small-box" style="background-color:#06F6C3">
                  <div class="inner" style="text-align:center">
                    <h3><label  id="total" name="present" text="0"></label></h3>
                    <h4><b>TOTAL EMPLOYEE</b></h4>
                  </div>
                </div>
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
