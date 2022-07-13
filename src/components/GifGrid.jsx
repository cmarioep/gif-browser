
import React from 'react';
import { useEffect, useState } from 'react';

import GifItem from './GifItem';

import { getGifs } from '../helpers/getGifs';



export default function GifGrid( {category} ) {

  const [images, setimages] = useState( [] );
  

  const getImages = async () => {
    const downloadedImages = await getGifs( category );
    setimages(downloadedImages);
  }


  useEffect( () => {
    getImages();    
  }, [])
  

    
  return (
    <>
        <h3>{ category }</h3>

        <div className="card-grid">
          
          { 
            images.map( ( gift ) => <GifItem key={ gift.id } {...gift} /> ) 
          }

        </div>

        

    </>
  );
}
