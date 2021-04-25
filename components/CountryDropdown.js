export default function CountryDropDown() {
  // TODO: ulkelerin bayraklari ve alan kodlari ile ilgili bir json dosyasi olustur.
  const data = {
    turkey: {
      flag: "🇹🇷",
      phoneCode: "+90",
    },
    germany: {
      flag: "🇩🇪",
      phoneCode: "+49",
    },
    netherlands: {
      flag: "🇳🇱",
      phoneCode: "+31",
    },
  };
  return (
    <select name="cars" id="cars">
      {Object.keys(data).map((item) => (
        <option key={item} value={item}>
          {[data[item].flag, data[item].phoneCode].join(" ")}
        </option>
      ))}
    </select>
  );
}
