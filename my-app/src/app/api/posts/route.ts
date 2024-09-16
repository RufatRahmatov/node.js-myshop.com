import { NextResponse } from "next/server";

const posts = [
  {
    id: "1",
    title: "First Post",
    date: "MAR 09 2024",
    author: "ALUKAS SHOPIFY",
    description: "Description for first post",
    imageUrl: "https://example.com/image1.jpg",
  },
  {
    id: "2",
    title: "Second Post",
    date: "MAR 06 2024",
    author: "ALUKAS SHOPIFY",
    description: "Description for second post",
    imageUrl: "https://example.com/image2.jpg",
  },
];

export async function GET() {
  return NextResponse.json(posts);
}
