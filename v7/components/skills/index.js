const Skills = () => {
  const arr = [
    "HTML5",
    "CSS3",
    "Sass",
    "less",
    "styled-components",
    "CSS Modules",
    "BEM",
    "Post CSS",
    "Bootstrap",
    "Bulma",
    "Tailwind CSS",
    "Gulp",
    "webpack",
    "Vite",
    "JavaScript",
    "jQuery",
    "React",
    "Redux",
    "Saga",
    "NextJS",
    "Gatsby",
    "GraphQL",
    "Prettier",
    "Git",
  ]

  return (
    <>
      <section>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-x-5 gap-y-12 mt-5">
          {arr.map((name, i) => (
            <figure
              className="flex flex-col items-center justify-center h-28"
              key={i}
            >
              <img
                src={`/svg/skills/${name
                  .replace("-", "")
                  .replace(" ", "")
                  .toLocaleLowerCase()}.svg`}
                alt={name}
                className="w-20 h-16"
              />
              <figcaption className="mt-4">{name}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  )
}

export default Skills
