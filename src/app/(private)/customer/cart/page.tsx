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
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <section>
          <h4>Sub Total</h4>
          <span>Rs. 110</span>
        </section>
        <section>
          <h4>Delivery Fee</h4>
          <span>Rs. 10</span>
        </section>
        <Separator />
        <section>
          <h4>Total</h4>
          <span>Rs. 120</span>
        </section>
      </CardContent>
    </Card>
  );
}
