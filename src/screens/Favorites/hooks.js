import { useState } from "react";
import {useAnimesStore} from 'src/stores'


export default () => {
        const {favoritesIds, setFavoritesIds, favorites, setFavorites} = useAnimesStore()

    const removeFavorite = movieId => {
    let arr = favorites;
    let list = favoritesIds;

    let index = list.indexOf(movieId);

    arr.splice(index, 1);
    list.splice(index, 1);

    setFavorites(arr);
    setFavoritesIds(list);
  };

    return{
       favoritesIds,
       removeFavorite
    }
}