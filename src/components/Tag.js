import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

// const API_KEY = C26IbHMVIgDHb5t91vpxRNYmeStKcQEo;

const Tag = () => {

  const [tag, setTag] = useState('book');
  
  const {gif, loading, fetchData} = useGif(tag);

  return (
    <div className='w-1/2 bg-blue-700 rounded-2xl border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className='text-2xl underline uppercase font-bold mt-[15px]'>Random {tag} Gif</h1>

      {
        loading ? (<Spinner/>) : (<img src={gif} width="450" alt=''/>)
      }

      <input
        className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'
        onChange={(event) => setTag(event.target.value)}
        placeholder='Search Random GIF...'
        value={tag}
      />

      <button 
      onClick={() => fetchData(tag)}
      className='w-10/12 bg-white text-lg py-2 rounded-lg mb-[20px]'
      >Generate</button>
    </div>
  )
}

export default Tag