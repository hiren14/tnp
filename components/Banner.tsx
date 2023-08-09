const Banner = () => {
  return (
   
   
    <div
      className="flex flex-col justify-between font-bold px-20 py-20 mb-15
          lg:flex-row lg:space-x-5"
    >
      <div>
        <h1 className="text-5xl">Tnp Gecp</h1>
        <h2
          className="mt-5
              md:mt-8"
        >
          Welcome to{" "}
          <span className="underline underline-offset-2 decoration-4 decoration-[#8F00FF]">
            the Tnp Site
          </span>
          {""} To Find The .
        </h2>
      </div>
      <p className=" max-w-xs md:mt-2 py-2 mt-6 font-extrabold">
        
        <span className="underline underline-offset-2 decoration-4 decoration-[#8F00FF]">
          {" "}
          Placement Drive{" "}
        </span>{" "}
        for Gec Patan Student.
      </p>
    </div>
  );
};

export default Banner;
