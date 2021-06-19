import {useCallback, useEffect, useState} from 'react';
import {API} from '../../api/config';
import {useAnimesStore} from '../../stores';

export default () => {
  const [loading, setLoading] = useState(false);
  const {setAnimes} = useAnimesStore();

  const loadAnimes = useCallback(async search => {
    setLoading(true);

    let query = '/anime'

    if(search){
      query = `/anime?filter[text]=${search}`
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
         
          setAnimes(data.data)
        
          
      }

      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log('erro statement: ', err);
    }
  }, []);
  return {loading, loadAnimes};
};
