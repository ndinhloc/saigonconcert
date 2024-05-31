import { API } from "../constants/index";
import PostCard from "../components/PostCard";
import Pagination from "./Pagination";
async function getPosts(limit, page, category, orderBy, sort) {
  const res = await fetch(API.getPost(limit, page, category, orderBy, sort));
  if (!res.ok) {
    throw new Error("Failed to fecth data");
  }
  return res.json();
}
export default async function EventNews(props) {
  const postsRes = await getPosts(12, props.page, props.category);
  const posts = postsRes.data.list;
  const totalPage = postsRes.data.paginator.pageCount;


  return (
    <div>
      <div className="grid grid-cols-4 gap-4 mb-[30px] mb:block">
        {posts.map((item, index) => (
          <PostCard
            key={index}
            title={item.title.vi}
            category={item.postCategory.name.vi}
            img={item.image}
            des={item.shortDescription.vi}
            date={item.publishedAt.split(" ")[0]}
            slug={item.slug.vi}
          ></PostCard>
        ))}
      </div>
      <Pagination totalPage={totalPage} ></Pagination>
    </div>
  );
}
