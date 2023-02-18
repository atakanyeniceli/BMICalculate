import { useContext, useState } from "react";
import MyContext from "../../Context/Context";
import { IBody } from "../../Interface/IBody";

const defaultBody: IBody = {
  height: 0,
  weight: 0,
};

const Calculator = () => {
  const [tempBody, setTempBody] = useState(defaultBody);
  const { setBody } = useContext(MyContext);
  return (
    <div className="flex flex-col justify-center h-full">
      <div className="text-3xl my-2">Hesaplama</div>
      <div>
        <span className="font-semibold text-lg mx-2">Boy:</span>
        <input
          className="border border-black rounded-md px-2 outline-none py-1"
          type="number"
          min={0}
          onChange={(e) =>
            setTempBody({ ...tempBody, height: Number(e.target.value) / 100 })
          }
        />
      </div>
      <div className="my-2">
        <span className="font-semibold text-lg mx-2">Kilo:</span>
        <input
          className="border border-black rounded-md px-2 outline-none py-1"
          type="number"
          min={0}
          onChange={(e) =>
            setTempBody({ ...tempBody, weight: Number(e.target.value) / 100 })
          }
        />
      </div>
      <div className="">
        <button
          className="w-4/5 border text-white bg-[#E30613CC] px-3 py-1 rounded-lg"
          onClick={() => setBody({ ...tempBody })}
        >
          Hesapla
        </button>
      </div>
    </div>
  );
};

export default Calculator;
