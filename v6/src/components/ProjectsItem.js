import React from "react"
import projects from "../assets/projects"
import { ProjectItem } from "../components/Styled"
import "isomorphic-fetch"

export default function App({total}) {
  let result = []

  projects() !== null &&
  projects().slice(0, total).map(({ link, title, subtitle }, i) => {
    result.push(
        <ProjectItem key={i}>
          <div>
            <h2>{title}</h2>

            <p>
              {subtitle}
            </p>
          </div>

          <a href={link} className="button" title={title} target="_blank" rel="noopener noreferrer">
            <span>Projeyi İncele</span>
            <svg width="14" height="10"><g stroke="currentColor" fill="none" fill-rule="evenodd"><path d="M8.5.964L13.036 5.5 8.5 10.036"></path><path d="M12.5 5.5H.5" stroke-linecap="square"></path></g></svg>
          </a>
        </ProjectItem>
      )
    }
  )

  return result
}