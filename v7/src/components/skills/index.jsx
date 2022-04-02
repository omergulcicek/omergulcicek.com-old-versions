import Subtitle from "@/components/subtitle"

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
    "React Router",
    "NextJS",
    "Gatsby",
    "GraphQL",
    "Prettier",
    "Git",
  ]

  return (
    <>
      <section>
        <Subtitle>teknik yeteneklerim</Subtitle>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-x-5 gap-y-12">
          {arr.map((name, i) => (
            <figure
              className="flex flex-col items-center justify-center h-28"
              key={i}
            >
              <img
                src={`src/assets/svg/skills/${name
                  .replace("-", "")
                  .replace(" ", "")}.svg`}
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
