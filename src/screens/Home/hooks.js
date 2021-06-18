import { useEffect, useState } from "react";
import {getAnimes, updateAnimesList} from '../../api/animes'
import {useAnimesStore} from 'src/stores'

export default () => {

    const {loadAnimes, loading} = getAnimes()
    const {loading:loadingNext, loadNext} = updateAnimesList()
    const {animes, favorites, favoritesIds, setFavorites, setFavoritesIds} = useAnimesStore()
 
    const [isModalVisible, setIsModalVisible] = useState(false)

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
        loadNext, 
        loadingNext,
        setCurrentObj,
        toggleModal,
        isModalVisible,
        current,
        changeFavorites,
        favoritesIds
    }
}