"use client";
import { headerLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavItems() {
  const pathName = usePathname();
  return (
    <ul className=" md:flex-between flex w-full items-center gap-6 md:flex-row flex-col">
      {headerLinks.map((link) => {
        const isActive = pathName === link.route;
        return (
          <li key={link.label}>
            <Link
              href={link.route}
              className={`${
                isActive && "text-primary-500"
              } flex-center p-medium-16 whitespace-nowrap`}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
