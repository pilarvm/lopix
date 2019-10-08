import React from 'react'
import {Link} from 'react-router-dom'
import {ButtonDark} from '../../../cmp/Button'
import logo from '../../../assets/logo.svg'
import calc from '../../../assets/calc.svg'

export default function Layout(props){
    return (
        <>
            <div className='container'>
                <Nav/>
                {props.children}
                <Footer/>
            </div>
            <style>{`
                :root{
                    font-size: 16px;
                    --fluid: 1em 1.5em;
                    --full: 0;
                    --content: 1em 3em;
                }
                *{padding:0;margin:0;box-sizing: border-box;}
                .container{
                    display: flex;
                    flex-direction: column;
                    min-height:100vh;
                    width: 100%;
                }
                .container>*{
                    width: 100%;
                }
                .container>main{
                    flex-grow: 1;
                }
                .container>nav,
                .container>footer{
                    padding: var(--content);
                }
            `}</style>
        </>
    )
}
function Nav(){
    return (
        <>
            <nav>
                <Link to='/'>
                    <img src={logo} alt=""/>
                </Link>
                <ul>
                    <li>
                        <a href="/#calculator">
                            <img src={calc} alt='icon of calculator'/>
                        </a>
                    </li>
                    <li>
                        <a href="/#login">Inicia Sesión</a>
                    </li>
                    <li>
                        <a href="/#signin">
                            <ButtonDark color="primary" css={{fontFamily: 'Montserrat'}}>
                                Registrate
                            </ButtonDark>
                        </a>
                    </li>
                </ul>
            </nav>
            <style>{`
                nav{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background: rgba(255, 255, 255, 0.98);
                    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.06);
                }
                ul{
                    list-style:none;
                    display: flex;
                    align-items: center;
                }
                li{
                    margin-left: 16px;
                }
                a{
                    text-decoration: none;
                    color: black;
                    font-family: Montserrat;
                }
            `}</style>
        </>
    )
}
function Footer(){  
    return(
        <>
            <footer>
                <span>Soy el footer</span>
            </footer>
        </>
    )
}
export function Section(props){
    return(
        <>
        <section {...props}>
            <div className="section__content" style={{padding: `var(--${props.type})`}}>
                {props.children}
            </div>
        </section>
        <style>{`
            .section__content{
                text-align: center;
            }
        `}</style>
        </>
    )
}