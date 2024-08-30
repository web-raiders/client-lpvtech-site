import { useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';
import { MdKeyboardArrowDown } from 'react-icons/md';
import '@styles/navbar.css'
import { motion } from 'framer-motion';
import { Data } from '@utils/index';
import { Logo } from "@assets/images";

const { navlist, subNav } = Data

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [openMenu, setOpenMenu] = useState(null)
    const [showNavbar, setShowNavbar] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    const threshold = 200

    function handleToggle(type: string, name?: any){
        type === 'menu' ? setIsOpen(!isOpen) : setOpenMenu(openMenu === name ? null : name)
    }

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > threshold) {
            setShowNavbar(false)
        } else if (currentScrollY < lastScrollY || currentScrollY <= threshold) {
            setShowNavbar(true)
        }

        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        // setShowNavbar(true);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, [lastScrollY])

  return (
        <nav className={`_nav ${showNavbar ? 'visible' : 'hidden'}`}>
            <div className="_container">
                <div className="_flex_box">
                    <div className='_logo'>
                        <a href='/'><img src={Logo} alt='logo' width={"100"} height={"100"} /></a>
                    </div>
                    <div className="_nav_menu">
                        <ul className="_nav_list">
                            {navlist.map((item) => (
                                <div key={item?.name} onClick={() => handleToggle('subMenu', item?.name)}>
                                    <li className={'_nav_list_item'}>
                                    <a href={item.path}>{item.name}</a>
                                    {
                                        item.subMenu && (
                                        <ul className="_dropdown_list">
                                            {item.subMenu.map((link) => (
                                                <li key={link?.name} className={'_dropdown_list_item'}><a href={link.path}>{link.name}</a></li>
                                            ))}
                                        </ul>
                                        )
                                    }
                                    </li>
                                    {subNav.includes(item.name) && <span><MdKeyboardArrowDown style={{ color:'#12263A', paddingTop: '2px'}} size={'20px'}  /></span>}
                                </div>
                            ))}
                            {/* <div className='_nav_btn'>Get a Quote</div> */}
                        </ul>
                        <span className='_icon' onClick={() => handleToggle('menu')}>
                        {
                            isOpen ? <IoMdClose size={'40px'} color='#12263A' /> : <RxHamburgerMenu size={'40px'} color='#12263A' />
                        }
                        </span>
                        {/** Mobile Version */}
                        {isOpen && 
                        <motion.ul 
                        className='_nav_list_mobile' 
                        // variants={variants} 
                        animate={{ opacity: 1, y: 25 }}
                        initial={{ opacity: 0, y: 5 }}
                        >
                            {navlist.map((item) => (
                                    <div key={item?.name} className='inline-flex' onClick={() => handleToggle('subMenu', item?.name)}>
                                        <motion.li 
                                        className={'_nav_list_item_mobile'}
                                        >
                                        <motion.a href={item.path}>{item.name}</motion.a>
                                        {
                                            openMenu === item?.name && item.subMenu && (
                                            <motion.ul 
                                            className='_sub_list_mobile'
                                            animate={{ opacity: 1, y: 0 }}
                                            initial={{ opacity: 0, y: 15 }}
                                            >
                                                {item.subMenu.map((link, i) => (
                                                    <li key={i} className='_sub_list_item_mobile'>
                                                        <a href={link.path}>{link.name}</a>
                                                    </li>
                                                ))}
                                            </motion.ul>
                                            )
                                        }
                                        {subNav.includes(item.name) && <span className='icon_mobile'><MdKeyboardArrowDown size={'20px'} color='#12263A' className='mt-[2px]' /></span>}
                                        </motion.li>
                                    </div>
                                ))}
                                {/* <div className='_nav_btn'>Get a Quote</div> */}
                            </motion.ul>
                        }
                    </div>
                </div>
            </div>
        </nav>
  )
}

export default Navbar;
