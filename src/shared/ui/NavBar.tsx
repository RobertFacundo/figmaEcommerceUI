import { Link } from "react-router-dom";
import logo from '../../assets/images/logo/logoNavbar.png';
import logoTheme from '../../assets/images/logo/logo.png'
import { IoBagOutline } from "react-icons/io5";
import { LuPaintbrush } from "react-icons/lu";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { useAppSelector } from "../redux/store/hooks";

const NavBar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const isLight = theme === 'light'

     const cartCount = useAppSelector((state) =>
    state.cart.items.reduce((acc, item) => acc + item.quantity, 0)
  );

    return (
        <nav className="flex justify-between items-center p-4 bg-white dark:bg-black shadow-[0_4px_6px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_6px_rgba(255, 255, 255, 0.1)] transition-all duration-700 ease-in-out">
            <Link to='/'>
                <img src={isLight ? logo : logoTheme} alt="SUN CO" className="w-24" />
            </Link>

            <Link to='/cart' className="relative flex items-center text-xl border-2 border-black/60 dark:border-white/60 px-6 py-1 rounded-lg dark:text-white hover-button">
                <IoBagOutline className="mr-2" />
                View cart
                {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                        {cartCount}
                    </span>
                )}
            </Link>
            <button onClick={toggleTheme} className="cursor-pointer hover-button">
                <LuPaintbrush size={25} className={isLight ? 'text-black' : 'text-white'} />
            </button>
        </nav>
    )
};

export default NavBar;