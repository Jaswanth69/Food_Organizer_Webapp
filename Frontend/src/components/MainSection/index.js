import React,{useState} from 'react';
import { ArrowForward, ArrowRight, HomeBg, HomeBtnWrapper, HomeContainer, HomeContent, VideoBg, HomeH1,HomeP } from './InfoItems';
import Video from '../../Videos/video.mp4'
import { Button } from '../Button';


const Info = () =>{ // main landing page
    const [hover,setHover] = useState(false);

    const onHover = () => { //setting on hover 
        setHover(!hover)
    }

    return(
        <>
            <HomeContainer >
                <HomeBg>
                    <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
                </HomeBg>
                <HomeContent>
                    <HomeH1>Struggling to Manage Expiry dates</HomeH1>
                    <HomeP>Don't wait. Start a new Journey with us. Make your life easier</HomeP>
                    <HomeBtnWrapper>
                        <Button 
                        to="signup" 
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover} 
                        primary='true'
                        dark='true'
                        smooth={true} duration={500} spy={true} exact='true' offset={-80}
                        >Get started {hover ? <ArrowForward/> : <ArrowRight/>}</Button>
                    </HomeBtnWrapper>
                </HomeContent>
            </HomeContainer>
        </>
    );
}
export default Info