import React from 'react'


const PhotoBar = () => {
  return (
    <div className="photoBar">
        <img className="photobar-photo" src={require("./Photobar/asia-on-argyle.jpeg")} alt="Ward 48 1"/>
        <img className="photobar-photo" src={require("./Photobar/Edgewater-neighborhood-Flats-Apartments-in-Chicago-the-ridge-5600-n-ridge-the-windale-6019-n-winthrop-street-view.jpeg")} alt="Ward 48 2"/>
        <img className="photobar-photo" src={require("./Photobar/edgewater-storefront.png")} alt="Ward 48 3"/>
        <img className="photobar-photo" src={require("./Photobar/pexels-otto-rascon-9801599.jpeg")} alt="Ward 48 4 "/>
    </div>
  )
}

export default PhotoBar