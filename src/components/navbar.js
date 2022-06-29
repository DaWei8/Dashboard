import { BiWallet } from 'react-icons/bi';
import { VscPieChart } from "react-icons/vsc";
import { AiOutlineMessage, AiOutlineAppstore } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { MdLogout } from "react-icons/md";
import { TbCircleDashed } from 'react-icons/tb';
import '../styles/navbar.css'

const NavBar = () => {
    return (
        <div className="nav-bar">
            <div className="container">
                <Logo />
                <div className="menu">
                    <div className="menu-container">
                        <MenuItem selection={true} icon={<AiOutlineAppstore className="icon" />} iconName='Dashboard' />
                        <MenuItem selection={false} icon={<BiWallet className="icon" />} iconName='Wallet' />
                        <MenuItem selection={false} icon={<VscPieChart className="icon" />} iconName='Statistics' />
                        <MenuItem selection={false} icon={<AiOutlineMessage className="icon" />} iconName='Messages' />
                        <MenuItem selection={false} icon={<BsPerson className="icon" />} iconName='Profile' />
                    </div>
                </div>
                <Logout />

            </div>
        </div>
    );
}

const MenuItem = (props) => {
    return (
        <div className="menu-item">
            <div className="container">
                {props.selection === true ?
                    <div className="selection"></div>
                    : <div className="no-selection"></div>
                }

                <div className="icon">
                    {props.icon}
                </div>
                <div className="icon-name">
                    {props.iconName}
                </div>
            </div>

        </div>
    );
}

const Logo = () => {
    return (
        <div className="logo">
            <div className="logo-container">
                <div className="icon">
                    <TbCircleDashed className='logo-icon' />
                </div>
                <div className="logo-icon-name">
                    Olaya
                </div>
            </div>
        </div>
    );
}

const Logout = (props) => {
    return (
        <div className="logout">
            <div className="logout-container">
                {props.selection === true ?
                    <div className="selection"></div>
                    : <div className="no-selection"></div>
                }

                <div className="icon">
                    <MdLogout className='logout-icon' />
                </div>
                <div className="logout-icon-name">
                    Log out
                </div>
            </div>
        </div>
    );
}


export default NavBar;