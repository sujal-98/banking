"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "../../constants";
import { cn } from "../../lib/utils";
import { usePathname } from "next/navigation";

interface SidebarProps {
  user: any; // You can replace 'any' with a more specific type for 'user'
}

const Sidebar = ({ user }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <div className="sidebar bg-gray-800 min-h-screen w-64 px-6 py-8 text-white">
      <nav className="flex flex-col gap-8">
        <Link href="/" className="flex items-center gap-4 mb-10">
          <Image
            alt="logo"
            src="/icons/logo.svg"
            width={34}
            height={34}
            className="w-8 h-8"
          />
          <h1 className="text-xl font-bold tracking-wide text-white">
            Horizon
          </h1>
        </Link>
        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);
          return (
            <Link href={item.route} key={item.label}>
              <div
                className={cn(
                  "flex items-center gap-4 p-3 rounded-md transition-colors duration-200 hover:bg-gray-700",
                  {
                    "bg-gradient-to-r from-indigo-500 to-purple-600 text-white":
                      isActive,
                  }
                )}
              >
                <div className="relative w-6 h-6">
                  <Image
                    src={item.imgURL}
                    alt={item.label}
                    layout="fill"
                    className={cn(
                      "object-contain",
                      {
                        "brightness-[1.2]": isActive,
                        "brightness-[0.7]": !isActive,
                      }
                    )}
                  />
                </div>
                <span
                  className={cn("text-sm font-medium", {
                    "text-gray-300": !isActive,
                    "text-white": isActive,
                  })}
                >
                  {item.label}
                </span>
              </div>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
