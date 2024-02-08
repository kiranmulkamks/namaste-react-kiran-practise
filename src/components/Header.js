import { HEADER_IMG_LOGO } from "../constants/constants";

const headerCss = {
    display:"flex",
    margin: "20px"
};

const Header = () => {
    return (
        <div className="header-component-div" style ={headerCss}>
            <div className="header-imglogo-div">
            <img className="header-img" src={HEADER_IMG_LOGO}></img>
            </div>
            <div className="header-navItems">
                <ul className='header-navItems-ul'>
                    <li>About US</li>
                    <li>Contact US</li>
                    <li>Catalogue</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>

    );
}

export default Header;