import style from "../../styles/instruction.module.css";

export default function Instruction({ data }) {
  return (
    <div className={style.instruction}>
      <div className={style.wrapper}>
        <figure>
          <img src={data.imageUrl} />
        </figure>
        <span className={style.title}>{data.title}</span>
        <span className={style.subtitle}>{data.subtitle}</span>
      </div>
    </div>
  );
}
