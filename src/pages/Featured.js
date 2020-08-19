import React , {Component} from 'react';

import ButtonNavigation from '../components/ButtonNavigation/ButtonNavigation';

import DemoCarousel from '../components/Carousel/carousel';

import axios from '../Axios/Axios';

class  FeaturedPage extends Component{
    state = {
        carouselData : [],
        loading: false
    }
    componentDidMount() {
        axios.get("/0.json").then((response) =>{
            this.setState({carouselData :Object.values(response.data.carouselData)});
            setTimeout ( () => this.setState({loading: true})
          ,3000);
          })
      }
    render(){
        return(
            <div>
                <DemoCarousel bannerData = {this.state.carouselData} loading = {this.state.loading} indicator = {true}  button  = {true}/>
                <ButtonNavigation/>
            </div>
            
        );
    }
    
}

export default FeaturedPage;