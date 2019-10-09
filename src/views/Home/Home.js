import React from 'react'
import Presentation from './cmp/Presentation'
import Steps from './cmp/Steps'
import Quotes from './cmp/Quotes'
import Layout from './cmp/Layout'
import Button from '../../cmp/Button'    
import {Section} from '../../cmp/Container'


export default function(){
    return(
        <Layout>
            <main>
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
            </main>
            <style jsx>{`
            `}</style>
        </Layout>
    )
}
