import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeCard from "../components/homeCard";
import { getPostsAction } from "../redux/actions/post";

const Home = () => {
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostsAction());
  }, [dispatch]);
  return (
    <div className="flex items-center m-5 flex-wrap">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {posts.length < 1
          ? "Henüz hiç post yok."
          : posts.map((post, i) => <HomeCard key={i} post={post} />)}
      </div>
    </div>
  );
};

export default Home;
