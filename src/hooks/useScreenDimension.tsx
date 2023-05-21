'use client'
import { useEffect, useState } from 'react'

const useScreenDimension = () => {
    const [width, setWidth] = useState<number>(0)
    const [height, setHeight] = useState<number>(0)

    if (typeof window !== "undefined"){
        useEffect(() => {
            setHeight(window.innerHeight)
            setWidth(window.innerWidth)
        },[window.innerHeight, window.innerWidth])
    }

    return (
        {width, height}
    )
}

export default useScreenDimension