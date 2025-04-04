import { useEffect, useState } from "react";
import API from "../api";

function TrendingPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const token = localStorage.getItem("accessToken");
      const allPosts = await API.getPosts(token);
      const allComments = await API.getComments(token);

      const postCommentsCount = allPosts.map(post => ({
        ...post,
        commentCount: allComments.filter(c => c.postId === post.id).length
      }));

      const maxComments = Math.max(...postCommentsCount.map(p => p.commentCount));
      const trending = postCommentsCount.filter(p => p.commentCount === maxComments);

      setPosts(trending);
    };
    fetchPosts();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Trending Posts</h2>
      {posts.map(post => (
        <div key={post.id} className="p-4 border-b">
          <h3 className="font-semibold">{post.title}</h3>
          <p>{post.body}</p>
          <p className="text-sm">Comments: {post.commentCount}</p>
        </div>
      ))}
    </div>
  );
}

export default TrendingPosts;
