import {useCallback, useEffect, useState} from 'react';
import {API} from '../../api/config';
import {useAnimesStore} from '../../stores';

export default () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const {setAnimes} = useAnimesStore();

  const loadAnimes = useCallback(async search => {
    setLoading(true);
    setError(false);

    let query = '/anime'

    if(search){
      query = `/anime?filter[text]=${search}`
    }

    try {
      const {data} = await API.get(
        query,
      );
   
      setAnimes(data.data)
  
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(true)
      console.log('erro statement: ', err);
    }
  }, []);
  return {loading, loadAnimes, error};
};
