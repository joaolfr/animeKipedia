import React from 'react'
import { Wrapper, Span, TouchPress } from './styles'
import useHome from './hooks'
import {FlatList} from 'react-native'
import Modal from 'src/components/Modal'
import Search from 'src/components/Search'

const Home = () => {

    const {loading, animes, searchNext, loadingNext, isModalVisible, toggleModal, setCurrentObj, current, changeFavorites, favoritesIds, queryText, setQueryText, search} = useHome()

    const renderItem = ({item}) => {
        return(
            <TouchPress onPress={() => setCurrentObj(item)}>
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
        <Wrapper>
          <Search queryText={queryText} setQueryText={setQueryText} search={search} />
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
    )
}

export default Home