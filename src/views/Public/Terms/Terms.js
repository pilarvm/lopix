import React from 'react'
import {Section} from '../../../cmp/Container'
import Layout from '../Layout/Layout'
import {LogIn, SignUp} from '../../../cmp/Formulario'
export default function(){
   return(
      <>
      <Layout>
         <Section>
            <h1>Términos y Condiciones</h1>
            <ol>
               <li>Con DNI puedes realizar hasta 3 compras anuales y la suma de productos de dichas 3 compras no debe superar los 2,000 USD.</li>
               <li>Las compras que sean hasta 200 USD en productos, no llevan impuestos.</li>
               <li>Las compras mayores de 200 USD en productos, tienen un costo por concepto de impuestos y gestión aduanera el cual será calculado en tu tarifa.</li>
               <li>Tus compras llegarán en un plazo no mayor a 10 días, los cuales correrán a partir de que lleguen a nuestro almacén en Miami.</li>
               <li>El usuario deberá revisar las listas de "MERCADERÍA RESTRINGIDA" y "MERCADERÍA PROHIBIDA" para asegurarse que su compra no vaya a tener problemas en Aduanas. Encontrarás estas listas en nuestra web dentro de Compra&Trae / ¿Cómo Funciona?</li>
               <li>El horario de atención de nustros almacén en Miama es de Lunes a Viernes de 9am - 5pm</li>
            </ol>
         </Section>
         <Section csscontainer={{margin:'10px'}} csscontent={{display:'flex',justifyContent:'center'}}>
            <SignUp/>
         </Section>
      </Layout>
      <style jsx>{`
         h1{
            text-align: center;
         }
      `}</style>
      </>
   )
}