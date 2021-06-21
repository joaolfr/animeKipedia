import { useState } from "react";
import {useAnimesStore, useMangaStore} from 'src/stores'


export default () => {
    const {favoritesIds, setFavoritesIds, favorites, setFavorites} = useAnimesStore()
    const {favorites:favoritesMangas, favoritesIds:favoritesMangasIds, setFavorites:setFavoritesMangas, setFavoritesIds:setFavoritesMangasIds} = useMangaStore()

    const [currentManga, setCurrentManga] = useState({})
    const [current, setCurrent] = useState({})
    const [isModalVisible, setIsModalVisible] = useState(false)


    const toggleModal = () => {
      setIsModalVisible(!isModalVisible);
  };
    
   const setCurrentMangaObj = obj => {
    setCurrentManga(obj);
    toggleModal();
  };

   const setCurrentObj = obj => {
    setCurrent(obj);
    toggleModal();
  };







    const removeFavorite = movieId => {
    let arr = favorites;
    let list = favoritesIds;

    let index = list.indexOf(movieId);

    arr.splice(index, 1);
    list.splice(index, 1);

    setFavorites(arr);
    setFavoritesIds(list);
  };

   const removeFavoriteManga = mangaId => {
    let arr = favoritesMangas;
    let list = favoritesMangasIds;

    let index = list.indexOf(mangaId);

    arr.splice(index, 1);
    list.splice(index, 1);

    setFavoritesMangas(arr);
    setFavoritesMangasIds(list);
  };

   const changeFavoritesMangas = obj => {
    let arr = favoritesMangas;
    let list = favoritesMangasIds;
    if (favoritesMangasIds.includes(obj.id)) {
      let index = list.indexOf(obj.id);
      list.splice(index, 1);
      arr.splice(index, 1);
    } else {
      arr.push(obj);
      list.push(obj.id);
    }

    setFavoritesMangasIds(list);
    setFavoritesMangas(arr);
  };

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
      favorites,
      favoritesMangas,
      favoritesIds,
      isModalVisible,
      removeFavorite,
      favoritesMangasIds,
      removeFavoriteManga,
      toggleModal,
      current,
      currentManga,
      setCurrentObj,
      setCurrentMangaObj,
      changeFavorites,
      changeFavoritesMangas
    }
}