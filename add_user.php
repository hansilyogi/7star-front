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
                <h1 class="m-0 text-dark">User Details</h1>
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
                    <h3 class="card-title">Register User</h3>
                  </div>
                  <form role="form">
                    <div class="card-body row">
                      <!-- <div class="form-group col-md-3">
                        <label for="idno">ID No.</label>
                        <input
                          type="ttex"
                          class="form-control"
                          id="idno"
                          name="idno"
                          placeholder="ID No."
                        />
                      </div> -->
                      <div class="form-group col-md-3">
                        <label for="username">User Name</label>
                        <input
                          type="text"
                          class="form-control"
                          id="username"
                          name="username"
                          placeholder="User Name"
                        />
                      </div>
                      <div class="form-group col-md-3">
                        <label for="password">Password</label>
                        <input
                          type="password"
                          class="form-control"
                          id="password"
                          name="password"
                          placeholder=""
                        />
                      </div>
                      <div class="form-group col-md-3">
                        <label for="fname">First Name</label>
                        <div class="input-group">
                          <div class="custom-file">
                            <input
                              type="text"
                              class="form-control"
                              id="fname"
                              name="fname"
                              placeholder="First Name"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-group col-md-3">
                        <label for="lname">Last Name</label>
                        <div class="input-group">
                          <div class="custom-file">
                            <input
                              type="text"
                              class="form-control"
                              id="lname"
                              name="lname"
                              placeholder="Last Name"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-group col-md-3">
                        <label for="mobile">Mobile No. </label>
                        <div class="input-group">
                          <div class="custom-file">
                            <input
                              type="text"
                              class="form-control"
                              id="mobile"
                              name="mobile"
                              placeholder="Mobile No. "
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-group col-md-3">
                        <label for="email">Email</label>
                        <div class="input-group">
                          <div class="custom-file">
                            <input
                              type="text"
                              class="form-control"
                              id="email"
                              name="email"
                              placeholder="Email"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-group col-md-3">
                        <label for="rights">Rights</label>
                        <div class="input-group">
                          <div class="custom-file">
                          <select name="rights" id="rights" class="form-control">
                            <option value="Admin">Administrator</option>
                            <option value="Staff">Staff</option>
                            <option value="Monitor">Monitor</option>
                        </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- /.card-body -->
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
                        class="btn btn-danger"
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
              <div class="card-header">
                <h3 class="card-title col-9">All User</h3>
                <input type="text" class="form-control col-3" id="txt_user" name="txt_user" placeholder="Search User"/>
              </div>
              <!-- /.card-header -->
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>User Name</th>
                    <th>Mobile no. </th>
                    <th>Email Id</th>
                    <th>Rights As</th>
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
    <script src=""></script>
  </body>
</html>
