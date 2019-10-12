import React from 'react'
import Slider from '../../../../cmp/Slider'
import {Section} from '../../../../cmp/Container'
import Visa from '../../../../assets/visa.png'
import Mastercard from '../../../../assets/mastercard.png'
import BBVA from '../../../../assets/bbva.png'
import BBVA2 from '../../../../assets/bbva2.png'
import BCP from '../../../../assets/bcp.png'
import Interbank from '../../../../assets/interbank.png'
export default function (){
   var data=[Visa,Mastercard,BBVA,BBVA2,BCP,Interbank,Visa,Mastercard,BBVA,BBVA2,BCP,Interbank]
   return(
      <>
         <Section csscontainer={{background:'white'}}>
            <h2>Y cómo puedo elegir mi pedido?</h2>
            <Slider data={data} css={{marginBottom:'48px'}} moveSize={120} containerImagesBg="white"/>
         </Section>
         <style jsx>{`
            h2{
               color: #727272;
               margin-right: 12px;
               font-size: 32px;
               text-align:center;
               margin-bottom: 16px;
               margin-top: 48px;
            }
         `}</style>
      </>
   )
}