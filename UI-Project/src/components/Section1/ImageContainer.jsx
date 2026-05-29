import React from 'react'
const ImageContainer = () => {
  return (
    <div className="flex gap-6 overflow-x-auto">
      <div className='relative w-84 h-150 overflow-hidden rounded-xl'>
        <img
          className='w-full h-full object-cover'
          src='https://images.unsplash.com/photo-1777734582660-e0635eea3bd1?w=500&auto=format&fit=crop&q=60'
          alt=''
        />
        <div className='absolute inset-0 bg-black/20'></div>
      </div>

      <div className='relative w-84 h-150 overflow-hidden rounded-xl'>
        <img
          className='w-full h-full object-cover'
          src='https://images.unsplash.com/photo-1779638715091-90c701d94efd?w=500&auto=format&fit=crop&q=60'
          alt=''
        />
        <div className='absolute inset-0 bg-black/20'></div>
      </div>

      <div className='relative w-84 h-150 overflow-hidden rounded-xl'>
        <img
          className='w-full h-full object-cover'
          src='https://plus.unsplash.com/premium_photo-1727456263936-3b6f03ce506d?w=500&auto=format&fit=crop&q=60'
          alt=''
        />
        <div className='absolute inset-0 bg-black/20'></div>
      </div>
    </div>
  )
  // const images = [
  //   {
  //     src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80",
  //     divClass: "relative w-[21rem] h-[37.5rem] overflow-hidden rounded-xl flex-shrink-0",
  //     imgClass: "w-full h-full object-cover"
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=800&auto=format&fit=crop&q=80",
  //     divClass: "relative w-[21rem] h-[37.5rem] overflow-hidden rounded-xl flex-shrink-0",
  //     imgClass: "w-full h-full object-cover"
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&auto=format&fit=crop&q=80",
  //     divClass: "relative w-[21rem] h-[37.5rem] overflow-hidden rounded-xl flex-shrink-0",
  //     imgClass: "w-full h-full object-cover"
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=800&auto=format&fit=crop&q=80",
  //     divClass: "relative w-[21rem] h-[37.5rem] overflow-hidden rounded-xl flex-shrink-0",
  //     imgClass: "w-full h-full object-cover"
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop&q=80",
  //     divClass: "relative w-[21rem] h-[37.5rem] overflow-hidden rounded-xl flex-shrink-0",
  //     imgClass: "w-full h-full object-cover"
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80",
  //     divClass: "relative w-[21rem] h-[37.5rem] overflow-hidden rounded-xl flex-shrink-0",
  //     imgClass: "w-full h-full object-cover"
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&auto=format&fit=crop&q=80",
  //     divClass: "relative w-[21rem] h-[37.5rem] overflow-hidden rounded-xl flex-shrink-0",
  //     imgClass: "w-full h-full object-cover"
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800&auto=format&fit=crop&q=80",
  //     divClass: "relative w-[21rem] h-[37.5rem] overflow-hidden rounded-xl flex-shrink-0",
  //     imgClass: "w-full h-full object-cover"
  //   }
  // ]

}

export default ImageContainer









// <div className='flex justify-center items-center gap-5'>
//   {images.map((image, index) => (
//     <div key={index} className={image.divClass}>
//       <img className={image.divClass} src={image.src} alt="" />
//       {/* <div className="absolute inset-0 bg-black/20"></div> */}
//     </div>
//   ))}