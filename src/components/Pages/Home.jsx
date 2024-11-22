import React from "react";
import MainSwipper from "../Home_Comp/MainSwipper";
import Cart from "../Home_Comp/Cart";
import CategorySwipper from "../Home_Comp/CategorySwipper";
import Footer from "../Footer";

const categories = [
  "Kurta Set",
  "Gharara",
  "Sharara",
  "Maxi",
  "Lehenga",
  "Pishwas",
];
const collection = [
  "Jhil Mil",
  "Husn-e-Aara",
  "Nauratan",
  "Sajni vol I & II",
  "Shehrzaad",
  "Mahiya",
];
const sale = []; // empty decsription
const Category_images = [
  {
    img: "https://cdn.shopify.com/s/files/1/2337/7003/products/a3032f8b5add592b70d4cdb691ffe99e.jpg?v=1707915868&width=600",
    price: "17,690",
    name: "Suhana",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/2337/7003/files/cropped_image-173041931058213_d6892874-47bd-4f06-8d12-b5a3b6eab6e6.jpg?v=1730460168&width=600",
    price: "16,500",
    name: "Sadaf",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/2337/7003/files/cropped_image-172898318359818_bf1fc188-0b35-4158-a700-6e68767cfbe6.jpg?v=1729061882&width=600",
    price: "15,480",
    name: "Mehnaaz",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/2337/7003/files/0004_1H8A2088.jpg?v=1706362740&width=600",
    price: "16,088",
    name: "Sahar",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/2337/7003/files/cropped_image-173114786603655_ccab78d7-979d-43b2-8ae1-b56b639365df.jpg?v=1731909767&width=600",
    price: "18,200",
    name: "Anishka",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/2337/7003/products/9e2cadb36342a3f8bcdb7e2261c73d9e.jpg?v=1710497683&width=600",
    price: "16,000",
    name: "Meena",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/2337/7003/files/cropped_image-172302398717940_29057bbf-bc6f-4566-8759-eee01c782fbf.jpg?v=1723033218&width=600",
    price: "16,520",
    name: "Shanaya",
  },
];

const Sale = [
  {
    img: "https://cdn.shopify.com/s/files/1/2337/7003/files/0062_Kundan1.jpg?v=1692613073&width=300",
    price: "9000",
    name: "Kundan",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/2337/7003/files/0003_9C0280C8-ACC9-41BF-928D-1687FDE9910C.jpg?v=1686558764&width=300",
    price: "5,950",
    name: "Murad",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/2337/7003/files/cropped_image-172906632192920_97e26ae3-f133-4ba8-85d9-ff8cf69a1588.jpg?v=1730122519&width=300",
    price: "14,300",
    name: "Soraya",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/2337/7003/files/b0577a8f9d8aff320acc072fd87ae1ad.jpg?v=1718437279&width=300",
    price: "16,000",
    name: "Shamim",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/2337/7003/files/DSC02392_9aedf339-a0e5-4e8b-acf0-f965e6ff7617.jpg?v=1700207701&width=300",
    price: "18,200",
    name: "Noor Begum",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/2337/7003/files/b86611ee3468f97664c5eddabf4efebc.jpg?v=1730811292&width=300",
    price: "22,500",
    name: "Mumtaz Begum",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/2337/7003/files/0014_229CD8DA-B329-45FB-99E8-3C1BE2B1BBCE.jpg?v=1686558326&width=300",
    price: "5,950",
    name: "Heer",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/2337/7003/products/748e2ee2760b78f58178a16f77735506.jpg?v=1701879909&width=300",
    price: "14,820",
    name: "Kaira",
  },
];

