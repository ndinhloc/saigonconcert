import React from "react";
import { API } from "../constants/index";
import Pagination from "./Pagination";
import Link from "next/link";
import Image from "next/image";
async function getShow(page, category) {
  const res = await fetch(API.getShow(11, page, category));
  if (!res.ok) {
    throw new Error("Failed to fecth data");
  }
  return res.json();
}

export default async function Shows(props) {
  const showRes = await getShow(props.page, props.category);
  const shows = showRes.data.list;
  const totalPage = showRes.data.paginator.pageCount;
  return (
    <div>
      <div className="grid grid-cols-12 mb:grid-cols-4 gap-x-4 gap-y-8 ">
        {shows.map((item, index) => {
          if (index == 0) {
            return (
              <Link
                key={index}
                href={`/news/${item.post.slug.vi}`}
                className="col-span-6 mb:col-span-4"
              >
                <div>
                  <Image
                    src={item.image}
                    width={840}
                    height={530}
                    alt=""
                    className="aspect-[632/385] mb:aspect-[335/310] object-cover w-full"
                  ></Image>
                  <h1 className="font-playfair text-[#990000] text-[16px] font-black mt-6">
                    {item.name.vi}
                  </h1>
                  <p className="text-[14px] font-gotham font-light line-clamp-2">
                    {item.shortDescription.vi}
                  </p>
                </div>
              </Link>
            );
          } else
            return (
              <Link
                key={index}
                href={`/news/${item.post.slug.vi}`}
                className="col-span-3 mb:col-span-4"
              >
                <div>
                  <Image
                    src={item.image}
                    width={840}
                    height={530}
                    alt=""
                    className="aspect-[308/385] mb:aspect-[335/310] object-cover"
                  ></Image>
                  <h1 className="font-playfair text-[#990000] text-[16px] font-black mt-6">
                    {item.name.vi}
                  </h1>
                  <p className="text-[14px] font-gotham font-light line-clamp-2">
                    {item.shortDescription.vi}
                  </p>
                </div>
              </Link>
            );
        })}
      </div>{" "}
      <div className="my-[30px]">
        <Pagination totalPage={totalPage}></Pagination>
      </div>
    </div>
  );
}
