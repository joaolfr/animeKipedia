import { useEffect, useState } from "react";
import {getAnimes, updateAnimesList} from '../../api/animes'
import {useAnimesStore} from 'src/stores'

export default () => {

  //animes
    const {loadAnimes, loading, error} = getAnimes()
    const {loadNext, loading:loadingNext } = updateAnimesList()
    const {animes, clearAnimes, favorites, favoritesIds, setFavorites, setFavoritesIds} = useAnimesStore()

   
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [queryText, setQueryText] = useState('')
    const [current, setCurrent] = useState({})


    const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
    
   const setCurrentObj = obj => {
    setCurrent(obj);
    toggleModal();
  };

    useEffect(() => {
        loadAnimes()
        
    }, [])
    
//SEARCH ANIME FUNCTIONs
    const search = () => {
      clearAnimes()
      loadAnimes(queryText)
    }
    const searchNext = () => {
      loadNext(queryText)
    }

  //function used to manipulate the favorites list (add and remove)
  const changeFavorites = obj => {
    let arr = favorites;
    let list = favoritesIds;

    if (favoritesIds.includes(obj.id)) {
      let index = list.indexOf(obj.id);
      list.splice(index, 1);
      arr.splice(index, 1);
    } else {
      arr.push(obj);
      list.push(obj.id);
    }

    setFavoritesIds(list);
    setFavorites(arr);
  };


    return{
        loading,
        animes, 
        queryText, 
        isModalVisible,
        current,
        favoritesIds,
        loadingNext,
        error,
        search,
        searchNext,
        setCurrentObj,
        toggleModal,
        changeFavorites,
        setQueryText, 
        
    }
}