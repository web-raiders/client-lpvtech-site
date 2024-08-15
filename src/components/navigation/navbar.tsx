import { useState } from 'react'
import { IoMdClose } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';
import { MdKeyboardArrowDown } from 'react-icons/md';
import '@styles/navbar.css'
import { motion } from 'framer-motion';
import { Data } from '@utils/index';

const { navlist, subNav } = Data

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [openMenu, setOpenMenu] = useState(null)

    function handleToggle(type: string, name?: any){
        type === 'menu' ? setIsOpen(!isOpen) : setOpenMenu(openMenu === name ? null : name)
    }

  return (
        <nav className="_nav">
            <div className="_container">
                <div className="_flex_box">
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
                                    {subNav.includes(item.name) && <span><MdKeyboardArrowDown style={{ color: '#fff', paddingTop: '2px'}} size={'20px'} /></span>}
                                </div>
                            ))}
                            {/* <div className='_nav_btn'>Get a Quote</div> */}
                        </ul>
                        <span className='_icon' onClick={() => handleToggle('menu')}>
                        {
                            isOpen ? <IoMdClose size={'40px'} color='#fff' /> : <RxHamburgerMenu size={'40px'} color='#fff' />
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
                                        {subNav.includes(item.name) && <span className='icon_mobile'><MdKeyboardArrowDown size={'20px'} className='mt-[2px]' /></span>}
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
