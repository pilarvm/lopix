import React, {useRef, useEffect, useState} from 'react'

export default function(props){
   const elDiv = useRef(null)
   const [stateShow,changeShow]=useState(false)
   var time = 300
   function _handleClick(e){
      if(e.target == elDiv.current){
         hide()
      }
   }
   function show(){
      elDiv.current.style.setProperty('opacity','1')
      if(props.position=='flex-end'){
         elDiv.current.firstElementChild.style.setProperty('transfrom','translateX(0)')
      }
      setTimeout(function(){
         elDiv.current.style.setProperty('z-index','9999')
         elDiv.current.style.setProperty('display','flex')
      },time)
      props.changeShow(true)
   }
   function hide(){
      elDiv.current.style.setProperty('opacity','0')
      if(props.position=='flex-end'){
         elDiv.current.firstElementChild.style.setProperty('transfrom','translateX(-100%)')
      }
         setTimeout(function(){
            elDiv.current.style.setProperty('z-index','-1')
            elDiv.current.style.setProperty('display','none')
         },time)
      props.changeShow(false)
   }
   useEffect(()=>{
      if(props.show){
         show()
         changeShow(true)
      }else{
         hide()
         changeShow(false)
      }
   })
   return(
      <>
         <div onClick={_handleClick} ref={elDiv}>
            {props.children}
         </div>
         <style jsx>{`
            div{
               position: fixed;
               top:0;
               left:0;
               width: 100vw;
               height: 100vh;
               display: flex;
               justify-content: ${props.position?props.position:'center'};
               align-items: center;
               // z-index: 9999;
               // opacity: 1;
               background: rgba(0,0,0,.4);
               transition: all ${time/1000}s;
            }
         `}</style>
      </>
   )
}