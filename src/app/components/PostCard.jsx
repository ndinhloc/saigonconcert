import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
export default function PostCard(props) {
  return (
    <Link href={`/news/${props.slug}`}>
      <div className="flex flex-col gap-y-2.5">
        <div className="aspect-[335/200]">
        <Image
          src={props.img}
          width={1600}
          height={840}
          alt=""
          className={`object-cover ${
            props.main ? "h-[375px]" : "h-[185px]"
          } "} mb:!h-[185px]`}
        ></Image></div>
        <div className="flex items-center gap-x-4 mb:gap-x-1 mt-4 mb-[10px]">
          <h1 className="bg-[#E4B588] px-[12px] mb:px-[6px] py-1 text-center font-normal font-gotham line-clamp-1">
            {props.category}
          </h1>
          <h1 className="font-gotham font-normal">{format(props.date,"dd.MM.yyyy")}</h1>
        </div>
        <h1
          className={`font-playfair text-[#990000] mb:text-[#195382] line-clamp-2 ${
            props.main ? "text-[32px] font-black " : "text-[16px] font-black"
          } mb:text-[16px]  `}
        >
          {props.title}
        </h1>
        {props.main && (
          <p className="font-gotham font-light text-[16px] leading-[26px] text-justify line-clamp-2 mb:hidden">
            {props.des}
          </p>
        )}
      </div>
    </Link>
  );
}
