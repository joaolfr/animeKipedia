import {useCallback, useEffect, useState} from 'react';
import {API} from '../../api/config';
import {useAnimesStore} from '../../stores';

export default () => {
  const [loading, setLoading] = useState(false);
  const {setAnimes, animes, offset, updateOffset} = useAnimesStore();

  const loadNext = useCallback(async search => {
    setLoading(true);
    let query = `/anime?page[offset]=${offset}`
    if(search){
      console.log('tem search', search)
      query = `/anime?page[offset]=${offset}&filter[text]=${search}`
    }
    try {
      const {data} = await API.get(
        query,
      );
      if (data.Response === 'False') {
        setAnimes([
          {
            Title: 'Esse filme não existe XD',
            Poster: 'https://ik.imagekit.io/0gpwujpz1/404_ZIzMLGHGz.jpg',
            imdbID: 0,
          },
        ]);
      } else {
          let arr = data.data;
          arr = [...animes, ...data.data]
          setAnimes(arr)
          updateOffset()
          
      }

      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log('erro statement: ', err);
    }
  }, [offset, animes]);
  return {loading, loadNext};
};
