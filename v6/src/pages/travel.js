import React from "react"
import { Istanbul } from 'turkey-district-maps-3'
import { Svg } from "../components/Styled"
import "isomorphic-fetch"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

export default function App() {
  return <Layout>
    <SEO title="Seyahat" />

    <section className="travel">
      <p>
        2022 yılı içerisinde sokak sokak gezdiğim, fotoğrafladığım semtleri renklendiriyorum.
      </p>

      <p>
        <a href="https://instagram.com/omergulcicek/" target="_blank" rel="noopener noreferrer" title="Instagram">Instagram adresimde</a> fotoğraflarımı takip edebilirsiniz.
      </p>

      <Istanbul />

      <small>Bu sayfa geliştirme aşamasında. <br /> Gezdiğim yerlerle ilgili belki makale, belki resimler paylaşırım bilmiyorum. İyi bir fikriniz varsa mail atabilirsiniz :)</small>

      <Svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="var(--c-theme)" d="M51.6,-57.2C64.9,-50.4,72.2,-32.2,70.1,-16.5C67.9,-0.8,56.2,12.5,45,20.5C33.9,28.5,23.1,31.4,10.3,42C-2.6,52.6,-17.6,71.1,-32.3,72.7C-47.1,74.3,-61.7,59.2,-69.8,41.9C-77.9,24.6,-79.5,5.1,-75.1,-12.1C-70.7,-29.3,-60.3,-44.4,-46.7,-51.2C-33.2,-58,-16.6,-56.6,1.3,-58.1C19.2,-59.6,38.3,-64.1,51.6,-57.2Z" transform="translate(100 100)" />
      </Svg>
    </section>
  </Layout>
}