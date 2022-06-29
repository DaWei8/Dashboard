import { BsArrowUpRight, BsYoutube, BsGithub, BsApple } from 'react-icons/bs'
import { GrAmazon } from 'react-icons/gr'
import '../styles/lastTransaction.css'

const LastTransaction = () => {
    return (
        <div className="last-transaction">
            <div className="last-container">
                <div className="last-header" >
                    <div className="last-heading">
                        Last Transaction
                    </div>
                    <div className="see-more">
                        <div className="text-see-more">
                            See more
                        </div>
                        <div className="icon-see-more">
                            <BsArrowUpRight className='icon-see-more' />
                        </div>
                    </div>
                </div>
                <div className="transaction-list">
                    {
                        transactionList.map(
                            (transItem) => (
                                <TransactionListItem
                                    icon={transItem.logo}
                                    companyName={transItem.company}
                                    transactionTime={transItem.transactionTime}
                                    transactionType={transItem.transactionType}
                                    cost={transItem.cost}
                                />
                            ))
                    }
                </div>
            </div>
        </div>
    );
}

const transactionList = [
    {
        'logo': <GrAmazon className='company-icon' />,
        'company': 'Amazon',
        'transactionType': 'Shopping',
        'transactionTime': '4 mins',
        'cost': '$1,430',
    },
    {
        'logo': <BsYoutube className='company-icon' />,
        'company': 'Youtube Premium',
        'transactionType': 'Subscription',
        'transactionTime': '4 mins',
        'cost': '$330',
    },
    {
        'logo': <BsGithub className='company-icon' />,
        'company': 'Github',
        'transactionType': 'Development',
        'transactionTime': '4 mins',
        'cost': '$2,280',
    },
    {
        'logo': <BsApple className='company-icon' />,
        'company': 'Apple Music',
        'transactionType': 'Shopping',
        'transactionTime': '4 mins',
        'cost': '$63',
    },

]
const TransactionListItem = (props) => {
    return (
        <div className="transaction-item">
            <div className="transaction-container">
                <div className="company-icon">
                    {props.icon}
                </div>
                <div className="company">
                    <div className="company-name">
                        {props.companyName}
                    </div>
                    <div className="company-time">
                        {props.transactionTime}
                    </div>
                </div>
                <div className="transaction-type">
                    {props.transactionType}
                </div>
                <div className="transaction-cost">
                    {props.cost}
                </div>
            </div>
        </div>
    )
}

export default LastTransaction;