import React from 'react'
import { Wrapper, Span, FavButton, FavoriteOption} from './styles'
import useFavorites from './hooks'

const Favorites = () => {
    
    const {favoritesIds, removeFavorite} = useFavorites()
    return(
        <Wrapper>
           {favoritesIds.map((item,index) => (
               
              <Span key={index}>
                  {item}
              <FavButton onPress={()=>removeFavorite(item)}>
                  <FavoriteOption />
              </FavButton>
              </Span>
              
           ))}
        </Wrapper>
    )
}

export default Favorites