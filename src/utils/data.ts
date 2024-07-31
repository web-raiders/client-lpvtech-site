import { 
    ArticleFour, 
    ArticleOne, 
    ArticleThree, 
    ArticleTwo, 
    ClientEight, 
    ClientFive, 
    ClientFour, 
    ClientOne, 
    ClientSeven, 
    ClientSix, 
    ClientThree, 
    ClientTwo, 
    CommercialImg, 
    OffsetImg, 
    ProjectFour, 
    ProjectSix,  
    PropertyImg, 
    SlideFive, 
    SlideFour,
    MemberOne,
    MemberTwo,
    MemberThree,
    MemberFour,
    MemberFive,
    MemberSix,
    MemberSeven,
    BlogTwo,
    BlogFour
} from "@assets/images"
import { LiaToolsSolid } from "react-icons/lia";
import { IoSettingsOutline } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";
import { FaRegFileAlt } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import { GoSun } from "react-icons/go";
import { CiLocationArrow1 } from "react-icons/ci";
import { PiCarBatteryLight } from "react-icons/pi";
import { GiBamboo } from "react-icons/gi";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { PiFolders } from "react-icons/pi";
import { PiBaseballHelmet } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { SlSupport } from "react-icons/sl";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { FaRegCalendarAlt, FaRegUser } from 'react-icons/fa';
import { IoWalletOutline } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";

export const navlist = [
    {
        name: 'About Us',
        path: '/about'
    },
    {
        name: 'Services',
        path: '/services',
        subMenu: [{
            name: 'Single Service',
            path: '#'
        }]
    },
    {
        name: 'Projects',
        path: '/projects'
    },
    {
        name: 'Contact Us',
        path: '/contact'
    },
    {
        name: 'Page',
        path: '/page',
        subMenu: [
            {
                name: 'Team',
                path: '/team'
            }, 
            {
                name: 'FAQ',
                path: '/faq'
            }, 
            {
                name: 'Blog',
                path: '/blog'
            }
        ]
    }
]

export const subNav = ['Service', 'Project', 'Page']

export const businessData = [
    {
        property: 'Residential',
        content: 'Mi elit accumsan malesuada suspendisse consectetur maecenas gravida conubia et quis aliquet',
        thumbnail: PropertyImg
    },
    {
        property: 'Commercial',
        content: 'Mi elit accumsan malesuada suspendisse consectetur maecenas gravida conubia et quis aliquet',
        thumbnail: CommercialImg
    },
    {
        property: 'Carbon Offset',
        content: 'Mi elit accumsan malesuada suspendisse consectetur maecenas gravida conubia et quis aliquet',
        thumbnail: OffsetImg
    },
]

export const servicesData = [
    {
        service: 'Solar Panel Installation',
        description: 'Venenatis quisque velit purus ex enim sagittis dictum iaculis maecenas est bibendum',
        icon: LiaToolsSolid
    },
    {
        service: 'Hybrid Back-up System',
        description: 'Venenatis quisque velit purus ex enim sagittis dictum iaculis maecenas est bibendum',
        icon: PiCarBatteryLight
    },
    {
        service: '30Kva Victron Solar Hybrid System',
        description: 'Venenatis quisque velit purus ex enim sagittis dictum iaculis maecenas est bibendum',
        icon: MdOutlineEnergySavingsLeaf
    },
    {
        service: 'Project Development',
        description: 'Venenatis quisque velit purus ex enim sagittis dictum iaculis maecenas est bibendum',
        icon: PiFolders
    },
    {
        service: 'Engineering, Procurement & Construction',
        description: 'Venenatis quisque velit purus ex enim sagittis dictum iaculis maecenas est bibendum',
        icon: PiBaseballHelmet
    },
    {
        service: 'Operation & Maintenance',
        description: 'Venenatis quisque velit purus ex enim sagittis dictum iaculis maecenas est bibendum',
        icon: IoSettingsOutline
    },
]

export const benefits = [
    {
        benefit: '100% renewable content from wind or solar energy.'
    },
    {
        benefit: 'Free electricity during nights or weekends.'
    },
    {
        benefit: 'Access to local solar energy without the need to install rooftop panels.'
    },
    {
        benefit: 'Resources to green up your life, including Tree Free Billing, carbon offsets and weekly summary emails.'
    },
]

export const qualifications = [
    {
        title: 'Green & Eco Tech',
        description: 'Venenatis quisque velit purus ex enim sagittis dictum iaculis maecenas est bibendum',
        icon: MdOutlineEnergySavingsLeaf
    },
    {
        title: 'Expert Team Development',
        description: 'Venenatis quisque velit purus ex enim sagittis dictum iaculis maecenas est bibendum',
        icon: SlBadge
    },
    {
        title: 'Green & Eco Tech',
        description: 'Venenatis quisque velit purus ex enim sagittis dictum iaculis maecenas est bibendum',
        icon: MdOutlineEnergySavingsLeaf
    },
    {
        title: '24/7 Support',
        description: 'Venenatis quisque velit purus ex enim sagittis dictum iaculis maecenas est bibendum',
        icon: SlSupport
    },
]

