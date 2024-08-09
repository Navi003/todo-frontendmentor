import Image from "next/image";
import React from "react";

function Heading() {
  return (
    <div className="flex justify-between mt-20">
      <h1 className="text-5xl text-neutral-very-light-gray">Todo</h1>
      <div>
        <Image src="/images/icon-sun.svg" height={25} width={25} alt="Sun" />
      </div>
    </div>
  );
}

export default Heading;
