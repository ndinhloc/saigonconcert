import Image from "next/image";
import { API } from "../constants";
async function getPage() {
  const res = await fetch(API.getPage("HOME"));
  if (!res.ok) {
    throw new Error("Failed to fecth data");
  }
  return res.json();
}

export default async function HomePage() {
  const pageData = await getPage();

  const content = pageData.data.content.vi;

  return (
    <div>
      <div className="home relative mb-[30px] mb:mb-[80px]">
        <div className="banner row-span-1 col-span-12 mb:col-span-4 mb:absolute mb:overflow-hidden mb:w-full">
          <Image
            src={content[0].slide[0].banner}
            width={2040}
            height={840}
            alt=""
            className="w-full object-cover mb:object-contain h-[calc(100vh-110px)] mb:h-auto"
          ></Image>
        </div>
        <div className="absolute w-fit mb:static h-auto row-start-1 row-end-1 col-start-1 col-end-7 mb:col-end-5 top-1/2 shadow-md -translate-y-1/2 mb:translate-y-20  bg-white rounded-md py-5 px-8">
          <h1 className="text-[#990000] font-playfair text-[48px] mb:text-[32px] font-black mb-5">
            {content[0].slide[0].title}
          </h1>
          <p className="font-gotham text-[16px] font-light">
            {content[0].slide[0].description}
          </p>
        </div>
      </div>
      <div className="home">
        <div className="col-start-1 col-end-8 mb:col-end-5 row-start-2 row-end-2 mb:row-start-3 mb:row-end-3 relative">
          <Image
            src={content[1].image}
            fill={true}
            alt=""
            className=" object-cover mb:object-contain"
          ></Image>
        </div>
        <div className="col-start-8 col-end-13 row-start-2 row-end-2 mb:col-start-1 mb:col-end-5 mb:flex mb:flex-col mb:gap-y-4">
          <p className="text-[14px] text-[#E4B588] font-gotham font-normal">
            {content[1].subTitle.toUpperCase()}
          </p>
          <h1 className=" font-playfair text-[48px] font-black text-[#990000] text-left">
            {content[1].title}
          </h1>
          <p className="font-gotham text-[16px] font-light text-justify my-[30px]">
            {content[1].description}
          </p>
          <div className="flex items-center">
            <svg
              width="70"
              height="70"
              viewBox="0 0 70 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="70" height="70" rx="35" fill="#990000" />
              <path
                d="M31.3636 44L30 42.56L37.2545 35L30 27.44L31.3636 26L40 35L31.3636 44Z"
                fill="white"
              />
            </svg>

            <h1 className="font-playfair font-normal text-[#990000] ml-[24px]">
              Xem chi tiết
            </h1>
          </div>
        </div>
        <div className="row-start-3 row-end-3 mb:row-start-4 mb:row-end-4 mb:col-end-5 col-start-1 col-end-7 mt-[30px] ">
          <div className="flex flex-col">
            <h1 className="text-[14px] text-[#E4B588] font-gotham font-semibold">
              {content[2].subTitle.toUpperCase()}
            </h1>
            <h1 className="font-playfair text-[48px] font-black text-[#990000] text-left">
              {content[2].title}
            </h1>
            <p className="font-gotham text-[16px] font-light text-justify my-[30px]">
              {content[2].description}
            </p>
            <div className="flex gap-x-8 mb:block   ">
              <div>
                <h1 className="font-playfair font-black text-[48px] text-[#990000]">
                  {content[2].inaugurationYear}
                </h1>
                <h2 className="font-gotham font-light text-[14px]">
                  NĂM KHÁNH THÀNH
                </h2>
              </div>
              <div>
                <h1 className="font-playfair font-black text-[48px] text-[#990000]">
                  {content[2].seats}
                </h1>
                <h2 className="font-gotham text-[14px] font-light">GHẾ NGỒI</h2>
              </div>
              <div>
                <h1 className="font-playfair font-black text-[48px] text-[#990000]">
                  {content[2].audience}
                </h1>
                <h2 className="font-gotham text-[14px] font-light">
                  LƯỢT KHÁN GIẢ
                </h2>
              </div>
            </div>
            <div className="flex items-center mt-[30px] mb-[5px]">
              <svg
                width="70"
                height="70"
                viewBox="0 0 70 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="70" height="70" rx="35" fill="#990000" />
                <path
                  d="M31.3636 44L30 42.56L37.2545 35L30 27.44L31.3636 26L40 35L31.3636 44Z"
                  fill="white"
                />
              </svg>

              <h1 className="font-playfair font-normal text-[#990000] ml-[24px]">
                Xem chi tiết
              </h1>
            </div>
          </div>
        </div>
        <div className="row-start-3 row-end-3 mb:row-start-5 mb:row-end-5 col-start-9 col-end-13 mb:col-start-1 mb:col-end-5 z-2 mt-[30px]">
          <Image
            src={content[2].image}
            width={700}
            height={722}
            alt=""
            className="object-cover"
          ></Image>
        </div>
      </div>
    </div>
  );
}
