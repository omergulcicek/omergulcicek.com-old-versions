import { Link } from "react-router-dom"

const Brand = ({ data }) => {
  const { title, subtitle } = data

  return (
    <>
      <div className="hidden xl:flex items-center items-stretch">
        <Link to="/" aria-label="Ana Sayfa">
          <figure className="bg-theme-color rounded p-3 mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              height={24}
              width={24}
            >
              <path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z" />
            </svg>
          </figure>
        </Link>

        <div className="flex flex-col justify-between">
          <strong className="text-xl leading-6">{title}</strong>
          <span className="text-lg font-thin leading-none">{subtitle}</span>
        </div>
      </div>
    </>
  )
}

export default Brand
