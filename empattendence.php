<!DOCTYPE html>
<html lang="en">
<?php include('header.php'); ?>
  <body class="hold-transition sidebar-mini">
    <div class="wrapper">
    <?php include('navbar.php'); ?>
      <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <div class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1 class="m-0 text-dark">Employee Details</h1>
              </div>
              <!-- /.col -->
            </div>
            <!-- /.row -->
          </div>
          <!-- /.container-fluid -->
        </div>
        <div class="content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-12">
                <div class="card card-success">
                  <div class="card-header">
                    <h3 class="card-title">Search Attendence</h3>
                  </div>
                  <form role="form">
                    <div class="card-body row">
                        <div class="form-group col-md-12">
                            <label for="department">Company</label>
                            <div class="input-group">
                                <select
                                    class="form-control"
                                    id="company"
                                    name="company">
                                </select>
                            </div>
                        </div>
                        <div class="form-group col-md-12">
                            <label for="department">Sub Company</label>
                            <div class="input-group">
                                <select
                                    class="form-control"
                                    id="subcompany"
                                    name="subcompany">
                                </select>
                            </div>
                        </div>
                        <div class="form-group col-md-12">
                            <label for="department">Employee</label>
                            <div class="input-group">
                                <select
                                class="form-control"
                                id="employee"
                                name="employee"
                                ></select>
                            </div>
                        </div>    
                        <div class="form-group col-md-6">
                            <label for="month1">Start-Date</label>
                            <input type="text" class="form-control" id="sdate">                        
                        </div>
                        <div class="form-group col-md-6">
                            <label for="year">End-Date</label> 
                            <input type="text" class="form-control" id="edate">
                        </div>
                    </div>
                    <div class="card-footer" id="btn-submit-on">
                      <button
                        type="button"
                        class="btn btn-success"
                        id="btn-submit">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <!-- /.col-md-6 -->
            </div>
            <!-- /.row -->
          </div>
          <br>
          <div class="container-fluid">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title col-9">Display Data</h3>
                <input type="text" class="form-control col-3" id="txt_searchemployee" name="txt_searchemployee" placeholder="Search Anything"/>
              </div>
              <!-- <div class="form-group col-md-6">
                <label>Total Days :<spam id="totaldays"></spam></label> <br>
                <label>Total Present :<spam id="totalpresent"></spam></label> <br>
                <label>Total Absent :<spam id="totalabsent"></spam></label> 
              </div> -->
              <div class="card-body">
                <button type="button" id="btn-excel" style="float:right" class="btn btn-app bg-success"><i class="fas fa-file-excel"></i>  Export to Excel</button><br>
                <!-- <div class="form-group col-md-6">
                  <label>Total Days :<spam id="totaldays"></spam></label> <br>
                  <label>Total Present :<spam id="totalpresent"></spam></label> <br>
                  <label>Total Absent :<spam id="totalabsent"></spam></label> 
                </div> -->
                <table id="example" class="table table-bordered" style="table-layout: fixed;">
                  <thead>
                    <tr>
                      <th>EMP-Name</th>
                      <th>Day</th>
                      <th>Date</th>
                      <th>Attendence</th>
                      <th>Duty-In Area</th>
                      <th>Duty-In Time</th>
                      <th>Duty-Out Area</th>
                      <th>Duty-Out Time</th>
                      <th>Hours Worked</th>
                    </tr>
                  </thead>
                  <tbody id="displaydata_e"></tbody>
                </table>
              </div>

              <!-- <div class="card-body" id="displaydata_e">
              </div> -->
              <!-- /.card-body -->
            </div>
          </div>
        </div>
        <!-- /.content -->
      </div>
      <!-- /.content-wrapper -->
      <!-- Main Footer -->
      <footer class="main-footer">
        All rights reserved.
      </footer>
    </div>        
    <?php include('script.php'); ?>
    <script src="js/empattendence.js"></script>
  </body>
</html>
