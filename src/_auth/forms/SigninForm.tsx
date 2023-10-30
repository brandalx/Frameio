import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Link, useNavigate } from "react-router-dom";

import { Input } from "@/components/ui/input";
import { SignInValidation } from "@/lib/validation";
import Loader from "@/components/shared/Loader";

import { Eye, EyeOff } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import {
  useCreateUserAccount,
  useSignInAccount,
} from "@/lib/react-query/queriesAndMutations";
import { useUserContext } from "@/context/AuthContext";

const SigninForm = () => {
  const [shownPassword, setShwonPassword] = useState(false);
  const { toast } = useToast();
  const { checkAuthUser, isLoading: isUserLoading } = useUserContext();

  const navigate = useNavigate();

  const { mutateAsync: signInAccount, isPending } = useSignInAccount();

  //  Form defenition.
  const form = useForm<z.infer<typeof SignInValidation>>({
    resolver: zodResolver(SignInValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // submit handler.
  async function onSubmit(values: z.infer<typeof SignInValidation>) {
    const session = await signInAccount({
      email: values.email,
      password: values.password,
    });

    if (!session) {
      return toast({
        variant: "destructive",
        title: "Sign in failed. Please try again",
        description:
          "Something went wrong. Try to reload this page and sign up again.",
      });
    }

    const isLoggedIn = await checkAuthUser();
    if (isLoggedIn) {
      form.reset();

      navigate("/");
    } else {
      return toast({
        variant: "destructive",
        title: "Sign up failed. Please try again",
        description:
          "Something went wrong. Try to reload this page and sign up again.",
      });
    }
  }

  return (
    <Form {...form}>
      <div className="sm:w-420 flex-center flex-col ">
        <img src="/assets/images/logo.svg" alt="logo" />
        <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">
          Log in to your account
        </h2>
        <p className="text-light-3 small-medium md:base-regular">
          Welcome back, please, enter your details
        </p>

        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5 w-full mt-4"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    autoComplete="email"
                    type="text"
                    className="shad-input"
                    placeholder="Provide correct email here"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <div className="relative flex items-center">
                    <Input
                      autoComplete="new-password"
                      type={shownPassword ? "text" : "password"}
                      className="shad-input w-full pr-6"
                      placeholder="Be sure to create a strong password"
                      {...field}
                    />
                    <span
                      className="absolute inset-y-0 right-0 flex items-center px-3 cursor-pointer"
                      onClick={() => setShwonPassword(!shownPassword)}
                    >
                      {shownPassword ? <Eye /> : <EyeOff />}
                    </span>
                  </div>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="shad-button_primary" type="submit">
            {isPending ? (
              <div className="flex justify-center items-center">
                <div className="flex center gap-2">Logging in</div>
                <Loader />
              </div>
            ) : (
              " Sign In"
            )}
          </Button>
          <p className="text-small-regular text-light-2 text-center mt-2 ">
            Dont have an account yet?
            <Link
              to="/sign-up"
              className="text-primary-500 text-small-semibold ml-1"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </Form>
  );
};

export default SigninForm;
