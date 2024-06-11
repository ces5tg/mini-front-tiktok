import Image from "next/image";

import CardVideo from "./componenets/CardVideo";
import CategorySlider from "./componenets/CategorySlider";

export default function Home() {
  return (
    <>

      {/* <div className="flex justify-center">
      <CategorySlider /> 
      </div> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-6">
        <CardVideo>
          d
        </CardVideo>
        <CardVideo>
          d
        </CardVideo>


      </div>
    </>
  );
}
