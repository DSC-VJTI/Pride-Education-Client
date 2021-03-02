import { Typography } from '@material-ui/core'
import React from 'react'
import aboutImage from "../../assets/images/landingImages/about.jpg";


const About = () => {
    return (
        <section id="aboutSection">
            <Typography variant="h2" className="centerText headingText whiteText" data-aos="fade-up">About Us</Typography>
            <div className="container" >
            <div className="grid twoCols">
            <div className="aboutLeft">
          <Typography variant="p" className="centerText whiteText" data-aos="fade-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eius harum neque culpa cumque, provident quo beatae aliquam blanditiis, molestiae ad! Eligendi vero iure veritatis consectetur repudiandae, modi accusamus nulla perspiciatis molestias aliquid quas aliquam dolorum iste ullam fuga! Cupiditate praesentium quasi nulla soluta delectus veniam animi quae enim repudiandae ad eaque eum expedita quibusdam dolorum necessitatibus corporis est, numquam magni quia quod quam explicabo! Quaerat fuga inventore quas optio architecto molestiae pariatur, consequuntur rerum autem quia, sit veritatis, a enim tenetur similique! Sapiente temporibus alias sequi consectetur fugit praesentium aut cum unde rem? Rerum, sint sapiente. Et, minima neque!</Typography>
            </div>
            <div className="aboutRight">
            <figure>
            <img src={aboutImage} className="mkresponsive" alt="random" data-aos="fade-right"/>
            </figure>
            </div>
            </div>
            </div>
            
            </section>
    )
}

export default About
