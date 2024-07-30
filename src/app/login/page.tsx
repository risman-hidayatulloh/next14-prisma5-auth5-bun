import { signIn } from "@/lib/auth";

export default function Login() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <div className="flex h-screen justify-center items-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Login with Google
        </button>

        <button
          type="submit"
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          Login with Github
        </button>
      </div>
    </form>
  );
}
