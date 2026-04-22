import logo from '../../assets/images/logo/logoNavbar.png';
import logoTheme from '../../assets/images/logo/logo.png'
import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const socials = [
    { icon: FaInstagram, name: 'Instagram' },
    { icon: FaTwitter, name: 'Twitter' },
    { icon: FaYoutube, name: 'YouTube' },
];

const Footer = () => {
    const { theme } = useContext(ThemeContext)
    const isLight = theme === 'light'

    return (
        <footer className='flex justify-between md:justify-around items-center bottom-0 items-center p-4 dark:bg-white bg-black transition-all duration-700 ease-in-out left-0 w-full shadow-[0_-4px_6px_rgba(0,0,0,0.1)]'>
            <div className='flex flex-col md:flex-row gap-4'>
                <img src={isLight ? logoTheme : logo} alt="Logo" />
                <div className='font-hand text-m flex flex-col md:flex-row gap-1 text-zinc-500 dark:text-zinc-500'>
                    <p >© 2023 dot.cards text task.</p>
                    <p>All rights reserved</p>
                </div>
            </div>
            <div className='flex gap-4 self-center md:self-auto'>
                {socials.map((social, index) => {
                    const Icon = social.icon;

                    return (
                        <div className='bg-white/10 dark:bg-black/10 p-3 rounded-full hover:scale-110 transition-transform duration-400'>
                            <Icon
                                key={index}
                                size={20}
                                className='text-white dark:text-black cursor-pointer '
                            />
                        </div>
                    )
                })}
            </div>
        </footer>
    )
};

export default Footer;