export const articles = [
    {
        thumbnail: ArticleOne,
        title: '24 Years of Renewable Energy, 24 Hours of Sustainability',
        date: 'October 8, 2021. No Comments',
        description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
        Aenean commodo ligula eget dolor. Aenean massa. 
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur`
    },
    {
        thumbnail: ArticleTwo,
        title: 'Why Choose a Renewable Energy Plan?',
        date: 'October 8, 2021. No Comments',
        description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
        Aenean commodo ligula eget dolor. Aenean massa. 
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur`
    },
    {
        thumbnail: ArticleThree,
        title: 'Get Closer to Carbon Neutral with Carbon Offsets',
        date: 'October 8, 2021. No Comments',
        description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
        Aenean commodo ligula eget dolor. Aenean massa. 
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur`
    },
    {
        thumbnail: ArticleFour,
        title: '5 Sustainable Activities for the Whole Family',
        date: 'October 8, 2021. No Comments',
        description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
        Aenean commodo ligula eget dolor. Aenean massa. 
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur`
    },
]

export const footer_company = [
    {
        link: 'About Us',
        path: '/about'
    },
    {
        link: 'Careers',
        path: '#'
    },
    {
        link: 'New & Article',
        path: '#'
    },
    {
        link: 'Legal Notice',
        path: '#'
    },
    {
        link: 'Partner',
        path: '#'
    }
]

export const footer_support = [
    {
        link: 'Help Center',
        path: '/help'
    },
    {
        link: 'Ticket',
        path: '#'
    },
    {
        link: 'Contact Us',
        path: '/contact'
    },
    {
        link: 'Community',
        path: '#'
    }
]

export const footer_banner_items = [
    {
        link: 'Terms of Service',
        path: '/terms'
    },
    {
        link: 'Privacy Policy',
        path: '/policy'
    },
]

export const clients = [
    {
        img: ClientOne
    },
    {
        img: ClientTwo
    },
    {
        img: ClientThree
    },
    {
        img: ClientFour
    },
    {
        img: ClientFive
    },
    {
        img: ClientSix
    },
    {
        img: ClientSeven
    },
    {
        img: ClientEight
    },
]

export const services = [
    {
        icon: LiaToolsSolid,
        title: 'Solar Panel Installation',
        description: 'Per class in quis ac lorem primis nostra dui lobortis facilisi semper.'
    },
    {
        icon: IoSettingsOutline,
        title: 'Solar Panel Maintenance',
        description: 'Per class in quis ac lorem primis nostra dui lobortis facilisi semper.'
    },
    {
        icon: TiMessages,
        title: 'Consultations',
        description: 'Per class in quis ac lorem primis nostra dui lobortis facilisi semper.'
    },
    {
        icon: FaRegFileAlt,
        title: 'Solar Panel Installation',
        description: 'Per class in quis ac lorem primis nostra dui lobortis facilisi semper.'
    },
]

export const solutions = [
    {
        icon: IoDiamondOutline,
        title: 'Quality and Reliability',
        description: 'Integer augue fames eget sollicitudin ullamcorper ultricies curae.'
    },
    {
        icon: IoSettingsOutline,
        title: 'Customized Solutions',
        description: 'Integer augue fames eget sollicitudin ullamcorper ultricies curae.'
    },
    {
        icon: GiBamboo,
        title: 'Environmental Impact',
        description: 'Integer augue fames eget sollicitudin ullamcorper ultricies curae.'
    },
]

