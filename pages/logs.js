import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import LogCard from "../components/logcard";

import { useTheme } from "next-themes";

const data = [
  {
    title: "New User Sign Up",
    desc: `userid: #2209988
  Username: jackreacher`,
    time: "26 Dec 2021 07:02:33",
    isUserAdded: true,
  },
  {
    title: "User Login",
    desc: `userid: #2209988
    Username: jackreacher`,
    time: "26 Dec 2021 07:02:40",
    isUserAdded: true,
  },
  {
    title: "User Joined Waitlist",
    desc: `userid: #2209988
    Username: jackreacher`,
    time: "26 Dec 2021 07:02:42",
    isNotify: true,
    isUserAdded: true,
  },
  {
    title: "New Order Placed",
    desc: `userid: #2209988
    orderid: #9082781`,
    time: "26 Dec 2021 07:03:20",
    isShopping: true,
  },
  {
    title: "Running DB Migrations",
    desc: `userid: #2209988
    orderid: #9082781`,
    time: "26 Dec 2021 07:07:10",
    color: "bg-amber-400",
    isDB: true,
  },
];

export default function FirstPost() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <div className="relative min-h-screen flex dark:bg-slate-900">
        {/* sidebar */}
        <div className="bg-blue-800 dark:bg-gray-800 text-blue-100 w-64 space-y-6">
          {/* logo */}
          <Link href="/" className="text-white flex items-center space-x-2">
            <div>
              <Image
                src="/logdogs_logo.svg"
                height={32}
                width={64}
                alt="Sayam"
              />
              <span className="text-2xl font-extrabold">LOGDOGS</span>
            </div>
          </Link>
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="p-3 h-12 w-12 order-2 md:order-3"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            CLICK ME!
          </button>
          {/* nav */}
          <nav>
            <a href="#" className="block py-2 5 px-4">
              Home
            </a>
          </nav>
        </div>
        {/* content */}

        <div className="flex-1 p-10 text-2xl font-bold">
          <div className="container flex flex-col mx-auto w-full items-center justify-center">
            <div className="px-4 py-5 sm:px-6 w-full border dark:bg-gray-800  shadow mb-2 rounded-md">
              <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                Project Logs
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-200">
                Details and informations about the project logs.
              </p>
            </div>
            <ul className="flex flex-col w-full px-0">
              {/* logcards */}
              {data.map((logData, i) => (
                <LogCard key={i} {...logData} />
              ))}
            </ul>
          </div>
        </div>
      </div>
      <style jsx>{`
        a {
          color: inherit;
          text-decoration: none;
        }
      `}</style>
    </>
  );
}
