"use client";

import { useSearchParams } from "next/navigation";
import { FC, useState } from "react";
import Layouts from "../_layouts/layouts";
import SwiperComponent from "../_components/swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaShippingFast, FaUndoAlt, FaLock, FaHeadset } from "react-icons/fa";
const Detail: FC = () => {
  const searchParams = useSearchParams();

  const title = searchParams.get("title");
  const imageUrl = searchParams.get("imageUrl");
  const description = searchParams.get("description");
  const author = searchParams.get("author");
  const date = searchParams.get("date");

  const slides = [
    {
      title: "Jewelry Horoscope Autumn",
      date: "MAR 09 2024",
      author: "ALUKAS SHOPIFY",
      imageUrl:
        "https://demo-alukas.myshopify.com/cdn/shop/articles/7.jpg?v=1711695353&width=533",
    },
    {
      title: "The Wasteland Bracelet",
      date: "MAR 06 2024",
      author: "ALUKAS SHOPIFY",
      imageUrl:
        "https://demo-alukas.myshopify.com/cdn/shop/articles/10.jpg?v=1711695267&width=533",
    },
    {
      title: "The North Earrings Bronze",
      date: "MAR 06 2024",
      author: "ALUKAS SHOPIFY",
      imageUrl:
        "https://demo-alukas.myshopify.com/cdn/shop/articles/11.jpg?v=1711695396&width=533",
    },
    {
      title: "The North Earrings Bronze",
      date: "MAR 06 2024",
      author: "ALUKAS SHOPIFY",
      imageUrl:
        "https://demo-alukas.myshopify.com/cdn/shop/articles/5.jpg?v=1711695279&width=533",
    },
    {
      title: "The North Earrings Bronze",
      date: "MAR 06 2024",
      author: "ALUKAS SHOPIFY",
      imageUrl:
        "https://demo-alukas.myshopify.com/cdn/shop/articles/14.jpg?v=1711695388&width=533",
    },
    {
      title: "The North Earrings Bronze",
      date: "MAR 06 2024",
      author: "ALUKAS SHOPIFY",
      imageUrl:
        "https://demo-alukas.myshopify.com/cdn/shop/articles/9.jpg?v=1711695256&width=533",
    },
    {
      title: "The North Earrings Bronze",
      date: "MAR 06 2024",
      author: "ALUKAS SHOPIFY",
      imageUrl:
        "https://demo-alukas.myshopify.com/cdn/shop/articles/4.jpg?v=1711695367&width=533",
    },
  ];

  return (
    <Layouts>
      <main>
        <div className="container mx-auto py-12 px-4 mt-10">
          <p className="text-white bg-black text-center w-12  ml-[740px] mb-4">
            NEWS
          </p>
          <h1 className="text-4xl font-semibold text-center mb-6">{title}</h1>
          <p className="text-center text-gray-600 mb-6">
            {author} - {date}
          </p>

          <div className="flex justify-center mb-6">
            <img
              src={imageUrl as string}
              alt={title as string}
              className="w-[1140px] w-md "
            />
          </div>

          <p className="text-gray-600 text-center font-bold w-[970px] mx-auto">
            {description}
          </p>
          <br />
          <p className="w-[970px] mx-auto">
            Oneself endless holiest society philosophy dept valuation
            Contradicts gains nobless end lose preju dice battle hope the battle
            philosophy Gains endless capitalize on low hanging fruit to identify
            a ballpark value added activity to beta test. Override the digital
            divide with additional clickthroughs from DevOps. Nanotechnology
            immersion along the information highway will close the loop on
            focusing solely on the bottom line.Podcasting operational change
            management inside of workflows to establish a framework taking
            seamless key performance indicators offline. <br /> <br />
            Override the digital divide with additional clickthroughs from
            DevOps. Nanotechnology immersion along the information highway will
            close the loop on focusing solely on the bottom line.Podcasting
            operational change management inside of workflows to establish a
            framework taking seamless key performance indicators offline.
          </p>
        </div>
        <h2 className="mx-auto text-xl font-bold ml-[460px]">
          Moving into a new year is always excited and a perfect opportunity to
          reflect on the year we are leaving <br /> behind and the new year we
          are being
        </h2>
        <p className="mx-auto ml-[460px] py-2">- Vape semiotics</p>
        <p className="w-[970px] mx-auto">
          Nanotechnology immersion along the information highway will close the
          loop on focusing solely on the bottom line.Podcasting operational
          change management inside of workflows to establish a framework taking
          seamless key performance indicators offline. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur excepteur sint occaecat cupidatat non proident, sunt in culpa
          qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="flex justify-center gap-5 mt-8">
          <img
            src="https://cdn.shopify.com/s/files/1/0691/9307/2864/files/single-blog-description-1_480x480.jpg?v=1709806038"
            alt="Image 1"
            className="w-[480px] h-auto"
          />
          <img
            src="https://cdn.shopify.com/s/files/1/0691/9307/2864/files/single-blog-description-2_480x480.jpg?v=1709806033"
            alt="Image 2"
            className="w-[480px] h-auto"
          />
        </div>
        <p className="mx-auto w-[980px] py-8">
          Nanotechnology immersion along the information highway will close the
          loop on focusing solely on the bottom line.Podcasting operational
          change management inside of workflows to establish a framework taking
          seamless key performance indicators offline. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur excepteur sint occaecat cupidatat non proident, sunt in culpa
          qui officia deserunt mollit anim id est laborum. Override the digital
          divide with additional clickthroughs from DevOps. Nanotechnology
          immersion along the information highway will close the loop on
          focusing solely on the bottom line.Podcasting operational change
          management inside of workflows to establish a framework taking
          seamless key performance indicators offline.
        </p>
        <div className="space-x-4">
          <p className="font-bold mx-auto ml-[455px] space-x-4">
            <span>Tags:</span>
            <button className="font-medium border py-1 px-2 text-black hover:bg-black hover:text-gray-200 transition-colors duration-300">
              Collection
            </button>

            <button className="font-medium border py-1 px-2 text-black hover:bg-black hover:text-gray-200 transition-colors duration-300">
              Fashion
            </button>
            <button className="font-medium border py-1 px-2 text-black hover:bg-black hover:text-gray-200 transition-colors duration-300">
              Trends
            </button>
          </p>
        </div>
        <SwiperComponent slides={slides} />

        {/* Comment Form Component */}
        <CommentForm />
      </main>
    </Layouts>
  );
};

