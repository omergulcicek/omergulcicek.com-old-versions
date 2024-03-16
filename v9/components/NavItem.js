import Link from "next/link"

export default function NavItem({ title, slug, children, isActive }) {
  return (
    <Link
      href={slug}
      className={`relative flex items-center text-sm px-2 lg:px-3 py-2 whitespace-nowrap transition hover:text-blue-500 dark:hover:text-blue-400 ${
        children ? "has-children peer " : ""
      }${isActive ? "text-blue-500 dark:text-blue-400" : ""}`}
    >
      <span>{title}</span>

      {isActive && (
        <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"></span>
      )}
    </Link>
  )
}
