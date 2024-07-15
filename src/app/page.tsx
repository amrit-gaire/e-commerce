import { CategoriesWrapper } from "@/components/home-page/category/categories-wrapper";
import { HeroCarousel } from "@/components/home-page/hero-carousel";
import ProdcutWrapper from "@/components/home-page/product/product-wrapper";
import { resolve } from "path";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <main>
      <HeroCarousel />
      <CategoriesWrapper />
      <ProdcutWrapper />
    </main>
  );
}
