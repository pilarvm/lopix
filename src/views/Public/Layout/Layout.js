import React, {useRef, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import logo from '../../../assets/logo.svg'
import Container, {Section} from '../../../cmp/Container'
import facebook from '../../../assets/facebook.svg'
import youtube from '../../../assets/youtube.svg'
import col1 from '../../../assets/col1.png'
import col2 from '../../../assets/col2.png'
import Nav from './Nav'
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

function Footer(){  
    var cssMenu={
        background: '#F5F5F5',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gridGap:'32px'
    }
    var cssTerms = {

    }
    return(
        <>
            <footer>
                <Section>
                    <div className="contentFooter">
                        <img src={logo} alt=""/>
                        <div className="text text-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem alias, ad, nam vitae eaque nostrum dolores cumque temporibus odit placeat voluptatum corporis magni ea unde maiores voluptas enim cupiditate earum?
                        </div>
                        <div className="text text-1">
                            Rem alias, ad, nam vitae eaque nostrum dolores cumque temporibus odit placeat voluptatum corporis magni ea unde maiores.
                        </div>
                        <div className="text text-1">
                            Rem alias, ad, nam vitae eaque nostrum dolores cumque temporibus odit placeat voluptatum corporis magni ea unde maiores.
                        </div>
                    </div>
                </Section>
                <Section csscontent={{display:'flex',justifyContent: 'space-between',alignItems:'center',paddingTop:'24px'}}>
                    <div className="social">
                        <img src={facebook} alt="" style={{height:'24px'}}/>
                        <img src={youtube} alt="" style={{height:'24px'}}/>
                    </div>
                    <div className="terms">
                        <Link to="/terms" style={{color: '#727272',textDecoration:'none'}}>Términos y condiciones | </Link>
                        <Link to="#" style={{color: '#727272',textDecoration:'none'}}>Lopix Copyright</Link>
                    </div>
                </Section>
            </footer>
            <style jsx>{`
                .contentFooter{
                    padding: 24px 0 12px 0;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: repeat(4, auto);
                    grid-gap: 10px;
                }
                footer{
                    background: #F5F5F5;
                }
                @media (min-width: 640px){
                    .contentFooter{
                        grid-template-columns: 1fr 2fr 1fr 1fr;
                        grid-template-rows: 1fr;
                    }
                }
            `}</style>
        </>
    )
}