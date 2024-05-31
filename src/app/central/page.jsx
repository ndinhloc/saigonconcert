import React from "react";
import { API } from "../constants";
import Image from "next/image";
async function getPage() {
  const res = await fetch(API.getPage("ABOUT-CENTRAL"));
  if (!res.ok) {
    throw new Error("Failed to fecth data");
  }
  return res.json();
}
export default async function Central() {
  const pageData = await getPage();
  const content = pageData.data.content.vi;

  return (
    <div>
      <div className="home relative">
        <div className="banner row-span-1 col-span-12 mb:col-span-4 mb:absolute mb:overflow-hidden">
          <Image
            src={content[0].slide[0].banner}
            width={2040}
            height={840}
            alt=""
            className="w-full h-[calc(100vh-110px)] object-cover mb:h-auto"
          ></Image>
        </div>
        <div className="absolute mb:static w-fit h-auto row-start-1 row-end-1 col-start-1 col-end-7 mb:col-end-5 top-1/2 -translate-y-1/2 mb:translate-y-20 shadow-md bg-white rounded-md py-5 px-8">
          <p className="text-[14px] text-[#E4B588] font-gotham font-normal">
            {content[0].slide[0].subTitle.toUpperCase()}
          </p>
          <h1 className="text-[#990000] font-playfair text-[48px] mb:text-[32px] font-black mb-5 ">
            {content[0].slide[0].title}
          </h1>
          <p className="font-gotham text-[16px] font-light">
            {content[0].slide[0].description}
          </p>
          <div className="flex items-center mt-5">
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
              Xem phát trực tiếp
            </h1>
          </div>
        </div>
        <div className="row-span-1 col-span-12 mb:col-span-4 items-center  mt-[60px] mb:mt-[80px] mb-[30px]">
          <h1 className="font-playfair text-[#990000] text-[48px] text-center font-black">
            {content[1].title}
          </h1>
        </div>
      </div>
      <div className="home mb:mb-[60px]">
        {content[1].slide.map((item, index) => (
          <div key={index} className="col-span-4 items-center">
            <Image
              src={item.image}
              width={415}
              height={335}
              alt=""
              className="object-cover w-full h-[385px]"
            ></Image>
            <div className="mt-4">
              <h1 className="font-playfair font-semibold text-[#990000] text-[20px] mb-[5px]">
                {item.name}
              </h1>
              <h1 className="font-gotham text-[16px] font-light">{item.address}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