const Collection = [
  {
    img: "https://cdn.shopify.com/s/files/1/2337/7003/files/cropped_image-173114904476376_d41bdc17-48dd-4a1e-b5df-b07e24ad69c8.jpg?v=1731153849&width=600",
    price: "16,900",
    name: "Zanon",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/2337/7003/files/cropped_image-173114640127894_dd2b26e6-5bd5-44b1-970d-5081c47eecec.jpg?v=1731154218&width=600",
    price: "16,640",
    name: "Bareera",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/2337/7003/files/cropped_image-173114786603655_ccab78d7-979d-43b2-8ae1-b56b639365df.jpg?v=1731909767&width=600",
    price: "18,150",
    name: "Anishka Black",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/2337/7003/files/cropped_image-173112574106735_c731e19a-c6a3-4e38-8316-09e574758a2d.jpg?v=1731163780&width=600",
    price: "16,500",
    name: "Adeen",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/2337/7003/files/cropped_image-173112622635175_58af1dcf-8ebb-48df-bc08-9952d79650fc.jpg?v=1731154271&width=600",
    price: "19,600",
    name: "Nyra",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/2337/7003/files/cropped_image-173117764031676_bbb88852-215e-4d60-b8ee-d4d4db6b1aec.jpg?v=1731311877&width=600",
    price: "19,380",
    name: "Arooma",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/2337/7003/files/cropped_image-173114688246887_192735ce-558d-424f-85c8-3ffe27efc8ed.jpg?v=1731154094&width=600",
    price: "17,400",
    name: "Baneen",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/2337/7003/files/cropped_image-173114983076324_902ce574-b735-4ed4-8a3a-5577dba90e58.jpg?v=1731155831&width=600",
    price: "20,400",
    name: "Rahina",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/2337/7003/files/cropped_image-173115047445903_870e6cc0-b6a9-40bc-8be8-cc47e847bba8.jpg?v=1731156547&width=600",
    price: "18,910",
    name: "Sabika",
  },
];

const Top = [
  {
    img: "https://cdn.shopify.com/s/files/1/2337/7003/files/cropped_image-172898956317875_ee452425-5350-495b-8ad7-aadcfc4ec49e.jpg?v=1729068489&width=300",
    price: "16,900",
    name: "Zanon",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/2337/7003/files/cropped_image-173041931058213_d6892874-47bd-4f06-8d12-b5a3b6eab6e6.jpg?v=1730460168&width=300",
    price: "16,640",
    name: "Bareera",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/2337/7003/files/cropped_image-172295201934430_fa241065-6265-4b57-beb6-8d9fe3a7fde4.jpg?v=1723007028&width=300",
    price: "18,150",
    name: "Anishka Black",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/2337/7003/files/cropped_image-172686503860979_8a07272b-b84b-45c2-972d-5542c702d6a7.jpg?v=1726919642&width=300",
    price: "16,500",
    name: "Adeen",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/2337/7003/files/cropped_image-172687355519052_1477b657-e908-48a4-9524-43253b9ab7cb.jpg?v=1726919697&width=300",
    price: "19,600",
    name: "Nyra",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/2337/7003/files/cropped_image-172687355519052_1477b657-e908-48a4-9524-43253b9ab7cb.jpg?v=1726919697&width=300",
    price: "19,380",
    name: "Arooma",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/2337/7003/products/9e2cadb36342a3f8bcdb7e2261c73d9e.jpg?v=1710497683&width=300",
    price: "17,400",
    name: "Baneen",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/2337/7003/products/9e2cadb36342a3f8bcdb7e2261c73d9e.jpg?v=1710497683&width=300",
    price: "20,400",
    name: "Rahina",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/2337/7003/files/cropped_image-173115047445903_870e6cc0-b6a9-40bc-8be8-cc47e847bba8.jpg?v=1731156547&width=600",
    price: "18,910",
    name: "Sabika",
  },
];
const Home = () => {
  return (
    <>
      <MainSwipper />
      <Cart heading="Shop by Category" categories={categories} />
      <CategorySwipper images={Category_images} />
      <Cart heading="Sale" categories={sale} />
      <CategorySwipper images={Sale} />
      <Cart heading="Shop by Collection" categories={collection} />
      <CategorySwipper images={Collection} />
      <Cart heading="Top Picks" categories={sale} />
      <CategorySwipper images={Top} />
      <Footer />
    </>
  );
};

export default Home;
