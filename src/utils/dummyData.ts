import image1 from '@assets/1.jpg'
import image2 from '@assets/2.jpg'
import image3 from '@assets/3.jpg'
import image4 from '@assets/4.jpg'
import image5 from '@assets/5.jpg'
import image6 from '@assets/6.jpg'
import image7 from '@assets/7.jpg'
import image8 from '@assets/8.jpg'
import image9 from '@assets/9.jpg'
import image10 from '@assets/10.jpg'
import { ProductI } from '@/interfaces/product'



export const products: ProductI[] = [
    {
        id: 1,
        name: 'Camara',
        image: image1,
        price: 40000
    },
    {
        id: 2,
        name: 'No se que es',
        image: image2,
        price: 50
    },
    {
        id: 3,
        name: 'Iphones',
        image: image3,
        price: 50000
    },
    {
        id: 4,
        name: 'Crema',
        image: image4,
        price: 700
    },
    {
        id: 5,
        name: 'Otra camara',
        image: image5,
        price: 40000
    },
    {
        id: 6,
        name: 'Helado',
        image: image6,
        price: 30
    },
    {
        id: 7,
        name: 'Coca-cola',
        image: image7,
        price: 15
    },
    {
        id: 8,
        name: 'Puro apple',
        image:image8,
        price: 70000
    },
    {
        id: 9,
        name: 'Leche',
        image: image9,
        price: 50
    },
    {
        id: 10,
        name: 'Lentes',
        image: image10,
        price: 10000
    },
];