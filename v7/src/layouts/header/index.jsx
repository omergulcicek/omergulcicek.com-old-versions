import Brand from "@components/brand"
import Navbar from "@components/navbar"
import data from "@assets/data/header.json"

const Header = () => {
  return (
    <>
      <header className="flex xl:justify-between flex-col xl:flex-row md:pb-16">
        <Brand
          data={{ title: "Ömer Gülçiçek", subtitle: "Frontend Developer" }}
        />

        <Navbar data={data} />
      </header>
    </>
  )
}

export default Header
