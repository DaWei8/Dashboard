import LastTransaction from '../components/lastTransaction';
import '../styles/dashboard.css'
import { GrNotification } from 'react-icons/gr';
import { FiSearch } from 'react-icons/fi';
import Statistics from '../components/statistics';
import CreditCard from '../components/creditCard';
import CurrentBalance from '../components/currentBalance';
import QuickSend from '../components/quickSend';
import Upgrade from '../components/Upgrade';



const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="dash-container">
                <div className="dash-header">
                    <div className="heading">
                        Dashboard
                    </div>
                    <div className="header-icons">
                        <FiSearch className='header-icon' />
                        <GrNotification className='header-icon' />
                        <div className="header-profile"></div>
                    </div>
                </div>
                <div className="dashboard-content">
                    <div className="mid-content">
                        <div className="mid-container">
                            <Statistics />
                            <LastTransaction />
                        </div>
                    </div>
                    <div className="right-content">
                        <div className="right-container">
                            <CreditCard />
                            <CurrentBalance />
                            <QuickSend />
                            <Upgrade />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Dashboard