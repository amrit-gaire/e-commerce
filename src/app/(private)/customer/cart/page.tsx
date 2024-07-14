import CartItemTable from "@/components/cart/cart-items-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import React from "react";

type Props = {};

const CartPage = (props: Props) => {
  return (
    <main className="grid grid-cols-3 gap-10">
      <section className="col-span-2 ">
        <CartItemTable />
      </section>
      <section className="col-span-1 ">
        <OrderSummary />
      </section>
    </main>
  );
};

export default CartPage;

function OrderSummary() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Order Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <section className="flex justify-between">
          <h4 className="">Sub Total</h4>
          <span className="text-sm font-bold">Rs. 110</span>
        </section>
        <section className="flex justify-between">
          <h4 className="">Delivery Fee</h4>
          <span className="text-sm font-bold">Rs. 10</span>
        </section>
        <Separator />
        <section className="flex justify-between">
          <h4>Total</h4>
          <span>Rs. 120</span>
        </section>
      </CardContent>
    </Card>
  );
}
