import Brand from "@/components/brand"
import Navbar from "@/components/navbar"
import data from "@/public/data/header.json"

const Header = () => {
  return (
    <>
      <header>
        <div className="lg:flex items-center justify-center xl:justify-between">
          <Brand />
          <Navbar data={data} />
        </div>
      </header>
    </>
  )
}

export default Header
