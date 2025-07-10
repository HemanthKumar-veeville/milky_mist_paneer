import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { useState } from "react";
import { STATES } from "../../lib/constants";

export const Layout = () => {
  const [selectedState, setSelectedState] = useState<string>("Karnataka");

  return (
    <div className="bg-[#C0C9EE] min-h-screen w-full">
      <div className="min-h-screen max-w-[390px] w-full mx-auto bg-white">
        <Header
          selectedState={selectedState}
          setSelectedState={setSelectedState}
          states={STATES}
        />
        <main className="pt-[50px] sm:pt-[65px]">
          <Outlet context={{ selectedState, setSelectedState }} />
        </main>
      </div>
    </div>
  );
};
