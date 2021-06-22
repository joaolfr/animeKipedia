import React, {useState} from 'react'
import { Wrapper} from './styles'
import {Modal, List, Switcher} from 'src/components'
import useAnime from './animeHooks'
import useManga from './mangaHooks'

const Favorites = () => {
    const [currentType, setCurrentType] = useState('Animes')

    const {
        loading, 
        isModalVisible, 
        current, 
        favoritesIds, 
        favorites,
        toggleModal, 
        setCurrentObj, 
        changeFavorites, 
    } = useAnime()

    const {
        loadingMangas,  
        isModalVisible:isModalMangaVisible,
        currentManga,
        favoritesMangasIds,
        favoritesMangas,
        setCurrentMangaObj,
        toggleModal:toggleMangaModal,
        changeFavoritesMangas,
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