<nav class="main-header navbar navbar-expand navbar-white navbar-light">
        <!-- Left navbar links -->
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" data-widget="pushmenu" href="#" role="button"
              ><i class="fas fa-bars"></i
            ></a>
          </li>
        </ul>
      </nav>      
      <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <!-- Sidebar -->
        <div class="sidebar">
          <!-- Sidebar user panel (optional) -->
          <div class="user-panel mt-3 pb-3 mb-3 ml-3 d-flex">            
            <div class="info">
              <a href="#" class="d-block">7-Star</a>
            </div>
          </div>

          <!-- Sidebar Menu -->
          <nav class="mt-2">
            <ul
              class="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
            <li class="nav-item">
                <a href="dashboard.php" class="nav-link" style="color:lightblue">
                  <i class="nav-icon fas fa-tachometer-alt"></i>
                  <p>
                    Dashboard
                  </p>
                </a>
              </li>
            <li class="nav-item has-treeview">
              <a href="#" class="nav-link" style="color:lightblue">
                <i class="nav-icon fas fa-brain"></i>
                <p>
                  Shift
                  <i class="fas fa-angle-left right"></i>                
                </p>
              </a>
              <ul class="nav nav-treeview" style="display: none;">
                <li class="nav-item">
                  <a href="timing.php" class="nav-link">
                    <i class="far fa-clock nav-icon"></i>
                    <p>Timing</p>
                  </a>
                </li>              
              </ul>
            </li>
              <li class="nav-item">
                <a href="company.php" class="nav-link" style="color:lightblue">
                  <i class="nav-icon fas fa-industry"></i>
                  <p>
                    Company
                  </p>
                </a>
              </li>
              <li class="nav-item">
                <a href="subcompany.php" class="nav-link" style="color:lightblue">
                  <i class="nav-icon fas fa-building"></i>
                  <p>
                    Sub Company
                  </p>
                </a>
              </li>
              <li class="nav-item">
                <a href="employee.php" class="nav-link" style="color:lightblue">
                  <i class="nav-icon fas fa-users"></i>
                  <p>
                    Employee
                  </p>
                </a>
              </li>
              <li class="nav-item has-treeview">
                <a href="#" class="nav-link" style="color:lightblue">
                  <i class="nav-icon fas fa-hourglass"></i>
                  <p>
                    Attendance Types
                    <i class="fas fa-angle-left right"></i>                
                  </p>
                  </a>
                <ul class="nav nav-treeview" style="display: none;">
                  <li class="nav-item">
                    <a href="attendance.php" class="nav-link">
                      <i class="nav-icon fas fa-hourglass"></i>
                      <p>
                        Attendance
                      </p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="empattendence.php" class="nav-link">
                      <i class="nav-icon fas fa-user-clock"></i>
                      <p>
                        Employee Attendance
                      </p>
                    </a>
                    </li>
                </ul>
              </li>     
              <!-- <li class="nav-item">
                <a href="add_user.php" class="nav-link" style="color:lightblue">
                  <i class="nav-icon fas fa-users"></i>
                  <p>
                    Add User
                  </p>
                </a>
              </li> -->
              <li class="nav-item">
                <a href="logout.php" id="logout" class="nav-link" style="color:lightblue">
                  <i class="nav-icon fas fa-sign-out-alt"></i>
                  <p>
                    Logout
                  </p>
                </a>
              </li>    
            </ul>
          </nav>
          <!-- /.sidebar-menu -->
        </div>
        <!-- /.sidebar -->
      </aside>