import React from 'react'
import Presentation from './sections/Presentation'
import Steps from './sections/Steps'
import Quotes from './sections/Quotes'
import Markets from './sections/Markets'
import Credits from './sections/Credits'
import Statistics from './sections/Statistics'
import Layout from '../Layout/Layout'
import Button from '../../../cmp/Button'    
import {Section} from '../../../cmp/Container'


export default function(){
    return(
        <Layout>
            <Presentation/>
            <Section className='message' type='content' csscontainer={{textAlign: 'center',overflow:'hidden',
                                                                        fontSize:'1.2em', background:'white', 
                                                                        paddingTop: '16px',paddingBottom: '16px'}}>
                ¿Ya eres cliente de Lopix? Inicia sesión para ver el estado de tus pedidos 
                <Button round='true' size='large' style={{marginLeft: '20px'}}>
                    Inicia sesión
                </Button>
            </Section>
            <Steps/>
            <Quotes/>
            <Markets/>
            <Statistics/>
            <Credits/>
            <style jsx>{`
            `}</style>
        </Layout>
    )
}
