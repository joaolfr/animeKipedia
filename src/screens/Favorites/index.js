import React, {useState} from 'react'
import { Wrapper, Span, FavButton, FavoriteOption, SwitchView, SwitchButton} from './styles'
import useFavorites from './hooks'
import {Modal, List, Search, Switcher} from 'src/components'
import useAnime from './animeHooks'
import useManga from './mangaHooks'

const Favorites = () => {
    const [currentType, setCurrentType] = useState('Animes')

    const {
        loading, 
        animes, 
        queryText, 
        isModalVisible, 
        current, 
        favoritesIds, 
        favorites,
        searchNext, 
        toggleModal, 
        setCurrentObj, 
        changeFavorites, 
        setQueryText, 
        search
    } = useAnime()

    const {
        loadingMangas, 
        mangas,
        queryManga, 
        isModalVisible:isModalMangaVisible,
        currentManga,
        favoritesMangasIds,
        favoritesMangas,
        searchMangas,
        searchNextMangas, 
        setCurrentMangaObj,
        toggleModal:toggleMangaModal,
        changeFavoritesMangas,
        setQueryManga, 
    } = useManga()

    return(
        <Wrapper>
            
            <Switcher currentType={currentType} setCurrentType={setCurrentType} />

            <List 
                data={currentType ==='Animes' ? favorites: favoritesMangas}
                searchNext={() => {}} 
                currentType={currentType}
                setCurrentObj={currentType ==='Animes' ? setCurrentObj : setCurrentMangaObj}   
                loading={currentType ==='Animes' ? loading : loadingMangas} 
                favorites={true}
                />
                
         
           <Modal 
                favoritesIds={currentType ==='Animes' ? favoritesIds : favoritesMangasIds} 
                changeFavorites={currentType ==='Animes' ? changeFavorites : changeFavoritesMangas} 
                current={currentType ==='Animes' ? current : currentManga} 
                isVisible={currentType ==='Animes' ? isModalVisible : isModalMangaVisible} 
                toggleModal={currentType ==='Animes' ?toggleModal : toggleMangaModal}
                
                />

        </Wrapper>
    )
}

export default Favorites