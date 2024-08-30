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
} from "@assets/images"
import { LiaToolsSolid } from "react-icons/lia";
import { IoSettingsOutline } from "react-icons/io5";
import { IoDiamondOutline } from "react-icons/io5";
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
import type { CollectionEntry } from 'astro:content';
import { sanityClient } from "sanity:client";
import * as Queries from './queries'

const servicesList: CollectionEntry<'services'>[] = await sanityClient.fetch(Queries.services)
const projectsList: CollectionEntry<'projects'>[] = await sanityClient.fetch(Queries.projects)

export const navlist = servicesList.length < 1 && projectsList.length < 1 ? [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'About Us',
        path: '/about'
    },
    {
        name: 'Contact Us',
        path: '/contact'
    },
    {
        name: 'More',
        path: '#',
        subMenu: [
            // {
            //     name: 'Team',
            //     path: '/team'
            // }, 
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
] : servicesList.length < 1 ? [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'About Us',
        path: '/about'
    },
    {
        name: 'Projects',
        path: '/projects',
        subMenu: projectsList.slice(0, 5).map(item => {
            return {
                name: item.name,
                path: `/projects/${item.slug}`
            }
        })
    },
    {
        name: 'Contact Us',
        path: '/contact'
    },
    {
        name: 'More',
        path: '#',
        subMenu: [
            // {
            //     name: 'Team',
            //     path: '/team'
            // }, 
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
] : projectsList.length < 1 ? [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'About Us',
        path: '/about'
    },
    {
        name: 'Services',
        path: '/services',
        subMenu: servicesList.slice(0, 5).map(item => {
            return {
                name: item.title,
                path: `/services/${item.slug}`
            }
        })
    },
    {
        name: 'Contact Us',
        path: '/contact'
    },
    {
        name: 'More',
        path: '#',
        subMenu: [
            // {
            //     name: 'Team',
            //     path: '/team'
            // }, 
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
] : [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'About Us',
        path: '/about'
    },
    {
        name: 'Services',
        path: '/services',
        subMenu: servicesList.slice(0, 5).map(item => {
            return {
                name: item.title,
                path: `/services/${item.slug}`
            }
        })
    },
    {
        name: 'Projects',
        path: '/projects',
        subMenu: projectsList.slice(0, 5).map(item => {
            return {
                name: item.name,
                path: `/projects/${item.slug}`
            }
        })
    },
    {
        name: 'Contact Us',
        path: '/contact'
    },
    {
        name: 'More',
        path: '#',
        subMenu: [
            // {
            //     name: 'Team',
            //     path: '/team'
            // }, 
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

export const subNav = ['Services', 'Projects', 'More']

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
        description: 'Professional setup of solar panels on residential, commercial, or industrial properties to harness solar energy for electricity.',
        icon: LiaToolsSolid
    },
    {
        service: 'Hybrid Back-up System',
        description: 'Integration of a backup power system combining solar energy with traditional power sources to ensure continuous electricity supply during outages.',
        icon: PiCarBatteryLight
    },
    {
        service: '30Kva Victron Solar Hybrid System',
        description: 'A robust 30-kilovolt-ampere (kVA) hybrid energy solution by Victron, combining solar power, batteries, and possibly other power sources for efficient energy management.',
        icon: MdOutlineEnergySavingsLeaf
    },
    {
        service: 'Project Development',
        description: 'Comprehensive planning and coordination of projects from initial concept through to completion, ensuring all phases are executed effectively.',
        icon: PiFolders
    },
    {
        service: 'Engineering, Procurement & Construction',
        description: 'End-to-end services covering the engineering design, procurement of materials and equipment, and the construction and commissioning of projects.',
        icon: PiBaseballHelmet
    },
    {
        service: 'Operation & Maintenance',
        description: 'Ongoing services to ensure optimal performance and longevity of systems, including regular inspections, repairs, and updates as needed.',
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
        title: 'Reliability and Affordability',
        description: 'Our solution ensures uninterrupted power and cost-effective solar energy, making clean energy accessible and reducing costs.',
        icon: MdOutlineEnergySavingsLeaf
    },
    {
        title: 'Local Manufacturing',
        description: 'Our services promote job creation and economic development, ensuring faster delivery and reduced logistical costs.',
        icon: SlBadge
    },
    {
        title: 'Partnerships for Large-scale Projects',
        description: 'We collaborate with various entities to implement large-scale solar projects, addressing energy poverty and fostering community development.',
        icon: MdOutlineEnergySavingsLeaf
    },
    {
        title: 'Customization',
        description: 'LPV Technologies offers tailored solar solutions for hybrid, off-grid, and grid-tied systems, ensuring optimal performance.',
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
export const footer_company = servicesList.length > 0 && projectsList.length > 0 ? 
[
    {
        link: 'About Us',
        path: '/about'
    },
    {
        link: 'Blog',
        path: '/blog'
    },
    {
        link: 'Projects',
        path: '/projects'
    },
    {
        link: 'Services',
        path: '/services'
    }
] : servicesList?.length > 0 && projectsList.length <= 0 ? [
    {
        link: 'About Us',
        path: '/about'
    },
    {
        link: 'Blog',
        path: '/blog'
    },
    {
        link: 'Services',
        path: '/services'
    }
] : servicesList?.length <= 0 && projectsList.length > 0 ? [
    {
        link: 'About Us',
        path: '/about'
    },
    {
        link: 'Blog',
        path: '/blog'
    },
    {
        link: 'Projects',
        path: '/projects'
    }
] : [
    {
        link: 'About Us',
        path: '/about'
    },
    {
        link: 'Blog',
        path: '/blog'
    },
    {
        link: 'Services',
        path: '/services'
    } ,
    {
        link: 'Projects',
        path: '/projects'
    } 
]

export const footer_support = [
    {
        link: 'Contact Us',
        path: '/contact'
    },
    {
        link: 'FAQs',
        path: '/faq'
    },
    {
        link: 'Reach Us',
        path: 'mailto:support@lpvtechnologies.com'
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
        icon: IoSettingsOutline,
        title: 'Assembly Plant',
        description: 'LPV Technologies operates a state-of-the-art 100MW solar panel assembly plant.'
    },
    {
        icon: IoSettingsOutline,
        title: 'Flexible and Customised Solar Solutions',
        description: 'LPV Technologies offers tailored solutions to meet the unique needs of each solar project.'
    },
    {
        icon: IoSettingsOutline,
        title: 'Solar Centre of Excellence',
        description: 'We provide specialized training in solar project deployments, supported by ongoing research and development to advance solar technologies.'
    },
    {
        icon: IoSettingsOutline,
        title: 'Professional Installation',
        description: 'Our certified installation technicians are dedicated to delivering flawless execution on every project, with a focus on safety, precision, and efficiency.'
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
        title: 'Outright Purchase',
        description: 'This option allows businesses/clients to capitalize on long-term savings and take advantage of immediate asset ownership.'
    },
    {
        title: 'Lease-to-Own Model',
        description: 'Excellent choice for businesses looking to spread energy cost over time while eventually taking full ownership of the system.'
    },
    {
        title: 'Energy as a Service (EaaS)',
        description: 'We provide clients with continuous power through long term contracts. A subscription fee is paid for power consumption with zero upfront cost.'
    },
    {
        title: 'Solar as a Service (SaaS)',
        description: 'This model allows clients to pay only for consumed solar energy, eliminating upfront costs and maintenance concerns. We manage solar power generation, enabling clients to focus on their core business.'
    },
]

export const contactList = [
    {
        icon: SlLocationPin,
        title: 'Head Office',
        headingOne: '19B, Ilabere Avenue, Off Oyinkan Abayomi Street, Ikoyi',
        headingTwo: 'Lagos Nigeria',
    },
    {
        icon: SlLocationPin,
        title: 'Factory Address',
        headingOne: 'Plot 1-5 Isolo Road, Ikotun Egbe',
        headingTwo: 'Lagos, Nigeria',
    },
    {
        icon: SlLocationPin,
        title: 'Abuja Office',
        headingOne: '9, Thaba Tseka Street, Off Adetokunbo Ademola, Wuse 2',
        headingTwo: 'FCT, Nigeria',
    },
    {
        icon: MdOutlineEmail,
        title: 'Email',
        headingOne: 'info@lpvtechnolgies.com'
    },
    {
        icon: FiPhone,
        title: `Let's Talk`,
        headingOne: 'Phone : 09062892870',
        headingTwo: 'Alt : 09062948514',
    },
]

export const sliders = [
    './artifacts/solar-panel-park-field.jpg',
    './artifacts/construction-worker-wearing-hardhat.jpg',
    './artifacts/engineers-discussing-about-solar.jpg',
    './artifacts/solar-energy-photovoltaic-panels.jpg',
    './artifacts/creating-sustainable-energy-using-solar.jpg'
]