import React from 'react'
import Presentation from './cmp/Presentation'
import Layout, {Section} from './cmp/Layout'
import { ButtonDark } from '../../cmp/Button'

export default function(){
    return(
        <Layout>
            <main>
                <Presentation/>
                <Section className='message' type='content' style={{fontSize:'1.2em'}}>
                    ¿Ya eres cliente de Lopix? Inicia sesión para ver el estado de tus pedidos 
                    <ButtonDark round={true} size='large' css={{backgroundColor:'white',border:'1px solid black',marginLeft: '20px'}}>
                        Inicia sesión
                    </ButtonDark>
                </Section>
                <Section className='question' type='content' style={{backgroundColor:'rgba(0, 30, 73,1)',
                                                                    color:'white'}}>
                    <div className='question__content' style={{ display:'flex',
                                                                flexDirection:'column',
                                                                justifyContent:'space-around',
                                                                height:'340px'}}>
                        <div>
                            <h2 style={{marginBottom:'10px'}}>¿Cómo traer tus compras?</h2>
                            <span>son 3 sencillos pasos</span>
                        </div>
                        <div className='steps'>
                            {/* cards */}
                            <div className='card shop'>
                                <div style={{width:'100px',height:'100px', backgroundColor:'white',borderRadius:'50%'}}></div>
                                <h4>¡Compra Online!</h4>
                                <span>Te daremos una dirección de entrega, ¡Ingresa!</span>
                            </div>
                            <div className='card confirm'>
                                <div style={{width:'100px',height:'100px', backgroundColor:'white',borderRadius:'50%'}}></div>
                                <h4>¡Confirma tu compra!</h4>
                                <span>Envianos el comprobante de pago de tu pedido</span>
                            </div>
                            <div className='card ready'>
                                <div style={{width:'100px',height:'100px', backgroundColor:'white',borderRadius:'50%'}}></div>
                                <h4>Recibe tu compra</h4>
                                <span>¡Listo! lo llevamos a tu casa podrás ver el estado de tu compra en tiempo real!</span>
                            </div>
                        </div>
                    </div>
                </Section>
            </main>
            <style>{`
                .card{
                    width: 300px;
                    display: inline-grid;
                    grid-template-rows: 1fr 1fr 1fr;
                    grid-template-colums: 1fr 2fr;
                }
                .card>*{
                    grid-column: 2/3;
                }
                .card>h4{
                    grid-row:1/2;
                }
                
                .card>span{
                    grid-row:2/4;
                }
                .card>div{
                    grid-column: 1/2;
                    grid-row: 1/4;
                }
            `}</style>
        </Layout>
    )
}
