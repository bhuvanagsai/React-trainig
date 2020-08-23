

import React from 'react';

import {Carousel} from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import {CarouselContainer,ImageContainer,ContentContainer,ButtonNavigation,ArrowImage,TeamAndDate} from './Style';

import Loader from '../../CommonComponents/Loader/Loader';

const  DemoCarousel = (props) =>{
        return (
            <div>
                {props.loading === true ? <Loader/> :
                <Carousel  showArrows={false} showThumbs = {false} showStatus = {false} infiniteLoop= {false} showIndicators = {props.indicator} >
                {props.bannerData.map((p,index)=>(
                    <CarouselContainer key = {p.id}>
                        <ContentContainer>
                            <span>{p.pageName}</span>
                            <p>{p.text}</p>
                            {props.button === true ?
                                <ButtonNavigation href = "/ViewCaseStudy">
                                    View Case study
                                    <ArrowImage src ={require('../../assets/Images/group-4.png')}  alt = "banner slider images"/>
                                </ButtonNavigation> :
                                <TeamAndDate>Bigdata Team, Aug 2020</TeamAndDate>
                            }
                        </ContentContainer>
                        <ImageContainer>
                            <img src={require(`../../assets/Images/${p.image}.png`)} alt  = "Slider" />
                        </ImageContainer>
                    </CarouselContainer>
                ))}
            </Carousel>
                }
            </div>
            
        );
}

export default DemoCarousel;