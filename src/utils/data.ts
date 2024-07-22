import { ArticleFour, ArticleOne, ArticleThree, ArticleTwo, CommercialImg, OffsetImg, PropertyImg } from "@assets/images"

export const navlist = [
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
        subMenu: [{
            name: 'Single Service',
            path: '#'
        }]
    },
    {
        name: 'Projects',
        path: '/projects',
        subMenu: [{
            name: 'Single Project',
            path: '#'
        }]
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
        description: 'Venenatis quisque velit purus ex enim sagittis dictum iaculis maecenas est bibendum'
    },
    {
        service: 'Hybrid Back-up System',
        description: 'Venenatis quisque velit purus ex enim sagittis dictum iaculis maecenas est bibendum'
    },
    {
        service: '30Kva Victron Solar Hybrid System',
        description: 'Venenatis quisque velit purus ex enim sagittis dictum iaculis maecenas est bibendum'
    },
    {
        service: 'Project Development',
        description: 'Venenatis quisque velit purus ex enim sagittis dictum iaculis maecenas est bibendum'
    },
    {
        service: 'Engineering, Procurement & Construction',
        description: 'Venenatis quisque velit purus ex enim sagittis dictum iaculis maecenas est bibendum'
    },
    {
        service: 'Operation & Maintenance',
        description: 'Venenatis quisque velit purus ex enim sagittis dictum iaculis maecenas est bibendum'
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
        description: 'Venenatis quisque velit purus ex enim sagittis dictum iaculis maecenas est bibendum'
    },
    {
        title: 'Expert Team Development',
        description: 'Venenatis quisque velit purus ex enim sagittis dictum iaculis maecenas est bibendum'
    },
    {
        title: '24/7 Support',
        description: 'Venenatis quisque velit purus ex enim sagittis dictum iaculis maecenas est bibendum'
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
        link: 'About Us',
        path: '/about' 
    },
    {
        link: 'Services',
        path: '/services' 
    },
    {
        link: 'Contact Us',
        path: '/contact' 
    },
    {
        link: 'Terms of Service',
        path: '/terms'
    },
    {
        link: 'Privacy Policy',
        path: '/policy'
    },
]