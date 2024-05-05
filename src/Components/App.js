// import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import { useState } from "react";  

function App() {
  const [images, setImages]  = useState([])

  const onSearchSubmit = async(term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization:
          process.env.REACT_APP_UNSPLASH_API_TOKEN
      }
    });

    console.log(response.data.results);
    setImages(response.data.results)
  }

  return (
    <div className="ui container" style={{ marginTop: '10px' }}>
      {/* the onSubmit is not like onClick this custom method and can be renamed xyz only thing
      to keep in mind is that this should be same at the component end*/}
      <SearchBar onSubmit={onSearchSubmit} />
      <ImageList images={ images } />
    </div>
  )
}

export default App;