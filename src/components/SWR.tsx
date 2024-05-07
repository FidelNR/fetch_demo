/*import { useEffect, useState } from 'react';
import useSWR from 'swr';

function SWR() {
  const [imgURL, setImageURL] = useState(null);

  // Utiliza useSWR para cargar los datos de la API JSONPlaceholder
  const { data: photos } = useSWR("https://jsonplaceholder.typicode.com/photos");

  // Actualiza el estado con la URL de la primera foto
  useEffect(() => {
    if (photos && photos.length > 0) {
      console.log('URL de la imagen:', photos[0].url); // Verificación de consola
      setImageURL(photos[0].url);
    }
  }, [photos]);

  return (
    <>
      {imgURL ? (
        <>
          <h1>An image with SWR</h1>
          <img src={imgURL} alt={'placeholder Text'} />
        </>
      ) : (
        <p>Cargando imagen...</p>
      )}
    </>
  );
}

export default SWR;*/

import { useEffect, useState } from 'react';
import useSWR, { SWRConfig } from 'swr';

const fetcher = (url: RequestInfo | URL) => fetch(url).then(res => res.json());

function SWR() {
  const [imgURL, setImageURL] = useState(null);

  // Utiliza useSWR para cargar los datos de la API JSONPlaceholder
  const { data: photos, error } = useSWR("https://jsonplaceholder.typicode.com/photos", fetcher);

  // Actualiza el estado con la URL de la primera foto
  useEffect(() => {
    if (photos && photos.length > 0) {
      setImageURL(photos[0].url);
    }
  }, [photos]);

  if (error) return <div>Error al cargar los datos</div>;
  if (!photos) return <div>Cargando...</div>;

  return (
    <SWRConfig value={{ suspense: true }}>
      {imgURL && (
        <>
          <h1>An image with SWR</h1>
          <img src={imgURL} alt={'placeholder Text'} />
        </>
      )}
    </SWRConfig>
  );
}

export default SWR;
