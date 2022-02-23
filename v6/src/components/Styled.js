import styled from "styled-components"

/**
 * 1. Layout
 *    1.1 Header
 *      1.1.1 Brand
 *      1.1.2 Menu
 *    1.2 Main
 *    1.3 Footer
 *  2. Helper Components
 *  3. Pages
 *    3.1 Home
 *    3.2 About
 *    3.3 Blog
 *    3.4 Bootcamp
 *    3.5 My Desk
 *    3.6 Projects
 *  4. Blog Details
 * 
 */

// 1. Layout
//#region 1.1 Header
export const Header = styled.header`
  background-color: #fff;
  border-bottom: 1px solid transparent;
  border-top: 4px solid var(--c-theme);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, .2);
  padding-bottom: 8px;
  padding-top: 8px;
  position: fixed;
  top: -100;
  transform: translateY(0);
  transition: var(--g-transition);
  width: 100%;
  z-index: 10;

  @media (min-width: 992px) {
    flex-direction: row;
    padding-bottom: 24px;
    padding-top: 24px;
  }

  &.is-active {
    box-shadow: none;
    border-bottom-color: rgba(0, 0, 0, .2);
    transform: translateY(-100%);
  }

  section {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: auto;
    max-width: 80%;
    position: relative;

    @media (min-width: 768px) {
      max-width: 540px;
    }

    @media (min-width: 992px) {
      flex-direction: row;
      max-width: 720px;
    }

    @media (min-width: 1200px) {
      max-width: 960px;
    }
  }

  .brand {
    display: none;

    a {
      border: 0;
      font-size: 24px;
      
      span {
        font-size: inherit;
      }
    }

    @media (min-width: 992px) {
      display: block
    }
  }

  div:not(.brand) {
    display: flex;
  }

  svg {
    height: 16px
  }
`

// 1.1.1 Brand

// 1.1.2 Menu
export const Menu = styled.nav`
  align-items: center;
  display: flex;

  a {
    border-bottom: 2px solid transparent;
    color: var(--c-text);
    display: inline-block;
    font-weight: normal;
    margin-right: 4px;
    letter-spacing: 0.2px;
    padding: 12px 4px;
    position: relative;
    text-decoration: none;
    transition: var(--g-transition);
    
    @media (min-width: 992px) {
      margin-right: 16px;
    }

    &::after {
      background-color: var(--c-theme);
      bottom: -2px;
      content: "";
      height: 2px;
      left: 0;
      position: absolute;
      transition: width var(--g-transition);
      width: 0;
    }

    &:focus:not([type="button"]),
    &:hover:not([type="button"]) {
      color: var(--c-theme);
      outline: none;

      &::after {
        width: 100%;
      }
    }

    &[aria-current="page"] {
      border-bottom-color: var(--c-theme);
      color: var(--c-theme);
    }
  }
`
//#endregion

//#region 1.2 Main
export const Main = styled.main`
  flex: 1;
  margin: 120px auto 0;
  max-width: calc(100% - 48px);
  position: relative;
  width: 100%;

  @media (min-width: 768px) {
    max-width: 540px;
  }

  @media (min-width: 992px) {
    margin-top: 160px;
    max-width: 720px;
  }

  @media (min-width: 1200px) {
    max-width: 960px;
  }
`
//#endregion

//#region 1.3 Footer
export const Footer = styled.footer`
  align-items: center;
  background-color: #fff;
  border-top: 2px solid rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  padding: 24px 24px 40px;
  margin-top: 120px;
  text-align: center;
  width: 100%;

  nav {
    margin-bottom: 40px;
    margin-top: 40px;

    a {
      border: none;
      display: inline-block;
      padding: 8px;

      &:not(:last-child) {
        @media (min-width: 992px) {
          margin-right: 16px;
        }
      }

      svg {
        bottom: 0;
        height: 24px;
        padding: 4px;
        position: relative;
        transition: all var(--g-transition);

        @media (min-width: 992px) {
          height: 32px;
          padding: 12px;
        }
      }

      &:focus,
      &:hover {
        color: inherit;
        outline: none;

        svg {
          bottom: 4px;
        }
      }
    }
  }
`
//#endregion

// 2. Helper Components
//#region
export const Title = styled.h1`
  color: var(--c-theme);
  margin-bottom: 32px;

  @media (min-width: 992px) {
    margin-bottom: 64px;
  }

  span {
    color: var(--c-text);
    font-size: inherit;
  }
`

export const Svg = styled.svg`
  display: none;
  opacity: 0.05;
  left: -25%;
  pointer-events: none;
  position: absolute;
  stroke: rgba(0, 0, 0, 0.4);
  stroke-width: 4px;
  top: -120px;
  width: 80%;
  z-index: -1;

  @media (min-width: 992px) {
    display: block;
  }
`

