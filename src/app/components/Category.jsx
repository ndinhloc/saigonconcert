"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

function createObject(keys, values) {
  const obj = Object.fromEntries(
    keys.map((key, index) => [key, values[index]])
  );

  return obj;
}

export default function Category(props) {
  const [catTab, setCatab] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const slugMap = createObject(props.categoryName, props.categorySlug);

  const searchParams = useSearchParams();
  function handleClick(category) {
    const params = new URLSearchParams(searchParams);
    if (category) {
      params.set("category", category);
      params.set("page", 1);
    } else {
      params.delete("category");
    }
    router.replace(`${pathname}?${params.toString()}`);
  }
  return (
    <div>
      <div className="flex gap-[56px] font-gotham text-[14px] font-normal mb:hidden">
        {props.categoryName.map((name, index) => (
          <button key={index} onClick={() => handleClick(slugMap[name])}>
            <h1>{name.toUpperCase()}</h1>
          </button>
        ))}
      </div>
      <div
        className="mb:block hidden mb:relative"
        onClick={() => setCatab(!catTab)}
      >
        {catTab ? (
          <div>
            {props.categoryName.map((name, index) => (
              <button key={index} onClick={() => handleClick(slugMap[name])}>
                <h1>{name.toUpperCase()}</h1>
              </button>
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
