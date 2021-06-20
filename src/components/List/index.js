import React from 'react'
import {FlatList} from 'react-native'
import { Span, TouchPress } from './styles'
import {ListCard} from 'src/components'

const List = ({data,searchNext,loading, currentType, setCurrentObj}) => {


    const renderItem = ({item}) => {
    return(
        <ListCard item={item} />
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
                style={{width:'100%'}}
            />
        )}

        </>
    )
}

export default List