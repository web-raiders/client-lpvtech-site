import { CommercialImg, OffsetImg, PropertyImg } from "@assets/images"

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
        name: 'Service',
        path: '/service',
        subMenu: [{name: 'Single Service'}]
    },
    {
        name: 'Project',
        path: '/project',
        subMenu: [{name: 'Single Project'}]
    },
    {
        name: 'Contact Us',
        path: '/contact'
    },
    {
        name: 'Page',
        path: '/page',
        subMenu: [
            {name: 'Team'}, 
            {name: 'FAQ'}, 
            {name: 'Blog'}
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