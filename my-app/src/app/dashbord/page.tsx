"use client";
import useSWR from "swr";
import axios from "axios";
import { useState } from "react";
import Modal from "../_components/modal";

// Define Post interface
interface Post {
  id: string;
  title: string;
  date: string;
  author: string;
  description: string;
  imageUrl: string;
}

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Dashboard = () => {
  // Fetch posts from the JSON server running on port 3001
  const {
    data: posts,
    error,
    mutate,
  } = useSWR<Post[]>("http://localhost:3001/posts", fetcher);

  const [showModal, setShowModal] = useState(false);
  const [currentPost, setCurrentPost] = useState<Post | null>(null);

  // Function to delete a post
  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`http://localhost:3001/posts/${id}`);
      mutate(); // Re-fetch posts to update the list
    } catch (error) {
      console.error("Error deleting the post:", error);
    }
  };

  // Function to open the edit modal
  const handleEdit = (post: Post) => {
    setCurrentPost(post);
    setShowModal(true);
  };

  // Function to open the add modal
  const handleAdd = () => {
    setCurrentPost({
      id: "",
      title: "",
      date: new Date().toLocaleDateString(),
      author: "",
      description: "",
      imageUrl: "",
    });
    setShowModal(true);
  };

  // Function to save the edited or added post
  const handleSave = async (updatedPost: Post) => {
    try {
      if (updatedPost.id) {
        await axios.put(
          `http://localhost:3001/posts/${updatedPost.id}`,
          updatedPost
        ); // Update post
      } else {
        await axios.post(`http://localhost:3001/posts`, updatedPost); // Add new post
      }
      mutate(); // Re-fetch posts to update the list
    } catch (error) {
      console.error("Error saving the post:", error);
    }
  };

  if (error) return <div>Error occurred while loading...</div>;
  if (!posts) return <div>Loading...</div>;

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-semibold text-center mb-6">Dashboard</h1>

      {/* Add New Post Button */}
      <div className="mb-4">
        <button
          onClick={handleAdd}
          className=" border bg-gray-200 text-black px-4 py-2  text-black hover:bg-black hover:text-gray-200 transition-colors duration-300"
        >
          Add Post
        </button>
      </div>

      {/* Display posts in a table format */}
      <table className="table-auto w-full text-left bg-white shadow-lg rounded-lg">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Image</th>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Author</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id} className="border-t">
              <td className="px-4 py-2">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-20 h-20 object-cover rounded-md"
                />
              </td>
              <td className="px-4 py-2">{post.title}</td>
              <td className="px-4 py-2">{post.author}</td>
              <td className="px-4 py-2">{post.date}</td>
              <td className="px-4 py-2">{post.description}</td>
              <td className="px-4 py-2 flex space-x-2">
                {/* Edit button */}
                <button
                  onClick={() => handleEdit(post)}
                  className="border bg-gray-200 text-black px-4 py-2 text-black hover:bg-black hover:text-gray-200 transition-colors duration-300"
                >
                  Edit
                </button>

                {/* Delete button */}
                <button
                  onClick={() => handleDelete(post.id)}
                  className="border bg-gray-200 text-black  px-4 py-2 text-black hover:bg-black hover:text-gray-200 transition-colors duration-300"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-12">
        {" "}
        <a
          href="/blogs"
          className="bg-black text-white px-6 py-4 text-center mx-auto p-6 ml-[650px]"
        >
          {" "}
          Go to Blogs
        </a>
      </div>
      {/* Add/Edit Modal */}
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        post={currentPost}
        onSave={handleSave}
      />
    </div>
  );
};

export default Dashboard;
