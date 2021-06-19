import React from 'react'
import {FlatList} from 'react-native'
import { Span, TouchPress } from './styles'

const List = ({data,searchNext,loading, currentType, setCurrentObj}) => {


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
        <>
        {loading && <Span>loading mangas...</Span>}
        {!loading && (
            
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ListFooterComponent={listFooter} 
                onEndReachedThreshold={0.01}   
                onEndReached={() => searchNext()}  
            />
        )}

        </>
    )
}

export default List