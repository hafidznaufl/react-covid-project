import style from "./Table.module.css";
import { data } from "../../utils/constants/provinces";
import { useState } from "react";

const Table = () => {
  const [obj, setObj] = useState(data.provinces);

  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.title}>
          <h1>Provinsi</h1>
          <p>
            <b>Data Covid</b> Berdasarkan Provinsi
          </p>
        </div>
        <div className={style.table}>
          <table>
            <thead>
              <tr>
                <th>No.</th>
                <th>Provinsi</th>
                <th>Positif</th>
                <th>Sembuh</th>
                <th>Meninggal</th>
                <th>Dirawat</th>
              </tr>
            </thead>
            <tbody>
              {obj.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.kota}</td>
                  <td>{item.kasus}</td>
                  <td>{item.sembuh}</td>
                  <td>{item.meninggal}</td>
                  <td>{item.dirawat}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;