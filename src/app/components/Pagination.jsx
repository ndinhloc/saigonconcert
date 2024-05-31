"use client";
import Link from "next/link";
import clsx from "clsx";

import { usePathname, useSearchParams } from "next/navigation";

export default function Pagination(props) {
  const searchParams = useSearchParams();

  const pathname = usePathname();
  const currentPage = parseInt(searchParams.get("page"), 10) || 1;
  const allPages = generatePagination(currentPage, props.totalPage);
  const createPageURL = (pageNumber) => {
    const params = new URLSearchParams(searchParams);

    params.set("page", pageNumber.toString());
    
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div>
      <div className="flex gap-x-4 items-center mb:gap-2">
        <PaginationArrow
          direction={"left"}
          href={createPageURL(currentPage - 1)}
          isDisabled={currentPage <= 1}
        ></PaginationArrow>
        <div className="flex gap-x-4">
          {allPages.map((page, index) => {
            let position;

            if (index === 0) position = "first";
            if (index === allPages.length - 1) position = "last";
            if (allPages.length === 1) position = "single";
            if (page === "...") position = "middle";

            return (
              <PaginationNumber
                key={page}
                href={createPageURL(page)}
                page={page}
                position={position}
                isActive={currentPage === page}
              />
            );
          })}
        </div>
        <PaginationArrow
          direction={"right"}
          href={createPageURL(currentPage + 1)}
          isDisabled={currentPage >= props.totalPage}
        ></PaginationArrow>
      </div>
    </div>
  );
}

function PaginationArrow({ href, direction, isDisabled }) {
  const className = clsx(
    "flex min-h-[50px] min-w-[50px] bg-[#990000] items-center justify-center rounded-full",
    {
      "pointer-events-none ": isDisabled,
      "hover:bg-[#E4B588]": !isDisabled,
      "mr-2 md:mr-4": direction === "left",
      "ml-2 md:ml-4": direction === "right",
    }
  );

  const icon =
    direction === "left" ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#ffffff"
        class="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 19.5 8.25 12l7.5-7.5"
        />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#ffffff"
        class="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>
    );

  return isDisabled ? (
    <div className={className}>{icon}</div>
  ) : (
    <Link className={className} href={href}>
      {icon}
    </Link>
  );
}
function PaginationNumber({ page, href, isActive, position }) {
  const className = clsx(
    "flex h-8 w-8 mb:w-6 mb:h-6 items-center justify-center text-sm border rounded-md",
    {
      "z-10 border-[#990000] text-black": isActive,
      "hover:bg-gray-100": !isActive && position !== "middle",
      "text-gray-300": position === "middle",
    }
  );

  return isActive || position === "middle" ? (
    <div className={className}>{page}</div>
  ) : (
    <Link href={href} className={className}>
      {page}
    </Link>
  );
}

const generatePagination = (currentPage, totalPages) => {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  if (currentPage <= 3) {
    return [1, 2, "...", totalPages - 1, totalPages];
  }

  if (currentPage >= totalPages - 2) {
    return [1, "...", totalPages - 1, totalPages];
  }

  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ];
};
