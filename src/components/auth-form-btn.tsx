"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

export default function AuthFormBtn({ type }: { type: "logIn" | "signUp" }) {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending}>
      {type === "logIn" ? "Log In" : "Sign Up"}
    </Button>
  );
}
