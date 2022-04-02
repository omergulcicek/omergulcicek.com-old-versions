import {
  A16,
  A17,
  A18,
  A19,
  A20,
  A21,
  A22,
  A23,
  A24,
  A25,
  A26,
  A27,
} from "@/pages/articles"

const GetArticle = ({ url }) => {
  switch (url) {
    case "styled-component-ile-dinamik-css-yazmak":
      return <A27 />

    case "2022-hedeflerim":
      return <A26 />

    case "2021-degerlendirmesi":
      return <A25 />

    case "css-container-sorgulari":
      return <A24 />

    case "javascript-selectorlerinin-calisma-hizlari":
      return <A23 />

    case "izmir-marmaris-oludeniz-tatili":
      return <A22 />

    case "csste-min-max-ve-clamp-fonksiyonlari":
      return <A21 />

    case "renk-kontrastini-hesaplama":
      return <A20 />

    case "cep-herkulu-naim-suleymanoglu":
      return <A19 />

    case "css-mantiksal-ozellikler":
      return <A18 />

    case "miyop-lazer-goz-ameliyati":
      return <A17 />

    case "macbook-pro-m1-deneyimlerim":
      return <A16 />

    default:
      break
  }
}

export default GetArticle
