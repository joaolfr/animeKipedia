import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {
  Wrapper,
  FavButton,
  FavoriteOption,
  ReturnButton,
  
  Span
} from './styles';

const MovieModal = ({
  isVisible,
  toggleModal,
  changeFavorites,
  current,
  favoritesIds,
}) => {
    
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Modal isVisible={isVisible} animationIn="bounceInDown" >
      <Wrapper>
          <Span>{current.id}</Span>
          <ReturnButton onPress={() => toggleModal(false)} />
          <FavButton onPress={() => changeFavorites(current)}>
              <FavoriteOption isFavorite={favoritesIds.includes(current.id)} />
          </FavButton>
      </Wrapper>
    </Modal>
  );
};

export default MovieModal;
