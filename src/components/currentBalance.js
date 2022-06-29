import { FiMoreVertical } from 'react-icons/fi';
import '../styles/currentBalance.css'

const CurrentBalance = () => {
    return (
        <div className="current-balance">
            <div className="container">
                <div className="current-heading">
                    <div className="title">
                        Current Balance
                    </div>
                    <div>
                        <FiMoreVertical className="current-icon" />
                    </div>
                </div>
                <div className="balance">
                    $2,850.75
                </div>
            </div>
        </div>
    )
}

export default CurrentBalance;