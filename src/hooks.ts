import {useState, useEffect, CSSProperties} from 'react'

const delay : number = 20 
const scGap : number = 0.02 

export const useAnimatedScale = () => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    return {
        scale, 
        start() {
            if (!animated) {
                setAnimated(true)
                const interval = setInterval(() => {
                    setScale((prev : number) => {
                        if (prev > 1) {
                            setAnimated(false)
                            clearInterval(interval)
                            return 0 
                        }
                        return prev + scGap 
                    })
                }, delay)
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
        return () => {
            window.onresize = () => {

            }
        }
    })
    return {
        w, 
        h
    }
}

const maxScale = (
    scale : number,
    i : number,
    n : number
) : number => Math.max(0, scale - i / n)

const divideScale = (
    scale : number, 
    i : number, 
    n : number 
) : number => Math.min(1 / n, maxScale(scale, i, n)) * n 

export const useStyle = (w : number, h : number, scale : number) : CSSProperties => {
    const position = 'absolute'
    const size : number = Math.min(w, h) / 10 
    const sc1 : number = divideScale(scale, 0, 4)
    const sc2 : number = divideScale(scale, 1, 4)
    const sc3 : number = divideScale(scale, 2, 4)
    const sc4 : number = divideScale(scale, 3, 4)
    const width = `${size + (w / 2 - size) * (sc1 - sc3)}px`
    const height = `${size}px`
    const left = '0px'
    const top = `${h / 2 + (h / 2 - size) * (sc2 - sc4)}px`
    const background = '#1A237E'
    return {
        position, 
        width, 
        height, 
        left, 
        top,
        background 
    }
}