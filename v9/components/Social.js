import Link from "next/link"

export default function Social({ className }) {
  return (
    <>
      <section className={`${className ? className : ""}`}>
        <div className="inline-flex flex-col md:flex-row gap-3 mt-6 pt-5">
          <Link
            href="https://github.com/omergulcicek?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded hover:bg-black/[.025] p-4 no-underline hover:no-underline"
          >
            <figure>
              <svg
                width="1792"
                height="1792"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="#fee16d"
              >
                <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
              </svg>
            </figure>

            <div className="flex flex-col items-start">
              <strong className="font-mono text-xl md:text-3xl leading-none font-normal mb-2 text-zinc-600 dark:text-zinc-400">
                1.000+
              </strong>
              <small className="text-gray-500 font-mono text-sm">
                GitHub yıldızı
              </small>
            </div>
          </Link>

          <Link
            href="https://instagram.com/omergulcicek"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded hover:bg-black/[.025] p-4 no-underline hover:no-underline hover:text-black"
          >
            <figure>
              <svg
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="h-5 w-5 mr-2"
              >
                <path
                  fill="#c13584"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                ></path>
              </svg>
            </figure>

            <div className="flex flex-col items-start">
              <strong className="font-mono text-xl md:text-3xl leading-none font-normal mb-2 text-zinc-600 dark:text-zinc-400">
                1.000+
              </strong>
              <small className="text-gray-500 font-mono text-sm">
                Instagram takipçisi
              </small>
            </div>
          </Link>
        </div>
      </section>
    </>
  )
}
