import React  from 'react';
import MainCarousel from '../../components/HomeCarousel/Maincarousel';
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel';
import Aboutus from '../../components/Aboutus/Aboutus';
import Testimonial from '../../components/Testimonial/Testimonial';
import { Icecreamcake } from "../../../Data/Icecreamcake";
import Newsletter from '../../components/Newsletter/Newsletter';
import Footer from '../../components/Footer/Footer';
const HomePage = () => {
    return (
        <div>
            <MainCarousel/>

            <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'> 
                <HomeSectionCarousel data={Icecreamcake} sectionName={"Most Loved Ones"}/>
            <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'> 
            <Aboutus/>
            <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'> 
            <Testimonial/>
            </div>
            <div>
            <Newsletter/>
            </div>
            </div>
            <Footer/>
            </div>
        </div>
    
   )
}

export default HomePage;