import { useEffect, useRef } from "react"
import Typed from "typed.js"

const Hero = () => {
  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["yazılım mühendisi", "sokak fotoğrafçısı", "satranç oyuncusu"],
      startDelay: 300,
      typeSpeed: 50,
      backDelay: 2000,
      backSpeed: 50,
      loop: true,
    })

    return () => {
      typed.destroy()
    }
  }, [])
  return (
    <>
      <h1 className="text-3xl lg:text-6xl font-semibold my-5">Ömer Gülçiçek</h1>
      <h2 className="text-xl lg:text-2xl font-normal mb-5 md:h-auto">
        <span className="text-red-500">İstanbul</span>'da yaşayan bir{" "}
        <br className="block md:hidden" />
        <span className="text-blue-500" ref={el}></span>
      </h2>
    </>
  )
}

export default Hero
