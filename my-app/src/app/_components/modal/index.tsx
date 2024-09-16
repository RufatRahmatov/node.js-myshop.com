import { useState } from "react";

interface Post {
  id: string;
  title: string;
  date: string;
  author: string;
  description: string;
  imageUrl: string;
}

interface ModalProps {
  show: boolean;
  onClose: () => void;
  post: Post | null;
  onSave: (updatedPost: Post) => void;
}

const Modal = ({ show, onClose, post, onSave }: ModalProps) => {
  const [formData, setFormData] = useState(post);
  const [filePreview, setFilePreview] = useState<string | null>(
    formData?.imageUrl || null
  );

  if (!show || !post) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value } as Post);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFilePreview(reader.result as string);
        setFormData({ ...formData, imageUrl: reader.result as string } as Post);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    onSave(formData as Post);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-md w-1/3">
        <h2 className="text-xl font-semibold mb-4">
          {post?.id ? "Edit Post" : "Add Post"}
        </h2>

        {/* Title Input */}
        <input
          type="text"
          name="title"
          value={formData?.title || ""}
          onChange={handleChange}
          className="border w-full p-2 mb-4"
          placeholder="Title"
        />

        {/* Author Input */}
        <input
          type="text"
          name="author"
          value={formData?.author || ""}
          onChange={handleChange}
          className="border w-full p-2 mb-4"
          placeholder="Author"
        />

        {/* Date Input */}
        <input
          type="date"
          name="date"
          value={formData?.date || ""}
          onChange={handleChange}
          className="border w-full p-2 mb-4"
          placeholder="Date"
        />

        {/* Description Input */}
        <textarea
          name="description"
          value={formData?.description || ""}
          onChange={handleChange}
          className="border w-full p-2 mb-4"
          placeholder="Description"
        />

        {/* Image File Input */}
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="border w-full p-2 mb-4"
        />

        {/* Display Image Preview */}
        {filePreview && (
          <div className="mb-4">
            <img
              src={filePreview}
              alt="Image Preview"
              className="w-full h-40 object-cover rounded-md"
            />
          </div>
        )}

        <button
          onClick={handleSave}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
        >
          Save
        </button>

        <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded-md">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Modal;