export const Strong = styled.span`
  color: var(--c-theme);

  a {
    text-decoration-color: var(--c-theme);
  }
`

export const H3 = styled.h3`
  color: var(--c-theme);
`

export const Article = styled.article`
  border-left: 2px solid transparent;
  padding-bottom: 80px;

  &:not(:first-of-type) {
    border-top: 1px solid rgba(0,0,0,0.05);
    padding-top: 80px;
  }

  div {
    align-items: center;
    display: flex;
    justify-content: space-between;
    flex: 1 0 100%;
  }

  h2 {
    margin-bottom: 8px;
    margin-top: 0;
  }

  b {
    display: inline-block;
    margin-top: 24px;
  }

  date {
    color: var(--c-grey);
    display: none;
    margin-left: auto;

    @media (min-width: 768px) {
      display: inline-block;
    }
  }

  code {
    font-size: inherit;
  }

  h6 {
    margin-bottom: 16px;
  }

  p {
    margin-top: 16px;
    position: relative;
    transition: var(--g-transition);
  }
`

export const Hr = styled.hr`
  background-color: rgba(0,0,0,0.05);
  border: 0;
  height: 2px;
  margin-bottom: 64px;
  margin-top: 64px;
  width: 100%;
`

export const H2Title = styled.h2`
  align-items: center;
  color: var(--c-theme);
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
  white-space: nowrap;

  @media (min-width: 992px) {
    justify-content: flex-start;
    margin-bottom: 48px;
  }

  span {
    color: var(--c-text);
    font-size: inherit;
  }

  a {
    border: none;
    border-radius: 8px;
    color: var(--c-text);
    display: inline-block;
    font-weight: 400;
    margin-left: 32px;
    text-decoration: none;

    svg {
      margin-left: 8px;
      transition: var(--g-transition);
    }

    
    &:focus svg,
    &:hover svg {
      margin-left: 16px;
    }
  }
`
//#endregion

// 3. Pages
//#region 3.1 Home
export const GetInTouch = styled.div`
  color: var(--c-text);
  padding-bottom: 80px;
  padding-top: 80px;
  text-align: center;

  @media (min-width: 992px) {
    padding-bottom: 160px;
    padding-top: 160px;
  }

  h3 {
    font-size: clamp(1.913rem, calc( 12px + 2.475vw ), 2.587rem);
    margin: 0 0 16px;
    font-weight: 400;
  }

  p {
    margin-bottom: 24px;
  }

  a {
    border: none;
  }
`

export const Button = styled.a`
  color: var(--c-theme);
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  transition: var(--g-transition);

  span {
    letter-spacing: 1px;
  }

  svg {
    margin-left: 8px;
    transition: var(--g-transition);
  }

  &:focus,
  &:hover {
    svg {
      transform: translateX(0.25em);
    }
  }
`
//#endregion

//#region 3.2 About
export const AboutA = styled.a`
  background-color: transparent;
  border-radius: 2px;
  color: #fff;
  cursor: pointer;
  margin: 0 6px;
  overflow: hidden;
  padding: 2px;
  text-decoration: none;
  transition: var(--g-transition);

  &[href] {
    border: none;
  }

  &:focus,
  &:hover {
    text-decoration: underline;
  }
`

export const AboutTurkuaz = styled(AboutA)`
  box-shadow: 0 1px 0 4px rgba(38,166,154,.1), inset 0 40px 0 rgba(38,166,154,.1);
  color: #175f58;

  &:focus,
  &:hover {
    color: #175f58;
  }
`

export const AboutTurkceDokuman = styled(AboutA)`
  box-shadow: 0 1px 0 4px rgba(244,67,54,.1), inset 0 40px 0 rgba(244,67,54,.1);
  color: #a22b22;

  &:focus,
  &:hover {
    color: #a22b22;
  }
`

export const AboutMail = styled(AboutA)`
  box-shadow: 0 1px 0 4px rgba(33,150,243,.1), inset 0 40px 0 rgba(33,150,243,.1);
  color: var(--c-theme);

  &:focus,
  &:hover {
    color: var(--c-theme);
  }
`

export const AboutCompany = styled(AboutA)`
  box-shadow: 0 1px 0 4px rgba(242,103,34,.15), inset 0 40px 0 rgba(242,103,34,.15);
  color: rgba(228, 32, 40, 0.8);

  &:focus,
  &:hover {
    color: rgb(228, 32, 40);
  }
`

export const AboutTitle = styled.h2`
  color: var(--c-theme);
  margin-bottom: 24px;
`

