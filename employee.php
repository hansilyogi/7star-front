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
        <!-- /.content-header -->

        <!-- Main content -->
        <div class="content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-12">
                <div class="card card-success">
                  <div class="card-header">
                    <h3 class="card-title">Add Employee</h3>
                  </div>
                  <form role="form" id="employeedata">
                    <div class="card-body row">
                      <div class="form-group col-md-3">
                        <label for="firstname">First Name</label>
                        <input
                          type="text"
                          class="form-control"
                          id="firstname"
                          name="firstname"
                          placeholder="First Name" required
                        />
                      </div>
                      <div class="form-group col-md-3">
                        <label for="lastname">Middle Name</label>
                        <input
                          type="text"
                          class="form-control"
                          id="middlename"
                          name="middlename"
                          placeholder="Middle Name" required
                        />
                      </div>
                      <div class="form-group col-md-3">
                        <label for="lastname">Last Name</label>
                        <input
                          type="text"
                          class="form-control"
                          id="lastname"
                          name="lastname"
                          placeholder="Last Name" required
                        />
                      </div>
                      <div class="form-group col-md-3">
                        <label for="gender">Gender</label>
                        <div class="input-group">
                          <div class="custom-file">
                            <select
                              class="form-control"
                              id="gender"
                              name="gender" required
                            >
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="form-group col-md-3">
                        <label for="dob">DOB</label>
                        <div class="input-group">
                          <div class="custom-file">
                            <input
                              type="Date"
                              class="form-control"
                              id="dob"
                              name="dob" required
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-group col-md-3">
                        <label for="mobile">Mobile Number</label>
                        <div class="input-group">
                          <div class="custom-file">
                            <input
                              type="text"
                              class="form-control"
                              id="mobile"
                              name="mobile"
                              placeholder="Mobile" required
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-group col-md-3">
                        <label for="mail">Mail</label>
                        <div class="input-group">
                          <div class="custom-file">
                            <input
                              type="text"
                              class="form-control"
                              id="mail"
                              name="mail"
                              placeholder="Mail Id" required
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-group col-md-3">
                        <label for="married">Maritial Status</label>
                        <div class="input-group">
                          <div class="custom-file">
                            <select
                              class="form-control"
                              id="married"
                              name="married" required
                            >
                              <option value="Single">Single</option>
                              <option value="Married">Married</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="form-group col-md-3">
                        <label for="joindate">Join Date</label>
                        <div class="input-group">
                          <div class="custom-file">
                            <input
                              type="Date"
                              class="form-control"
                              id="joindate"
                              name="joindate" required
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-group col-md-3">
                        <label for="terminationdate">Termination Date</label>
                        <div class="input-group">
                          <div class="custom-file">
                            <input
                              type="text"
                              class="form-control"
                              id="terminationdate"
                              name="terminationdate" required
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-group col-md-3">
                        <label for="prohibition">Prohibition</label>
                        <input
                          type="text"
                          class="form-control"
                          id="prohibition"
                          name="prohibition"
                          placeholder="Prohibition Period(Months)" required
                        />
                      </div>
                      <div class="form-group col-md-3">
                        <label for="subcompany">Sub Company</label>
                        <div class="input-group">
                          <select
                            class="form-control"
                            id="subcompany"
                            name="subcompany" required
                          ></select>
                        </div>
                      </div>
                      <div class="form-group col-md-3">
                        <label for="department">Department</label>
                        <div class="input-group">
                          <div class="custom-file">
                            <input
                              type="text"
                              class="form-control"
                              id="department"
                              name="department"
                              placeholder="Department" required
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-group col-md-3">
                        <label for="designation">Designation</label>
                        <div class="input-group">
                          <div class="custom-file">
                            <input
                              type="text"
                              class="form-control"
                              id="designation"
                              name="designation"
                              placeholder="Designation" required
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-group col-md-3">
                        <label for="idtype">ID Type</label>
                        <div class="input-group">
                          <div class="custom-file">
                            <input
                              type="text"
                              class="form-control"
                              id="idtype"
                              name="idtype"
                              placeholder="ID Type" required
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-group col-md-3">
                        <label for="idnumber">ID Number</label>
                        <div class="input-group">
                          <div class="custom-file">
                            <input
                              type="text"
                              class="form-control"
                              id="idnumber"
                              name="idnumber"
                              placeholder="ID Number" required
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-group col-md-3">
                        <label for="timing">Timing</label>
                        <div class="input-group">
                          <select
                            class="form-control"
                            id="timing"
                            name="timing" required
                          ></select>
                        </div>
                      </div>
                    </div>
                    <center>
                      <div class="form-check" id="staticmessage"></div>
                    </center>
                    <div class="card-footer" id="btn-submit-on">
                      <button
                        type="submit"
                        class="btn btn-success"
                        id="btn-submit"
                      >
                        Submit
                      </button>
                      <button
                        type="submit"
                        class="btn btn-danger ml-2"
                        id="btn-cancel"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <!-- /.col-md-6 -->
            </div>
            <!-- /.row -->
          </div>
          <!-- /.container-fluid -->
          <div class="container-fluid">
            <div class="card">
              <div class="card-header row">
                <h3 class="card-title col-9">Display Data</h3>
                <input type="text" class="form-control col-3" id="txt_emp" name="txt_emp" placeholder="Search Employee"/>
              </div>
              <!-- /.card-header -->
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Sr.No</th>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Shift</th>
                    <th>Action</th>
                    <th>View More</th>                    
                  </tr>
                </thead>
                <tbody id="displaydata"></tbody>
              </table>
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
    <script src="js/employee.js"></script>
  </body>
</html>
