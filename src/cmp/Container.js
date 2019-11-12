import React, {useRef, useEffect} from 'react'

const Container = (props)=>{
   const container = useRef(null)
   useEffect(()=>{
      switch(props.type){
         case 'full':
               container.current.classList.add('container--full')
            break
         case 'normal':
               container.current.classList.add('container--normal')
            break
         case 'fluid':
               container.current.classList.add('container--fluid')
            break
         default:
               container.current.classList.add('container--normal')
      }
   })
   return(
      <>
         <div className="container" ref={container} style={props.csscontainer} >
            <div className="content" style={props.csscontent?props.csscontent:null}>
               {props.children}
            </div>
         </div>
         <style jsx>{`
            .container{
               width: 100%;
               display: flex;
               justify-content: center;
            }
            .container--fluid{
               padding: 0 16px;
            }
            .container--full{
               padding:0;
            }
            .content{
               height: 100%;
               width: 100%;
               margin: 0;
            }
            @media all and (min-width: 1441px) {
               .container--normal .content{
                  max-width: 1400px;
               }
            }
            @media all and (min-width: 1281px) and (max-width: 1440px) {
               .container--normal .content{
                  max-width: 1200px;
               }
            }
            @media all and (min-width: 771px) and (max-width: 1280px) {
               .container--normal .content {
                  max-width: 90%;
               }
            }
            @media all and (min-width: 321px) and (max-width: 770px)  {
               .container--normal{
                  padding: 0 16px;
               }
            }
            @media all and (max-width: 320px) {
               .container--normal .content {
                  width: 100%;
               }
            }
         `}</style>
      </>
   )
}
export function Section(props){
   const container = useRef(null)
   useEffect(()=>{
      switch(props.type){
         case 'full':
               container.current.classList.add('container--full')
            break
         case 'normal':
               container.current.classList.add('container--normal')
            break
         case 'fluid':
               container.current.classList.add('container--fluid')
            break
         default:
               container.current.classList.add('container--normal')
      }
   })
   return(
      <>
         <section className="container" ref={container} style={props.csscontainer}>
            <div className="content" style={props.csscontent?props.csscontent:null}>
               {props.children}
            </div>
         </section>
         <style jsx>{`
            .container{
               display: flex;
               justify-content: center;
            }
            .container--fluid{
               padding: 0 16px;
            }
            .container--full{
               padding:0;
            }
            .content{
               height: 100%;
               width: 100%;
               margin: 0;
            }
            @media all and (min-width: 1441px) {
               .container--normal .content{
                  max-width: 960px;
               }
            }
            @media all and (min-width: 1281px) and (max-width: 1440px) {
               .container--normal .content{
                  max-width: 720px;
               }
            }
            @media all and (min-width: 771px) and (max-width: 1280px) {
               .container--normal .content {
                  max-width: 90%;
               }
            }
            @media all and (min-width: 321px) and (max-width: 770px)  {
               .container--normal{
                  padding: 0 16px;
               }
            }
            @media all and (max-width: 320px) {
               .container--normal .content {
                  width: 100%;
               }
            }
            
            .container--full .content{
               max-width: 100%;
               width: 100%;
            }
         `}</style>
      </>
   )
}
export default Container