import { useEffect, useState } from 'react'
import './App.css'
import SWR from './components/SWR.tsx'
import ReactQuery from './components/ReactQuery.tsx';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  const [imgURL, setImageURL] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos",{mode: "cors"})
    .then((response) => response.json())
    .then((response) => setImageURL(response[0].url))
    .catch((error) => console.error(error));
    console.log(imgURL)
  },   [] )

  return (
    <QueryClientProvider client={queryClient}>
    <>
    {imgURL && (
      <>
      <h1>An image FETCH</h1>
      <img src={imgURL} alt={'placeholder Text'}/>
    </>
    )}
    <SWR/>
    <ReactQuery/>
    </>
    </QueryClientProvider>
  )
}

export default App
