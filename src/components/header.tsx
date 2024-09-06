'use client'

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const [showInputs, setShowInputs] = React.useState(false);
  const handleDropdownClick = () => {
    setShowInputs(!showInputs);
  };
  return (
    <>
        <header className="bg-gray-400">
          <nav aria-label="Global" className="mx-auto h-20 flex max-w-7xl items-center justify-between p-2 lg:px-8">
            <div className="flex lg:flex-1">
              <div onClick={() => router.push('/')} className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img alt="" src="/pt-jasa-marga.png" className="h-auto w-20 cursor-pointer" />
              </div>
            </div>
            <div className="relative right-14 flex flex-col gap-2 max-w-7">
              <img src="/account-active.svg" onClick={handleDropdownClick}></img>
              {showInputs && (
              <p
                    className="flex text-xs text-center  text-black p-1"
                    onClick={() => router.push('/')}
              >Logout
              </p>)
              }
              {/* <p onClick={() => router.push('/')} className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer">
                Log in <span aria-hidden="true">&rarr;</span>
              </p> */}
            </div>
          </nav>
        </header>
    </>
  );
}

export default Header;
