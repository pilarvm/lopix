import React from 'react'
import Slider from '../../../../cmp/Slider'
import {Section} from '../../../../cmp/Container'
import Visa from '../../../../assets/visa.png'
import Mastercard from '../../../../assets/mastercard.png'
export default function (){
   var data=[Visa,Mastercard,Visa,Mastercard,Visa,Mastercard]
   return(
      <>
         <Section csscontainer={{background:'#F7F7F7'}}>
            <h2>Y cómo puedo elegir mi pedido?</h2>
            <Slider data={data}  css={{marginBottom:'48px'}}/>
         </Section>
         <style jsx>{`
            h2{
               color: #727272;
               margin-right: 12px;
               font-size: 28px;
               text-align:center;
               margin-bottom: 16px;
               margin-top: 48px;
            }
         `}</style>
      </>
   )
}