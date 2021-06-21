import { useEffect, useState } from "react";
import {getMangas, updateMangasList} from '../../api/mangas'
import { useMangaStore} from 'src/stores'

export default () => {

    //mangas
    const {loadMangas, loading:loadingMangas} = getMangas()
    const {loadNext:loadNextMangas, loading:loadingNextMangas} = updateMangasList()
    const {mangas, clearMangas, favorites:favoritesMangas, favoritesIds:favoritesMangasIds, setFavorites:setFavoritesMangas, setFavoritesIds:setFavoritesMangasIds} = useMangaStore()
    
   
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [queryManga, setQueryManga] = useState('')
    const [currentManga, setCurrentManga] = useState({})


    const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
    
   const setCurrentMangaObj = obj => {
    setCurrentManga(obj);
    toggleModal();
  };

    useEffect(() => {
       
        loadMangas()
    }, [])
    

//SEARCH MANGAS FUNCTIONs
    const searchMangas = () => {
        console.log("chamou search mangas")
      clearMangas()
      loadMangas(queryManga)
    }
    const searchNextMangas = () => {
        console.log("chamou search next mangas")
      loadNextMangas(queryManga)
    }

  //function used to manipulate the favorites list (add and remove)


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


    return{
        loadingMangas, 
        mangas,
        queryManga, 
        isModalVisible,
        currentManga,
        favoritesMangasIds,
        favoritesMangas,
        loadingNextMangas,
        searchMangas,
        searchNextMangas, 
        setCurrentMangaObj,
        toggleModal,
        changeFavoritesMangas,
        setQueryManga, 
    }
}