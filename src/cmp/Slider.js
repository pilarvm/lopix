import React from 'react'
import {Section} from './Container'
import Left from './../assets/left.PNG'
import Right from './../assets/right.PNG'
export default function(props){
   return(
      <>
         <Section type="full" csscontent={{display: 'flex',justifyContent:'space-between',alignItems: 'center',...props.css}}>
            <img src={Left} alt=""/>
            {props.data.map((item,i)=><Image src={item} key={i}/>) }
            <img src={Right} alt=""/>
         </Section>
         <style jsx>{`
            img{
               height: 50px;
               width: 25px;
            }
         `}</style>
      </>
   )
}
function Image(props){
   return(
      <>
         <img src={props.src} alt=""/>
         <style jsx>{`
            img{
               --size: ${props.size?props.size:'150px'};
               max-height: var(--size);
               width: var(--size);
            }
         `}</style>
      </>
   )
}