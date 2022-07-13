export const getGifs = async( category ) => {

    const urlAPI = `https://api.giphy.com/v1/gifs/search?api_key=nE2GD1f5zbalMnkXIqJZy8ruQWRSXbt7&q=${ category }&limit=3`;
  
    const respond = await fetch( urlAPI );
    const { data } = await respond.json();
  
    const gifs = data.map ( gif => (
      {
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url
  
    
      }
    ));

    console.log( gifs );
  
    return gifs;
  
  }