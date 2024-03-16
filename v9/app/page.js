import Link from "next/link"

import Hero from "../components/Hero"
import Social from "../components/Social"
import Preview from "../components/Preview"

export default function Page() {
  return (
    <>
      <Hero />
      <Social className="mb-5 sm:mb-16 md:mb-20" />
      <Preview className="mb-5 sm:mb-16 md:mb-20" />
    </>
  )
}
