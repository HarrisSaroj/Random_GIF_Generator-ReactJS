import axios from 'axios';
import React, { useEffect, useState } from 'react'

const url = `https://api.giphy.com/v1/gifs/random?api_key=C26IbHMVIgDHb5t91vpxRNYmeStKcQEo`;

const useGif = (tag) => {
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState('false');
  
  
    async function fetchData(tag){ 
  
      setLoading(true);
      const {data} = await axios.get(tag ? `${url}&tag=${tag}` : url);
      const imageSource = data.data.images.downsized_large.url;
      setGif(imageSource);
      setLoading(false);
    }
  
    useEffect(()=>{
      fetchData('middle finger');
    },[])

  
    return {gif, loading, fetchData}
}

export default useGif