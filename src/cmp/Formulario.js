import React from 'react'
import {Link} from 'react-router-dom'
import {Section} from './Container'
import btnGoogle from '../assets/button-google.png'
import btnFacebook from '../assets/button-facebook.png'
import Button from './Button'
function Formulario(props){
   return(
      <>
         <form action="" method="post" style={props.css}>

      
         </form>
      </>
   )
}
export function Input(props){
   return(
      <>
         <div className="container--label">
            <input type={props.type?props.type:'text'} required name={props.name}/>
            <label htmlFor={props.name}>
               <span className="content-name">{props.text}</span>
            </label>
         </div>
         <style jsx>{`
            .container--label{
               position: relative;
               height: 50px;
               --colorLess: #8F8F8F;
               --colorOk: white;
               box-sizing: border-box;
               margin-top: 12px;
            }
            input{
               width:100%;
               height: 100%;
               border:none;
               outline: none;
               font-size: 16px;
               padding-top: 20px;
               color: var(--colorOk);
               background: transparent;
            }
            label{
               position: absolute;
               bottom:0px;
               left: 0;
               width: 100%;
               height: 100%;
               pointer-events: none;
               border-bottom: 1px solid var(--colorLess);
               overflow:hidden;
            }
            label::after{
               content: '';
               position: absolute;
               left: 0;
               bottom: -1px;
               height: 100%;
               width: 100%;
               border-bottom:3px solid var(--colorLess);
               transform: translateX(-100%);
               transition: transform .3s ease;
            }
            .content-name{
               position: absolute;
               bottom: 5px;
               left: 0px;
               transition: all .3s ease;
               color: var(--colorLess);
            }
            input:focus + label .content-name,
            input:valid + label .content-name{
               transform: translateY(-150%);
               font-size: 14px;
               color: var(--colorOk);
            }
            input:focus + label::after,
            input:valid + label::after{
               transform: translateX(0%);
               border-color: var(--colorOk);
            }
         `}</style>
      </>
   )
}
function Checkbox(props){
   return(
      <>
         <div className="container--checkbox">
            <span className="box-visible"></span>
            <label className="text" htmlFor={props.name}>{props.children}</label>
            <input type="checkbox" name={props.name} id=""/>
         </div>
         <style jsx>{`
            .container--checkbox{
               display: flex; 
               justify-content: stretch;
               align-items: center;
               margin-top: 16px;
               margin-bottom: 12px;
            }
            span{
               display: inline-block;
               width: 24px;
               height: 24px;
               border-radius: 2px;
               box-shadow: inset 2px 2px #FF535A, inset -2px -2px #FF535A;
               cursor: pointer;
               flex-shrink: 0;
            }
            input{
               display: none;
            }
            label{
               font-size: 14px;
               margin-left: 12px;
               color: white;
            }
         `}</style>
      </>
   )
}
export function SignUp(){
   return(
      <>
         <form action="" method="POST">
            <Section csscontent={{paddingLeft: '18px', paddingRight: '18px'}}>
               <h2>Hola Usuario</h2>
               <Input text="Nombre"/>
               <Input text="Apellidos"/>
               <Input text="Correo Electrónico"/>
               <Input text="Contraseña" type="password"/>
               <Input text="Confirmar contraseña" type="password"/>
               <Checkbox>
                  <span>He leído y acepto los <Link to="/terms" style={{color:'white'}}>Términos</Link> y <Link to="/conditions" style={{color:'white'}}>Condiciones de Uso</Link> de esta web</span>
               </Checkbox>
               <Button color="primary" round="true" type='submit'>
                  CREAR CUENTA
               </Button>
               <div className="buttons-socials">
                  <img src={btnGoogle} alt="" style={{cursor: 'pointer'}}/>
                  <img src={btnFacebook} alt="" style={{cursor: 'pointer'}}/>
               </div>
            </Section>
         </form>
         <style jsx>{`
            form{
               background: #1F1F1F;
               padding: 16px; 
               text-align: center;
               width: 350px;
            }
            h2{
               color: white;
               text-align: center;
            }
            .buttons-socials{
               margin:10px;
            }
            .buttons-socials>*{
               margin:5px;
            }
         `}</style>
      </>
   )
}
export function LogIn(){
   return(
      <>
      </>
   )
}