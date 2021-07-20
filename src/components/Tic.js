import React, {useEffect, useState, useRef} from 'react'
import styled, { css } from 'styled-components/macro'
import {IoArrowBack, IoArrowForward} from 'react-icons/io5'

const TicSection = styled.section`
   height: 100vh;
   max-height: 1100px;
   position: relative;
   overflow: hidden;
`

const TicWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

`

const TicSliderr = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: cente;
`
const TicContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100% -100px);
  color: black;
  background: whitesmoke;
  padding: 10px;

  h1{
    font-size: clamp(1rem, 8vw, 2rem);
    font-weight: 400;
  }

    @media screen and (max-width: 760px){
        display: block;
        width: 300px;
        top: 110px;
        margin-left: 10px;

        h1{
    
          font-size: 15px;
    font-weight: 400;
    }

    &:hover{
      background: #1888ff;
      color: white;
      border-radius: 5px;
      cursor: pointer;
      transition: .5s ease-in-out;
    }
    }

`
const TicImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  /* object-fit: cover; */
  height: 100%;

   @media screen and (max-width: 400px){
     position: absolute;
     width: 100%;
     object-fit: cover;
     height: 100%;
   }
`
const TicSlide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`

const arrowButtons = css`
    width: 50px;
    height: 50px;
    color: black;
    cursor: pointer;
    background: whitesmoke;
    border-radius: 50%;
    padding: 10px;
    margin-right: 1rem;
    user-select: none;
    transition: .5s;

    &:hover{
      background: #1888ff;
      transform: scale(1.05 );
      color: white;
    }
`
 const SliderBtn = styled.div`
    position: absolute;
    bottom: 50px;
    right: 50px;
    display: flex;
    z-index: 10;
 `
const PrevArrow = styled(IoArrowBack)`
   ${arrowButtons}
`

const NextArrow = styled(IoArrowForward)`
   ${arrowButtons}
`

const Tic = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length
    const timeout = useRef(null);


    useEffect(() => {
      const nextSlide = () =>{
        setCurrent(current => (current === length -1 ? 0 : current + 1))
      }
      timeout.current = setTimeout(nextSlide, 3000)
      return () => {
         if(timeout.current){
           clearTimeout(timeout.current)
         }
      }
    }, [current, length])

    const nextSlide = () =>{
      setCurrent(current === length -1 ? 0 : current +1);

      // console.log(current)
    }

    const prevSlide = ()=>{
       setCurrent(current === 0  ? length -1 : current -1);

        // console.log(current)
    }
    return (
        <TicSection>
            <TicWrapper>
             {slides.map((slide, index) =>{
               return(
                 <TicSlide key = {index}>
                   {index === current && (
                     <TicSliderr>
                      <TicImage src={slide.image} alt={slide.alt}/>
                      <TicContent>
                        <h1>{slide.title}</h1>
                          <p>{slide.name}</p>
                          <p>{slide.work}</p>
                      </TicContent>
                    </TicSliderr>
                   )}
                 </TicSlide>
               )
             })}
             <SliderBtn>
               <PrevArrow onClick={prevSlide}/>
               <NextArrow onClick={nextSlide} />
             </SliderBtn>
            </TicWrapper>
        </TicSection>
    )
}

export default Tic
