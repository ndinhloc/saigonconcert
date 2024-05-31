import React from "react";
import { API } from "../constants";
import Category from "../components/Category";
import Image from "next/image";

async function getGalleryCategory() {
  const res = await fetch(API.galleryCategory);
  if (!res.ok) {
    throw new Error("Failed to fecth data");
  }
  return res.json();
}
async function getGallery() {
  const res = await fetch(API.gallery);
  if (!res.ok) {
    throw new Error("Failed to fecth data");
  }
  return res.json();
}
export default async function Gallery({ searchParams }) {
  const [categoryRes, galleryRes] = await Promise.all([
    getGalleryCategory(),
    getGallery(),
  ]);
  const categoryParam = searchParams?.category || "";
  const currentPage = searchParams?.page || 1;

  console.log(galleryRes.data.list);
  const categorySlug = categoryRes.data.list.map((i) => i.slug);
  const categoryName = categoryRes.data.list.map((i) => i.name);
  categoryName.unshift("Tất cả");
  categorySlug.unshift("");
  return (
    <div className="home my-[60px]">
      <div className="col-span-12 mb:col-span-4">
        <p className="text-[14px] text-[#E4B588] font-gotham font-normal">
          THƯ VIỆN ẢNH
        </p>
        <h1 className="text-[#990000] font-playfair text-[48px] mb:text-[32px] font-black mb-5 ">
          Những hình ảnh về Trung Tâm
        </h1>
      </div>
      <div className="col-span-12 mb-[30px] mb:col-span-4">
        <Category
          categoryName={categoryName}
          categorySlug={categorySlug}
        ></Category>
      </div>
      <div className="col-span-12 columns-3 mb:columns-1 mb:col-span-4">
        {galleryRes.data.list.map((item, index) => {
          if (item.galleryCategory.slug === categoryParam) {
            return (
              <Image
                key={index}
                src={item.image}
                width={1600}
                height={1840}
                alt=""
                className="mb-4"
              ></Image>
            );
          }
          if (categoryParam === "") {
            return (
              <Image
                key={index}
                src={item.image}
                width={1600}
                height={1840}
                alt=""
                className="mb-4"
              ></Image>
            );
          }
        })}
      </div>
    </div>
  );
}
