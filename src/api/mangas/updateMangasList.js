import {useCallback, useEffect, useState} from 'react';
import {API} from '../../api/config';
import {useMangaStore} from '../../stores';

export default () => {
  const [loading, setLoading] = useState(false);
  const {setMangas, mangas, offset, updateOffset} = useMangaStore();

  const loadNext = useCallback(async search => {
    setLoading(true);
    let query = `/manga?page[offset]=${offset}`
    if(search){
      console.log('tem search', search)
      query = `/manga?page[offset]=${offset}&filter[text]=${search}`
    }
    console.log("offset no manga: ", offset)
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
          let arr = data.data;
          arr = [...mangas, ...data.data]
          setMangas(arr)
          updateOffset()
          
      }

      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log('erro statement: ', err);
    }
  }, [offset, mangas]);
  return {loading, loadNext};
};
