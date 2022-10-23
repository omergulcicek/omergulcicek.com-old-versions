import Link from "next/link"

const Navbar = ({ data }) => {
  return (
    <>
      <nav className="flex justify-center gap-x-7 gap-y-3 lg:gap-0 lg:space-x-7 flex-wrap">
        {data.items.map(({ title, link }, index) => (
          <Link href={link} key={index}>
            <a className="text-base lg:text-xl lg:leading-9 no-underline font-normal">
              {title}
            </a>
          </Link>
        ))}
      </nav>
    </>
  )
}

export default Navbar
