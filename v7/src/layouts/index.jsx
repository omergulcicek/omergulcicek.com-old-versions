import Wave from "react-wavify"
import Header from "@layouts/header"
import Footer from "@layouts/footer"

const Layout = ({ children }) => {
  return (
    <>
      <Wave
        className="rotate-180 text-theme-color"
        fill="currentColor"
        options={{
          height: 100,
          amplitude: 15,
          speed: 0.15,
          points: 3,
        }}
      />
      <Header />
      <main className="flex-1 mt-20 tracking-wide">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
