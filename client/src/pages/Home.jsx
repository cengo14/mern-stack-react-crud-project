import React from "react";
import { useSelector } from "react-redux";
import HomeCard from "../components/homeCard";

const Home = () => {
  const { posts } = useSelector((state) => state.posts);
  console.log(posts);

  return (
    <div className="flex items-center m-5 flex-wrap">
      <div>
        {posts.length < 1
          ? "Henüz hiç post yok."
          : posts.map((post, i) => <HomeCard key={i} post={post} />)}
      </div>
    </div>
  );
};

export default Home;
