import Instruction from "./Instruction";
import style from "../../styles/instruction.module.css";

export default function InstructionList() {
  let data = [
    {
      imageUrl:
        "https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg",
      title: "Her siparişinize bir kampanya",
      subtitle:
        "Getir'de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz.",
    },
    {
      imageUrl:
        "https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg",
      title: "Dakikalar içinde kapınızda",
      subtitle: "Getir'le siparişiniz dakikalar içinde kapınıza gelir.",
    },
    {
      imageUrl:
        "https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg",
      title: "Binlerce çeşit mutluluk ",
      subtitle: "Getir'de binlerce çeşit arasından seçiminizi yapabilirsiniz.",
    },
  ];
  return (
    <div className={style.instructionList}>
      {data.map((data) => (
        <Instruction data={data} />
      ))}
    </div>
  );
}
