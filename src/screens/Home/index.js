import React from 'react'
import { Wrapper, Span } from './styles'
import useHome from './hooks'
import {FlatList, Alert} from 'react-native'

const Home = () => {

    const {loading, animes, loadAnimes} = useHome()

    const renderItem = ({item}) => {
        console.log("item: ", item.id)
        return(
            <Span>
                {item.id}
            </Span>
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
            {/* {loading && <Span>loading animes</Span>}
            {!loading && ( */}

                <FlatList 
                data={animes}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ListFooterComponent={listFooter} 
                onEndReachedThreshold={0.01}   
                onEndReached={() => loadAnimes()}           
                />
            {/* )} */}
        </Wrapper>
    )
}

export default Home