import React from 'react'
import {useStyle} from './hooks'
import withContainer from './withContainer'
interface BETBProps {
    w : number, 
    h : number, 
    scale : number, 
    onClick : Function 
}
const BlockExpandToBottom : React.FC<BETBProps> = (props : BETBProps) => {
    const style = useStyle(props.w, props.h, props.scale)
    return (
        <div style = {style} onClick = {() => props.onClick()}>
        </div>
    )
}

export default withContainer(BlockExpandToBottom)