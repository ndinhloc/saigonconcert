import React from "react";
import { API } from "../constants";
import Image from "next/image";

import Category from "../components/Category";
import Shows from "../components/Shows";
async function getPage() {
  const res = await fetch(API.getPage("ABOUT-OPERA-HOUSE"));
  if (!res.ok) {
    throw new Error("Failed to fecth data");
  }
  return res.json();
}

async function getShowCategory() {
  const res = await fetch(API.showCategory);
  if (!res.ok) {
    throw new Error("Failed to fecth data");
  }
  return res.json();
}

export default async function OperaHouse({ searchParams }) {
  const category = searchParams?.category || "";
  const currentPage = searchParams?.page || 1;

  const [pageDataRes, categoryRes] = await Promise.all([
    getPage(),

    getShowCategory(),
  ]);
  const content = pageDataRes.data.content.vi;

  const categorySlug = categoryRes.data.list.map((i) => i.slug.vi);
  const categoryName = categoryRes.data.list.map((i) => i.name.vi);
  categoryName.unshift("Tất cả");
  categorySlug.unshift("");

  return (
    <div>
      <div className="home relative">
        <div className="banner row-span-1 col-span-12 mb:col-span-4 mb:absolute mb:overflow-hidden">
          <Image
            src={content[0].slide[1].banner}
            width={2040}
            height={840}
            alt=""
            className="w-full h-[calc(100vh-110px)] object-cover mb:h-auto mb:object-contain"
          ></Image>
        </div>
        <div className="absolute mb:static w-fit h-auto row-start-1 row-end-1 col-start-1 col-end-7 mb:col-end-5 top-1/2 -translate-y-1/2 mb:translate-y-20 bg-white rounded-md py-10 px-14 mb:p-5 shadow-md">
          <p className="text-[14px] text-[#E4B588] font-gotham font-normal">
            {content[0].slide[1].subTitle.toUpperCase()}
          </p>
          <h1 className="text-[#990000] font-playfair text-[48px] font-black mb-5 line-clamp-2">
            {content[0].slide[1].title}
          </h1>
          <p className="font-gotham text-[16px] font-light leading-7 text-justify">
            {content[0].slide[1].description}
          </p>
        </div>
      </div>
      <div className="home">
        <div className="row-start-1 row-end-1 col-start-1 col-end-8 mb:col-end-5 items-center  mt-[60px] mb-[30px] content-center">
          <p className="text-[14px] text-[#E4B588] font-gotham font-normal">
            {content[1].subTitle.toUpperCase()}
          </p>
          <h1 className="font-playfair text-[#990000] text-[48px] font-black">
            {content[1].title}
          </h1>
          <p className="font-gotham text-[16px] font-light leading-7">
            {content[1].description}
          </p>
        </div>
        <div className="row-start-1 row-end-1 mb:row-start-2 mb:row-end-2 col-start-9 mb:col-start-1 mb:col-end-5 col-end-13 h-[calc(100vh-110px)] mb:h-auto content-center">
          <Image
            src={content[1].image}
            width={800}
            height={800}
            alt=""
            className=" object-cover aspect-[525/630] rounded-t-full"
          ></Image>
          {/* <div className="absolute -right-10 -bottom-10 border-[#E4B588] border-2"></div> */}
        </div>
        <div className="row-start-2 row-end-2 mb:row-start-3 mb:row-end-3 col-span-12 mb:col-span-4 mb-[30px]">
          <p className="text-[14px] text-[#E4B588] font-gotham font-normal">
            CHƯƠNG TRÌNH ĐÃ DIỄN RA
          </p>
          <h1 className="font-playfair text-[#990000] text-[48px] font-black mb-[30px]">
            Cùng xem lại những khoảnh khắc tuyệt vời!
          </h1>
          <Category
            categoryName={categoryName}
            categorySlug={categorySlug}
          ></Category>
        </div>
        <div className="row-start-3 row-end-3 mb:row-start-4 mb:row-end-4 col-span-12 mb:col-span-4">
        <Shows category={category} page={currentPage}></Shows>
      </div>
      </div>
      
    </div>
  );
}
