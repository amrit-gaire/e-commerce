import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "../ui/checkbox";
import cartItemData from "@/data/cart-items.json";
import { TCartItem } from "@/types/cart-item";
import Image from "next/image";
import { getDiscountedPrice } from "@/utils/getDiscountedPrice";
import { CiHeart } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

type Props = {};

const CartItemTable = (props: Props) => {
  return (
    <div>
      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead>
              <Checkbox />
            </TableHead>
            <TableHead className="w-[100px]">Product</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead className="text-right">Sub Total</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {(cartItemData as TCartItem[]).map((cartItem) => (
            <TableRow key={cartItem.id}>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell className="font-medium">
                <div>
                  <Image
                    src={cartItem.product.image[0]}
                    alt={cartItem.product.name}
                    height={80}
                    width={80}
                  />
                </div>
              </TableCell>
              <TableCell>{cartItem.product.description}</TableCell>
              <TableCell>{cartItem.quantity}</TableCell>
              <TableCell>
                {getDiscountedPrice(
                  cartItem.product.price,
                  cartItem.product.discount
                )}
              </TableCell>
              <TableCell className="text-right flex">
                <CiHeart size={25} />
                <MdDeleteOutline size={25} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CartItemTable;
