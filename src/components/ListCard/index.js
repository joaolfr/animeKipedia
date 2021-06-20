import React from 'react'
import {
    Wrapper, 
    Span, 
    DetailButton, 
    ImageComponent, 
    DetailContainer, 
    InfoContainer,
    RanksContainer,
    RankCard
} from './styles'

const InfoCard = ({item}) => {

    
    return(
        <Wrapper>
            
            <DetailContainer>
                <ImageComponent uri={item.attributes.posterImage.medium} />
                <InfoContainer>
                    <RanksContainer>
                        <RankCard>
                            <Span>#{item.attributes.ratingRank}</Span>
                            <Span>Rating Rank</Span>
                        </RankCard>
                        <RankCard>
                            <Span>#{item.attributes.popularityRank}</Span>
                            <Span>Popularity Rank</Span>
                        </RankCard>
                    </RanksContainer>
                    <Span>{item.attributes.canonicalTitle}</Span>
                    {item.attributes.episodeCount ? (

                        <Span>episode: {item.attributes.episodeCount} | {item.attributes.episodeLength} min </Span>
                    ): (
                        <Span>chapter: {item.attributes.chapterCount} </Span>

                    )}
                </InfoContainer>
            </DetailContainer>
            <DetailButton>
                <Span>
                    DETAILS
                </Span>
            </DetailButton>
        </Wrapper>
    )
}

export default InfoCard