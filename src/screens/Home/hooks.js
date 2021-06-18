import { useEffect } from "react";
import {getAnimes} from '../../api/animes'
import {useAnimesStore} from 'src/stores'

export default () => {

    const {loadAnimes, loading} = getAnimes()
    const {animes} = useAnimesStore()

    useEffect(() => {
        loadAnimes()
    }, [])
    
    return{
        loading,
        animes,
        loadAnimes
    }
}