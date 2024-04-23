import Header from "@/app/(CustomerFacing)/_components/Header";
import { Nav, NavLink } from "@/components/Nav";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {/* <Header></Header> */}
      <div className="container my-6">{children}</div>
      <Image
        src={"/generalAssets/footer.jpeg"}
        width={0}
        height={0}
        sizes="100vw"
        style={{width: "100%", height: "auto"}}
        alt=""
      ></Image>
    </>
  );
}
