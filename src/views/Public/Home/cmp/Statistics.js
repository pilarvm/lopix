import React from 'react'
import {Section} from '../../../../cmp/Container'
import img285 from '../../../../assets/285.PNG'
import img26 from '../../../../assets/26.PNG'
import img208 from '../../../../assets/208.PNG'
export default function(){
   var data=[  {
                  src:img285,
                  title: 'Clientes felices',
                  subtitle: 'No se equivocan'
               },
               {
                  src:img26,
                  title: 'Años de experiencia',
                  subtitle: 'Nosotros inventamos esto!'
               },
               {
                  src:img208,
                  title: 'Países',
                  subtitle: 'Estamos en todo el mundo'
               },
               
            ]
   return(
      <>
         <Section csscontent={{}}>
            <div className="statistics">
               <div className="title">
                  <h2>No somos los únicos <strong>content</strong> con SkyBox...</h2>
                  <span>Sobre 250.000 clientes en más de 200 países usa SkyBox.</span>
               </div>
               <div className="cards">
                  {data.map((item,index)=><Card src={item.src} title={item.title} subtitle={item.subtitle} key={index}/>)}
               </div>
            </div>
         </Section>
         <style jsx>{`
            .statistics{
               padding: 32px 0;
            }
            .statistics>*{
               margin: 32px 0;
            }
            .title{
               margin-top:48px;
               font-family: Arial;
               text-align: center;
            }
            h2{
               font-size: 36px;
               font-weight: normal;
            }
            .title span{
               font-size: 24px;
               font-weight: 100;
            }
            .cards{
               display: flex;
               justify-content:space-around;
               margin-bottom:48px;
            }
         `}</style>
      </>
   )
}
function Card(props){
   return(
      <>
         <div className="card">
            <img src={props.src} alt=""/>
            <h4>{props.title}</h4>
            <span>{props.subtitle}</span>
         </div>
         <style jsx>{`
            .card{
               text-align: center;
            }
            .card>*{
               margin: 8px 0;
            }
            h4{
               font-size: 32px;
               font-weight: normal;
            }
            span{
               font-size: 24px;
               color: #33B4F2;
            }
            img{
               height: 150px;
            }
         `}</style>
      </>
   )
}