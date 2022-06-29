import { FiMoreVertical } from 'react-icons/fi';

import '../styles/creditCard.css'
const CreditCard = () => {
    return (
        <div className="credit-card">
            <div className="container">
                <div className="credit-heading">
                    Card
                </div>
                <div className="card">
                    <div className="card-container">
                        <div className="card-container-head">
                            <div className="visa">
                                Visa
                            </div>
                            <div className="visa-back">
                                <div className="visa-icon"><FiMoreVertical className="visa-icon" /></div>
                            </div>
                        </div>
                        <div className="card-number">
                            4029      2435     .... 3290
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreditCard;