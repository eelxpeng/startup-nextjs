import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Finetuning Mixtral 8x7B with SFT and DPO",
    paragraph:
      "We describe the finetuning experiments we have done to illustrate the effectiveness of SFT and DPO with the state-of-the-art Mixtral 8x7B model.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Bryan Li",
      image: "/images/blog/author-01.png",
      designation: "AI Researcher",
    },
    tags: ["Research"],
    publishDate: "2024-02-24",
    link: "/blog-details/blog-2024-02-24",
  },
  // {
  //   id: 2,
  //   title: "9 simple ways to improve your design skills",
  //   paragraph:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
  //   image: "/images/blog/blog-02.jpg",
  //   author: {
  //     name: "Musharof Chy",
  //     image: "/images/blog/author-02.png",
  //     designation: "Content Writer",
  //   },
  //   tags: ["computer"],
  //   publishDate: "2025",
  //   link: "/blog-details",
  // },
  // {
  //   id: 3,
  //   title: "Tips to quickly improve your coding speed.",
  //   paragraph:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
  //   image: "/images/blog/blog-03.jpg",
  //   author: {
  //     name: "Lethium Deo",
  //     image: "/images/blog/author-03.png",
  //     designation: "Graphic Designer",
  //   },
  //   tags: ["design"],
  //   publishDate: "2025",
  //   link: "/blog-details",
  // },
];
export default blogData;
