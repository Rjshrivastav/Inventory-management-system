import Image from "next/image";
import Navbar from "./components/Navbar";
import AddProduct from "./components/AddProduct";
import DisplayProduct from "./components/DisplayProduct";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-8">
        < AddProduct/>
        <DisplayProduct/>
      </div>
    </>
  );
}
