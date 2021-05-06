import CategoryItem from "./CategoryItem";
import style from "../../styles/category.module.css";
export default function Categories() {
  // TODO: fetch all images to file systems
  const products = [
    {
      image:
        "http://cdn.getir.com/cat/551430043427d5010a3a5c5e_1619242669958_1619242670038.jpeg",
      title: "Su & İçecek",
    },
    {
      image:
        "http://cdn.getir.com/cat/5928113e616cab00041ec6de_1619242870968_1619242871055.jpeg",
      title: "Meyve & Sebze",
    },
    {
      image:
        "http://cdn.getir.com/cat/566eeb85f9facb0f00b1cb16_1619242817768_1619242817849.jpeg",
      title: "Fırından",
    },
    {
      image:
        "http://cdn.getir.com/cat/56dfcfba86004203000a870d_1619242834654_1619242834734.jpeg",
      title: "Temel Gıda",
    },
    {
      image:
        "http://cdn.getir.com/cat/56dfe03cf82055030022cdc0_1619242841966_1619242842053.jpeg",
      title: "Atıştırmalık",
    },
    {
      image:
        "http://cdn.getir.com/cat/55bca8484dcda90c00e3aa80_1619242741382_1619242741482.jpeg",
      title: "Dondurma",
    },
    {
      image:
        "http://cdn.getir.com/cat/551430043427d5010a3a5c5d_1619242660025_1619242660107.jpeg",
      title: "Yiyecek",
    },
    {
      image:
        "http://cdn.getir.com/cat/56dfed05ab747f03008d9379_1619242850313_1619242850394.jpeg",
      title: "Süt & Kahvaltı",
    },
    {
      image:
        "http://cdn.getir.com/cat/57e2996551f3ee030027e28b_1619242858559_1619242858642.jpeg",
      title: "Fit & Form",
    },
    {
      image:
        "http://cdn.getir.com/cat/551430043427d5010a3a5c5c_1619242651249_1619242651335.jpeg",
      title: "Kişisel Bakım",
    },
    {
      image:
        "http://cdn.getir.com/cat/55449fdf02632e11003c2da8_1619242719523_1619242719602.jpeg",
      title: "Ev Bakım",
    },
    {
      image:
        "http://cdn.getir.com/cat/5b06b056b883b700044e3e4c_1619242916956_1619242917048.jpeg",
      title: "Ev & Yaşam",
    },
    {
      image:
        "http://cdn.getir.com/cat/551430043427d5010a3a5c62_1619242697597_1619242697702.jpeg",
      title: "Teknoloji",
    },
    {
      image:
        "http://cdn.getir.com/cat/551430043427d5010a3a5c63_1619242711604_1619242711687.jpeg",
      title: "Evcil Hayvan",
    },
    {
      image:
        "http://cdn.getir.com/cat/551430043427d5010a3a5c5b_1619242620186_1619242620271.jpeg",
      title: "Bebek",
    },
    {
      image:
        "http://cdn.getir.com/cat/559c07b093be370c0063dd29_1619242727735_1619242727816.jpeg",
      title: "Cinse Sağlık",
    },
    {
      image:
        "http://cdn.getir.com/cat/551430043427d5010a3a5c5f_1619242679723_1619242679822.jpeg",
      title: "Giyim",
    },
  ];

  return (
    // TODO: Shadow vermek icin css'i asagidaki yapi icin duzenle

    // <div className="wrapper">
    //   <div className="container">
    //     <div className="categories">
    //       {products.map((item) => (
    //         <CategoryItem product={item} />
    //       ))}
    //     </div>
    //   </div>
    // </div>

    // TODO: padding-top ve padding-bottom esit degil bi goz at
    <div className="w-screen h-full">
      <div className={style.categoryWrapper}>
        <div className={style.categories}>
          {products.map((item) => (
            <CategoryItem product={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
