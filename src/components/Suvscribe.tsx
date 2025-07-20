const Subscribe = () => {
  return (
    <div className="mt-20 mb-16">
      <div className="mycon flex  bg-[#E8F1F1] items-center h-[200px] justify-center gap-x-[40px] rounded-md">
        <p className="w-[266px] text-[#183354] text-[24px] font-bold">
          Get Our Latest Gaming News & Update
        </p>
        <form action="" className="flex gap-x-[14px]">
          <input
            type="text"
            className="w-[300px]  h-[50px] py-[13px] px-[20px]   text-gray-500 outline-none rounded-md "
            placeholder="Name"
          />
          <input
            type="text"
            className="w-[300px] h-[50px] py-[13px] px-[20px] text-gray-500 outline-none rounded-md"
            placeholder="Email"
          />
          <button className="w-[170px] h-[50px] bg-[#F4796C] rounded-md text-white font-bold">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
