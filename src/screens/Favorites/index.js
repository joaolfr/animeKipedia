import React, {useState} from 'react'
import { Wrapper, Span, FavButton, FavoriteOption, SwitchView, SwitchButton} from './styles'
import useFavorites from './hooks'

const Favorites = () => {
    const [currentType, setCurrentType] = useState('Anime')

    const {favoritesIds, removeFavorite, favoritesMangasIds, removeFavoriteManga} = useFavorites()
    return(
        <Wrapper>
            <SwitchView>
              <SwitchButton isActive={currentType === 'Anime'} onPress={() => setCurrentType('Anime')}>
                  <Span >Anime</Span>
              </SwitchButton>
              <SwitchButton isActive={currentType === 'Manga'} onPress={() => setCurrentType('Manga')}>
                  <Span>Manga</Span>
              </SwitchButton>
          </SwitchView>

            {currentType === 'Anime'? (
                
                favoritesIds.map((item,index) => (
                    
                    <Span key={index}>
                    {item}
                    <FavButton onPress={()=>removeFavorite(item)}>
                  <FavoriteOption />
              </FavButton>
              </Span>
              
              ))
              ):(
                favoritesMangasIds.map((item,index) => (
                    
                    <Span key={index}>
                    {item}
                    <FavButton onPress={()=>removeFavoriteManga(item)}>
                  <FavoriteOption />
              </FavButton>
              </Span>
                ))
              )}
        </Wrapper>
    )
}

export default Favorites