import React, {useEffect} from 'react'
import { 
    Wrapper, 
    Span, 
    Circle,
    Header, 
    Container , 
    Name, 
    InfoCard, 
    DescriptionContainer, 
    InterestsContainer,
    DescriptionText} from './styles'
import {Dimensions} from 'react-native'

import {ProfileImage} from 'src/assets/images'
import {Family, Pets, Movies, Games, ReactIcon, Mobile, Front, Linkedin} from 'src/assets/icons/profile'

const Profile = () => {
    
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    var landScape = windowHeight > windowWidth ? false : true
    
    useEffect(() => {
         landScape = windowHeight > windowWidth ? false : true
    }, [windowWidth])
    
    return(
        <Wrapper>
            <Circle />
            <Header>
                <ProfileImage width={206} height={206} />
                <Name>João Luiz Carvalho</Name>
                <Span>Mobile Developer</Span>
            </Header>
            <Container>
                <InfoCard>
                    <DescriptionContainer>
                        <DescriptionText landScape={landScape}>

                    My name is João Luiz, but you can call me John. I'm 25 years old, 
                    I love playing video games and watch some Netflix with my wife. 
                    In my free time I like walking on the beach with my dog ​​and shopping at the mall. 
                    I've played dota 2 for a long time, but after getting angry I stopped XD                          
                        </DescriptionText>
                    </DescriptionContainer>
                    <InterestsContainer>
                        <Family width={36} height={36} />
                        <Pets width={36} height={36} />
                        <Movies width={36} height={36} />
                        <Games width={36} height={36} />
                    </InterestsContainer>
                </InfoCard>
                <InfoCard>
                    <InterestsContainer>
                        <ReactIcon width={36} height={36} />
                        <Mobile width={36} height={36} />
                        <Front width={36} height={36} />
                        <Linkedin width={36} height={36} />
                    </InterestsContainer>
                    <DescriptionContainer>
                        <DescriptionText>
                            <DescriptionText landScape={landScape}>

                                I have a degree in computer science, and I've been working as a programmer since 2017.
                                I've had experience in several areas, such as Java, python, Django but 
                                I'm passionate about front end, especially Mobile, and I've been working with it for over two years. I have focused my 
                                studies only on mobile technologies, mainly react native, to become an expert in the area.  
                         
                            </DescriptionText>
                        </DescriptionText>
                    </DescriptionContainer>
                </InfoCard>
                

            </Container>
        </Wrapper>
    )
}
export default Profile