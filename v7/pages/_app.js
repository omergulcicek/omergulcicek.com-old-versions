import Head from "next/head"

import "@/styles/index.css"
import Layout from "@/layouts/index"

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, follow" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <title>Ömer Gülçiçek | Frontend Developer</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
