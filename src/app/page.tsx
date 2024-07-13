import { CategoriesWrapper } from "@/components/home-page/category/categories-wrapper";
import { HeroCarousel } from "@/components/home-page/hero-carousel";

import ProdcutWrapper from "@/components/home-page/product/product-wrapper";

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <CategoriesWrapper />
      <ProdcutWrapper />
    </main>
  );
}
