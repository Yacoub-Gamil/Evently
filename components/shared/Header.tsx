import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <div className=" w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href={"/"} className=" w-36 ">
          <Image
            src="/assets/images/logo.svg"
            alt="Evently logo"
            width={128}
            height={36}
          />
        </Link>
        <SignedIn>
          <nav className="md:flex-between md:block hidden w-full max-w-xs ">
            <NavItems />
          </nav>
        </SignedIn>

        <div className="flex gap-3 w-32 justify-end">
          <SignedIn>
            <UserButton afterSwitchSessionUrl="/" />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </div>
  );
}
