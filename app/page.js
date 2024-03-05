import Navbar from "./components/Navbar";
import AddAndHandleProduct from "./components/AddProduct";
import SearchProduct from "./components/SearchProduct";
import DisplayProduct from "./components/DisplayProduct";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container flex px-4 gap-2 py-2">
          <div className=" w-1/4 h-1/2 max-h-[40vh]">
            <AddAndHandleProduct />
          </div>
          <div className=" w-1/4 h-[90vh] max-h-[90vh] text-center">
            <SearchProduct />
          </div>

          <div className=" w-2/4 h-[90vh] max-h-[90vh] overflow-y-scroll">
            <DisplayProduct />
          </div>
      </div>
      <Footer />
    </>
  );
}
