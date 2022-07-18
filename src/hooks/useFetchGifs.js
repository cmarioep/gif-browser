import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";



export default function componentName( category ) {

    const [images, setImages] = useState( [] );
    const [ isLoading, setIsLoading ] = useState( true );
    

    const getImages = async () => {
        const downloadedImages = await getGifs( category );
        setImages( downloadedImages );
        setIsLoading(  false );

    }


    useEffect( () => {
        getImages();    
    }, [])


    return {
        images,
        isLoading
    }


}
