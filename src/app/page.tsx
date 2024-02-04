import Navbar from "@/components/Navbar";
import Image from "next/image";
import hero from "../assets/pexels-grailify-4252969.jpg";
export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Image src={hero} alt="sneaker" className="h-screen w-full" />
    </div>
  );
}
