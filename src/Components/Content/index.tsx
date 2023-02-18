import Calculator from "./Calculator";
import Description from "./Description";
import Result from "./Result";

const Content = () => {
  return (
    <div className="">
      <div className="grid grid-cols-2">
        <div className="col-span-1">
          <Calculator />
        </div>
        <div className="col-span-1 w-1/2 mx-auto">
          <Result />
        </div>
      </div>
      <div className="mt-5">
        <Description />
      </div>
    </div>
  );
};

export default Content;
