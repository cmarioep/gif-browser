
import React from 'react';
import { useEffect, useState } from 'react';

import GifItem from './GifItem';
import useFetchGifts from '../hooks/useFetchGifs';




export default function GifGrid( {category} ) {


  const { images, isLoading } = useFetchGifts( category )
  

  

    
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