export const projects = [
    {
        img: 'https://res.cloudinary.com/du52ca1q1/image/upload/v1721837799/vecteezy_texture-of-photovoltaic-panels-solar-panel-with-city-night_4877867_1_vq2ctp.jpg',
        title: 'Jakarta Solar Farms',
        description: 'Justo dictumst id semper taciti lacus tortor per si habitasse platea vestibulum.',
        icon: GoSun
    },
    {
        img: 'https://res.cloudinary.com/du52ca1q1/image/upload/v1721831838/vecteezy_ai-generated-solar-photovoltaic-power-plant_41861321_bsvlxi.jpg',
        title: 'Tangerang Wind Farms',
        description: 'Justo dictumst id semper taciti lacus tortor per si habitasse platea vestibulum.',
        icon: CiLocationArrow1
    },
    {
        img: 'https://res.cloudinary.com/du52ca1q1/image/upload/v1721831831/vecteezy_solar-panels-under-the-background-of-blue-sky-and-white_31691595_se3pzu.jpg',
        title: 'Dylan Family',
        description: 'Justo dictumst id semper taciti lacus tortor per si habitasse platea vestibulum.',
        icon: GoSun
    },
    {
        img: 'https://res.cloudinary.com/du52ca1q1/image/upload/v1721831284/vecteezy_ai-generated-engineer-at-work-wind-turbine-and-solar-panel_37056502_johhif.jpg',
        title: 'Bandung Solar Farm',
        description: 'Justo dictumst id semper taciti lacus tortor per si habitasse platea vestibulum.',
        icon: GoSun
    },
    {
        img: 'https://res.cloudinary.com/du52ca1q1/image/upload/v1721838656/vecteezy_engineer-in-charge-of-solar-panel-installation-the_16748295_1_bkp0bz.jpg',
        title: 'Lokamart Company',
        description: 'Justo dictumst id semper taciti lacus tortor per si habitasse platea vestibulum.',
        icon: GoSun
    },
    {
        img: 'https://res.cloudinary.com/du52ca1q1/image/upload/v1721842474/close-up-pv-cell-produced-manufacturing-warehouse-3d-illustration_1_hee0dm.jpg',
        title: 'Papua EV Systems',
        description: 'Justo dictumst id semper taciti lacus tortor per si habitasse platea vestibulum.',
        icon: PiCarBatteryLight
    },
]

export const members = [
    {
        img: MemberOne,
        name: 'Jojo Ogbe',
        // title: 'Founder'
    },
    {
        img: MemberTwo,
        name: 'Adebisi Adeniyi',
        // title: 'Co-Founder'
    },
    {
        img: MemberThree,
        name: 'Yinka Adelodun',
        // title: 'Marketing Manager'
    },
    {
        img: MemberFour,
        name: 'Mohammed Idachaba',
        // title: 'Operational Manager'
    },
    {
        img: MemberFive,
        name: 'Juwon Solarin',
        // title: 'Founder'
    },
    {
        img: MemberSix,
        name: 'Aniefiok Usoro',
        // title: 'Founder'
    },
    {
        img: MemberSeven,
        name: 'Success Bassey',
        // title: 'Founder'
    },
    // {
    //     img: MemberEight,
    //     name: 'Oscar Andrews',
    //     title: 'Founder'
    // },
]

export const teams_value = [
    {
        title: 'Collective Expertise',
        description: `Porttitor interdum augue 
        venenatis rhoncus himenaeos mattis magna 
        nostra adipiscing nam elementum.`
    },
    {
        title: 'Efficient Resource Utilization',
        description: `Porttitor interdum augue 
        venenatis rhoncus himenaeos mattis magna 
        nostra adipiscing nam elementum.`
    },
    {
        title: 'Collaborative Synergy',
        description: `Porttitor interdum augue 
        venenatis rhoncus himenaeos mattis magna 
        nostra adipiscing nam elementum.`
    },
]

export const aboutList = [
    {
        title: 'Solar Panel Solutions',
        description: 'Torquent ante molestie donec scelerisque efficitur cursus quisque.'
    },
    {
        title: 'Renewable Energy Consulting',
        description: 'Torquent ante molestie donec scelerisque efficitur cursus quisque.'
    },
    {
        title: 'Energy Efficiency Solutions',
        description: 'Torquent ante molestie donec scelerisque efficitur cursus quisque.'
    },
]

export const contactList = [
    {
        icon: SlLocationPin,
        title: 'Head Office',
        headingOne: 'Jalan Cempaka Wangi No 22',
        headingTwo: 'Jakarta - Indonesia',
    },
    {
        icon: MdOutlineEmail,
        title: 'Email Support',
        headingOne: 'support@yourdomain.tld',
        headingTwo: 'hello@yourdomain.tld',
    },
    {
        icon: FiPhone,
        title: `Let's Talk`,
        headingOne: 'Phone : +6221.2002.2012',
        headingTwo: 'Fax : +6221.2002.2013',
    },
]

export const sliders = [
    'https://res.cloudinary.com/du52ca1q1/image/upload/v1721825555/vecteezy_solar-panel-park-in-a-field-solar-energy-concept-generated_34040344_zygt5v.jpg',
    'https://res.cloudinary.com/du52ca1q1/image/upload/v1721828965/vecteezy_ai-generated-construction-worker-wearing-hardhat-planning_36209196_sccxkz.jpg',
    'https://res.cloudinary.com/du52ca1q1/image/upload/v1721828968/medium-shot-engineers-discussing-about-solar-pannels_ot4q55.jpg',
    'https://res.cloudinary.com/du52ca1q1/image/upload/v1721831829/vecteezy_solar-energy-solar-photovoltaic-panels-for-renewable_33880873_rzovni.jpg',
    'https://res.cloudinary.com/du52ca1q1/image/upload/v1721831288/vecteezy_ai-generated-creating-sustainable-energy-using-solar-panels_37056492_zpttl5.jpg'
]