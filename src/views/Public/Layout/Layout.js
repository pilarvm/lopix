import React, {useRef, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import Button from '../../../cmp/Button'
import logo from '../../../assets/logo.svg'
import burguerIcon from '../../../assets/burguer.svg'
import calc from '../../../assets/calc.svg'
import Container, {Section} from '../../../cmp/Container'
import {SignUp} from '../../../cmp/Formulario'
import footer from '../../../assets/footer.PNG'

export default function Layout(props){
    return (
        <>
            <Container type='full'
                    csscontent={{
                        minHeight: '100vh',
                        display: 'flex',
                        justifyContent: 'stretch',
                        alignItems: 'stretch',
                        flexDirection: 'column'}}>
                <Nav/>
                <main>
                    {props.children}
                </main>
                <Footer/>
            </Container>
            <style jsx>{`
                main{
                    flex-grow: 1;
                    height: 100%;
                }
            `}</style>
        </>
    )
}

function Nav(){
    const [showForm,setShowForm]=useState(false)
    const ulRef = useRef(null), burguerRef = useRef(null), navRef=useRef(null), elSignUp=useRef(null)
    var padd = 16, equalUlClone, showMenu = false
    useEffect(()=>{
        var ul = ulRef.current, burguer = burguerRef.current, nav = navRef.current
        var ulClone = ul.cloneNode(true)
            ulClone.style.setProperty('transition','height .4s, opacity .4s ease-in-out')
            ulClone.style.setProperty('z-index','100')
            ulClone.style.setProperty('position','fixed')
            ulClone.style.setProperty('display','flex')
            ulClone.style.setProperty('opacity','0')
            ulClone.style.setProperty('overflow','hidden')
            ulClone.style.setProperty('top','100px')
            ulClone.style.setProperty('left','0')
            ulClone.style.setProperty('width','100%')
            ulClone.style.setProperty('background','white')
            ulClone.style.setProperty('height','0%')
            ulClone.style.setProperty('flex-grow','1')
            ulClone.style.setProperty('flex-shrink','0')
            ulClone.style.setProperty('flex-direction','column')
            ulClone.style.setProperty('justify-content','space-around')
            equalUlClone = ulClone
            nav.appendChild(ulClone)
    })
    function _handleClickBurguer(e){
        e.preventDefault()
        if(showMenu){
            equalUlClone.style.setProperty('flex-grow','0')
            equalUlClone.style.setProperty('flex-shrink','1')
            equalUlClone.style.setProperty('height','0%')
            equalUlClone.style.setProperty('opacity','0')
        }else{
            equalUlClone.style.setProperty('height','30%')
            equalUlClone.style.setProperty('opacity','1')
        }
        showMenu = !showMenu
    }
    function _handleClickSignUp(e){
        e.preventDefault()
        if(showForm){
            elSignUp.current.style.setProperty('opacity','0')
            setTimeout(function(){
                elSignUp.current.style.setProperty('z-index','-1')
                elSignUp.current.style.setProperty('display','none')
            },400)
            setShowForm(false)
        }else{
            elSignUp.current.style.setProperty('display','block')
            elSignUp.current.style.setProperty('z-index','1000')
            elSignUp.current.style.setProperty('opacity','1')
            setShowForm(true)
        }
    }
    return (
        <Container  type='fluid'
                    csscontainer={{background:'white', boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.06)' }}
                    csscontent={{background:'white', paddingTop: `${padd}px`, paddingBottom:`${padd}px`}}>
            <nav ref={navRef}>
                <Link to='/'>
                    <img src={logo} alt=""/>
                </Link>
                <ul ref={ulRef}>
                    <li>
                        <a href="/#calculator">
                            <img src={calc} alt='icon of calculator'/>
                        </a>
                    </li>
                    <li>
                        <a href="/#login">Inicia Sesión</a>
                    </li>
                    <li>
                        <a href="#" onClick={_handleClickSignUp}>
                            <Button color="primary" style={{fontFamily: 'Montserrat'}}>
                                Registrate
                            </Button>
                        </a>
                    </li>
                </ul>
                <button onClick={_handleClickBurguer}>
                    <img src={burguerIcon} alt=""/>
                </button>
            </nav>
            <div className="containerSignUp" ref={elSignUp}>
                <SignUp/>
            </div>
            <style jsx>{`
                .containerSignUp{
                    position: fixed;
                    right: 16px;
                    opacity: 0;
                    transition: all .4s;
                    z-index: 0;
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
                ul{
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
                    nav>ul{
                        display: none;
                        height: 0;
                    }
                    li{
                        margin-left: 10px;
                    }
                    .containerSignUp{
                        width: 100%;
                        right:0;
                    }
                }
            `}</style>
        </Container>
    )
}
function Footer(){  
    var css={
        background: '#F5F5F5',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gridGap:'32px'
    }
    return(
        <>
            <footer>
                <img src={footer} alt="" style={{width: '100%', maxHeight: '300px'}}/>
                {/*
                <Section csscontent={css}>
                    <img src={logo} alt=""/>
                    <div className="text text-2"></div>
                    <div className="text text-1"></div>
                    <div className="text text-1"></div>
                </Section>
                */}
            </footer>
            {/*
            
            <style jsx>{`
                footer{
                    background: #F5F5F5;
                }
                img{
                    grid-column: 1/2;
                }
                .text-2{
                    grid-column: 2/3;
                }
            `}</style>
            */}
        </>
    )
}