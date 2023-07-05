import axios from "axios";
import { useEffect, useState } from "react";
import ENDPOINTS from "../../../utils/constants/endpoints";
import Content from "../../Content";
import GlobalRegions from "../../GlobalRegions";

const Global = () => {
  const [global, setGlobal] = useState([]);
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    getGLobal();
    getGlobalRegions();
  }, []);

  async function getGLobal() {
    const response = await axios(ENDPOINTS.GLOBAL);
    const results = response.data.global;

    setGlobal(results);
  }

  async function getGlobalRegions() {
    const response = await axios(ENDPOINTS.GLOBAL);
    const results = response.data.regions;

    setRegions(results);
  }
  return (
    <div>
      <Content data={global} />
      <GlobalRegions data={regions}/>
    </div>
  );
};
export default Global;
