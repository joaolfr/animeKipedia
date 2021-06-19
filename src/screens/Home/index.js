import React, {useState} from 'react'
import { Wrapper, Span, TouchPress , SwitchView, SwitchButton} from './styles'
import useAnime from './animeHooks'
import useManga from './mangaHooks'
import {FlatList} from 'react-native'
import Modal from 'src/components/Modal'
import Search from 'src/components/Search'

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

    const renderItem = ({item}) => {
        return(
            <TouchPress onPress={() => setCurrentObj(item)}>
              <Span>
                  {item.attributes.canonicalTitle},{item.id}
              </Span>
            </TouchPress>
        )
    }
       const renderMangaItem = ({item}) => {
        return(
            <TouchPress onPress={() => setCurrentMangaObj(item)}>
              <Span>
                  {item.attributes.canonicalTitle},{item.id}
              </Span>
            </TouchPress>
        )
    }

    const listFooter = () => {
        return(
              <Span>
                  Loading more animes...
              </Span>
        
        )
    }

    return(
        currentType ==='Anime' ? (

        <Wrapper>
          <Search queryText={queryText} setQueryText={setQueryText} search={search} />
          <SwitchView>
              <SwitchButton isActive={currentType === 'Anime'} onPress={() => setCurrentType('Anime')}>
                  <Span >Anime</Span>
              </SwitchButton>
              <SwitchButton isActive={currentType === 'Manga'} onPress={() => setCurrentType('Manga')}>
                  <Span>Manga</Span>
              </SwitchButton>
          </SwitchView>
            {loading && <Span>loading animes...</Span>}
            {!loading && (

                <FlatList 
                data={animes}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ListFooterComponent={listFooter} 
                onEndReachedThreshold={0.01}   
                onEndReached={() => searchNext()}           
                />
           )}
           <Modal favoritesIds={favoritesIds} changeFavorites={changeFavorites} current={current} isVisible={isModalVisible} toggleModal={toggleModal}/>
        </Wrapper>
        ) : (
             <Wrapper>
          <Search queryText={queryManga} setQueryText={setQueryManga} search={searchMangas} />
          <SwitchView>
              <SwitchButton isActive={currentType === 'Anime'} onPress={() => setCurrentType('Anime')}>
                  <Span >Anime</Span>
              </SwitchButton>
              <SwitchButton isActive={currentType === 'Manga'} onPress={() => setCurrentType('Manga')}>
                  <Span>Manga</Span>
              </SwitchButton>
          </SwitchView>
            {loadingMangas && <Span>loading mangas...</Span>}
            {!loadingMangas && (

                <FlatList 
                data={ mangas}
                renderItem={renderMangaItem}
                keyExtractor={item => item.id}
                ListFooterComponent={listFooter} 
                onEndReachedThreshold={0.01}   
                onEndReached={() => searchNextMangas()}           
                />
           )}
           <Modal favoritesIds={favoritesMangasIds} changeFavorites={changeFavoritesMangas} current={currentManga} isVisible={isModalMangaVisible} toggleModal={toggleMangaModal}/>
        </Wrapper>
        )
    )
}

export default Home