import React from "react";
import { API } from "../constants/index";
import PostCard from "../components/PostCard";

import EventNews from "../components/EventNews";
import Category from "../components/Category";

async function getPosts(limit, page, category, orderBy, sort) {
  const res = await fetch(API.getPost(limit, page, category, orderBy, sort));
  if (!res.ok) {
    throw new Error("Failed to fecth data");
  }
  return res.json();
}

async function getPostCategory() {
  const res = await fetch(API.getPostCategory);
  if (!res.ok) {
    throw new Error("Failed to fecth data");
  }
  return res.json();
}

export default async function News({ searchParams }) {
  // for paginating
  const category = searchParams?.category || "";
  const currentPage = searchParams?.page || 1;

  // fetch latest post
  const postObject = getPosts(5, 1, null, "publishedAt", "DESC");
  const categoryObject = getPostCategory();
  const [postRes, categoryRes] = await Promise.all([
    postObject,
    categoryObject,
  ]);
  const posts = postRes.data.list;
  const mainPost = posts[0];
  const otherPosts = posts.slice(1, 5);
  const categorySlug = categoryRes.data.list.map((i) => i.slug.vi);
  const categoryName = categoryRes.data.list.map((i) => i.name.vi);
  categoryName.unshift("Tất cả");
  categorySlug.unshift("");

  return (
    <div className="home">
      <h1 className="row-span-1 col-span-12 mb:col-span-4 text-[48px] font-black font-playfair self-center text-center text-[#990000] my-[30px]">
        Tin mới nhất
      </h1>
      <div className="row-start-2 row-end-3 col-start-1 col-end-7 mb:col-end-5 mb:row-end-2">
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
      <div className="row-start-2 row-end-2 col-start-7 col-end-13 grid  grid-cols-2 gap-4 mb:block mb:row-start-3 mb:row-end-4 mb:col-start-1 mb:col-span-4">
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
      
      <div className="row-start-4 row-end-4 col-span-12 mt-[60px] mb:col-span-4">
        <h1 className="text-[#990000] text-[48px] mb:text-[32px] font-black font-playfair">
          Tổ chức biểu diễn & Sự kiện
        </h1>
      </div>
      <div className="row-start-5 row-end-5 col-span-12 mb:col-span-4 my-[30px]">
        <Category
          categoryName={categoryName}
          categorySlug={categorySlug}
        ></Category>
      </div>
      <div className="row-start-6 row-end-6 col-span-12 mb:col-span-4 mb-[60px]">
        <EventNews category={category} page={currentPage}></EventNews>
      </div>
    </div>
  );
}
