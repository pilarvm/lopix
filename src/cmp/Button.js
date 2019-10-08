import React from 'react'
//  export default 
export function ButtonDark(props){
    var css = props.css ? props.css : {}
    switch(props.color){
        case 'primary':
            css['backgroundColor']='rgba(255, 83, 90, 1)'
            css['color']='white'
            break
        default:
            css['backgroundColor']='rgba(255, 255, 255, 1)'
    }
    switch(props.size){
        case 'small':
            css['padding']='6px 14px'
            css['fontSize']='.75rem'
            break
        case 'medium':
            css['padding']='8px 20px'
            css['fontSize']='.85rem'
            break
        case 'large':
            css['padding']='12px 26px'
            css['fontSize']='1rem'
            break
        default:
            css['padding']='8px 20px'
            css['fontSize']='.85rem'
    }
    if(props.round){
        //  It's in function of props.size (padding)
        css['borderRadius']=`${2*parseFloat(css['padding'].split(' ')[0].split('px')[0])}px`
    }
    return(
        <>
            <Button css={css}>
                {props.children}
            </Button>
        </>
    )
}
export function Button(props){
    var bgHover = props.css['backgroundColor'].split(')')[0].split(',')
    bgHover.pop()
    bgHover.push('0.6)')
    bgHover = bgHover.join(',')
    return(
        <>
            <button className='buttonCustom' style={props.css} {...props}>
                {props.children}
            </button>
            <style>{`
                .buttonCustom{
                    border:none;
                    padding: 10px 15px;
                    cursor: pointer;
                    transition: .3s;
                }
                .buttonCustom:hover{
                    background: ${bgHover} !important;
                }
            `}</style>
        </>
    )
}