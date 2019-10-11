import React from 'react'

export default function Button(props){
    var backgroundColor,color,padding,fontSize,borderRadius,borderColor,backgroundHover
    switch(props.color){
        case 'primary':
            backgroundColor='rgba(255, 83, 90, 1)'
            color='white'
            backgroundHover='transparent'
            break
        default:
            backgroundColor='white'
            borderColor='black'
            color=borderColor
    }
    switch(props.size){
        case 'small':
            padding='6px 14px'
            fontSize='.75rem'
            break
        case 'medium':
            padding='8px 20px'
            fontSize='.85rem'
            break
        case 'large':
            padding='12px 26px'
            fontSize='1rem'
            break
        default:
            padding='8px 20px'
            fontSize='.85rem'
    }
    if(props.round){
        if(props.round>0){
            borderRadius=`${props.round}px`
        }else{
            //  It's in function of props.size (padding)
            borderRadius=`${2*parseFloat(padding.split(' ')[0].split('px')[0])}px`
        }
    }
    if(backgroundColor==='white'){
        color='black'
    }
    return(
        <>
            <button className='buttonCustom' {...props} type={props.type?props.type:'button'}>
                {props.children}
            </button>
            <style jsx>{`
                .buttonCustom{
                    box-sizing: border-box;
                    background: ${backgroundColor};
                    color: ${color};
                    font-size: ${fontSize};
                    border: 1px solid ${borderColor?borderColor:backgroundColor};
                    border-radius: ${borderRadius?borderRadius:''};
                    padding: ${padding?padding:'10px 15px'};
                    cursor: pointer;
                    transition: all .3s;
                    font-weight: 500;
                }
                .buttonCustom:hover{
                    background: ${backgroundHover?backgroundHover:(backgroundColor==='white'?'black':(color?color:'black'))};
                    color: ${backgroundColor};
                    border: 1px solid  ${backgroundColor};
                }
            `}</style>
        </>
    )
}