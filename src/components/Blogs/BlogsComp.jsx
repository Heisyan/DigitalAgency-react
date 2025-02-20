import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/blog/blog1.png";
import Img2 from "../../assets/blog/blog2.png";
import Img3 from "../../assets/blog/blog3.png";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Strategi Digital Marketing yang Efektif di Era Modern",
    description:
      "Menghadapi era digital yang semakin kompetitif, tim kami berhasil meningkatkan ROI klien hingga 300% dalam 6 bulan. Dengan pendekatan data-driven dan strategi yang terukur, kami membantu klien mengoptimalkan presence digital mereka. Kolaborasi yang erat dengan tim internal klien membuat implementasi strategi berjalan lebih efektif.",
    author: "Ahmad Rizki",
    date: "April 22, 2024",
  },
  {
    id: 2,
    image: Img2,
    title: "Transformasi Digital untuk UKM",
    description:
      "Berkolaborasi dengan lebih dari 50 UKM selama setahun terakhir membuka mata kami tentang pentingnya pendekatan personal dalam transformasi digital. Setiap bisnis unik, dan solusi digital yang kami tawarkan selalu disesuaikan dengan kebutuhan spesifik klien. Hasilnya? Peningkatan penjualan rata-rata 150% bagi partner UKM kami.",
    author: "Sarah Pertiwi",
    date: "April 15, 2024",
  },
  {
    id: 3,
    image: Img3,
    title: "Inovasi dalam Social Media Marketing",
    description:
      "Penggunaan AI dan analisis data real-time telah mengubah cara kami mengelola kampanye social media. Melalui kombinasi kreativitas dan teknologi, engagement rate klien kami meningkat hingga 200%. Pemahaman mendalam terhadap algoritma platform social media terbaru memungkinkan kami mengoptimalkan setiap konten yang dipublikasikan.",
    author: "Budi Santoso",
    date: "April 8, 2024",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-white py-10 pb-14">
        <section data-aos="fade-up" className="container ">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-semibold">
            Our Blogs
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
          <div className="text-center">
            <button className="primary-btn">Lihat Semua Blog</button>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
