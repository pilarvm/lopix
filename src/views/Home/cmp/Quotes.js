import React from 'react'
import {Link} from 'react-router-dom'
import {Section} from '../../../cmp/Container'
import Button from '../../../cmp/Button'   
export default function(){
   var css ={
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around'
   }
   return(
      <>
         <Section type='normal' csscontent={css}>
            <div className="title">
               <h4>Cotiza aquí</h4>
               <span>¡Coloca los datos de tu paquete!</span>
            </div>
            <div className="calculator">
               <InputCalculator/>
               <InputCalculator/>
               <span style={{fontSize: '36px', color:'#FF535A'}}> = </span>
               <InputCalculator/>
            </div>
            <Button>
               Registra tu pedido
            </Button>
            <div className="terms">
               <span>
                  Si tu compra excede los $200, el Estado impone aranceles, estos ya están contemplados en nuestras tarifas.
               </span>
               <br/>
               <span>
                  Para mayor información consultar <Link to="/terms"/>
               </span>
            </div>
         </Section>
         <style jsx>{`
            .calculator{
               display: flex;
               width: 80%;
               justify-content: space-around;
               align-items: center;
            }
            .title,.calculator,.terms{
               margin-top:16px;
               margin-bottom:16px;
            }
         `}</style>
      </>
   )
}
const InputCalculator = props=>{
   return(
      <>
         <input />
         <label htmlFor="" className="info">
            <div className="info__type">
               {props.type}
            </div>
            <div className="info__value">
               {props.value}
            </div>
         </label>
         <style jsx>{`
            input{
               border-radius: 10px;
               border: 4px solid #FF535A;
               padding: 15px 20px;
            }
         `}</style>
      </>
   )
}