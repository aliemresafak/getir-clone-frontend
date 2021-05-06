import style from "../../styles/favorite.module.css";
import FavoriteItem from "./FavoriteItem";
export default function Favorite() {
  let data = [
    {
      imageUrl:
        "http://cdn.getir.com/product/5a7b20fd8e19da0004bb27f8_tr_1615375864268.jpeg",
      price: 2.75,
      title: "Kuzeyden",
      basisWeight: "1.5 L",
    },
    {
      imageUrl:
        "http://cdn.getir.com/product/5bbdbbbaa6e9de25524a27fc_tr_1611157494890.jpeg",
      price: 6.85,
      title: "Kızılay Afyonkarahisar",
      basisWeight: "6 x 200 ml",
    },
    {
      imageUrl:
        "http://cdn.getir.com/product/5bc97caf9c76e6001268c0ac_tr_1601150305064.jpeg",
      price: 7.75,
      title: "Ruffles Originals",
      basisWeight: "150 g",
    },
    {
      imageUrl:
        "http://cdn.getir.com/product/5898a207d5b34d0004dcef4b_tr_1608385708453.jpeg",
      price: 5.35,
      title: "Ülker Sütlü",
      basisWeight: "60 g",
    },
    {
      imageUrl:
        "http://cdn.getir.com/product/5bcdb7e78098cb0035cd16e5_tr_1609904590331.jpeg",
      price: 2.3,
      title: "Tadım Yer Fıstıklı",
      basisWeight: "30 g",
    },
    {
      imageUrl:
        "http://cdn.getir.com/product/559fec01f462100c00461d5c_1553498163026.jpeg?",
      price: 7.0,
      title: "Magnum Badem",
      basisWeight: "100 ml",
    },
    {
      imageUrl:
        "http://cdn.getir.com/product/5c879b921f5acb000125e903_tr_1612851603430.jpeg",
      price: 5.95,
      title: "UNO Tost Ekmeği",
      basisWeight: "350 g",
    },
    {
      imageUrl:
        "http://cdn.getir.com/product/5c879b051f5acb000125e810_tr_1614777004377.jpeg",
      price: 9.75,
      title: "UNO Tam Buğdaylı Ekmek",
      basisWeight: "350 g",
    },
    {
      imageUrl:
        "http://cdn.getir.com/product/5c879b051f5acb000125e810_tr_1614777004377.jpeg",
      price: 18.95,
      title: "CP Büyük Boy",
      basisWeight: "15'li",
    },
    {
      imageUrl:
        "http://cdn.getir.com/product/582337bb5b31d60004489be3_tr_1579699634031.jpeg",
      price: 20.95,
      title: "Sütaş Süzme Peynir",
      basisWeight: "500 g",
    },
    {
      imageUrl:
        "http://cdn.getir.com/product/582337bb5b31d60004489be3_tr_1579699634031.jpeg",
      price: 3.95,
      title: "Nuh'un Ankara Burgu",
      basisWeight: "500 g",
    },
    {
      imageUrl:
        "http://cdn.getir.com/product/582337bb5b31d60004489be3_tr_1579699634031.jpeg",
      price: 24.9,
      title: "Jambon Cheddar Mega",
      basisWeight: "230 g",
    },
    {
      imageUrl:
        "http://cdn.getir.com/product/5c9235bad0222600018b999a_tr_1583485602247.jpeg",
      price: 9.75,
      title: "Patates",
      basisWeight: "2 kg",
    },
    {
      imageUrl:
        "http://cdn.getir.com/product/5cac8bffec184600019a371d_tr_1609123369165.jpeg",
      price: 7.95,
      title: "Kokteyl Domates",
      basisWeight: "500 g",
    },
    {
      imageUrl:
        "http://cdn.getir.com/product/5d7f8dd10ed2c200010d5152_tr_1580804550544.jpeg",
      price: 8.45,
      title: "Domestos Dağ Esintisi",
      basisWeight: "750 ml",
    },
    {
      imageUrl:
        "http://cdn.getir.com/product/5e9056518f097155e41c4f6f_tr_1607433477355.jpeg",
      price: 22.5,
      title: "Antibakteriyel Sıvı Sabun",
      basisWeight: "700 ml",
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
