"use client";
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <div className="flex h-screen justify-center items-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          signIn("google");
        }}
      >
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Login with Google
        </button>
      </form>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          signIn("github");
        }}
      >
        <button
          type="submit"
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-4"
        >
          Login with GitHub
        </button>
      </form>
    </div>
  );
}
