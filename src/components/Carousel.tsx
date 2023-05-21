
"use client"
import React, { useEffect, useState } from 'react';
import Styles from '@styles/Carousel.module.scss'
import { CarouselI } from '@interfaces/props';
import useScreenDimension from '@hooks/useScreenDimension';

const Carousel = ({children}: CarouselI) => {
    const [currentProduct, setCurrentProduct] = useState<number>(0);
    const [touchStart, setTouchStart] = useState<null | number>(null)
    const [touchEnd, setTouchEnd] = useState<null | number>(null)
    const [divider, setDivider] = useState<number>(5)
    const minSwipeDistance = 50 
    const {width} =  useScreenDimension()

    useEffect(() => {
        setInterval(() =>{
            handleNext()
        },3000)
    },[])

    useEffect(() => {
        if (width > 1250) {
            setDivider(5)
            setCurrentProduct(0)
        }
        if (width <= 1250) {
            setDivider(4)
            setCurrentProduct(0)
        }
        if (width <= 844) {
            setDivider(2)
            setCurrentProduct(0)
        }
    },[width])

    const handlePrev = (): void => {
        setCurrentProduct((prevItem) =>
            prevItem === 0 ? children.length - 1 : prevItem - 1
        );
    };

    const handleNext = (): void => {
        setCurrentProduct((prevItem) =>
            prevItem === children.length - 1 ? 0 : prevItem + 1
        );
    };

    
    const onTouchStart = (event: React.TouchEvent<HTMLDivElement>): void => {
      setTouchEnd(null)
      setTouchStart(event.targetTouches[0].clientX)
    }
    
    const onTouchMove = (event: React.TouchEvent<HTMLDivElement>): void => setTouchEnd(event.targetTouches[0].clientX)
    
    const onTouchEnd = ():void => {
      if (!touchStart || !touchEnd) return
      const distance = touchStart - touchEnd
      const isLeftSwipe = distance > minSwipeDistance
      const isRightSwipe = distance < -minSwipeDistance
      if (isLeftSwipe) handleNext()
      if (isRightSwipe) handlePrev()
    }

    

    return (
        <main className={Styles['carousel-container']}>
            <button className={Styles['carousel-navigation-button']} onClick={handlePrev}>
                {'<'}
            </button>
            <div
                className={Styles.carousel}
                onTouchStart={onTouchStart} 
                onTouchMove={onTouchMove} 
                onTouchEnd={onTouchEnd}
            >
                <div className={Styles["carousel-items"]} style={{transform: `translateX(-${currentProduct * ((100 / divider))}%)`}}>
                    {children}
                </div>
                <div className={Styles["carousel-progress"]}>
                    {
                        children.map((_, index) => (
                            <div
                                key={index}
                                className={`${Styles["progress-dot"]} ${index === currentProduct && Styles.active}`}
                            />
                        ))
                    }
                </div>
            </div>
            <button className={Styles["carousel-navigation-button"]} onClick={handleNext}>
                {'>'}
            </button>
        </main>
    );
};

export default Carousel;
