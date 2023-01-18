export const getGifs= async( category ) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=MKvX2AiuYapiIGlWS27qD1x8SMkQ6pVG&q=${ category }&limit=20`
    const resp = await fetch(url);
    const {data} = await resp.json();
    
    const gifs = data.map( img =>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url

    }))
    return gifs;
}
