import { useSelector } from "react-redux";
import style from "./Table.module.css";

const Table = ({ title }) => {
  const provinces = useSelector((state) => state.provinces.provinces);

  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.title}>
          <h1>{title}</h1>
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
                <th>Kasus</th>
                <th>Sembuh</th>
                <th>Meninggal</th>
                <th>Dirawat</th>
              </tr>
            </thead>
            <tbody>
              {provinces &&
                provinces.map((province, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      {province.kota !== undefined
                        ? province.kota
                        : province.name}
                    </td>
                    <td>
                      {province.kasus !== undefined
                        ? province.kasus
                        : province.numbers?.confirmed}
                    </td>
                    <td>
                      {province.sembuh !== undefined
                        ? province.sembuh
                        : province.numbers?.recovered}
                    </td>
                    <td>
                      {province.meninggal !== undefined
                        ? province.meninggal
                        : province.numbers?.death}
                    </td>
                    <td>
                      {province.dirawat !== undefined
                        ? province.dirawat
                        : province.numbers?.treatment}
                    </td>
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
