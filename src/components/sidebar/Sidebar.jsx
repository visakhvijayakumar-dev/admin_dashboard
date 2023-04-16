import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import NotesOutlinedIcon from '@mui/icons-material/NotesOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top">
            <span className="logo">admidashboard</span>
        </div>
        <hr/>
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li><DashboardIcon className="icon"/><span>Dashboard</span></li>
                <p className="title">LIST</p>
                <li><PeopleAltOutlinedIcon className="icon"/><span>Users</span></li>
                <li><CategoryOutlinedIcon className="icon"/><span>Product</span></li>
                <li><CreditCardOutlinedIcon className="icon"/><span>Orders</span></li>
                <li><LocalShippingOutlinedIcon className="icon"/><span>Delivery</span></li>
                <p className="title">USEFUL</p>
                <li><QueryStatsOutlinedIcon className="icon"/><span>Stats</span></li>
                <li><NotificationsActiveOutlinedIcon className="icon"/><span>Notification</span></li>
                <p className="title">SERVICE</p>
                <li><HealthAndSafetyOutlinedIcon className="icon"/><span>System Health</span></li>
                <li><NotesOutlinedIcon className="icon"/><span>Logs</span></li>
                <li><SettingsOutlinedIcon className="icon"/><span>Settings</span></li>
                <p className="title">USER</p>
                <li><AssignmentIndOutlinedIcon className="icon"/><span>Profile</span></li>
                <li><LogoutOutlinedIcon className="icon"/><span>Logout</span></li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>
    </div>
  )
}

export default Sidebar