import React from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function SignIn() {
  return (
    <>
      <div className="flex min-h-full flex-col justify-center items-center px-6 py-12 lg:px-8 mt-14">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Link href="/">
            <img
              className="mx-auto h-10 w-auto"
              src="./img/Talm.png"
              alt="Talm"
            />
          </Link>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign In to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-[#895d47] hover:text-[#b16c4abb]"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#895d47] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#b16c4abb]"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <a
              href="/signUp"
              className="font-semibold leading-6 text-[#895d47] hover:text-[#b16c4abb]"
            >
              Sign Up
            </a>
          </p>

          <p className="mt-2 text-center text-sm text-gray-500">
            Checkout Our{" "}
            <a
              href="/subscriptions"
              className="font-semibold leading-6 text-[#895d47] hover:text-[#b16c4abb]"
            >
              subscriptions
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
