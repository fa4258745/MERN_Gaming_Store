import { useNavigate } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
import "../css/dashboard.css";

const AdminDashboard = () => {
  const adminName = localStorage.getItem("adminid");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/home");
  };

  return (

    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <h1 className="dashboard-title">
           GameZone Admin <span className="dashboard-subtitle">| Control Center</span>
        </h1>
      </header>

      {/* Welcome Bar */}
      <div className="welcome-bar">
        <h5>
          Welcome, <span className="admin-name">{adminName}</span>
        </h5>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>

      {/* Main Layout */}
      <div className="dashboard-main">
        {/* Sidebar */}
        <aside className="sidebar">
          <h3>Admin Menu</h3>
          <ul>
            <Link to="uploadproduct" className="adminmenu"><li>Create New User</li></Link>\
                                 <Link  to="customerorder">
                              <li>   Customer Orders</li>
                              </Link>
            <Link to="/uploadproduct" className="adminmenu"><li>Assign Task</li></Link>
            <Link to="/uploadproduct" className="adminmenu"><li>Task Detail</li></Link>
            <Link to="/uploadproduct" className="adminmenu"><li>Change Password</li></Link>
            <li className="adminmenu">Reports</li>
            <li className="adminmenu" onClick={handleLogout} style={{ color: "red" }}>Logout</li>
          </ul>
        </aside>

        {/* Content Area */}
        <section className="main-content">
          <h2> Dashboard Content</h2>
          <p>Manage users, assign tasks, and view reports in a stylish gaming-themed admin panel.</p>
          <div className="dash-main-container" id="admindata">
            <div className="dash-box">
              <div id="admindata">
                <Outlet />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;