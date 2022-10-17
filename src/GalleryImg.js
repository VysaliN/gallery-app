import React from "react";

const GalleryImg = ({ data }) => {
  return (
    <div className="row">
      {data.map((image) => (
        <div className="col">
          <div className="key" key={image.id}>
            <img
              src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}
              height="200px"
              width="250px"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default GalleryImg;
