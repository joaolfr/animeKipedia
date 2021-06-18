import { useState } from "react";
import {useAnimesStore} from 'src/stores'


export default () => {
        const {favoritesIds} = useAnimesStore()

    
    return{
       favoritesIds
    }
}