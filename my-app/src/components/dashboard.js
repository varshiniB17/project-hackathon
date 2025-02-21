import React from 'react'
import dashboard from './components/dashboard';


const Dashboard = () => {
 const [stats, setStats] = useState({ totalUsers: 0, activeUsers: 0, inactiveUsers: 0, failedLogins: 0, securityStatus: "Loading...", });
 
 useEffect(() => {
     fetch("http://localhost:5000/stats")
         .then(response => response.json())
         .then(data => setStats(data))
         .catch(error => console.error("Error fetching stats:", error));
 }, []);
 
 return (
     <div className="container mt-4">
         <h1 className="text-center">Secure Dashboard</h1>
         <div className="row text-center">
             <div className="col-md-3">
                 <div className="card p-3 text-primary">
                     <FaUsers size={40} />
                     <h3>Total Users</h3>
                     <p>{stats.totalUsers}</p>
                 </div>
             </div>
             <div className="col-md-3">
                 <div className="card p-3 text-success">
                     <FaUserCheck size={40} />
                     <h3>Active Users</h3>
                     <p>{stats.activeUsers}</p>
                 </div>
             </div>
             <div className="col-md-3">
                 <div className="card p-3 text-danger">
                     <FaUserTimes size={40} />
                     <h3>Inactive Users</h3>
                     <p>{stats.inactiveUsers}</p>
                 </div>
             </div>
             <div className="col-md-3">
                 <div className="card p-3 text-warning">
                     <FaExclamationTriangle size={40} />
                     <h3>Failed Logins</h3>
                     <p>{stats.failedLogins}</p>
                 </div>
             </div>
         </div>
         <div className="card p-3 mt-4 text-center text-info">
             <FaShieldAlt size={50} />
             <h2>Security Status</h2>
             <p>{stats.securityStatus}</p>
         </div>
     </div>
 );
 
 };
 
 export default Dashboard;