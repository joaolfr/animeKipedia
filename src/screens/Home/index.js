import React, {useState} from 'react'
import { Wrapper} from './styles'
import useAnime from './animeHooks'
import useManga from './mangaHooks'
import {Modal, List, Search, Switcher} from 'src/components'


const Home = () => {

    const [currentType, setCurrentType] = useState('Anime')

    const {
        loading, 
        animes, 
        queryText, 
        isModalVisible, 
        current, 
        favoritesIds, 
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
        searchMangas,
        searchNextMangas, 
        setCurrentMangaObj,
        toggleModal:toggleMangaModal,
        changeFavoritesMangas,
        setQueryManga, 
    } = useManga()

    return(
    
        <Wrapper>
            <Search 
                queryText={currentType ==='Anime'? queryText : queryManga} 
                setQueryText={currentType ==='Anime' ? setQueryText : setQueryManga} 
                search={currentType ==='Anime' ? search : searchMangas} />

            <Switcher currentType={currentType} setCurrentType={setCurrentType} />
       
            <List 
                data={currentType ==='Anime' ? animes: mangas}
                searchNext={currentType ==='Anime' ? searchNext : searchNextMangas} 
                currentType={currentType}
                setCurrentObj={currentType ==='Anime' ? setCurrentObj : setCurrentMangaObj}   
                loading={currentType ==='Anime' ? loading : loadingMangas} />
         
           <Modal 
                favoritesIds={currentType ==='Anime' ? favoritesIds : favoritesMangasIds} 
                changeFavorites={currentType ==='Anime' ? changeFavorites : changeFavoritesMangas} 
                current={currentType ==='Anime' ? current : currentManga} 
                isVisible={currentType ==='Anime' ? isModalVisible : isModalMangaVisible} 
                toggleModal={currentType ==='Anime' ?toggleModal : toggleMangaModal}/>

        </Wrapper>
       
    )
}

export default Home