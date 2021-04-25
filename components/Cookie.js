import style from "../styles/cookie.module.css"

export default function Cookie(){
    return(
        <div className={style.wrapper}>
            <div className={style.cookie}>
            <span className={style.title}>
                İnternet sitemizde deneyiminizi iyileştirmek ve kişiselleştirmek için çerezler kullanıyoruz. Tüm çerezlerin kullanımını ve verilerinizin bu kapsamda yurtdışına aktarılmasını onaylamak için «Tamam» butonuna tıklayabilirsiniz: 
                <a className={style.cookieSetting} href="#">Çerez Ayarları</a>
            </span>
            <button className={style.button}>Tamam</button>
            </div>
        </div>
    )
}