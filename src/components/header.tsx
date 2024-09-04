'use client'

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

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
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <p onClick={() => router.push('/login')} className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer">
                Log in <span aria-hidden="true">&rarr;</span>
              </p>
            </div>
          </nav>
        </header>
    </>
  );
}

export default Header;
