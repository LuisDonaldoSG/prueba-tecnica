
import Carousel from '@/components/Carousel'
import '@styles/globals.css'
import { products } from '@utils/dummyData'
import ProductItem from '@components/ProductItem'

export default function Home() {
    return (
        <main>
            <Carousel>
                {
                    products.map(item => (
                        <ProductItem
                            key={item.id}
                            image={item.image}
                            name={item.name}
                            price={item.price}
                        />
                    ))
                }
            </Carousel>
        </main>
    )
}
