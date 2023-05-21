import React from 'react'
import Styles from '@styles/ProductItem.module.scss'
import { ProductI } from '@interfaces/product'
import Image from 'next/image'

const ProductItem = ({ name, image, price}: ProductI) => {
    return (
        <div className={`${Styles['product-item']}`}
        >
            <figure className={Styles['image-container']}>
                <Image 
                    src={image} 
                    alt={name} 
                    className={Styles.image}
                    priority
                />
            </figure>
            <div className={Styles["product-info"]} >
                <span className={Styles['product-name']}>{name}</span>
                <span className={Styles['product-price']}>$ {price} MXN</span>
                <button className={Styles['product-button']}>Comprar ahora</button>
            </div>
        </div>
    )
}

export default ProductItem