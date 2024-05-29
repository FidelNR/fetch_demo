import { useEffect, useState } from 'react';
import axios from 'axios'; // Importamos Axios

function Axios({ }) {
  const [imgURL, setImageURL] = useState(null);

  useEffect(() => {
    // Realizamos una solicitud GET a la API
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then((response) => {
        if (response.data && response.data.length > 0) {
          setImageURL(response.data[0].url);
        }
      })
      .catch((error) => {
        console.error('Error al cargar los datos:', error);
      });
  }, []);

  return (
    <div>
      {imgURL ? (
        <>
          <h1>Una imagen con Axios</h1>
          <img src={imgURL} alt="Texto alternativo" />
        </>
      ) : (
        <p>Cargando imagen...</p>
      )}
    </div>
  );
}

export default Axios;
