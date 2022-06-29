import { FiSearch } from "react-icons/fi";
import { IoNotificationsOutline } from 'react-icons/io';
import Image from 'react-random-image'

const Header = (props) => {
    return (
        <div className="header">
            <div className="container">
                <div className="heading" >
                    {props.heading}
                </div>
                <div className="right-icons">
                    <FiSearch />
                    <IoNotificationsOutline />
                    <div className="profile-picture">
                        <Image width={100} height={100} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;