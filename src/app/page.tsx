import { CategoriesWrapper } from "@/components/home-page/category/categories-wrapper";
import { HeroCarousel } from "@/components/home-page/hero-carousel";
import ProdcutWrapper from "@/components/home-page/product/product-wrapper";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <main>
      <HeroCarousel />
      <CategoriesWrapper />
      <ProdcutWrapper />
    </main>
  );
}
