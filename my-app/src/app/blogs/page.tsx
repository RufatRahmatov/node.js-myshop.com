"use client";

import Layouts from "../_layouts/layouts";
import { FC } from "react";
import { FaShippingFast, FaUndoAlt, FaLock, FaHeadset } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";

const Blogs: FC = () => {
  const posts = [
    {
      title: "Jewelry Horoscope Autumn",
      date: "MAR 09 2024",
      author: "ALUKAS SHOPIFY",
      description:
        "Oneself endless holiest society philosophy dept valuation Contradicts gains nobless end lose preju dice battle hope the battle....",
      imageUrl:
        "https://demo-alukas.myshopify.com/cdn/shop/articles/7.jpg?v=1711695353&width=533",
    },
    {
      title: "The Wasteland Bracelet",
      date: "MAR 06 2024",
      author: "ALUKAS SHOPIFY",
      description:
        "Oneself endless holiest society philosophy dept valuation Contradicts gains nobless end lose preju dice battle hope the battle....",
      imageUrl:
        "https://demo-alukas.myshopify.com/cdn/shop/articles/10.jpg?v=1711695267&width=533",
    },
    {
      title: "The North Earrings Bronze",
      date: "MAR 06 2024",
      author: "ALUKAS SHOPIFY",
      description:
        "Oneself endless holiest society philosophy dept valuation Contradicts gains nobless end lose preju dice battle hope the battle....",
      imageUrl:
        "https://demo-alukas.myshopify.com/cdn/shop/articles/11.jpg?v=1711695396&width=533",
    },
    {
      title: "Trendy Gold Chain Bracelet",
      date: "MAR 06 2024",
      author: "ALUKAS SHOPIFY",
      description:
        "Oneself endless holiest society philosophy dept valuation Contradicts gains nobless end lose preju dice battle hope the battle....",
      imageUrl:
        "https://demo-alukas.myshopify.com/cdn/shop/articles/14.jpg?v=1711695388&width=533",
    },
    {
      title: "Wedding Day Gift Ideas",
      date: "MAR 06 2024",
      author: "ALUKAS SHOPIFY",
      description:
        "Oneself endless holiest society philosophy dept valuation Contradicts gains nobless end lose preju dice battle hope the battle....",
      imageUrl:
        "https://demo-alukas.myshopify.com/cdn/shop/articles/9.jpg?v=1711695256&width=533",
    },
    {
      title: "Succumb to the “invitation”",
      date: "MAR 06 2024",
      author: "ALUKAS SHOPIFY",
      description:
        "Oneself endless holiest society philosophy dept valuation Contradicts gains nobless end lose preju dice battle hope the battle....",
      imageUrl:
        "https://demo-alukas.myshopify.com/cdn/shop/articles/8.jpg?v=1711695344&width=533",
    },
    {
      title: "Jewels of Prosperity-2024",
      date: "MAR 06 2024",
      author: "ALUKAS SHOPIFY",
      description:
        "Oneself endless holiest society philosophy dept valuation Contradicts gains nobless end lose preju dice battle hope the battle....",
      imageUrl:
        "https://demo-alukas.myshopify.com/cdn/shop/articles/4.jpg?v=1711695367&width=533",
    },
    {
      title: "Must-Have Skater Girl Items",
      date: "MAR 06 2024",
      author: "ALUKAS SHOPIFY",
      description:
        "Oneself endless holiest society philosophy dept valuation Contradicts gains nobless end lose preju dice battle hope the battle....",
      imageUrl:
        "https://demo-alukas.myshopify.com/cdn/shop/articles/5.jpg?v=1711695279&width=533",
    },
  ];

  return (
    <Layouts>
      <main className="container mx-auto py-12 px-4 mt-10">
        <h1 className="text-4xl font-semibold text-center mb-6">News</h1>
        <p className="text-center text-gray-600 mb-12">
          <span className="cursor-pointer">Home</span> | News
        </p>

        {/* 4x4 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="group">
              <Link
                href={{
                  pathname: "/detail",
                  query: {
                    title: post.title,
                    imageUrl: post.imageUrl,
                    description: post.description,
                    author: post.author,
                    date: post.date,
                  },
                }}
              >
                <div>
                  <div className="relative overflow-hidden rounded-lg shadow-lg">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                    />
                    <span className="absolute top-4 left-4 bg-black text-white text-xs px-2 py-1 rounded-md">
                      NEWS
                    </span>
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-500 text-xs">
                      POST BY {post.author} - {post.date}
                    </p>
                    <h2 className="text-lg font-semibold mt-2">{post.title}</h2>
                    <p className="text-gray-600 mt-2">{post.description}</p>
                    <span className="text-sm font-semibold mt-4 inline-block text-black hover:underline">
                      Continue Reading
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Pagination Component */}
        <div className="mt-8 flex justify-center">
          <div className="flex space-x-2">
            <button className="border border-gray-400 rounded-md w-10 h-10 flex items-center justify-center text-black">
              1
            </button>
            <button className="border border-transparent hover:border-gray-400 rounded-md w-10 h-10 flex items-center justify-center text-black transition-colors duration-500 ease-in-out">
              2
            </button>
            <button className="border border-transparent hover:border-gray-400 rounded-md w-10 h-10 flex items-center justify-center text-black transition-colors duration-500 ease-in-out">
              <FaChevronRight />
            </button>
          </div>
        </div>

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
      </main>
    </Layouts>
  );
};

export default Blogs;
