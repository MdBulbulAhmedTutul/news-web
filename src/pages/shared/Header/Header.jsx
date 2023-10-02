import logo from '../../../assets/logo.png';
import moment from 'moment';
const Header = () => {
    return (
        <div>
            <div>
                <img className='' src={logo} alt="" />
                <p>Journalism Without Fear or Favour</p>
                <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
            </div>
        </div>
    );
};

export default Header;