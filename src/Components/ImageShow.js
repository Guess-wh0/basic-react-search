function ImageShow({ image }) {
  return <div>
    <h6>
      {image.alt_description || "no description provided"}
    </h6>
    <img src={image.urls.small} alt={image.description} />
  </div>
}

export default ImageShow;