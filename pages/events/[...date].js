import { useRouter } from "next/router";
import React from "react";

const SpecialEvent = () => {
  const router = useRouter();
  console.log(router.query);
  return <div>special event</div>;
};

export default SpecialEvent;
