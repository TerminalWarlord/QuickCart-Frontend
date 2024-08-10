import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons';
export default function Header() {
    return <header className="mx-8 my-4">
        <nav className="main-nav">
            <ul className="flex justify-between list-none items-center">
                <li className="main-nav__item">
                    <div className="main-nav__brand">
                        <a href="/" className="mr-4 text-black text-4xl font-extrabold font-serif">QuickCart</a>
                    </div>
                </li>
                <li className="flex">
                    <a href="" className="no-underline text-black">Home</a>
                    <a href="" className="no-underline mx-4 text-black">Shop</a>
                    <a href="" className="no-underline mx-4 text-black">Our Story</a>
                    <a href="" className="no-underline mx-4 text-black">Contact Us</a>
                </li>
                <li className="flex items-center">
                    <a href="" className="no-underline mx-4 text-black"><FontAwesomeIcon icon={faMagnifyingGlass} /></a>
                    <a href="" className="no-underline mx-4 text-black"><FontAwesomeIcon icon={faHeart} /></a>
                    <a href="" className="no-underline mx-4 text-black"><FontAwesomeIcon icon={faCartShopping} /></a>
                    <a href="" className="no-underline ml-4 text-white main-nav__cta banner__cta rounded-lg bg-black py-2 px-5">Login</a>
                </li>
            </ul>
        </nav>
    </header>
}





