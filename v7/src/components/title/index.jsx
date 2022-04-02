const Title = ({ children }) => {
  return (
    <h1 className="text-4xl md:text-7xl leading-10 md:leading-tight font-bold text-theme-color mb-6 md:mb-16 text-center md:text-left">
      {children}
    </h1>
  )
}

export default Title
