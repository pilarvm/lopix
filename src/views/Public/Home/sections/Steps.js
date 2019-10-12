import React from 'react'
import {Section} from '../../../../cmp/Container'
import cart from '../../../../assets/cart.svg'
import box from '../../../../assets/box.svg'
import bgWave from '../../../../assets/bg-wave.jpg'
export default function(){
   return(
      <>
         <Section type='content' csscontainer={{backgroundImage:`url(${bgWave})`,backgroundSize:'cover',color:'white'}}
                                 csscontent={{  display:'flex',
                                                flexDirection:'column',
                                                alignItems:'stretch',
                                                justifyContent:'space-around', paddingTop: '32px',paddingBottom:'32px'}}>
               <div className='title'>
                     <h2 style={{marginBottom:'10px',fontSize:'36px'}}>¿Cómo traer tus compras?</h2>
                     <span style={{fontSize:'24px'}}>son 3 sencillos pasos</span>
               </div>
               <div className='steps'>
                     {/* cards */}
                     <div className='card shop'>
                        <img src={cart} style={{width:'100px',height:'100px', borderRadius:'50%'}} />
                        <h4>¡Compra Online!</h4>
                        <span>Te daremos una dirección de entrega, ¡Ingresa!</span>
                     </div>
                     <div className='card confirm'>
                        <img src={cart} style={{width:'100px',height:'100px', borderRadius:'50%'}} />
                        <h4>¡Confirma tu compra!</h4>
                        <span>Envianos el comprobante de pago de tu pedido</span>
                     </div>
                     <div className='card ready'>
                        <img src={box} style={{width:'100px',height:'100px',borderRadius:'50%'}} />
                        <h4>Recibe tu compra</h4>
                        <span>¡Listo! lo llevamos a tu casa podrás ver el estado de tu compra en tiempo real!</span>
                     </div>
               </div>
         </Section>
         <style jsx>{`
            .title,.steps{
               text-align:center;
               margin-top:16px;
               margin-bottom:16px;
            }
            .card{
               margin:auto;
               width: 19em;
               grid-row:1/7;
               display: inline-grid;
               grid-template-rows: repeat(6,1fr);
               grid-template-colums: 1fr 2fr;
               grid-gap:10px;
               font-size:16px;
            }
            .card>*{
               text-align: center;
               margin: auto;
               grid-column: 2/3;
            }
            .card>h4{
               font-size: 24px;
               grid-row:1/3;
            }
            .card>span{
               grid-row:3/7;
            }
            .card>img{
               grid-column: 1/2;
               grid-row: 1/7;
            }
            .steps{
               display: grid;
               grid-template-columns:repeat(3,1fr);
               grid-template-rows:repeat(6,1fr);
            }
            
            @media only screen and (max-width: 1260px) {
               .card>*{
                  grid-column: 1/3;
               }
               .card>h4{
                  grid-row:4/5;
               }
               .card>span{
                  grid-row:5/7;
               }
               .card>img{
                  grid-column: 1/3;
                  grid-row: 1/4;
               }
           }
          @media only screen and (max-width: 1080px) {
            .steps{
               grid-template-columns:repeat(2,1fr);
            }
            .card{
               grid-column: 1/2;
               grid-row:1/4;
            }
            .card:nth-child(1){
               grid-column: 1/2;
            }
            .card:nth-child(2){
               grid-column: 2/3;
            }
            .card:nth-child(3){
               grid-row:4/7;
               grid-column: 1/3;
            }
         }
         @media only screen and (max-width: 720px) {
            .steps{
               grid-template-columns:1fr;
               font-size:10px;
            }
            .card:nth-child(1){
               grid-row:1/3;
               grid-column:1/2;
            }
            .card:nth-child(2){
               grid-row:3/5;
               grid-column:1/2;
            }
            .card:nth-child(3){
               grid-row:5/7;
            }
            .card{
               grid-column:1/2;
            }
         }
         `}</style>
      </>
   )
}