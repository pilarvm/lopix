import React, {useRef} from 'react'
import {Section} from './Container'
import Left from './../assets/left.PNG'
import Right from './../assets/right.PNG'
export default function(props){
   const elSlider = useRef(null)
   function getX(){
      var str = window.getComputedStyle(elSlider.current).transform
      return parseFloat(str.split(',')[4])
   }
   function prev(){   
      var imgs = elSlider.current.querySelectorAll('img')
      let widthImgLast = parseFloat(window.getComputedStyle(imgs[imgs.length-1]).width)
      elSlider.current.style.setProperty('transition',`transform .2s`)
      if(getX()) elSlider.current.style.setProperty('transform',`translateX(${getX() + widthImgLast}px)`)
      else elSlider.current.style.setProperty('transform',`translateX(${widthImgLast}px)`)
      move('prev')
   }
   function next(){
      var imgs = elSlider.current.querySelectorAll('img')
      let widthImgFirst = parseFloat(window.getComputedStyle(imgs[0]).width)
      elSlider.current.style.setProperty('transition',`transform .2s`)
      if(getX()) elSlider.current.style.setProperty('transform',`translateX(${getX() - widthImgFirst}px)`)
      else elSlider.current.style.setProperty('transform',`translateX(-${widthImgFirst}px)`)
      move('next')
   }
   function move(direction){
      var imgs = elSlider.current.querySelectorAll('img')
         setTimeout(()=>{
            elSlider.current.style.setProperty('transition',`transform 0s`)
            let widthImgFirst = parseFloat(window.getComputedStyle(imgs[0]).width)
            let widthImgLast = parseFloat(window.getComputedStyle(imgs[imgs.length-1]).width)
            if(direction === 'next'){
               elSlider.current.append(imgs[0])
               elSlider.current.style.setProperty('transform',`translateX(${getX() + widthImgFirst - (props.margin?props.margin:0)}px)`)
            }else if(direction === 'prev'){
               elSlider.current.insertAdjacentElement('afterbegin',imgs[imgs.length-1])
               elSlider.current.style.setProperty('transform',`translateX(${getX() - widthImgLast - (props.margin?props.margin:0)}px)`)
            }
         },200)
   }
   return(
      <>
         <Section type="full" csscontent={props.css}>
            <div className="container--slider">
               <img src={Left} alt="" onClick={prev} style={{cursor:'pointer'}}/>
               <div className="slider">
                  <div className="slider__images" ref={elSlider}>
                     {props.data.map((item,i)=><Image src={item} key={i}/>) }
                  </div>
               </div>
               <img src={Right} alt="" onClick={next} style={{cursor:'pointer'}}/>
            </div>
         </Section>
         <style jsx>{`
            .container--slider{
               display: flex;
               justify-content: space-between;
               align-items: center;
            }
            .slider{
               flex-grow: 1;
               overflow: hidden;
            }
            .slider__images{
               background: ${props.containerImagesBg?props.containerImagesBg:'transparent'};
               position: relative;
               height: 150px;
               transform: translateX(-${3*props.moveSize/2}px);
               width: 200%;
               display: flex;
               align-items: center;
            }
            img{
               height: 50px;
               width: 25px;
               margin: 0 ${props.margin?props.margin:0};
            }
            @media all and (max-width: 720px) {
               img{
                  height: 25px;
                  width: 22.5px;
                  padding: 0 5px;
               }
            }
         `}</style>
      </>
   )
}
function Image(props){
   return(
      <>
         <img src={props.src} alt=""/>
         <style jsx>{`
            img{
               --size: ${props.size?props.size:'150px'};
               max-height: var(--size);
               width: var(--size);
            }
         `}</style>
      </>
   )
}