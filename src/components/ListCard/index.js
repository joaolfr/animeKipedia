import React from 'react'
import {
    Wrapper, 
    Span, 
    DetailButton, 
    ImageComponent, 
    DetailContainer, 
    InfoContainer,
    RanksContainer,
    RankCard,
    RankText,
    RankTypeText,
    TitleText,
    DurationText
} from './styles'

const InfoCard = ({item, setCurrentObj}) => {

    
    return(
        <Wrapper>
            
            <DetailContainer>
                <ImageComponent uri={item.attributes.posterImage.medium} />

                <InfoContainer>
                    {/* THE VALIDATIONS ARE USED TO SHOW OR NOT THE INFO, IN CASE NULL SO THE ATTRIBUTE WILL BE NOT DISPLAYED */}
                    <RanksContainer>
                        {item.attributes.ratingRank && (
                        <RankCard>
                            <RankText>#{item.attributes.ratingRank}</RankText>
                            <RankTypeText>Rating Rank</RankTypeText>
                        </RankCard>
                        )}

                        {item.attributes.popularityRank && (

                        <RankCard>
                            <RankText>#{item.attributes.popularityRank}</RankText>
                            <RankTypeText>Popularity Rank</RankTypeText>
                        </RankCard>
                        )}
                    </RanksContainer>

                    <TitleText>{item.attributes.canonicalTitle}</TitleText>

                    {item.attributes.episodeCount && (

                        <DurationText>episode: {item.attributes.episodeCount} | {item.attributes.episodeLength && (item.attributes.episodeLength + ' min')} </DurationText>
                    ) }

                   {item.attributes.chapterCount && (

                        <DurationText>chapter: {item.attributes.chapterCount} </DurationText>
                   )}

                  
                </InfoContainer>
            </DetailContainer>
            <DetailButton onPress={() => setCurrentObj(item)}>
                <Span>
                    DETAILS
                </Span>
            </DetailButton>
        </Wrapper>
    )
}

export default InfoCard