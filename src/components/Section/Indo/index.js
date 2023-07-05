import axios from "axios";
import { useEffect, useState } from "react";
import ENDPOINTS from "../../../utils/constants/endpoints";
import ContentSec from "../../Content";
import Table from "../../Table";
import { useDispatch, useSelector } from "react-redux";
import { updateProvinces } from "../../../features/provinces/provincesSlice";

const Indo = () => {
  const [indo, setIndo] = useState([]);
  const provinces = useSelector((state) => state.provinces.provinces);
  const dispatch = useDispatch();

  useEffect(() => {
    getIndo();
    getIndoRegions();
  }, []);

  async function getIndo() {
    const response = await axios(ENDPOINTS.INDONESIA);
    const results = response.data.indonesia;

    setIndo(results);
  }

  async function getIndoRegions() {
    const response = await axios(ENDPOINTS.INDONESIA);
    const results = response.data.regions;

    dispatch(updateProvinces(results));
  }

  return (
    <div>
      <ContentSec data={indo} />
      <Table title={"Situation By Province"} />
    </div>
  );
};
export default Indo;
