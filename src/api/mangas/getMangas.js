import {useCallback, useEffect, useState} from 'react';
import {API} from '../../api/config';
import {useMangaStore} from '../../stores';

export default () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const {setMangas} = useMangaStore();

  const loadMangas = useCallback(async search => {
    setLoading(true);
    setError(false)
    let query = '/manga'

    if(search){
      query = `/manga?filter[text]=${search}`
    }

    try {
      const {data} = await API.get(
        query,
      );
           
      setMangas(data.data)

      setLoading(false);

    } catch (err) {
      setLoading(false);
      setError(true)
      console.log('erro statement: ', err);
    }
  }, []);
  return {loading, loadMangas, error};
};
