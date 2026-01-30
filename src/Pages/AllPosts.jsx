import React, { useState, useEffect } from "react";
import appWriteService from "../appwrite/config";
import { PostCard, Container } from "../Components";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    appWriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  return (
    <div className="w-full py-8">
      <Container>
        {posts.length === 0 ? (
          <div className="w-full text-center">
            <h1 className="text-2xl font-bold text-black hover:text-gray-500">
              Create your first post
            </h1>
          </div>
        ) : (
          <div className="flex flex-wrap">
            {posts.map((post) => (
              <div key={post.$id} className="p-2 w-1/4">
                <PostCard {...post} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}

export default AllPosts;
