
const initialState = {
    products: [
        {
            id: 1,
            title: 'Premium Glasses 1',
            titleURL: 'premium_glasses_1',
            image: 'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1645194764/glass/product/product-1_apqcbu.jpg',
            description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.',
            category: 'monofocales',
            price:'100Bs'
        },
        {
            id: 2,
            title: 'Premium Glasses 2',
            titleURL: 'premium_glasses_2',
            image: 'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1645194764/glass/product/product-2_o0f7dy.jpg',
            description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.',
            category: 'monofocales',
            price:'100Bs'
        },
        {
            id: 3,
            title: 'Premium Glasses 3',
            titleURL: 'premium_glasses_3',
            image: 'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1645194764/glass/product/product-3_lz8t9u.jpg',
            description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.',
            category: 'monofocales',
            price:'100Bs'
        },
        {
            id: 4,
            title: 'Premium Glasses 4',
            titleURL: 'premium_glasses_4',
            image: 'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1645194764/glass/product/product-4_sw5s2s.jpg',
            description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.',
            category: 'monofocales',
            price:'100Bs'
        },
        {
            id: 5,
            title: 'Premium Glasses 5',
            titleURL: 'premium_glasses_5',
            image: 'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1645194764/glass/product/product-5_rcnvwj.jpg',
            description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.',
            category: 'monofocales',
            price:'100Bs'
        },
        {
            id: 6,
            title: 'Premium Glasses 6',
            titleURL: 'premium_glasses_6',
            image: 'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1645194764/glass/product/product-6_y6fz4w.jpg',
            description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.',
            category: 'monofocales',
            price:'100Bs'
        },
        {
            id: 7,
            title: 'Premium Glasses 7',
            titleURL: 'premium_glasses_7',
            image: 'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1645194765/glass/product/product-7_xug5dm.jpg',
            description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.',
            category: 'monofocales',
            price:'100Bs'
        },
        {
            id: 8,
            title: 'Premium Glasses 8',
            titleURL: 'premium_glasses_8',
            image: 'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1645194765/glass/product/product-8_sufeyd.jpg',
            description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.',
            category: 'monofocales',
            price:'100Bs'
        },
        {
            id: 9,
            title: 'Premium Glasses 9',
            titleURL: 'premium_glasses_9',
            image: 'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1645194765/glass/product/product-9_rr0jto.jpg',
            description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.',
            category: 'monofocales',
            price:'100Bs'
        },
        {
            id: 10,
            title: 'Premium Glasses 10',
            titleURL: 'premium_glasses_10',
            image: 'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1645640953/glass/product/5910_si4kct.jpg',
            description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.',
            category: 'bifocales',
            price:'100Bs'
        },
        {
            id: 11,
            title: 'Premium Glasses 11',
            titleURL: 'premium_glasses_11',
            image: 'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1645640965/glass/product/depositphotos_10521654-stock-photo-black-nerd-glasses-with-white_zp2div.webp',
            description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.',
            category: 'bifocales',
            price:'100Bs'
        },
        {
            id: 12,
            title: 'Premium Glasses 12',
            titleURL: 'premium_glasses_12',
            image: 'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1645640978/glass/product/pjg205612_knlwix.jpg',
            description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.',
            category: 'bifocales',
            price:'100Bs'
        },
        
    ],
    activeProduct: null
}

export const productReducer = ( state = initialState, action: any ) => {
    switch ( action.type ) {
        default:
            return state;
    }
}