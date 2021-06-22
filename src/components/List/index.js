import React from 'react'
import {FlatList} from 'react-native'
import { Span} from './styles'
import {ListCard} from 'src/components'

const List = ({data,searchNext,loading, currentType, setCurrentObj, favorites, error}) => {


    const renderItem = ({item}) => {
    return(
        <ListCard item={item} setCurrentObj={setCurrentObj} />
        )
    }

    const listFooter = () => {
    return(

        <Span>
            {!favorites ? (

                `Loading more ${currentType}...`
            ) : (
                ''
            )}
        </Span>
    
         )
    }

    return(
        <>
        {loading && <Span>Loading {currentType}...</Span>}
        {!loading && (
            data.length > 0 ? (

                <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ListFooterComponent={ listFooter} 
                onEndReachedThreshold={0.01}   
                onEndReached={() => searchNext()}  
                style={{width:'100%'}}
                />
            ) : (
                error ? (
                    <Span>We are being attacked by parasites in the moment :( can you come back later?</Span>
                ):(

                    <Span>No {currentType} on list :(</Span>
                )
            )
        )}

        </>
    )
}

export default List