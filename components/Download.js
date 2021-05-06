import style from "../styles/download.module.css";
export default function Download() {
  let downloadLinks = [
    {
      imageUrl:
        "https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg",
      href: "#",
    },
    {
      imageUrl:
        "https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg",
      href: "#",
    },
    {
      imageUrl:
        "https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg",
      href: "#",
    },
  ];
  return (
    <div className={style.wrapper}>
      <div className={style.left}>
        <h1>Getir'i indirin!</h1>
        <h5>İstediğiniz ürünleri dakikalar içinde kapınıza getirelim</h5>
        <div>
          <figure className={style.images}>
            {downloadLinks.map((downloadLink) => (
              <a href={downloadLink.href}>
                <img src={downloadLink.imageUrl} />
              </a>
            ))}
          </figure>
        </div>
      </div>

      <div className={style.right}>
        <figure>
          <img src="https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png" />
        </figure>
      </div>
    </div>
  );
}
