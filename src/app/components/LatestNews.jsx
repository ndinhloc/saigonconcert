import { API } from "../constants/index";
import PostCard from "../components/PostCard";
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";

async function getPosts(limit, page, category, orderBy, sort) {
  const res = await fetch(API.getPost(limit, page, category, orderBy, sort));
  if (!res.ok) {
    throw new Error("Failed to fecth data");
  }
  return res.json();
}

export default async function LatestNews() {
  const postRes = await getPosts(5, 1, null, "publishedAt", "DESC");

  const posts = postRes.data.list;
  const mainPost = posts[0];
  const otherPosts = posts.slice(1, 5);

  return (
    <div className="home w-full">
      <h1 className="row-span-1 col-span-12 text-[48px] font-black font-playfair self-center text-center text-[#990000] mt-[70px] mb-[30px]">
        Tin mới nhất
      </h1>
      <div className="row-start-2 row-end-3 col-start-1 col-end-7">
        <PostCard
          title={mainPost.title.vi}
          category={mainPost.postCategory.name.vi}
          img={mainPost.image}
          des={mainPost.shortDescription.vi}
          date={mainPost.publishedAt.split(" ")[0]}
          main={true}
          slug={mainPost.slug.vi}
        ></PostCard>
      </div>
      <div className="row-start-2 row-end-2 col-start-7 col-end-13 grid  grid-cols-2 gap-4">
        {otherPosts &&
          otherPosts.map((post, index) => (
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
  );
}
