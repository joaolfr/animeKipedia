import React from 'react'
import { Wrapper, Span } from './styles'
import useFavorites from './hooks'

const Favorites = () => {
    
    const {favoritesIds} = useFavorites()
    return(
        <Wrapper>
           {favoritesIds.map((item,index) => (
              <Span key={index}>
                  {item}
              </Span>
           ))}
        </Wrapper>
    )
}

export default Favorites