import React from 'react'

const ImageContainer = () => {
  

  const images = [
    {
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80",
      divClass: "relative w-[21rem] h-[37.5rem] overflow-hidden rounded-xl flex-shrink-0",
      imgClass: "w-full h-full object-cover"
    },
    {
      src: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=800&auto=format&fit=crop&q=80",
      divClass: "relative w-[21rem] h-[37.5rem] overflow-hidden rounded-xl flex-shrink-0",
      imgClass: "w-full h-full object-cover"
    },
    {
      src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&auto=format&fit=crop&q=80",
      divClass: "relative w-[21rem] h-[37.5rem] overflow-hidden rounded-xl flex-shrink-0",
      imgClass: "w-full h-full object-cover"
    },
    {
      src: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=800&auto=format&fit=crop&q=80",
      divClass: "relative w-[21rem] h-[37.5rem] overflow-hidden rounded-xl flex-shrink-0",
      imgClass: "w-full h-full object-cover"
    },
    {
      src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop&q=80",
      divClass: "relative w-[21rem] h-[37.5rem] overflow-hidden rounded-xl flex-shrink-0",
      imgClass: "w-full h-full object-cover"
    },
    {
      src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80",
      divClass: "relative w-[21rem] h-[37.5rem] overflow-hidden rounded-xl flex-shrink-0",
      imgClass: "w-full h-full object-cover"
    },
    {
      src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&auto=format&fit=crop&q=80",
      divClass: "relative w-[21rem] h-[37.5rem] overflow-hidden rounded-xl flex-shrink-0",
      imgClass: "w-full h-full object-cover"
    },
    {
      src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800&auto=format&fit=crop&q=80",
      divClass: "relative w-[21rem] h-[37.5rem] overflow-hidden rounded-xl flex-shrink-0",
      imgClass: "w-full h-full object-cover"
    }
  ]

  return (
    <div className="flex gap-5 overflow-x-auto ml-60" id='scroll'>
      {images.map((image, index) => (
        <div key={index} className={image.divClass}>
          <img
            className={image.imgClass}
            src={image.src}
            alt=""
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      ))}
    </div>
  )
}

export default ImageContainer






