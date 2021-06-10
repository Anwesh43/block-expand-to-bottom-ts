import React from 'react'
import {useAnimatedScale, useDimension} from './hooks'
const withContainer = (MainComponent : React.FC<any>) : React.FC<any> => {
    return () => {
        const {w, h} = useDimension()
        const {scale, start : onClick} = useAnimatedScale()
        const props = {
            w, 
            h, 
            onClick, 
            scale
        }
        return (
           <MainComponent {...props}/>
        ) 
    }   
}

export default withContainer 
