///ESTA ES UNA FUCNION QUE NO REDIBUJA EL STATE
//SON FUNCIONES QUE RECIBEN ARGUMENTOS LOS PROCDESAN Y NO HACEN NINGUN RETURN
export const getGifs = async (category) => {
  //Hago la peticion https asincrona
  //Se utiliza encodeURI para escapar la peticion { category } por si tiene espacios y otros caracteres
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=20&api_key=6ZEWG64L57qKk4UvlzybfRusvLBHcezU`;
  //capturo la respuestas
  const resp = await fetch(url);
  //convierto la respuestas y desestructuro la data ya que trae mucha informacion
  const { data } = await resp.json();

  //Recorro el array de respueesat para dejar los datos que necesito

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
      //? verefica si trae le url lo usa si no no lo usa.
    };
  });

  console.log(gifs);
  //asigno al nuevo estado los gifs que estoy reciciendo
  // setImages(gifs);
  //retorna una promesa
  return gifs;
};
