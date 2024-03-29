import Link from "next/link"

const Brand = () => {
  return (
    <>
      <div className="hidden xl:flex items-center items-stretch">
        <Link href="/" aria-label="Ana Sayfa">
          <figure className="p-1 mr-4 cursor-pointer transition hover:scale-105">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              height={40}
              width={40}
            >
              <g>
                <path
                  style={{ fill: "#85BC04" }}
                  d="M315.209,426.498v-37.653c0-34.754,28.174-62.928,62.928-62.928h37.653   c3.622,0,6.558,2.936,6.558,6.558v37.653c0,34.754-28.174,62.928-62.928,62.928h-37.653   C318.144,433.056,315.209,430.12,315.209,426.498z"
                />
                <path
                  style={{ fill: "#85BC04" }}
                  d="M152.58,433.056c-34.754,0-62.928-28.174-62.928-62.928v-37.653c0-3.622,2.936-6.558,6.558-6.558   h37.653c34.754,0,62.928,28.174,62.928,62.928v37.653c0,3.622-2.936,6.558-6.558,6.558H152.58z"
                />
              </g>
              <g>
                <path
                  style={{ fill: "#79AB03" }}
                  d="M345.659,426.498v-37.653c0-34.754,28.173-62.928,62.928-62.928h-30.45   c-34.754,0-62.928,28.173-62.928,62.928v37.653c0,3.621,2.937,6.558,6.558,6.558h30.45   C348.594,433.056,345.659,430.12,345.659,426.498z"
                />
                <path
                  style={{ fill: "#79AB03" }}
                  d="M120.104,370.128v-37.653c0-3.621,2.937-6.558,6.558-6.558h-30.45c-3.621,0-6.558,2.937-6.558,6.558   v37.653c0,34.754,28.174,62.928,62.928,62.928h30.45C148.277,433.056,120.104,404.883,120.104,370.128z"
                />
              </g>
              <path
                style={{ fill: "#720016" }}
                d="M307.829,37.779c-13.838-13.711-31.027-27.102-40.042-33.863C264.421,1.391,260.234,0,256.001,0  c-4.234,0-8.421,1.391-11.785,3.915c-9.017,6.762-26.21,20.153-40.047,33.865l-8.623,8.544v60.666h120.922V46.338L307.829,37.779z"
              />
              <path
                style={{ fill: "#AC2201" }}
                d="M382.431,29.532c-46.33,2.283-89.557,21.992-121.717,55.497l-5.524,5.756v187.767h45.358h23.749  c37.335,0,67.601-30.266,67.601-67.601V38.543C391.898,33.386,387.582,29.278,382.431,29.532L382.431,29.532z"
              />
              <path
                style={{ fill: "#2C7340" }}
                d="M256.001,512c-6.902,0-12.518-5.615-12.518-12.517V237.951h25.036v261.532  C268.518,506.385,262.903,512,256.001,512z"
              />
              <path
                style={{ fill: "#FF3501" }}
                d="M187.705,278.55c-37.335,0-67.601-30.266-67.601-67.601V38.539c0-5.155,4.311-9.262,9.461-9.011l0,0  c46.396,2.258,89.701,22.085,121.943,55.829c32.352,33.858,50.168,78.238,50.168,124.962v68.23H187.705z"
              />
              <path
                style={{ fill: "#AC2201" }}
                d="M147.63,210.95V38.541c0-2.693,1.183-5.093,3.042-6.742c-6.944-1.16-13.989-1.925-21.107-2.271  c-5.148-0.25-9.461,3.856-9.461,9.011v172.41c0,37.335,30.266,67.601,67.601,67.601h27.467  C177.864,278.518,147.63,248.266,147.63,210.95z"
              />
            </svg>
          </figure>
        </Link>

        <div className="flex flex-col justify-between">
          <strong className="text-xl leading-6 font-medium">
            Ömer Gülçiçek
          </strong>
          <span className="text-xl font-light leading-none">
            frontend developer
          </span>
        </div>
      </div>
    </>
  )
}

export default Brand
