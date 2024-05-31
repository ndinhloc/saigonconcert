import Image from "next/image";
export default function Contact() {
  return (
    <div className="flex flex-col items-center">
      <div className="relative mb:static">
        <Image
          src={"https://saigonconcert.com/assets/images/map.jpg"}
          width={1440}
          height={791}
          alt=""
          className="w-full object-contain mb:object-cover"
        ></Image>

        <div className="absolute z-5 top-1/2 -translate-y-1/2 right-20 mb:static mb:top-0 mb:translate-y-0 mb:right-0 mb:mx-[20px] shadow-md mb:mb-5">
          <div className="bg-white w-auto h-auto p-5 ">
            <h1 className="text-[#990000] text-[48px] font-playfair mb:text-[32px] font-black mt-5 mb-4 text-center">
              Liên hệ chúng tôi
            </h1>
            <div className="">
              <div className="mb-4">
                <h1 className="font-gotham font-normal text-[14px] text-[#990000] mb-[10px]">
                  FULL NAME *
                </h1>
                <input
                  type="text"
                  placeholder="Your name..."
                  className="w-full h-[50px] font-gotham text-[16px] font-light bg-white border-b border-black focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <h1 className="font-gotham font-normal text-[14px] text-[#990000] mb-[10px]">
                  EMAIL ADDRESS *
                </h1>
                <input
                  type="text"
                  placeholder="Your email..."
                  className="w-full h-[50px] font-gotham text-[16px] font-light bg-white border-b border-black focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <h1 className="font-gotham font-normal text-[14px] text-[#990000] mb-[10px]">
                  PHONE NUMBER *
                </h1>
                <input
                  type="text"
                  placeholder="Your phone..."
                  className="w-full h-[50px] font-gotham text-[16px] font-light bg-white border-b border-black focus:outline-none"
                />
              </div>
              <div className="mt-[10px] w-full">
                <h1 className="font-gotham font-normal text-[14px] text-[#990000] mb-[12px]">
                  MESSAGE
                </h1>
                <input
                  type="text"
                  placeholder="Your message..."
                  className=" font-gotham w-full h-[96px] text-[16px] font-light bg-white border-b border-black focus:outline-none"
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
    </div>
  );
}
