import React from 'react'
import {Link} from 'react-router-dom'
import {Section} from '../../../../cmp/Container'
import Slider from '../../../../cmp/Slider'
import amazon from '../../../../assets/amazon.PNG'
import istore from '../../../../assets/istore.PNG'
import aliexpress from '../../../../assets/aliexpress.PNG'
import adidas from '../../../../assets/adidas.PNG'
import anastasia from '../../../../assets/anastasia.PNG'
import walmart from '../../../../assets/walmart.PNG'
export default function(){
   var data = [amazon,walmart,aliexpress,istore,adidas,anastasia]
   return(
      <>
      <Section csscontainer={{background:'#F7F7F7'}} >
         <div className="title">
            <h2>Tiendas populares</h2>
            <Link to='/markets' style={{color:'#33B4F2',textDecoration:'none', paddingBottom:'7px'}}>Ver más tiendas</Link>
         </div>
         <Slider data={data} css={{marginBottom:'48px'}}/>
      </Section>
      <style jsx>{`
         .title{
            display:flex;
            align-items: flex-end;
            justify-content: flex-start;
            margin-bottom: 16px;
            margin-top: 48px;
         }
         h2{
            color: #727272;
            margin-right: 12px;
            font-size: 36px;
         }
      `}</style>
      </>
   )
}