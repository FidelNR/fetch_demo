import { useEffect, useState } from 'react';
import { useQuery } from 'react-query'; // Importamos useQuery desde React Query

const fetcher = (url: RequestInfo | URL) => fetch(url).then((res) => res.json());

function ReactQuery() {
  const [imgURL, setImageURL] = useState(null);

  // Utilizamos useQuery para obtener datos de la API de Unsplash
  const { data: photos, error, isLoading } = useQuery('photos', () =>
    fetcher('https://jsonplaceholder.typicode.com/photos')
  );

  // Actualizamos el estado con la URL de la primera foto
  useEffect(() => {
    if (photos && photos.length > 0) {
      setImageURL(photos[0].url);
    }
  }, [photos]);

  if (error) return <div>Error al cargar los datos</div>;
  if (isLoading) return <div>Cargando...</div>;

  return (
    <div>
      {imgURL ? (
        <>
          <h1>An image with ReactQuery</h1>
          <img src={imgURL} alt="Texto alternativo" />
        </>
      ) : (
        <p>Cargando imagen...</p>
      )}
    </div>
  );
}

export default ReactQuery;