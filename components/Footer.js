import style from "../styles/footer.module.css";

export default function Footer() {
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
    <div className={style.footer}>
      <div className={style.wrapper}>
        <div className={style.column}>
          <div className={style.title}>Getir'i indirin!</div>
          <div className={style.submenu}>
            {downloadLinks.map((link) => (
              <a href={link.href}>
                <figure>
                  <img src={link.imageUrl} />
                </figure>
              </a>
            ))}
          </div>
        </div>
        <div className={style.column}>
          <div className={style.title}>Getir'i Keşfedin</div>
          <div className={style.submenu}>
            <a href="#">Hakkımızda</a>
            <a href="#">Kariyer</a>
            <a href="#">İletişim</a>
            <a href="#">COVID-19 Duyuru</a>
            <a href="#">Sosyal Sorumluluk Projeleri</a>
          </div>
        </div>
        <div className={style.column}>
          <div className={style.title}>Yardıma mı ihtiyacınız var?</div>
          <div className={style.submenu}>
            <a href="#">Sıkça Sorulan Sorular</a>
            <a href="#">Kişisel Verilerin Korunması</a>
            <a href="#">Gizlilik Politikası</a>
            <a href="#">Kullanım Koşulları</a>
            <a href="#">Çerez Politikası</a>
          </div>
        </div>
        <div className={style.column}>
          <div className={style.title}>İş ortağımız olmak ister misiniz?</div>
          <div className={style.submenu}>
            <a href="#">Bayi Başvurusu</a>
            <a href="#">Restoran Başvurusu</a>
            <a href="#">Çarşı Başvurusu</a>
          </div>
        </div>
      </div>
    </div>
  );
}
