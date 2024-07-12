import { Category } from "./category";
import { TReviews } from "./reviews";

export type TProduct = {
    id: string;
    name: string;
    description: string;
    price: number;
    discount: number;
    category: Category;
    stockQuantity: number;
    image: string[];
    reviews: TReviews[];
    avgRating: number;
}