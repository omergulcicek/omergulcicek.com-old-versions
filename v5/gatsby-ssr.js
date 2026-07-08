import React from "react"

/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    React.createElement("meta", {
      key: "robots",
      name: "robots",
      content: "noindex, follow",
    }),
  ])
}
