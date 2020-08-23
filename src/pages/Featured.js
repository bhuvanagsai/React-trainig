import React , {Component} from 'react';

import ButtonNavigation from '../components/ButtonNavigation/ButtonNavigation';

import DemoCarousel from '../components/Carousel/carousel';

import axios from '../Axios/Axios';

import {MainContainerWrapper} from '../container/Style';

class  FeaturedPage extends Component{
    state = {
        carouselData : [],
        loading: true
    }
    componentDidMount() {
        axios.get("/0.json").then((response) =>{
            this.setState({carouselData :Object.values(response.data.carouselData)});
            setTimeout ( () => this.setState({loading: false})
          ,3000);
          })
      }
    render(){
        return(
            <MainContainerWrapper>
                <DemoCarousel bannerData = {this.state.carouselData} loading = {this.state.loading} indicator = {true}  button  = {true}/>
                <ButtonNavigation/>
            </MainContainerWrapper>
            
        );
    }
    
}

export default FeaturedPage;