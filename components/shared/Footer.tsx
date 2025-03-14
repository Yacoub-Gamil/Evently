import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t mb-1">
      <div className=" flex-center warpper flex-between flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={128}
            height={38}
          />
        </Link>
        <p>2024 Eeventlu, All Rights reseved.</p>
      </div>
    </footer>
  );
}
