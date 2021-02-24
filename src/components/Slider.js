import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';



export default function Slider() {

    function delay(){
        setTimeout(changeSlide(), 4000);
    };

    function changeSlide(){
        if(document.getElementById("slideRef").classList.contains("activeSlide")) {
            document.getElementById("slide2").classList.add("activeSlide2")
            document.getElementById("slide2").classList.remove("inactiveSlide2")
            document.getElementById("slideRef").classList.remove("activeSlide")
            document.getElementById("slideRef").classList.add("inactiveSlide")

            document.getElementById("slide1Indicator").classList.remove("activeCarousel")
            document.getElementById("slide2Indicator").classList.add("activeCarousel")
        } else{
            document.getElementById("slide2").classList.remove("activeSlide2")
            document.getElementById("slide2").classList.add("inactiveSlide2")
            document.getElementById("slideRef").classList.add("activeSlide")
            document.getElementById("slideRef").classList.remove("inactiveSlide")

            document.getElementById("slide1Indicator").classList.add("activeCarousel")
            document.getElementById("slide2Indicator").classList.remove("activeCarousel")
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
          changeSlide();
        }, 3000);
        return () => clearInterval(interval);
      }, []);

    function checkSlide (who) {

        if (who == "slide1") {
            if(document.getElementById("slide1Indicator").classList.contains("activeCarousel") == false) {
                return changeSlide();
            } else{
                return null;
            }
        } else {
            if(document.getElementById("slide2Indicator").classList.contains("activeCarousel") == false) {
                return changeSlide();
            } else {
                return null;
            }
        }
    };

    return(
        <Container className="d-flex align-items-center justify-content-center mw-100 p-5">
            {/*
            <Carousel 
                interval={3000}
                fade={true}
            >
                <Carousel.Item>
                    <Image 
                    className="d-block w-100"
                    src="https://sweetsoul.sirv.com/Images/Envixo/image_01.svg"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Image 
                    className="d-block w-100"
                    src="https://sweetsoul.sirv.com/Images/Envixo/image_02.svg"
                    />
                </Carousel.Item>
            </Carousel>
            */}

            <Image 
            className="position-absolute w-90 slide1 activeSlide transitionSlides"
            id="slideRef"
            src="https://sweetsoul.sirv.com/Images/Envixo/image_01.svg"
            />
            <Image 
            className="position-absolute w-90 slide2 inactiveSlide2 transitionSlides"
            id="slide2"
            src="https://sweetsoul.sirv.com/Images/Envixo/image_02.svg"
            />
            <Button onClick={() => {checkSlide("slide1")}} id="slide1Indicator" className="slideIndicators firstIndicator activeCarousel" />
            <Button onClick={() => {checkSlide("slide2")}} id="slide2Indicator" className="slideIndicators secIndicator" />
        </Container>
    )
};