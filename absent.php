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
                                <h1 class="m-0 text-dark">Absent Employees</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-fluid">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title col-9">Display Data</h3>
                            <input type="text" class="form-control col-3" id="txt_present" name="txt_company" placeholder="Search Anything"/>
                        </div>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Subcompany</th>
                                    <th>Time</th>
                                    <!-- <th>Action</th> -->
                                </tr>
                            </thead>
                            <tbody id="displaydata_p"></tbody>
                        </table>
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
