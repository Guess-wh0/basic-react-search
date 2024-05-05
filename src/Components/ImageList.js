import './ImageList.css';
import ImageShow from './ImageShow';

function ImageList({ images }) {
  const showImages = images.map((image)=> {
    // key prop should be added to top object. if below component is enclosed in div then KEY should be assigned to div
    return <ImageShow key={image.id} image={image} />
  })

  return (<div class='image-list'>Image List: <br />
    { showImages }
  </div>)
}

export default ImageList;