import { useDispatch, useSelector } from "react-redux";
import Form from "../components/Form";
import Hero from "../components/Hero";
import Table from "../components/Table";
import { resetProvinces } from "../features/provinces/provincesSlice";
import { useEffect } from "react";

const Province = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetProvinces());
  }, []);

  return (
    <main>
      <Hero />
      <Table title={"Provinsi"} />
      <Form />
    </main>
  );
};
export default Province;
