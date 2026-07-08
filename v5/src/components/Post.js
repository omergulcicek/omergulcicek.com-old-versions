import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Post = ({ title, date, category, path }) => (
  <Article>
    <Link to={ path }>{ title }</Link>
    <div><span title={ConvertDate(date)}>{ timeAgo(date) }</span> • <span>{ category }</span></div>
  </Article>
)

export default Post

const ConvertDate = d => new Date(d).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })

const timeAgo = date => {
  const seconds = Math.floor((Date.now() - new Date(date)) / 1000)
  const intervals = [
    { label: "yıl", seconds: 31536000 },
    { label: "ay", seconds: 2592000 },
    { label: "gün", seconds: 86400 },
    { label: "saat", seconds: 3600 },
    { label: "dakika", seconds: 60 },
  ]

  for (const interval of intervals) {
    const count = Math.floor(seconds / interval.seconds)
    if (count >= 1) return `${count} ${interval.label} önce`
  }

  return "az önce"
}

const Article = styled.article`
  color: var(--c-grey);
  line-height: 30px;
  margin-top: 36px;

  a {
    color: var(--c-text);
    font-size: 18px;
    line-height: 1;
    text-decoration: none;
    transition: var(--g-transition);
    
    @media (min-width: 992px) {
      font-size: 22px;
    }

    &:focus,
    &:hover {
      color: var(--c-theme);
    }
  }
`
