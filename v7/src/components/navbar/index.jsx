import { NavLink } from "react-router-dom"

const Navbar = ({ data }) => {
  return (
    <>
      <nav className="flex flex-wrap items-center justify-center md:h-12">
        {data.items.map(({ title, link }, index) => (
          <NavLink
            className="text-lg md:text-xl md:mx-4 p-3 md:p-0 hover:text-theme-color transition"
            to={link}
            key={index}
          >
            {title}
          </NavLink>
        ))}
      </nav>
    </>
  )
}

export default Navbar
