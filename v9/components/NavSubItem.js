import Link from "next/link"

export default function NavItem({ title, slug, isActive }) {
  return (
    <Link
      href={slug}
      className={`relative flex items-center flex-1 px-3 py-2 transition hover:text-blue-500 dark:hover:text-blue-400${
        isActive ? " text-blue-500 dark:text-blue-400" : ""
      }`}
    >
      {title}
    </Link>
  )
}
