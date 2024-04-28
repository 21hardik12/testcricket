import Header from "@/app/(CustomerFacing)/_components/Header";

export default function BookingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header></Header>
      <div className="container my-6">{children}</div>      
    </>
  );
}
