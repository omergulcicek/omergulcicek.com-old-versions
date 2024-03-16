"use client"

import { usePathname } from "next/navigation"

import NavItem from "./NavItem"
import NavSubItem from "./NavSubItem"

import links from "./../public/header.json"

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav className="mt-4 mx-auto">
      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        {links.map(({ title, slug, isHiddenMobile, children }) => (
          <li
            key={slug}
            className={
              isHiddenMobile
                ? "hidden lg:flex lg:items-center"
                : "flex items-center"
            }
          >
            <NavItem
              title={title}
              slug={slug}
              isHiddenMobile={isHiddenMobile}
              children={children}
              isActive={
                pathname == slug ||
                children?.find(({ slug: sublink }) => pathname == sublink)
              }
            />

            {children && (
              <ul className="absolute right-0 lg:right-auto bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 top-full bg-white w-auto max-w-[240px] min-w-[200px] rounded-xl p-3 hidden flex-col peer-hover:flex hover:flex">
                {children?.map(({ title, slug, isShowMobile }) => (
                  <li
                    key={slug}
                    className={`flex items-center relative${
                      isShowMobile ? " lg:hidden" : ""
                    }`}
                  >
                    <NavSubItem
                      title={title}
                      slug={slug}
                      isActive={pathname == slug}
                    />
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}
