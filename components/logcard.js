import {
  ExclamationCircleIcon,
  DocumentReportIcon,
  BellIcon,
  UserAddIcon,
  ShoppingCartIcon,
  DatabaseIcon,
} from "@heroicons/react/solid";

import { useEffect } from "react";

function insertIcon(iconName) {
  switch (iconName) {
    case "db":
      return (
        <DatabaseIcon className="h-10 w-10 mx-auto object-cover text-red-500" />
      );
    case "shopping":
      return (
        <ShoppingCartIcon className="h-10 w-10 mx-auto object-cover text-red-500" />
      );
    case "critical":
      return (
        <ExclamationCircleIcon className="h-10 w-10 mx-auto object-cover text-red-500" />
      );
    case "user-added":
      return (
        <UserAddIcon className="h-10 w-10 mx-auto object-cover text-red-500" />
      );
    default:
      return (
        <DocumentReportIcon className="h-10 w-10 mx-auto object-cover text-red-500" />
      );
  }
}

export default function LogCard(props) {
  useEffect(() => {
    console.log(props);
  });
  return (
    <li className="border-gray-400 flex flex-row mb-2">
      <div
        className={`${
          props.isCritical || false
            ? "border-solid border-2 border-red-500"
            : "border-none"
        }  transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer ${
          props.color ? props.color : "bg-slate-100 dark:bg-gray-800"
        } rounded-md flex flex-1 items-center p-4`}
      >
        <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
          <a href="#" className="block relative">
            {insertIcon(props.icon)}
          </a>
        </div>
        <div className="flex-1 pl-1 md:mr-16">
          <div className="font-medium dark:text-white">{props.title}</div>
          <div className="text-gray-600 dark:text-gray-200 text-sm whitespace-pre-line">
            {props.desc}
          </div>
        </div>
        <div className="text-gray-600 dark:text-gray-200 text-xs">
          {props.time}
        </div>
        <button className="w-24 text-right flex justify-end">
          {props.isNotify && <BellIcon className="h-6 w-6 text-yellow-400" />}
        </button>
      </div>
    </li>
  );
}

LogCard.defaultProps = {
  isCritical: false,
  isNotify: false,
  color: "bg-slate-100 dark:bg-gray-800",
};
