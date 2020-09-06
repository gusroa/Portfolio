import React from "react";
import StaticContext from "context/StaticContext";
import { useContext } from "react";

export default function LoginPage() {
  const context = useContext(StaticContext);
  console.log("Context : ", context);

  return (
    <>
      <nav></nav>
    </>
  );
}