export const AboutFigure = styled.figure`
  background-color: #eee;
  height: 400px;
  display: none;
  margin: 32px -32px;

  @media (min-width: 992px) {
    margin: 64px -96px
  }

  img {
    border-radius: 4px;
    overflow: hidden;
  }
`
//#endregion

//#region 3.3 Blog
export const BlogArticle = styled.article`
  color: var(--c-grey);
  display: inline-block;
  margin-bottom: 24px;
  position: relative;
  width: 100%;
    
  @media (min-width: 992px) {
    margin-bottom: 48px;
    width: 40%;
  }

  a {
    border: none;
    color: var(--c-text);
    font-size: clamp(1.125rem, calc( 12px + 0.900vw ), 1.350rem);
    text-decoration: none;
    transition: var(--g-transition);

    &:focus,
    &:hover {
      color: var(--c-theme);
    }
  }

  div {
    font-weight: 200;
    margin-bottom: 8px;
  }
`
//#endregion

//#region 3.5 Desk
export const DeskFigure = styled.figure`
  background-color: #eee;
  display: none;
  height: 400px;
  margin: 0 -32px 32px;

  @media (min-width: 992px) {
    margin: 0 -96px 64px
  }

  @media (min-width: 1400px) {
    margin: 0 -128px 120px
  }

  img {
    border-radius: 4px;
    overflow: hidden;
  }
`

export const MyDeskGrid = styled.div`
  display: grid;
  gap: 50px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));

  article {
    &.disabled {
      img {
        filter: blur(4px);
        opacity: 0.5;
      }
    }

    figure {
      margin: 0;
      text-align: center;

      img {
        display: block;
        height: 240px;
        margin: 0 auto 32px;
        max-width: 100%;
        object-fit: contain;
        vertical-align: middle;
        transition: var(--g-transition);
      }

      figcaption {
        b {
          color: var(--c-text);
          display: block;
          font-size: clamp(0.900rem, calc( 12px + 0.360vw ), 1.012rem);
          font-weight: 400;
          margin: 0 0 8px;
        }

        span {
          color: var(--c-grey);
        }
      }
    }

    &:not(.disabled):focus img,
    &:not(.disabled):hover img {
      transform: scale(1.1);
    }
  }
`
//#endregion

//#region 3.6 Projects
export const ProjectItem = styled.article`
  align-items: flex-start;
  background: #fff;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.04);
  border-radius: 16px;
  cursor: default;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  position: relative;
  transition: var(--g-transition);

  &:hover {
    background-color: #f7f7f7;

    a {
      color: var(--c-theme);
    }
  }

  h2 {
    font-size: clamp(1.035rem, calc( 12px + 0.540vw ), 1.125rem);
    font-weight: normal;
    margin: 0 0 16px;
  }

  a {
    border-bottom: 0;
    color: var(--c-text);
    display: inline-block;
    font-size: clamp(1.035rem, calc( 12px + 0.540vw ), 1.125rem);
    margin: 0 32px 8px 0;
    text-decoration: none;
  }

  p {
    color: #797474;
    font-size: 16px;
    font-weight: 100;
  }

  aside {
    border-bottom: 1px solid rgba(0,0,0,.05);
    border-top: 1px solid rgba(0,0,0,.05);
    margin-bottom: 16px;
    margin-top: 16px;
    padding-bottom: 16px;
  }

  small {
    font-size: 12px;
    font-weight: 100;
    line-height: 1.618;
    margin-bottom: 0;
    margin-top: 16px;

    @media (min-width: 992px) {
      font-size: 13px;
    }
  }

  .tags {
    margin-top: 16px;
  }

  .tag {
    line-height: 1.618;
    text-rendering: optimizeLegibility;
    align-items: center;
    background-color: #f5f5f5;
    border-radius: 99px;
    color: #191919;
    cursor: default;
    display: inline-flex;
    font-size: 12px;
    font-weight: 400;
    height: 24px;
    justify-content: center;
    overflow: hidden;
    margin-right: 8px;
    padding-left: 8px;
    padding-right: 8px;
  }

  .button {
    align-items: center;
    background-color: rgba(67, 96, 255, 0.1);
    border-radius: 8px;
    box-sizing: border-box;
    color: rgba(67, 96, 255, 1);
    display: flex;
    font-weight: normal;
    letter-spacing: 0.5px;
    justify-content: center;
    margin: 16px 0 0;
    padding-left: 16px;
    padding-right: 24px;
    width: 100%;

    span {
      font-size: 14px;
      line-height: 40px;
    }

    svg {
      position: relative;
      left: 8px;
      opacity: 0.5;
      transition: var(--g-transition);
    }

    &:hover {
      background-color: rgba(67, 96, 255, 0.2);

      svg {
        left: 12px;
        opacity: 1;
      }
    }

  }
`

