import React from 'react'
import {ButtonDark} from '../../../cmp/Button'
import play from '../../../assets/play.svg'
import persons from '../../../assets/persons.png'
import {Section} from './Layout'

export default function Presentation(){
    var css = {
        width: '100%',
        position: 'absolute',
        top:'50%',
        left:'50%',
        transform: 'translateX(-50%) translateY(-50%)',
        zIndex: '-1',
        overflow: 'hidden',
        backgroundImage: `url(${persons})`,
    }
    return(
        <>
            <Section type='content' className='presentation' style={{overflow: 'hidden',position: 'relative',paddingTop: '80px', paddingBottom: '80px'}}>
                <div className='presentation__content'>
                    <div className='container--img' style={css}>
                        <img src={persons} alt='happy persons' style={{width: '100%'}} />
                    </div>

                    <div className='presentation__left'>
                        <span style={{color: 'white', fontSize: '1.5em'}}>Registra tus compras</span>
                        <h1 style={{fontWeight: 'normal', color: 'white', fontSize:'3em'}}>
                            Trae tus <strong>compras</strong>
                            <br/>
                            <strong>online</strong> de <strong>usa</strong> en
                            <br/>
                            <strong>tiempo</strong> record
                        </h1>
                        <ButtonDark color='primary' size='large' round={true} css={{marginTop: '20px'}}>
                            Registra tus compras
                        </ButtonDark>
                    </div>
                    <div className='presentation__right'>
                        <div className='container--play'>
                            <img src={play} alt='play button' style={{cursor:'pointer'}}/>
                        </div>
                    </div>
                </div>
            </Section>
            <style>{`
                .presentation .presentation__content{
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                }
            `}</style>
        </>
    )
}