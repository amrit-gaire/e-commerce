import { CategoriesWrapper } from "@/components/home-page/category/categories-wrapper";
import { CategoryCarousel } from "@/components/home-page/category/category-carousel";

import ProdcutWrapper from "@/components/home-page/product/product-wrapper";

export default function Home() {
  return (
    <main>
      <CategoryCarousel />
      <CategoriesWrapper />
      <ProdcutWrapper />
    </main>
  );
}
