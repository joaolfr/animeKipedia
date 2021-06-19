import React from 'react'
import { Wrapper, Span } from './styles'
import {ProfileImage} from 'src/assets/images'
import {Image as ImageComponent} from 'react-native'

const Profile = () => {

    return(
        <Wrapper>
            {/* <ProfileImage height={40} width={100} /> */}
            <ImageComponent source={ProfileImage}/>
            <Span>Profile</Span>
        </Wrapper>
    )
}
export default Profile