export const ProjectDesc = styled.p`
  margin-top: 40px;

  @media (min-width: 992px) {
    margin-top: 80px;
  }
`
//#endregion


//#region 3.7 Travel
export const TravelItem = styled.article`
  align-items: flex-end;
  background-repaet: none;
  background-position: center;
  border-radius: 8px;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  height: 264px;
  overflow: hidden;
  padding: 40px 40px 56px;
  position: relative;

  &::after {
    background: rgb(2,0,36);
    background: linear-gradient(0deg, rgba(2,0,36,0.9) 0%, rgba(0,0,0,0.3) 40%, transparent 60%);
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  &:hover {
    background-size: 110% 110%;

    h2 {
      color: var(--c-theme);
    }
  }

  h2 {
    font-family: Corinthia;
    color: #fff;
    font-size: 72px;
    font-weight: bold;
    margin: 0;
    position: relative;
    user-select: none;
    transition: var(--g-transition);
    z-index: 1;
  }

  a {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
  }
`
//#endregion

// 4. Blog Details
//#region
export const BlogDetailsInfo = styled.div`
  color: var(--c-grey);
  margin-bottom: 16px;

  svg {
    vertical-align: middle;
  }

  a {
    color: var(--c-grey);
    border: none;
    display: inline-block;
    padding-bottom: 8px;
    padding-top: 8px;
    text-decoration: none;

    &:focus,
    &:hover {
      color: var(--c-theme);
    }

    &:first-child {
      margin-left: 0;
      margin-right: 0;
    }
  }

  div {
    margin-top: 8px;

    span:first-of-type {
      display: none;
    }

    a:first-of-type {
      margin-left: 0;
    }
    
    @media (min-width: 992px) {
      display: inline-block;
      margin-top: 0;

      span:first-of-type {
        display: inline-block;
      }
  
      a:first-of-type {
        margin-left: 8px;
      }
    }

  }

  a,
  span {
    font-size: clamp(0.900rem, calc( 12px + 0.360vw ), 1.012rem);
    margin-left: 4px;
    margin-right: 4px;
  }
`

export const BlogDetailsTitle = styled.h1`
  color: var(--c-theme);
  margin-bottom: 24px;
  margin-top: 8px;
  position: relative;
`

export const BlogDetailsContent = styled.article`
  h2,
  h3 {
    color: var(--c-text);
    font-weight: 400;
    margin-bottom: 12px;
    margin-top: 64px;
    scroll-margin-top: 140px;
    position: relative;

    &:focus a,
    &:hover a {
      opacity: 1;
    }

    a {
      border: none;
      opacity: 0;
      left: -24px;
      padding-right: 8px;
      position: absolute;
      top: 0;
      transition: var(--g-transition);

      &:focus,
      &:hover {
        opacity: 1;
      }
    }
  }

  h2 {
    color: var(--c-theme);
  }

  h3 {
    color: var(--c-theme);
  }

  h2 + h3 {
    margin-top: 32px;
  }

  figcaption {
    color: var(--c-grey);
    margin-bottom: 56px;
    text-align: center;
  }

  .gatsby-resp-image-wrapper {
    filter: blur(3px);
    margin-bottom: 16px;
    margin-top: 56px;
    opacity: .9;
    transition: var(--g-transition);

    &.loaded {
      filter: blur(0);
      opacity: 1;
    }
  }

  pre {
    border-radius: 8px;
    margin-bottom: 32px;
    margin: 32px 0;
    overflow: auto;
    padding: 24px 12px;

    @media (min-width: 992px) {
      margin: 56px -96px;
      padding: 24px;
    }
  }
`

export const BlogDetailsPagination = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
  list-style: none;
  align-items: stretch;
  padding: 0;
  flex-direction: column-reverse;
  
  @media (min-width: 992px) {
    flex-direction: row;
  }

  li {
    border-radius: 8px;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: calc(50% - 32px);
    transition: var(--g-transition);

    &:first-child {
      text-align: left;
  
      @media (min-width: 992px) {
        text-align: right;
      }
    }

    &:not(:empty) {
      background-color: #F1F4F8;

      &:focus,
      &:hover {
        background-color: #E1E6ED;
      }
    }

    a {
      border: none;
      color: var(--c-text);
      display: block;
      padding: 24px 32px;
      text-decoration: none;

      span {
        color: rgba(0, 0, 0, 0.7);
        display: block;
        margin-bottom: 8px;
      }
    }
  }
`
//#endregion

