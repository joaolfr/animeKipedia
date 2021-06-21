import React, {useState} from 'react';
import {
  Wrapper,
  FavButton,
  FavoriteOption,
  ModalWrapper,
  Span,
  Header,
  PosterImage,
  RankWrapper,
  CloseWrapper,
  ReturnButton,
  RankText,
  TitleWrapper,
  TitleText,
  DurationText,
  SinopseWrapper,
  Sinopse,
  SinopseText,
  FavText,
  RemoveButton,
  RemoveOption,
  RemoveText
  
} from './styles';
import FastImage from 'react-native-fast-image';
import {NoImage} from 'src/assets/images'

const MovieModal = ({
  isVisible,
  toggleModal,
  changeFavorites,
  current,
  favoritesIds,
}) => {
    
  let ImageSource = NoImage;
  
  let uri = 'https://ik.imagekit.io/0gpwujpz1/No_image_available_T4YyeP1PdA.png'
  let posterUri = 'https://ik.imagekit.io/0gpwujpz1/images_unauC-2AB.png'

  //check is current selection object is not empty
  if (Object.keys(current).length > 0) {

    if(current.attributes.coverImage !== null){
      uri = current.attributes.coverImage.original
    }
    if(current.attributes.posterImage !== null){
      posterUri = current.attributes.posterImage.medium
    }
    
    ImageSource = {uri, priority: FastImage.priority.normal};
  }

  // const {synopsis} = current.attributes
  
  return (
    <ModalWrapper isVisible={isVisible} onBackdropPress={() => toggleModal(false)} onBackButtonPress={() => toggleModal(false)}>
      {Object.keys(current).length > 0 && (
        <Wrapper length={current.attributes.synopsis.length} style={{maxHeight:'100%'}}>
          <Header source={ImageSource}>
            <CloseWrapper activeOpacity={1} onPress={() => toggleModal(false)}>
              <ReturnButton />
            </CloseWrapper>
            <PosterImage uri={posterUri} />

              <RankWrapper>
              {current.attributes.popularityRank && (<RankText>#{current.attributes.popularityRank} Popularity Rank</RankText>)}
              {current.attributes.ratingRank && (<RankText>#{current.attributes.ratingRank} Rating Rank</RankText>)}
            </RankWrapper>
           
          </Header>
          <TitleWrapper>
            <TitleText>{current.attributes.canonicalTitle}</TitleText>
            {current.attributes.episodeCount && (

              <DurationText>episode: {current.attributes.episodeCount} | {current.attributes.episodeLength && (current.attributes.episodeLength + ' min')} </DurationText>
              ) }

              {current.attributes.chapterCount && (

                <DurationText>chapter: {current.attributes.chapterCount} </DurationText>
              )}
          </TitleWrapper>
          <SinopseWrapper>
            <Sinopse>Sinopse</Sinopse>
            <SinopseText>
              {current.attributes.synopsis}
            </SinopseText>
          </SinopseWrapper>
          {
           favoritesIds.includes(current.id) ? (
            <RemoveButton onPress={() => changeFavorites(current)}>
              <RemoveOption isFavorite={favoritesIds.includes(current.id)} />
              <RemoveText>REMOVE FAVORITE</RemoveText>
            </RemoveButton>
           ) : (

            <FavButton onPress={() => changeFavorites(current)}>
              <FavoriteOption isFavorite={favoritesIds.includes(current.id)} />
              <FavText>ADD FAVORITE</FavText>
            </FavButton>
           )
          }
        </Wrapper>
      )}
    </ModalWrapper>
  );
};

export default MovieModal;
