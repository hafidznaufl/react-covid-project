import style from "./Form.module.css";
import Pattern from "../../assets/Pattern";
import { useState } from "react";

const Form = (props) => {
  const { provinces, setProvinces } = props;

  const [kota, setKota] = useState("");
  const [kasus, setKasus] = useState(0);
  const [sembuh, setSembuh] = useState(0);
  const [meninggal, setMeninggal] = useState(0);
  const [dirawat, setDirawat] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const index = provinces.findIndex((province) => province.kota === kota);

    const data = {
      ...provinces[index],
      kota: kota,
      kasus: kasus,
      sembuh: sembuh,
      meninggal: meninggal,
      dirawat: dirawat,
    };

    setProvinces([
      ...provinces.slice(0, index),
      data,
      ...provinces.slice(index + 1),
    ]);

    setKota("");
    setKasus(0);
    setSembuh(0);
    setMeninggal(0);
    setDirawat(0);
  };

  const handleReset = () => {
    setKota("");
    setKasus(0);
    setSembuh(0);
    setMeninggal(0);
    setDirawat(0);
  }

  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.left}>
          <Pattern />
        </div>

        <div className={style.right}>
          <div className={style.title}>
            <h1>Form Covid</h1>
          </div>

          <form className={style.form} onSubmit={handleSubmit}>
            <label htmlFor="kota">Kota</label>
            <select
              id="kota"
              value={kota}
              onChange={(e) => setKota(e.target.value)}
            >
              <option value="">Select Kota</option>
              {provinces.map((province, index) => (
                <option value={province.kota} key={index}>
                  {province.kota}
                </option>
              ))}
            </select>
            <label htmlFor="kasus">Kasus</label>
            <input
              id="kasus"
              type="number"
              value={kasus}
              onChange={(e) => setKasus(e.target.value)}
            />
            <label htmlFor="">Sembuh</label>
            <input
              id="Sembuh"
              type="number"
              value={sembuh}
              onChange={(e) => setSembuh(e.target.value)}
            />
            <label htmlFor="">Meninggal</label>
            <input
              id="Meninggal"
              type="number"
              value={meninggal}
              onChange={(e) => setMeninggal(e.target.value)}
            />
            <label htmlFor="">Dirawat</label>
            <input
              id="Dirawat"
              type="number"
              value={dirawat}
              onChange={(e) => setDirawat(e.target.value)}
            />

            <button className={style.button__submit}>ADD/UPDATE</button>
            <button onClick={handleReset} className={style.button__reset}>RESET</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
