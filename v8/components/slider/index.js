import { useState, useEffect } from "react"

import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const SliderComp = (props) => {
  const [sliderItems, setSliderItems] = useState([])

  var settings = {
    arrows: false,
    autoplay: true,
    infinite: true,
    fade: true,
    autoplaySpeed: 3500,
    slidesToShow: 1,
  }

  useEffect(() => {
    const arr = []

    for (let i = 2; i < 13; i++) {
      arr.push(
        <div key={i}>
          <figure className="mb-12 lg:mb-0 h-auto">
            <img
              src={`/img/${i}.jpg`}
              alt="Ömer Gülçiçek"
              width={400}
              height={533}
              className="rounded-lg"
            />
          </figure>
        </div>
      )
    }

    setSliderItems(arr)
  }, [])
  return (
    <>
      <Slider
        {...settings}
        className="w-[calc(%92.5)] overflow-hidden"
        {...props}
      >
        {sliderItems}
      </Slider>
    </>
  )
}

export default SliderComp
