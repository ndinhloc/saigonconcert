import React from "react";
import { API } from "../constants";
import Image from "next/image";
import DOMPurify from "isomorphic-dompurify";
async function getServices() {
  const res = await fetch(API.services);
  if (!res.ok) {
    throw new Error("Failed to fecth data");
  }
  return res.json();
}
export default async function Service() {
  const res = await getServices();
  console.log(res.data.list);
  const data = res.data.list;
  return (
    <div className="home my-[60px]">
      <div className="col-span-4  mb:row-span-1">
        <p className="text-[14px] text-[#E4B588] font-gotham font-normal">
          DỊCH VỤ
        </p>
        <h1 className="text-[#990000] font-playfair text-[48px] font-black mb-5 ">
          Chúng tôi cung cấp các dịch vụ tuyệt vời sau đây
        </h1>
        <p className="text-[16px] font-gotham font-light">
          Trung tâm Tổ chức Biểu diễn và Điện ảnh Thành phố
        </p>
      </div>
      {data.map((item, index) => (
        <div key={index} className="col-span-4  mb:row-span-1">
          <div className="aspect-[415/370] mb-5">
            <Image
              src={item.image}
              width={415}
              height={370}
              alt=""
              className="w-full h-full object-cover rounded-t-full"
            ></Image>
          </div>
          <h1 className="font-black font-playfair text-[20px] text-[#990000] mb-2.5">
            {item.name.vi}
          </h1>

          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(item.content.vi),
            }}
            className="service-detail"
          ></div>
        </div>
      ))}
      <div className="row-span-1 col-start-2 col-end-12 mt-[60px] mb:col-start-1 mb:col-end-5">
        <div className="flex flex-col items-center bg-[#F2F2F2] w-full py-[80px] px-[40px] mb:p-5 rounded-md">
          <h1 className="font-playfair text-[32px] mb:text-[20px] font-black text-[#990000] text-center">
            Hãy nói về dịch vụ bạn mong muốn thực hiện
          </h1>
          <h1 className="font-gotham font-light text-[16px] mt-[15px] mb:text-center">
            Điền vào mẫu dưới đây và chúng tôi sẽ liên hệ trực tiếp với bạn
          </h1>
          <div className="mb:w-full">
            <div className="flex gap-x-[20px] mt-[30px] mb:block ">
              <div className="">
                <h1 className="font-gotham font-normal text-[14px] text-[#990000] mb-[10px]">
                  FULL NAME *
                </h1>
                <input
                  type="text"
                  placeholder="Your name..."
                  className="w-[269px] mb:w-full h-[50px] font-gotham text-[16px] font-light bg-[#F2F2F2] border-b border-black focus:outline-none"
                />
              </div>
              <div className="">
                <h1 className="font-gotham font-normal text-[14px] text-[#990000] mb-[10px]">
                  EMAIL ADDRESS *
                </h1>
                <input
                  type="text"
                  placeholder="Your email..."
                  className="w-[269px] mb:w-auto h-[50px] font-gotham text-[16px] font-light bg-[#F2F2F2] border-b border-black focus:outline-none"
                />
              </div>
              <div className="">
                <h1 className="font-gotham font-normal text-[14px] text-[#990000] mb-[10px]">
                  PHONE NUMBER *
                </h1>
                <input
                  type="text"
                  placeholder="Your phone..."
                  className="w-[269px] mb:w-auto h-[50px] font-gotham text-[16px] font-light bg-[#F2F2F2] border-b border-black focus:outline-none"
                />
              </div>
            </div>
            <div className="mt-[20px]">
              <h1 className="font-gotham font-normal text-[14px] text-[#990000] mb-[10px]">
                SERVICES YOU NEED *
              </h1>
              <div className="flex justify-between mb:block">
                <div>
                  <input
                    type="checkbox"
                    id="performance"
                    className="mr-[10px]"
                  />
                  <label
                    htmlFor="performance"
                    className="font-gotham font-light text-[14px]"
                  >
                    Tổ chức biểu diễn
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="event" className="mr-[10px]" />
                  <label
                    htmlFor="event"
                    className="font-gotham font-light text-[14px]"
                  >
                    Tổ chức sự kiện
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="fashion" className="mr-[10px]" />
                  <label
                    htmlFor="fashion"
                    className="font-gotham font-light text-[14px]"
                  >
                    Thời trang
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="tourism" className="mr-[10px]" />
                  <label
                    htmlFor="tourism"
                    className="font-gotham font-light text-[14px]"
                  >
                    Du lịch
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="photography"
                    className="mr-[10px]"
                  />
                  <label
                    htmlFor="photography"
                    className="font-gotham font-light text-[14px]"
                  >
                    Điện ảnh
                  </label>
                </div>
              </div>
            </div>
            <div className="mt-[20px] w-full">
              <h1 className="font-gotham font-normal text-[14px] text-[#990000] mb-[10px]">
                YOUR IDEA
              </h1>
              <input
                type="text"
                placeholder=""
                className=" font-gotham w-full h-[50px] text-[16px] font-light bg-[#F2F2F2] border-b border-black focus:outline-none"
              />
            </div>
            <div className="mt-[10px] w-full">
              <h1 className="font-gotham font-normal text-[14px] text-[#990000] mb-[12px]">
                MESSAGE
              </h1>
              <input
                type="text"
                placeholder="Your message..."
                className=" font-gotham w-full h-[96px] text-[16px] font-light bg-[#F2F2F2] border-b border-black focus:outline-none"
              />
            </div>
            <div className="flex items-center mt-[20px]">
              <div className="min-h-[50px] min-w-[50px] bg-[#990000] rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#ffffff"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
              <h1 className="font-playfair font-bold text-[#990000] ml-[16px]">
                Gửi thông tin
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
