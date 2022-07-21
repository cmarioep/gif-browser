import { GifItem } from './GifItem';
import useFetchGifts from '../hooks/useFetchGifs';




export const GifGrid = ( { category } ) => {


  const { images, isLoading } = useFetchGifts( category )
  
  
  return (
    <>
        <h3>{ category }</h3>

        {
          isLoading && <h2>Loading...</h2>
        }

        <div className="card-grid">
          
          { 
            images.map( ( gift ) => <GifItem key={ gift.id } {...gift} /> ) 
          }

        </div>

        

    </>
  );
}
