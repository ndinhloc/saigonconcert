import Image from "next/image";
import DOMPurify from "isomorphic-dompurify";
import { API } from "@/app/constants";
import PostCard from "@/app/components/PostCard";
import { format } from "date-fns";
async function getPostDetail(slug) {
  const res = await fetch(API.postDetail(slug));
  if (!res.ok) {
    throw new Error("Failed to fecth data");
  }
  return res.json();
}
async function getRelatedPost(slug) {
  const res = await fetch(API.relatedPost(slug));
  if (!res.ok) {
    throw new Error("Failed to fecth data");
  }
  return res.json();
}

export default async function NewsDetail({ params }) {
  const [detail, related] = await Promise.all([
    getPostDetail(params.slug),
    getRelatedPost(params.slug),
  ]);

  const clean = DOMPurify.sanitize(detail.data.content.vi);
  return (
    <div>
      <div className="home relative mb-[60px]">
        <div className="banner row-start-1 row-end-1 col-span-12 mb:col-span-4 mb:row-span-1  content-center">
          <Image
            src={detail.data.image}
            width={1600}
            height={1840}
            alt=""
            className="w-full h-[480px] object-cover"
          ></Image>
        </div>
        <div className="row-start-2 row-end-2 col-start-1 col-end-10 mt-[60px]">
          <div className="flex gap-4">
            <h1 className="text-[#E4B588] text-[14px] font-gotham font-bold">
              {detail.data.postCategory.name.vi.toUpperCase()}
            </h1>
            <h1 className="text-[14px] font-gotham font-bold text-[#828282]">
              {" "}
              • {format(
                detail.data.publishedAt,
                "MMM dd, yyyy"
              ).toUpperCase()}{" "}
              •{" "}
            </h1>
          </div>
          <h1 className="text-[#990000] text-[48px] font-black font-playfair mb-5">
            {detail.data.title.vi}
          </h1>
          <div
            dangerouslySetInnerHTML={{ __html: clean }}
            className="post-detail"
          ></div>
          <div className="flex gap-4 items-center mt-10">
            <h1 className="text-[32px] text-[#E4B588] font-playfair font-black">
              Chia sẻ chương trình
            </h1>
            <div className="flex gap-x-6 items-center">
              <div className="bg-[#990000] min-h-10 rounded-full min-w-10 flex items-center justify-center">
                <svg
                  width="10"
                  height="18"
                  viewBox="0 0 10 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.14394 2.98828H10V0.140625C9.65909 0.105469 8.59848 0 7.31061 0C4.69697 0 2.87879 1.51172 2.87879 4.25391V6.75H0V9.94922H2.87879V18H6.43939V9.94922H9.24242L9.69697 6.75H6.43939V4.57031C6.43939 3.62109 6.74242 2.98828 8.14394 2.98828Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="bg-[#990000] min-h-10 rounded-full min-w-10 flex items-center justify-center">
                <svg
                  width="15"
                  height="18"
                  viewBox="0 0 15 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.0287 0H8.06913V12.2608C8.06913 13.7218 6.93087 14.9218 5.51434 14.9218C4.09781 14.9218 2.95953 13.7218 2.95953 12.2608C2.95953 10.8261 4.07251 9.65215 5.43847 9.6V6.52175C2.42833 6.5739 0 9.10435 0 12.2608C0 15.4435 2.47892 18 5.53964 18C8.60032 18 11.0792 15.4174 11.0792 12.2608V5.9739C12.1922 6.8087 13.5582 7.30435 15 7.33045V4.25217C12.774 4.17391 11.0287 2.29565 11.0287 0Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="bg-[#990000] min-h-10 rounded-full min-w-10 flex items-center justify-center">
                <svg
                  width="20"
                  height="14"
                  viewBox="0 0 20 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.8008 3.02083C19.8008 3.02083 19.6055 1.64843 19.0039 1.04582C18.2422 0.252708 17.3906 0.24882 17 0.202166C14.2031 -1.11231e-07 10.0039 0 10.0039 0H9.99609C9.99609 0 5.79688 -1.11231e-07 3 0.202166C2.60938 0.24882 1.75781 0.252708 0.996094 1.04582C0.394531 1.64843 0.203125 3.02083 0.203125 3.02083C0.203125 3.02083 0 4.63427 0 6.24382V7.75229C0 9.36184 0.199219 10.9753 0.199219 10.9753C0.199219 10.9753 0.394531 12.3477 0.992187 12.9503C1.75391 13.7434 2.75391 13.7162 3.19922 13.8017C4.80078 13.9533 10 14 10 14C10 14 14.2031 13.9922 17 13.7939C17.3906 13.7473 18.2422 13.7434 19.0039 12.9503C19.6055 12.3477 19.8008 10.9753 19.8008 10.9753C19.8008 10.9753 20 9.36573 20 7.75229V6.24382C20 4.63427 19.8008 3.02083 19.8008 3.02083ZM7.93359 9.58345V3.98889L13.3359 6.79589L7.93359 9.58345Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="row-start-2 row-end-2 col-start-10 col-end-13 mt-[60px] flex flex-col gap-y-4">
          <h1 className="text-[#990000] text-[32px] font-black font-playfair">
            Tin liên quan
          </h1>
          {related.data.map((post, index) => (
            <PostCard
              key={index}
              title={post.title.vi}
              category={post.postCategory.name.vi}
              img={post.image}
              des={post.shortDescription.vi}
              date={post.publishedAt.split(" ")[0]}
              slug={post.slug.vi}
            ></PostCard>
          ))}
        </div>
      </div>
    </div>
  );
}
