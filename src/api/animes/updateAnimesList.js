import {useCallback, useEffect, useState} from 'react';
import {API} from '../../api/config';
import {useAnimesStore} from '../../stores';

export default () => {
  const [loading, setLoading] = useState(false);
  const {setAnimes, animes, offset, updateOffset} = useAnimesStore();

  const loadNext = useCallback(async search => {
    setLoading(true);
    
    let query = `/anime?page[offset]=${offset}`
    
    //change the query paramenter based on user search
    if(search){
      query = `/anime?page[offset]=${offset}&filter[text]=${search}`
    }
    
    try {
      const {data} = await API.get(
        query,
      );
     
      let arr = data.data;
      arr = [...animes, ...data.data]
      setAnimes(arr)

      updateOffset()
  
      setLoading(false);

    } catch (err) {
      setLoading(false);
      console.log('erro statement: ', err);
    }
  }, [offset, animes]);
  return {loading, loadNext};
};
