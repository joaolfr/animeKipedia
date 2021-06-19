import {useCallback, useEffect, useState} from 'react';
import {API} from '../../api/config';
import {useMangaStore} from '../../stores';

export default () => {
  const [loading, setLoading] = useState(false);
  const {setMangas} = useMangaStore();

  const loadMangas = useCallback(async search => {
    setLoading(true);

    let query = '/manga'

    if(search){
      query = `/manga?filter[text]=${search}`
    }

    try {
      const {data} = await API.get(
        query,
      );
      if (data.Response === 'False') {
        setMangas([
          {
            Title: 'Esse filme não existe XD',
            Poster: 'https://ik.imagekit.io/0gpwujpz1/404_ZIzMLGHGz.jpg',
            imdbID: 0,
          },
        ]);
      } else {
         
          setMangas(data.data)
        
          
      }

      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log('erro statement: ', err);
    }
  }, []);
  return {loading, loadMangas};
};
