import { CategoriesWrapper } from "@/components/home-page/category/categories-wrapper";
import { HeroCarousel } from "@/components/home-page/hero-carousel";
import ProdcutWrapper from "@/components/home-page/product/product-wrapper";
import { Toaster } from "@/components/ui/toaster";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return (
    <main>
      <HeroCarousel />
      <CategoriesWrapper />
      <ProdcutWrapper />
      <Toaster />
    </main>
  );
}
