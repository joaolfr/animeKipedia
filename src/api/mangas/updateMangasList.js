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
      query = `/manga?page[offset]=${offset}&filter[text]=${search}`
    }
    
    try {
      const {data} = await API.get(
        query,
      );
    
      let arr = data.data;
      arr = [...mangas, ...data.data]
      setMangas(arr)
      updateOffset()
  
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log('erro statement: ', err);
    }
  }, [offset, mangas]);
  return {loading, loadNext};
};
