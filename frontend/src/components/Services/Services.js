import React from 'react'
import Icon1 from '../images/image1.jpeg'
import Icon2 from '../images/image1.jpeg'
import Icon3 from '../images/image1.jpeg'
import { ServicesH2,ServicesContainer, ServicesCard,ServicesWrapper,ServicesP,ServicesH1,ServicesIcon} from './ServiceElements'
const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Avoid Quing</ServicesH2>
                    <ServicesP>We help you save you time bla bla </ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Quick and Easy</ServicesH2>
                    <ServicesP>We help you save you time bla bla </ServicesP>
                </ServicesCard>


                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Bla bla</ServicesH2>
                    <ServicesP>We help you save you time bla bla </ServicesP>
                </ServicesCard>

            </ServicesWrapper>
            
        </ServicesContainer>
    )
}

export default Services
