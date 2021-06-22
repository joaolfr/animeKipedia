import React, {useState} from 'react'
import { Wrapper} from './styles'
import useAnime from './animeHooks'
import useManga from './mangaHooks'
import {Modal, List, Search, Switcher} from 'src/components'


const Home = () => {

    const [currentType, setCurrentType] = useState('Animes')

    const {
        loading, 
        animes, 
        queryText, 
        isModalVisible, 
        current, 
        favoritesIds,
        error:errorAnime, 
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
        error:errorManga,
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
                queryText={currentType ==='Animes'? queryText : queryManga} 
                setQueryText={currentType ==='Animes' ? setQueryText : setQueryManga} 
                search={currentType ==='Animes' ? search : searchMangas} />

            <Switcher currentType={currentType} setCurrentType={setCurrentType} />
       
            <List 
                data={currentType ==='Animes' ? animes: mangas}
                searchNext={currentType ==='Animes' ? searchNext : searchNextMangas} 
                currentType={currentType}
                setCurrentObj={currentType ==='Animes' ? setCurrentObj : setCurrentMangaObj}   
                loading={currentType ==='Animes' ? loading : loadingMangas} 
                error={currentType === 'Animes' ? errorAnime : errorManga}
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

export default Home