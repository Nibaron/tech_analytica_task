import { Footer } from "@/conponents/layout/footer";
import Header from "@/conponents/layout/header";
import Main from "@/conponents/layout/main";

export default async function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className=" bg-slate-900">
        <Header />
      </div>
      <Main>{children}</Main>
      {/* <div className=" bg-black">
        <Footer />
      </div> */}
    </>
  );
}
