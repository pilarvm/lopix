import React, {useRef, useState, useEffect} from 'react'
import Container from '../../../cmp/Container'
import {Link} from 'react-router-dom'
import Button from '../../../cmp/Button'
import logo from '../../../assets/logo.svg'
import burguerIcon from '../../../assets/burguer.svg'
import calc from '../../../assets/calc.svg'
import Modal from '../../../cmp/Modal'
import {SignUp, LogIn} from '../../../cmp/Formulario'
import zIndexManager from '../../../other/zIndexManager'

export default function Nav(props){
    const nav = useRef(null)
    useEffect(()=>{
        let h = parseFloat(window.getComputedStyle(nav.current.parentElement.parentElement).height)
        props.getHeight(h)
    },[])
   const [showNav,setShowNav]=useState(false)
   const elNavLateral = useRef(null)
   var padd = 16
   function _handleClickBurguer(e){
       e.preventDefault()
       if(showNav){
           console.log('esconder')
           elNavLateral.current.style.setProperty('z-index',zIndexManager.close(elNavLateral.current))
           elNavLateral.current.style.setProperty('display','none')
           setShowNav(false)
       }else{
           console.log('mostrar')
           elNavLateral.current.style.setProperty('display','block')
           elNavLateral.current.style.setProperty('z-index',zIndexManager.open(elNavLateral.current))
           setShowNav(true)
       }
   }
   return (
       <Container  type='fluid'
                   csscontainer={{position: 'fixed', top: '0px',left:'0px',width: '100%',zIndex:'100',background:'white', boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.06)' }}
                   csscontent={{background:'white', paddingTop: `${padd}px`, paddingBottom:`${padd}px`}}>
           <nav ref={nav}>
               <Link to='/'>
                   <img src={logo} alt=""/>
               </Link>
               <UlFull/>
               <button onClick={_handleClickBurguer}>
                   <img src={burguerIcon} alt=""/>
               </button>
           </nav>
           <div className="containerNavLateral" ref={elNavLateral}>
               <Modal changeShow={setShowNav} show={showNav} position='flex-start'>
                   <UlMin/>
               </Modal>
           </div>
           <style jsx>{`
               .containerNavLateral{
                  
               }
               nav{
                   display: flex;
                   flex-wrap: wrap;
                   justify-content: space-between;
                   align-items: center;
                   width: 100%;
                   overflow:hidden;
                   position: relative;
               }
               nav>*{
                   flex-grow: 0;
                   flex-shrink: 1;
               }
               nav>button{
                   background: transparent;
                   border: none;
                   display: none;
                   width: 30px;
                   cursor: pointer;
               }
               nav>button img{
                   width: 100%;
                   height: 100%;
               }
               @media only screen and (max-width: 550px){
                   nav>button{
                       display: block;
                   }
                   li{
                       margin-left: 10px;
                   }
               }
           `}</style>
       </Container>
   )
}
function Ul(props){
   const elSignUp=useRef(null), elLogIn=useRef(null)
   const [showSignUp,setShowSignUp]=useState(false)
   const [showLogIn,setShowLogIn]=useState(false)
   function _handleClickSignUp(e){
       e.preventDefault()
       if(showSignUp){
           console.log('esconder')
           elSignUp.current.style.setProperty('z-index',zIndexManager.close(elSignUp.current))
           elSignUp.current.style.setProperty('display','none')
           setShowSignUp(false)
       }else{
           console.log('mostrar')
           elSignUp.current.style.setProperty('display','block')
           elSignUp.current.style.setProperty('z-index',zIndexManager.open(elSignUp.current))
           setShowSignUp(true)
       }
   }
   function _handleClickLogIn(e){
       e.preventDefault()
       if(showLogIn){
           console.log('esconder')
           elLogIn.current.style.setProperty('z-index',zIndexManager.close(elLogIn.current))
           elLogIn.current.style.setProperty('display','none')
           setShowLogIn(false)
       }else{
           console.log('mostrar')
           elLogIn.current.style.setProperty('display','block')
           elLogIn.current.style.setProperty('z-index',zIndexManager.open(elLogIn.current))
           setShowLogIn(true)
       }
   }
   return(
       <>
       <ul>
           <li>
               <a href="/#calculator">
                   <img src={calc} alt='icon of calculator'/>
               </a>
           </li>
           <li>
               <a href="/#login" onClick={_handleClickLogIn}>Inicia Sesión</a>
           </li>
           <li>
               <a href="#" onClick={_handleClickSignUp}>
                   <Button color="primary" style={{fontFamily: 'Montserrat'}}>
                       Registrate
                   </Button>
               </a>
           </li>
       </ul>
           <div className="containerSignUp" ref={elSignUp} style={props.css}>
               <Modal position='flex-end' show={showSignUp} changeShow={setShowSignUp}>
                   <SignUp css={{height:'100vh'}}/>
               </Modal>
           </div>
           <div className="containerLogIn" ref={elLogIn}>
               <Modal show={showLogIn} changeShow={setShowLogIn}>
                   <LogIn/>
               </Modal>
           </div>
       <style jsx>{`
           .containerSignUp,.containerLogIn{
               position: fixed;
               z-index: -1;
            }
           ul{
               flex-grow: 0;
               flex-shrink: 1;
               list-style:none;
               display: flex;
               align-items: center;
           }
           li{
               margin-left: 16px;
               flex-shrink: 1;
               flex-grow: 0;
               display: flex;
               justify-content: center;
               align-items: center;
           }
           a{
               text-decoration: none;
               text-align: center;
               color: black;
               font-family: Montserrat;
               height: 100%;
               display: flex;
               justify-content: center;
               align-items: center;
           }
           @media only screen and (max-width: 550px){
               ul{
                  margin: 30%;
                  display: ${props.screenFull?'none':'block'};
                   height: ${props.screenFull?'0':'100vh'};
               }
               li{
                   margin: 20px auto;
               }
           }
           @media only screen and (max-width: 450px){
               ul{
                  margin: 20%;
               }
           }
       `}</style>
       </>
   )
}
function UlFull(props){
   var css={

   }
   return(
       <>
           <Ul css={css} screenFull="true"/>
       </>
   )
}
function UlMin(props){
   var css={
       height:'100vh',
       width: '80%',
       background: 'white',
       color: 'black',
       alignItem: 'center',
       flexDirection: 'column',
       zIndex: '-1'
   }
   return(
       <>
           <Ul css={css} screenFull={false}/>
       </>
   )
}