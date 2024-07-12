import React from "react";
import { Card, CardContent, CardHeader } from "../../ui/card";
import Image from "next/image";
import { Category } from "@/types/category";

type Props = {
  category: Category;
};

const SingleCategoryItem = ({ category }: Props) => {
  return (
    <Card className="h-full text-center rounded-sm space-y-4">
      <CardHeader className="p-0 relative w-full h-[100px]">
        <Image
          src={category.imageUrl}
          alt={category.name}
          className="object-cover rounded-t-sm"
          fill
        />
      </CardHeader>
      <CardContent>
        <h3>{category.name}</h3>
      </CardContent>
    </Card>
  );
};

export default SingleCategoryItem;
