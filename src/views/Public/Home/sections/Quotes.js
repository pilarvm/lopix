import React from 'react'
import {Link} from 'react-router-dom'
import {Section} from '../../../../cmp/Container'
import Button from '../../../../cmp/Button'   
export default function(){
   var css ={
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around',
      paddingTop: '48px',
      paddingBottom: '48px'
   }
   var cssInputs, cssCalculator, cssInputResult
   if(parseFloat(window.getComputedStyle(document.body).width)<720){
      cssInputs={
         margin: 0,
         padding: '0 2.5px',
         width: '50%'
      }
      cssCalculator={
         flexWrap: 'wrap'
      }
      cssInputResult={
         width: '100%'
      }
   }
   return(
      <>
         <Section csscontent={css}>
            <div className="title" id="calculator">
               <h4>Cotiza aquí</h4>
               <span>¡Coloca los datos de tu paquete!</span>
            </div>
            <div className="calculator" style={cssCalculator}>
               <InputCalculator type="Peso" value="KG" css={cssInputs}/>
               <InputCalculator type="Precio" value="USD $" css={cssInputs}/>
               <span style={{fontSize: '36px', color:'#FF535A', alignSelf:'stretch', lineHeight:'90px'}}> = </span>
               <InputCalculator type={<TypeResult/>} value={<ValueResult/>} css={{paddin:'0 5px',...cssInputResult}}/>
            </div>
            <Button color='primary' round='5' size='large'>
               Registra tu pedido
            </Button>
            <div className="terms">
               <span>
                  Si tu compra excede los $200, el Estado impone aranceles, estos ya están contemplados en nuestras tarifas.
               </span>
               <br/>
               <span>
                  Para mayor información consultar <Link to="/terms" style={{display: 'inline-block'}}>términos y condiciones</Link>.
               </span>
            </div>
         </Section>
         <style jsx>{`
            .title{
               text-align: center;
               font-size: 36px;
            }
            .title span{
               font-size: 18px;
            }
            .terms{
               font-size: 12px;
               text-align: center;
            }
            .calculator{
               display: flex;
               width: 80%;
               justify-content: space-around;
               align-items: flex-start;
            }
            .title,.calculator,.terms{
               margin-top:16px;
               margin-bottom:16px;
            }
            @media all and (max-width: 720px) {
               .calculator span{
                  display: none;
               }
            }
         `}</style>
      </>
   )
}
const TypeResult = props=>{
   return(
      <div>
         <div>Flete:</div>
         <div>Aranceles:</div>
         <div>Distribución:</div>
         <div>Total estimado:</div>
      </div>
   )
}
const ValueResult = props=>{
   return(
      <>
      <div>
         <div>USD $ {props.flete ? props.flete : 0}</div>
         <div>USD $ ${props.aranceles ? props.aranceles : 0}</div>
         <div>USD $ ${props.distribucion ? props.distribucion : 0}</div>
         <div>USD $ ${props.total ? props.total : 0}</div>
      </div>
      <style jsx>{`
         div{
            font-weight: 600;
         }
      `}</style>
      </>
   )
}
const InputCalculator = props=>{
   return(
      <>
         <label htmlFor="" style={props.css}>
            <input type="number"/>
            <div className="info">
               <div className="info__type">
                  {props.type}
               </div>
               <div className="info__value">
                  {props.value}
               </div>
            </div>
         </label>
         <style jsx>{`
            label{
               margin: 16px;
            }
            label>*{
               width: 100%;
            }
            input{
               border-radius: 10px;
               border: 4px solid #FF535A;
               padding: 15px 20px;
               font-size: 24px;
               text-align: center;
            }
            .info{
               display: flex;
               justify-content: stretch;
            }
            .info>*{
               flex-grow: 1;
            }
            .info__type{
               text-align: left;
            }
            .info__value{
               text-align: right;
               font-weight: 600;
            }
         `}</style>
      </>
   )
}