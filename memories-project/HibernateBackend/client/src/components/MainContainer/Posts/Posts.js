import React from "react";
import Post from "./Post/Post";

const postsData = [
  {
    image:
      "https://images.unsplash.com/photo-1533230408708-8f9f91d1235a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlyZXdvcmtzfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  },
  {
    image:
      "https://learnenglishteens.britishcouncil.org/sites/teens/files/styles/article/public/rs7639_thinkstockphotos-495468770-low.jpg?itok=PYg2qpzA",
  },
  {
    image:
      "https://d1e00ek4ebabms.cloudfront.net/production/61a52cef-9a5c-4740-9181-f4b2c68782be.jpg",
  },
  {
    image:
      "https://www.gizbot.com/img/2020/03/best-ultra-hd-screen-laptops-to-buy-in-india-1585652594.jpg",
  },
];

const Posts = () => {
  return postsData.map((post, index) => <Post key={index} post={post} />);
};

export default Posts;
