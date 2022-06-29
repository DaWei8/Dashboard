import '../styles/quickSend.css'

import { GrAdd } from 'react-icons/gr';
const recentProfiles = [
    {
        'id': 'person1',
        'picture': 'pic1'
    },
    {
        'id': 'person2',
        'picture': 'pic2'
    },
    {
        'id': 'person3',
        'picture': 'pic3'
    },
    {
        'id': 'person3',
        'picture': 'pic3'
    },

]
const QuickSend = () => {
    return (
        <div className="quick-send">
            <div className="container">
                <div className="title">
                    Quick Send
                </div>
                <div className="profiles">
                    {recentProfiles.map(
                        (person) => {
                            return (
                                <div className="profile">
                                    {/* <TbFaceId /> */}
                                </div>
                            )
                        })}
                    <div >
                        <GrAdd className="add-profile" />
                    </div>
                </div>
            </div>
        </div>
    )
}

 
export default QuickSend;