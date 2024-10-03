"use client"

import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Fun = () => {
const [imageUrl, setImageUrl] = useState("")
  const { theme } = useTheme();
useEffect(() => {
  if(theme === "light"){
    setImageUrl("/image/fun.png")
  }else setImageUrl("/image/fun2.png")
}, [theme])

  return (
    <div className="w-full text-center">
   
        <Image src={`${imageUrl}`} alt="fun" width={1301} height={576} className="mx-auto" />
 
    </div>
  );
};

export default Fun;
