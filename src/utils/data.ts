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
    PropertyImg, 
    MemberOne,
    MemberTwo,
    MemberThree,
    MemberFour,
    MemberFive,
    MemberSix,
    MemberSeven,
    ProjectThree,
    SlideFive,
    ProjectFour
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

export const navlist = [
    {
        name: 'Homepage',
        path: '/'
    },
    {
        name: 'About Us',
        path: '/about'
    },
    {
        name: 'Services',
        path: '/services',
        subMenu: [{
            name: 'Single Service',
            path: '/service'
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
        description: 'We Ensure that our services are eco-friendly and sustainable for the environment.',
        icon: MdOutlineEnergySavingsLeaf
    },
    {
        title: 'Expert Team Development',
        description: 'We have a team of experts who are dedicated to providing the best services to our clients.',
        icon: SlBadge
    },
    {
        title: 'Quality Assurance',
        description: 'We ensure that our services are of the highest quality and meet the needs of our clients.',
        icon: MdOutlineEnergySavingsLeaf
    },
    {
        title: '24/7 Support',
        description: 'We provide 24/7 support to our clients to ensure that they have the best experience with our services.',
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
        description: 'We assist with the installation of solar panels for residential and commercial buildings.'
    },
    {
        icon: IoSettingsOutline,
        title: 'Solar Panel Maintenance',
        description: 'We provide maintenance services for solar panels to ensure they are in good condition.'
    },
    {
        icon: TiMessages,
        title: 'Consultations',
        description: 'We offer consultations to help you make informed decisions about solar panel installation.'
    },
    {
        icon: FaRegFileAlt,
        title: 'Solar Panel Installation',
        description: 'We assist with the installation of solar panels for residential and commercial buildings.'
    },
]

export const solutions = [
    {
        icon: IoDiamondOutline,
        title: 'Quality and Reliability',
        description: 'Our services are of the highest quality and are reliable for our clients.'
    },
    {
        icon: IoSettingsOutline,
        title: 'Customized Solutions',
        description: 'We provide customized solutions to meet the unique needs of our clients.'
    },
    {
        icon: GiBamboo,
        title: 'Environmental Impact',
        description: 'We ensure that our services have a positive impact on the environment.'
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
        description: 'We have a team of experts who are dedicated to providing the best services to our clients. Our team has years of experience in the renewable energy industry and is committed to helping our clients achieve their goals.'
    },
    {
        title: 'Efficient Resource Utilization',
        description: 'We ensure that our resources are used efficiently to provide the best services to our clients. Our team is dedicated to providing the best services to our clients and is committed to helping them achieve their goals.'
    },
    {
        title: 'Collaborative Synergy',
        description: 'We believe in the power of collaboration and work together to achieve our goals. Our team is committed to providing the best services to our clients and is dedicated to helping them achieve their goals.'
    },
]

export const aboutList = [
    {
        title: 'Solar Panel Solutions',
        description: 'Our solar panel solutions are designed to meet the unique needs of our clients.'
    },
    {
        title: 'Renewable Energy Consulting',
        description: 'We provide consulting services to help you make informed decisions about renewable energy.'
    },
    {
        title: 'Energy Efficiency Solutions',
        description: 'Our energy efficiency solutions are designed to help you save money on your energy bills.'
    },
]

export const contactList = [
    {
        icon: SlLocationPin,
        title: 'Head Office',
        headingOne: '19b Ilabere Ave, Ikoyi',
        headingTwo: 'Lagos Nigeria',
    },
    {
        icon: MdOutlineEmail,
        title: 'Email Support',
        headingOne: 'info@lpvtech.com',
        headingTwo: 'support@lpvtech.com',
    },
    {
        icon: FiPhone,
        title: `Let's Talk`,
        headingOne: 'Phone : +2348495833349',
        headingTwo: 'Alt : +2348394855581',
    },
]

export const sliders = [
    'https://res.cloudinary.com/du52ca1q1/image/upload/v1721825555/vecteezy_solar-panel-park-in-a-field-solar-energy-concept-generated_34040344_zygt5v.jpg',
    'https://res.cloudinary.com/du52ca1q1/image/upload/v1721828965/vecteezy_ai-generated-construction-worker-wearing-hardhat-planning_36209196_sccxkz.jpg',
    'https://res.cloudinary.com/du52ca1q1/image/upload/v1721828968/medium-shot-engineers-discussing-about-solar-pannels_ot4q55.jpg',
    'https://res.cloudinary.com/du52ca1q1/image/upload/v1721831829/vecteezy_solar-energy-solar-photovoltaic-panels-for-renewable_33880873_rzovni.jpg',
    'https://res.cloudinary.com/du52ca1q1/image/upload/v1721831288/vecteezy_ai-generated-creating-sustainable-energy-using-solar-panels_37056492_zpttl5.jpg'
]

export const serviceDetails = [
    {
        header: 'Residential',
        content: 'Hendrerit cubilia vel ultrices arcu blandit montes vehicula nec natoque',
        img: ProjectThree
    },
    {
        header: 'Residential',
        content: 'Hendrerit cubilia vel ultrices arcu blandit montes vehicula nec natoque',
        img: ProjectFour
    },
    {
        header: 'Residential',
        content: 'Hendrerit cubilia vel ultrices arcu blandit montes vehicula nec natoque',
        img: SlideFive
    }
]

export const serviceFeatures = [
    {
        feature: 'Integer mus per natoque'
    },
    {
        feature: 'Integer mus per natoque'
    },
    {
        feature: 'Duis hendrerit ipsum'
    },
    {
        feature: 'Duis hendrerit ipsum'
    },
    {
        feature: 'Vulputate pharetra taciti'
    },
    {
        feature: 'Vulputate pharetra taciti'
    },
    {
        feature: 'Auctor est eros'
    },
    {
        feature: 'Auctor est eros'
    }
]