import React from 'react'
import { 
    Wrapper, 
    Span, 
    Circle,
    Header, 
    Container , 
    Name, 
    InfoCard, 
    DescriptionContainer, 
    InterestsContainer} from './styles'

import {ProfileImage} from 'src/assets/images'
import {Family, Pets, Movies, Games, ReactIcon, Mobile, Front, Linkedin} from 'src/assets/icons/profile'

const Profile = () => {

    return(
        <Wrapper>
            <Circle />
            <Header>
                <ProfileImage width={206} height={206} />
                <Name>João Luiz Carvalho</Name>
                <Span>Front-End...</Span>
            </Header>
            <Container>
                <InfoCard>
                    <DescriptionContainer />
                    <InterestsContainer>
                        <Family width={36} height={36} />
                        <Pets width={36} height={36} />
                        <Movies width={36} height={36} />
                        <Games width={36} height={36} />
                    </InterestsContainer>
                </InfoCard>
                <InfoCard>
                    <InterestsContainer>
                        <Family width={36} height={36} />
                        <Pets width={36} height={36} />
                        <Movies width={36} height={36} />
                        <Games width={36} height={36} />
                    </InterestsContainer>
                    <DescriptionContainer />
                </InfoCard>
                

            </Container>
        </Wrapper>
    )
}
export default Profile