import React from 'react'
import {useAnimatedScale, useDimension} from './hooks'
const withContainer = (MainComponent : React.FC<any>) : React.FC<any> => {
    return () => {
        const {w, h} = useDimension()
        const {scale : onClick, start} = useAnimatedScale()
        const props = {
            w, 
            h, 
            onClick, 
            start
        }
        return (
           <MainComponent {...props}/>
        ) 
    }   
}

export default withContainer 
