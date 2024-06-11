"use client";

function CardVideo({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="hover:bg-gray-100 hover:rounded-t-lg hover:rounded-b-lg hover:border-2 hover:border-gray-300 ">
      <img className="object-center object-cover w-full h-40 rounded-lg" src="https://picsum.photos/200" />
      <div className="flex ">
        <div className="w-12  flex justify-center p-1">
          <div className=" rounded-full bg-red-200 h-10 w-10 flex items-center justify-center ">
            <p className="text-center items-center">s</p>
          </div>
        </div>
        <div className="m-2 font-medium">
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
          <p className="text-sm text-gray-500 font-extralight">Canal de youtube</p>
          <p className="text-sm text-gray-500 font-extralight">3k de visualizaciones <span>hace 1 dia</span> </p>
        </div>
      </div>
    </div>
  );
}

export default CardVideo;
