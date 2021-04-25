import style from "../../styles/category.module.css";

export default function CategoryItem({ product }) {
  let { image, title } = product;
  return (
    <a href="#" className={style.categoryItem}>
      <figure className={style.imageWrapper}>
        <img className={style.image} src={image} />
      </figure>
      <span className={style.categoryItemTitle}>{title}</span>
    </a>
  );
}
