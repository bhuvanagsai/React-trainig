

import React ,  {Component} from 'react';
import {Carousel} from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import {CarouselContainer,ImageContainer,ContentContainer,ButtonNavigation} from './Style';

class  DemoCarousel extends Component{
    state = {
        CarouselData : [
            {
                pageName  : "Featured1",
                text :"Role of AI in humanizing digital banking",
                image : require('../../assets/Images/group-11.png')
            },
            {
                pageName  : "Featured2",
                text :"Role of AI in humanizing digital banking",
                image : require('../../assets/Images/group-11.png')
            },
            {
                pageName  : "Featured3",
                text :"Role of AI in humanizing digital banking",
                image : require('../../assets/Images/group-11.png')
            }
        ]
    }
    render() {
        return (
            <Carousel showArrows={false} showThumbs = {false} showStatus = {false}>
                {this.state.CarouselData.map((p,index)=>(
                    <CarouselContainer>
                        <ContentContainer>
                            <span>{p.pageName}</span>
                            <p>{p.text}</p>
                            <ButtonNavigation>
                                <a href = "/">View Case study</a>
                                <img src = {require('../../assets/Images/group-4.png')} alt = "banner slider images"/>
                            </ButtonNavigation>
                        </ContentContainer>
                        <ImageContainer>
                            <img src={p.image} alt  = "Slider" />
                        </ImageContainer>
                    </CarouselContainer>
                ))}
            </Carousel>
        );
    }
}

export default DemoCarousel;