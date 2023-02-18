import { useEffect, useState } from "react";
import { IBody } from "../Interface/IBody";
import MyContext from "./Context";

interface IProps {
  children: JSX.Element | Array<JSX.Element>;
}

const defaultBody: IBody = {
  height: 0,
  weight: 0,
};

const MyContenxtProvider = ({ children }: IProps) => {
  const [body, setBody] = useState(defaultBody);
  const [BMI, setBMI] = useState(0);

  const values = { body, BMI, setBody };

  useEffect(() => {
    if (body.height !== 0 && body.weight !== 0) {
      const tempBMI = body.weight / Math.pow(body.height, 2);
      setBMI(Number((tempBMI * 100).toFixed(2)));
    }
  }, [body]);

  return <MyContext.Provider value={values}>{children}</MyContext.Provider>;
};

export default MyContenxtProvider;
