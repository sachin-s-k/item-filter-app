const Info = () => {
  return (
    <>
      <div className="h-28 bg-gray-100 ">
        <div className="flex justify-center gap-8 ">
          <div className="mt-4">
            <div>
              <span className="font-bold text-3xl text-gray-600">
                For better experience,download
              </span>
            </div>
            <div>
              <span className="font-bold text-3xl text-gray-600">
                the app now
              </span>
            </div>
          </div>
          <div className="flex mt-5 gap-4">
            <div className="">
              <img
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"
                alt=""
                srcset=""
                className=" w-48 h-16"
              />
            </div>
            <div>
              <img
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"
                alt=""
                srcset=""
                className=" w-48 h-16"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
