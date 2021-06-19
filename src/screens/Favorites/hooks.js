import { useState } from "react";
import {useAnimesStore, useMangaStore} from 'src/stores'


export default () => {
        const {favoritesIds, setFavoritesIds, favorites, setFavorites} = useAnimesStore()
        const {favorites:favoritesMangas, favoritesIds:favoritesMangasIds, setFavorites:setFavoritesMangas, setFavoritesIds:setFavoritesMangasIds} = useMangaStore()

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

    return{
       favoritesIds,
       removeFavorite,
       favoritesMangasIds,
       removeFavoriteManga
    }
}