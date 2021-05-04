import style from "../../styles/favorite.module.css";
import FavoriteItem from "./FavoriteItem";
export default function Favorite() {
  let data = [
    {
      imageUrl: "",
      price: 2.75,
      title: "Kuzeyden",
      basisWeight: "1.5 L",
    },
    {
      imageUrl: "",
      price: 6.85,
      title: "Kızılay Afyonkarahisar",
      basisWeight: "6 x 200 ml",
    },
    {
      imageUrl: "",
      price: 2.75,
      title: "Kuzeyden",
      basisWeight: "1.5 L",
    },
    {
      imageUrl: "",
      price: 6.85,
      title: "Kızılay Afyonkarahisar",
      basisWeight: "6 x 200 ml",
    },
    {
      imageUrl: "",
      price: 2.75,
      title: "Kuzeyden",
      basisWeight: "1.5 L",
    },
    {
      imageUrl: "",
      price: 6.85,
      title: "Kızılay Afyonkarahisar",
      basisWeight: "6 x 200 ml",
    },
    {
      imageUrl: "",
      price: 2.75,
      title: "Kuzeyden",
      basisWeight: "1.5 L",
    },
    {
      imageUrl: "",
      price: 6.85,
      title: "Kızılay Afyonkarahisar",
      basisWeight: "6 x 200 ml",
    },
    {
      imageUrl: "",
      price: 2.75,
      title: "Kuzeyden",
      basisWeight: "1.5 L",
    },
    {
      imageUrl: "",
      price: 6.85,
      title: "Kızılay Afyonkarahisar",
      basisWeight: "6 x 200 ml",
    },
    {
      imageUrl: "",
      price: 2.75,
      title: "Kuzeyden",
      basisWeight: "1.5 L",
    },
    {
      imageUrl: "",
      price: 6.85,
      title: "Kızılay Afyonkarahisar",
      basisWeight: "6 x 200 ml",
    },
    {
      imageUrl: "",
      price: 2.75,
      title: "Kuzeyden",
      basisWeight: "1.5 L",
    },
    {
      imageUrl: "",
      price: 6.85,
      title: "Kızılay Afyonkarahisar",
      basisWeight: "6 x 200 ml",
    },
    {
      imageUrl: "",
      price: 2.75,
      title: "Kuzeyden",
      basisWeight: "1.5 L",
    },
    {
      imageUrl: "",
      price: 6.85,
      title: "Kızılay Afyonkarahisar",
      basisWeight: "6 x 200 ml",
    },
  ];
  return (
    <div className={style.wrapper}>
      {data.map((product) => (
        <FavoriteItem data={product} />
      ))}
    </div>
  );
}
