import Nav from "./Nav"

export default function Header() {
  return (
    <>
      <header className="z-10 sticky lg:static top-2">
        <div className="max-w-[1480px] mx-auto px-4">
          <div className="flex items-center justify-between">
            <Nav />
          </div>
        </div>
      </header>
    </>
  )
}
