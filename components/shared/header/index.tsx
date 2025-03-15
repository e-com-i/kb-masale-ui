import Image from "next/image";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import Menu from "./menu";
import SearchProducts from "./search-products";
import { Card, CardContent } from "@/components/ui/card";
import Categories from "./categories";

const Header = () => {
  return (
    <Card
      className="w-full"
      style={{ height: "160px" }}
      suppressHydrationWarning
    >
      <CardContent className="p-2.5 pt-0">
        <div className="wrapper flex-between" style={{ paddingLeft: "15px" }}>
          <div className="flex-start">
            <Link href="/" className="flex-start ml-4">
              <Image
                src="/images/logo.svg"
                alt={`${APP_NAME} logo`}
                height={30}
                width={30}
                priority={true}
              />
              <span className="hidden lg:block font-bold text-2xl ml-3">
                {APP_NAME}
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <SearchProducts />
          </div>

          <Menu />
        </div>
        <div className="px-8">
          <Categories />
        </div>
      </CardContent>
    </Card>
  );
};

export default Header;
