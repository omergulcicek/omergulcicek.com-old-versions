const Footer = () => {
  return (
    <>
      <footer className="flex flex-col md:flex-row items-center text-center md:justify-between gap-5">
        <span>© {new Date().getFullYear()} / Ömer Gülçiçek</span>
        <p className="mb-0">
          Bu web sitesinin kaynak kodlarına{" "}
          <a
            href="https://github.com/omergulcicek/omergulcicek.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Github üzerinden
          </a>{" "}
          ulaşabilirsiniz.
        </p>
      </footer>
    </>
  )
}

export default Footer
