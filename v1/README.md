<p align="center">
<img src="https://omergulcicek.com/img/omergulcicek.png" alt="Ömer Gülçiçek" height="100">
</p>

<a href="https://v1.omergulcicek.com/" target="_blank"><h1 align="center">v1.omergulcicek.com</h1></a>

<a href="https://github.com/facebook/create-react-app">create-react-app</a> kullanılarak geliştirilmiştir. Ek olarak sadece <a href="https://reacttraining.com/react-router/">react-router-dom</a> kullanılmıştır.

```sh
{
    /* ... */
    "dependencies": {
        "react": "^16.3.2",
        "react-dom": "^16.3.2",
        "react-scripts": "1.1.4"
    },
    /* ... */
    "devDependencies": {
        "react-router-dom": "^4.2.2"
    }
}
```

# Kullanımı

İlk olarak **public/index.html**'deki kısımları kendinize göre düzenleyin.

* `<title>Ömer Gülçiçek</title>`                          -> Siteniniz başlığı
* `<meta name="author">`                       -> Siteniniz sahibi
* `<meta name="description">`                  -> Siteniniz açıklaması
* `<meta name="google-site-verification"/>`    -> Siteniniz Google Analytics kodu
* `<meta name="reply-to">`                     -> Site sahinin mail adresi
* `<meta name="theme-color">`                 -> Sitenizin tema rengi

Site ilk çalıştığında **src/index.js**'de `<OmerGulcicek />` componentini çalıştıracaktır.

Değiştirmek istiyorsanız bu kısımları değiştirebilirsiniz.

Site içeriği **src/OmerGulcicek.js**'de **state** içerisindedir, şunlar bulunmaktadır:

---

* `aciklamaListesi`   -> Her sayfada görülen kişisel bilgileri içerir.
						Bu diziye istediğiniz kadar obje ekleyip, çıkartabilirsiniz.

---

* `kisiselBilgiler`   -> Resminizi, ad soyadınızı ve çalıştığınız şirketi barındırır.
						<i>src/img_avatar.png'i değiştirmeniz yeterlidir.</i>
---

* `hakkinda`          -> Ana sayfadaki hakkında yazısıdır.
						Dizi içerisine eklenen her string yeni paragraf olarak ekrana yansıyacaktır.
---

* `hedefler`          -> **omergulcicek.com/hedefler** sayfasında bulunan hedefleri içerir.

```
{
    /* Hedefinizin adı. */
    hedef: "İş bulmak",

    /* Hedefinizi gerçekleştirdiniz mi? true (evet), false (hayır). */
    yapildiMi: true,

    /*
    Detay zorunlu değildir, eğer yazarsanız details tag'ı oluşur.
    Hedef adına tıklandığında buradaki açıklamayı gösterir.
    */
    detay: "Eylül 2017'de Ziraat Teknoloji şirketinde işe başladım."
}
```

---

* `referanslar`       -> **omergulcicek.com/referanslar** sayfasında bulunan referansları içerir.

```
{
    /* Referans adı. */
    ad: "Ömer Gülçiçek",

    /* Site linki. */
    link: "https://github.com/omergulcicek/omergulcicek.com/",

    /* Site ile ilgili kısa bir açıklama. */
    aciklama: "Kişisel sitemin kaynak kodları",

    /* Sitenin yayına alınma tarihi. */
    tarih: "Nisan 2018",

    /*
    Sitede kullanılan teknolojileri içerir. 'src/logolar' klasöründe bulunan logoları baz alır.
    'src/components/Referanslar.js' dosyasında kullanacağınız farklı logoları sayfaya dahil edip,
    'switch-case'i güncellemeyi unutmayın.
    */
    teknolojiler: ["React", "Router"]
}
```

---

* `sonGuncellenmeTarihi`  -> Sitenin son güncellenme tarihini yazar. Sitenin en altında footer'da görünür, ihtiyacınıza göre kaldırabilirsiniz.

---

### Tasarım

Tasarım olarak <a href="http://previews.aspirity.com/spirit/">aspirity.com</a>'daki bir tasarımı baz alarak sıfırdan geliştirdim.

### Yazı Stili

Yazı stili olarak <a href="https://fonts.google.com/specimen/Nunito">Nunito</a> kullanılmıştır.

---

<i>Takıldığınız yerde yada anlamadığınız kodda iletişime geçebilirsiniz.</i>
