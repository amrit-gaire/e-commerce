"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  SignInFormDefaultValues,
  signInFormSchema,
  SingInFormField,
  TSignInFormSchema,
} from "@/modals/sign-in.modal";
import { Card } from "@/components/ui/card";
import { signIn } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";

type Props = {};

const SignIn = (props: Props) => {
  const { toast } = useToast();
  // 1. Define your form.
  const form = useForm<TSignInFormSchema>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: SignInFormDefaultValues,
  });

  // 2. Define a submit handler.
  async function onSubmit(values: TSignInFormSchema) {
    try {
      await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: true,
        callbackUrl: "http://localhost:3000/",
      });
    } catch (error) {
      toast({
        title: "Failed to login",
        description: "Wrong credentias boy!",
        variant: "destructive",
      });
    }
  }

  return (
    <section className="h-screen flex justify-center items-center">
      <Card className="p-10 w-[500px] h-[400px] bg-blue-300">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-[400px]"
          >
            {SingInFormField.map((formField) => (
              <FormField
                key={formField.name}
                control={form.control}
                name={formField.name}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{formField.label}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={formField.placeholder}
                        required={formField.required}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>
            ))}
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </Card>
    </section>
  );
};

export default SignIn;
