"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LogIn = () => {
  const route = useRouter();
  return (
    <div>
      <div className="flex justify-between">
        <div className="h-96 w-1/2 mt-4 absolute top-[150px] rounded-xl text-blue-700 flex flex-col items-center ">
          <h1 className="text-6xl pl-24 mt-9">
            Welcome <br></br>To New World
          </h1>
          <p className="pl-24 mt-4 text-lg">
            This page help you to find your favourite person
          </p>
        </div>

        <div className="h-96 w-5/12 bg-slate-300 flex flex-col mt-4 absolute left-2/4 top-[150px] rounded-lg">
          <input
            className="p-4 rounded-md ml-4 mr-4 mt-4"
            type="text"
            placeholder="Enter Your Name"
            name="name"
          ></input>
          <input
            className="p-4 rounded-md ml-4 mr-4 mt-4"
            type="email"
            placeholder="Enter Your email"
            name="email"
          ></input>
          <button
            onClick={() => route.push("/login/loggedin-page")}
            className="p-4 rounded-md ml-4 mr-4 mt-4 bg-slate-500"
            type="button"
          >
            Log In
          </button>
          <Link
            className="mt-3 absolute top-[210px] left-1/3"
            href={`/login/forgotten-password-page`}
          >
            Forgotten password?
          </Link>
          <hr></hr>
          <button
            onClick={() => route.push("/login/create-new-account")}
            className="p-4 rounded-md ml-4 mr-4 mt-12 bg-blue-500 w-1/2 absolute top-[230px] left-[100px]"
          >
            Create New Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
