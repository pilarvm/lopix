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
   var data = [amazon,walmart,aliexpress,istore,adidas,anastasia,amazon,walmart,aliexpress,istore,adidas,anastasia,amazon,walmart,aliexpress,istore,adidas,anastasia]
   return(
      <>
      <Section csscontainer={{background:'#F7F7F7',paddingTop: '48px',paddingBottom:'48px'}} >
         <div className="title">
            <h2>Tiendas populares</h2>
            {window.screen.width<720?(
               <Link to='/markets' style={{color:'#33B4F2',textDecoration:'none', paddingBottom:'6px'}} className="seeMoreMarkets">Ver más tiendas</Link>
               ):(
                  <Link to='/markets' style={{color:'#33B4F2',textDecoration:'none'}} className="seeMoreMarkets">Ver más tiendas</Link>
            )}
         </div>
         <Slider data={data} css={{marginBottom:'48px',marginTop: '32px'}} moveSize={150}/>
      </Section>
      <style jsx>{`
         .title{
            display:flex;
            align-items: flex-end;
            justify-content: flex-start;
            margin-bottom: 32px;
            margin-top: 48px;
         }
         h2{
            color: #727272;
            margin-right: 12px;
            font-size: 36px;
         }
         @media all and (max-width: 720px) {
            .title{
               margin-bottom: 24px;
               margin-top: 32px;
            }
            h2{
               font-size: 24px;
            }
         }
      `}</style>
      <style>{`
         @media all and (max-width: 720px) {
            .seeMoreMarkets{
               paddingBottom: 0;
            }
         }
      `}</style>
      </>
   )
}