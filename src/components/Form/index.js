import Pattern from "../../assets/Pattern";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProvinces } from "../../features/provinces/provincesSlice";
import StyledForm from "./Form.styled";

const Form = () => {
  const provinces = useSelector((state) => state.provinces.provinces);
  const dispatch = useDispatch();

  const [kota, setKota] = useState("");
  const [status, setStatus] = useState("");
  const [jumlah, setJumlah] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const index = provinces.findIndex((province) => province.kota === kota);

    if (index !== -1) {
      const updatedProvinces = [...provinces];
      const selectedProvince = { ...updatedProvinces[index] };

      switch (status) {
        case "kasus":
          selectedProvince.kasus += parseInt(jumlah);
          break;
        case "sembuh":
          selectedProvince.sembuh += parseInt(jumlah);
          break;
        case "meninggal":
          selectedProvince.meninggal += parseInt(jumlah);
          break;
        case "dirawat":
          selectedProvince.dirawat += parseInt(jumlah);
          break;
        default:
          break;
      }

      updatedProvinces[index] = selectedProvince;

      dispatch(updateProvinces(updatedProvinces));
    }

    setKota("");
    setStatus("");
    setJumlah("");
  };

  const handleReset = (e) => {
    setKota("");
    setStatus("");
    setJumlah("");
  };

  return (
    <StyledForm>
      <div className="content">
        <div className="left">
          <Pattern />
        </div>

        <div className="right">
          <div className="title">
            <h1>Form Covid</h1>
          </div>

          <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="kota">Kota</label>
            <select
              id="kota"
              value={kota}
              onChange={(e) => setKota(e.target.value)}
            >
              <option value="">Select Kota</option>
              {provinces &&
                provinces.map((province, index) => (
                  <option value={province.kota} key={index}>
                    {province.kota}
                  </option>
                ))}
            </select>

            <label htmlFor="status">Status</label>
            <select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="">Select Status</option>
              <option value="kasus">Kasus</option>
              <option value="sembuh">Sembuh</option>
              <option value="meninggal">Meninggal</option>
              <option value="dirawat">Dirawat</option>
            </select>

            <label htmlFor="jumlah">Jumlah</label>
            <input
              id="jumlah"
              type="number"
              value={jumlah}
              onChange={(e) => setJumlah(e.target.value)}
            />

            <div className="button">
              <button className="button__submit" type="submit">
                ADD/UPDATE
              </button>
              <button
                onClick={handleReset}
                className="button__reset"
                type="button"
              >
                RESET
              </button>
            </div>
          </form>
        </div>
      </div>
    </StyledForm>
  );
};

export default Form;
