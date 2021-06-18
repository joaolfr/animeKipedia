import {useCallback, useEffect, useState} from 'react';
import {API} from '../../api/config';
import {useAnimesStore} from '../../stores';

export default () => {
  const [loading, setLoading] = useState(false);
  const {setAnimes, animes, offset, updateOffset} = useAnimesStore();

  const loadAnimes = useCallback(async search => {
    setLoading(true);
    console.log("current offset: ", offset)
    try {
      const {data} = await API.get(
        `/anime?page[offset]=${offset}`,
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
          
        //   console.log("arr:",data.data)
          arr = [...animes, ...data.data]
          setAnimes(arr)
          updateOffset()
          
      }

      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log('erro statement: ', err);
    }
  }, [offset]);
  return {loading, loadAnimes};
};
