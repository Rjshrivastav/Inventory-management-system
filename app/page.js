import Image from "next/image";
import Navbar from "./components/Navbar";
import AddAndHandleProduct from "./components/AddProduct";
import SearchProduct from "./components/SearchProduct";
import DisplayProduct from "./components/DisplayProduct";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-8">
        <SearchProduct/>
        < AddAndHandleProduct/>
        <DisplayProduct/>
      </div>
    </>
  );
}
