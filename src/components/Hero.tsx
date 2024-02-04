import React from "react";
import Image from "next/image";
import hero from "../assets/pexels-grailify-4252969.jpg";

export default function Hero() {
  return (
    <div className="h-full w-full">
      <Image src={hero} alt="sneaker image" fill />
    </div>
  );
}
