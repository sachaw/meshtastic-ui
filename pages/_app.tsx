import { useEffect, useState } from "react";
import ActionBar from "../Components/ActionBar";
import "../styles/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col h-screen dark:bg-gray-800">
      <Component {...pageProps} />
      <ActionBar />
    </div>
  );
}

export default MyApp;
