import style from "../../styles/favorite.module.css";
export default function FavoriteItem({ data }) {
  let { imageUrl, price, title, basisWeight } = data;
  return (
    <div className={style.item}>
      <div className={style.image}>{imageUrl}</div>
      <span className={style.price}>{price}</span>
      <span className={style.title}>{title}</span>
      <span className={style.basisWeight}>{basisWeight}</span>
    </div>
  );
}