// Importing and adding the CommentForm component
const CommentForm: FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Comment:", comment);
    setName("");
    setEmail("");
    setComment("");
  };

  return (
    <div className="container mx-auto py-8 w-[1200px] mt-4 border border-b-0 border-r-0 border-l-0">
      <h2 className="text-2xl font-semibold mb-6">LEAVE A COMMENT</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              required
              className="w-full border border-gray-300 p-2  focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="w-full border border-gray-300 p-2  focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
        </div>

        <div>
          <label htmlFor="comment" className="block text-sm font-medium">
            Comment <span className="text-red-500">*</span>
          </label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Comment"
            required
            className="w-full border border-gray-300 p-2  focus:outline-none focus:ring-2 focus:ring-black h-32 resize-none"
          />
        </div>

        <button
          type="submit"
          className="bg-black text-white px-6 py-2 h-12 w-48   hover:bg-gray-800 transition duration-300"
        >
          Post Comment
        </button>
      </form>
      <div className="bg-[#F5F5F5] py-16 mt-32">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold">Subscribe Newsletter</h2>
          <p className="text-gray-600 mt-2">
            Sign up to our Newsletter and get the discount code.
          </p>

          {/* Email Input and Button */}
          <div className="mt-6 flex justify-center">
            <input
              type="email"
              placeholder="Your email address..."
              className="border border-gray-300 rounded-l-md px-4 py-2 w-80 focus:outline-none"
            />
            <button className="bg-black text-white px-6 py-2 rounded-r-md ">
              SUBSCRIBE
            </button>
          </div>
        </div>

        <div className="container mx-auto mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <FaShippingFast className="text-3xl mx-auto text-gray-700" />
            <h3 className="mt-4 text-lg font-semibold">Free Shipping</h3>
            <p className="text-gray-600">For all Orders Over $100</p>
          </div>

          <div>
            <FaUndoAlt className="text-3xl mx-auto text-gray-700" />
            <h3 className="mt-4 text-lg font-semibold">30 Days Returns</h3>
            <p className="text-gray-600">For an Exchange Product</p>
          </div>

          <div>
            <FaLock className="text-3xl mx-auto text-gray-700" />
            <h3 className="mt-4 text-lg font-semibold">Secured Payment</h3>
            <p className="text-gray-600">Payment Cards Accepted</p>
          </div>

          <div>
            <FaHeadset className="text-3xl mx-auto text-gray-700" />
            <h3 className="mt-4 text-lg font-semibold">Support 24/7</h3>
            <p className="text-gray-600">Contact us Anytime</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
