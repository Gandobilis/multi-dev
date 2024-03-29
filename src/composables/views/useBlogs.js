import blogImage from "../../assets/blogs/10-Landing-Page-Dos-and-Donts.jpg";

export default function useBlogs() {
  return Array(6).fill({
    blogImage,
    title: `Custom WordPress Development: A
Comprehensive Guide`,
    meta: 'Nick Meagher | May 11, 2023',
    text: `Should you use a WordPress Theme or go with Custom
WordPress Development from scratch? It all depends on your
business goals.`,
  });
};