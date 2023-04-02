import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { firebaseapp } from "../config/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { UserLoggedIn } from "../features/loginSlice";
import { useNavigate } from "react-router-dom";

function Up() {
  const { register, handleSubmit } = useForm();
  const auth = getAuth(firebaseapp);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8 sm:py-16 lg:py-24">
        <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
          <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl">
            Sign Up
          </h2>
          <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
            Already have an account?{" "}
            <Link to="/signin">
              <span
                title=""
                className="font-medium text-indigo-600 transition-all duration-200 hover:text-indigo-700 hover:underline focus:text-indigo-700"
              >
                Sign In
              </span>
            </Link>
          </p>

          <form
            onSubmit={handleSubmit(async (data) => {
              let userDetails;
              try {
                userDetails = await createUserWithEmailAndPassword(
                  auth,
                  data.email,
                  data.Password
                );
                dispatch(UserLoggedIn());
                navigate("/");
              } catch (error) {
                console.log(error);
              }

              // console.log(userDetails.user);
            })}
            className="mt-8"
          >
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="text-base font-medium text-gray-900 dark:text-gray-200"
                >
                  {" "}
                  Full Name{" "}
                </label>
                <div className="mt-2.5">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                    type="text"
                    {...register("name", { required: true })}
                    placeholder="Enter You Full Name"
                    id="name"
                  ></input>
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-base font-medium text-gray-900 dark:text-gray-200"
                >
                  {" "}
                  Email address{" "}
                </label>
                <div className="mt-2.5">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="Enter Your Email"
                    id="email"
                  ></input>
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="text-base font-medium text-gray-900 dark:text-gray-200"
                >
                  {" "}
                  Password{" "}
                </label>
                <div className="mt-2.5">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                    type="password"
                    {...register("Password", { required: true })}
                    placeholder="Enter Your Password"
                    id="password"
                  ></input>
                </div>
              </div>

              <div>
                <button className="w-full inline-flex items-center justify-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500">
                  Get started
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 ml-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Up;
