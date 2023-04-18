import style from "./Table.module.css";

const Table = (props) => {
  const {provinces, setProvinces} = props;

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
                <th>Kasus</th>
                <th>Sembuh</th>
                <th>Meninggal</th>
                <th>Dirawat</th>
              </tr>
            </thead>
            <tbody>
              {provinces.map((province, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{province.kota}</td>
                  <td>{province.kasus}</td>
                  <td>{province.sembuh}</td>
                  <td>{province.meninggal}</td>
                  <td>{province.dirawat}</td>
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
