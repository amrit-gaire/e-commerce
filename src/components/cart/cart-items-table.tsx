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
        <TableHeader>
          <TableRow>
            <TableHead>
              <Checkbox />
            </TableHead>
            <TableHead className="w-[300px] text-center">Product</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Sub Total</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {(cartItemData as TCartItem[]).map((cartItem) => (
            <TableRow key={cartItem.id}>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell className="flex justify-center">
                <Image
                  src={cartItem.product.image[0]}
                  alt={cartItem.product.name}
                  height={80}
                  width={80}
                />
                <TableCell>{cartItem.product.name}</TableCell>
              </TableCell>
              <TableCell>
                {getDiscountedPrice(
                  cartItem.product.price,
                  cartItem.product.discount
                )}
              </TableCell>
              <TableCell>{cartItem.quantity}</TableCell>
              <TableCell>{cartItem.totalPrice}</TableCell>
              <TableCell>
                <span className="flex">
                  <CiHeart size={20} />
                  <MdDeleteOutline size={20} />
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CartItemTable;
