// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

export const getImagen = async () => {
  try {
    const apiKey = "yvO5SBkrbP0GRsh5YqDfIG0R1fk5IxGg";
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    //Desestructuro
    const { data } = await resp.json();
    //desestructuro
    const { url } = data.images.original;
    return url;

    // const img = document.createElement("img");
    // img.src = url;
    // document.body.append(img);
  } catch (error) {
    // manejo del error
    // console.error(error);
    return "No existe Imagen";
  }
};

getImagen();
