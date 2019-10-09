import React, {useEffect, useRef} from 'react'
import Button from '../../../cmp/Button'
import play from '../../../assets/play.svg'
import ring from '../../../assets/ring.png'
import persons from '../../../assets/persons.png'
import video from '../../../assets/video.mp4'
import Container from '../../../cmp/Container'
export default function Presentation(){
    const playEl = useRef(null), pseudoPoster=useRef(null), videoEl = useRef(null)
    var playing=false,load=false
    useEffect(()=>{
        playEl.current.addEventListener('click',e=>{
            playing=!playing
            if(!load){
                pseudoPoster.current.style.setProperty('opacity','0')
                videoEl.current.src=`${video}`
                setTimeout(function(){
                    videoEl.current.play()
                },300)
                load=true
            }else{
                playing?videoEl.current.play():videoEl.current.pause()
            }
        })
    })
    var css = {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top:'50%',
        left:'50%',
        transform: 'translateX(-50%) translateY(-50%)',
        zIndex: '-1',
        overflow: 'hidden'
    },
    cssChild={
        minWidth: '100%',
        miHeight: '100%',
        position: 'absolute',
        top:'50%',
        left:'50%',
        transform: 'translateX(-50%) translateY(-50%)',
        zIndex: '10',
    }
    return(
        <>
            <Container type="full">
                <div className='presentation'>
                    <div className='container--video' style={css}>
                        <video src="" loop ref={videoEl} poster={persons} style={cssChild} alt='happy persons' ></video>
                        {/* <img src={persons} alt="" style={cssChild} ref={pseudoPoster}/> */}
                        <div style={{background: 'black',height:'100%',opacity:'.7',transition:'all .3s',...cssChild}} ref={pseudoPoster} ></div>
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
                        <Button color='primary' size='large' round='true' style={{marginTop: '20px'}}>
                            Registra tus compras
                        </Button>
                    </div>
                    <div className='presentation__right'>
                        <div className='container--play'>
                            <img src={ring} alt="" className='ring'/>
                            <img src={ring} alt="" className='ring'/>
                            <img src={play} alt='play button' style={{cursor:'pointer'}} ref={playEl}/>
                        </div>
                    </div>
                </div>
            </Container>
            <style jsx>{`
                .presentation{
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    padding: 15% 0;
                    font-size: 16px;
                }
                .container--play{
                    position: relative;
                    width: 103px;
                    height: 103px;
                }
                img.ring{
                    position: absolute;
                    top:50%;
                    left:50%;
                    width: 200%;
                    height: 140%;
                    z-index:-1;
                    animation: rotateRing 2s linear infinite;
                }
                img.ring:nth-child(2){
                    animation: rotateRing 1.75s ease infinite;
                }
                .presentation__left{
                    margin-right: 12.5%;
                }
                @keyframes rotateRing {
                    from {
                        transform: translateY(-50%) translateX(-50%) rotate(0deg);
                    }
                    to {
                        transform: translateY(-50%) translateX(-50%) rotate(360deg);
                    }
                }
                @media only screen and (min-width: 1600px) {
                    video{
                        width: 100%;
                    }
                    .presentation {
                        font-size: 20px;
                    }
                    .presentation__left{
                        margin-right: 30%;
                    }
                }
                @media only screen and (min-width: 1181px) and (max-width: 1330px) {
                    video{
                        height: 100%;
                    }
                }
                @media only screen and (max-width: 1180px) {
                    .presentation {
                        padding: 10% 0;
                    }
                    video{
                        width: 100%;
                    }
                }
                @media only screen and (max-width: 910px) {
                    .presentation {
                        padding: 7.5% 0;
                        font-size: 12px;
                    }
                    video{
                        width: 100%;
                    }
                }
                @media only screen and (max-width: 640px) {
                    .presentation {
                        padding: 6% 0;
                        font-size: 10px;
                    }
                    video{
                        height: 100%;
                    }
                }
            `}</style>
        </>
    )
}