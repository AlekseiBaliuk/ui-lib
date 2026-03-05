"use client";

import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { FaHome } from "react-icons/fa";
import { FiLoader } from "react-icons/fi";
import { AiOutlineAntDesign } from "react-icons/ai";
import { FaCircleDot } from "react-icons/fa6";

type NavLink = {
  kind: "link";
  label: string;
  href: string;
  icon: React.ReactNode;
};

type NavGroup = {
  kind: "group";
  id: string;
  label: string;
  icon: React.ReactNode;
  items: NavLink[];
};

type NavItem = NavLink | NavGroup;

const nav: NavItem[] = [
  { kind: "link", label: "Home", href: "/", icon: <FaHome /> },

  {
    kind: "group",
    id: "loaders",
    label: "Loaders",
    icon: <FiLoader />,
    items: [
      {
        kind: "link",
        label: "Gradient Light Preloader",
        href: "/loaders/gradientLightPreloader",
        icon: <FaCircleDot />,
      },
      // { kind: "link", label: "Dots", href: "/loaders/dots", icon: "…" },
    ],
  },

  {
    kind: "group",
    id: "ui",
    label: "UI",
    icon: <AiOutlineAntDesign />,
    items: [
      { kind: "link", label: "Animated 404 Page", href: "/ui/animated404page", icon: <FaCircleDot /> },
      { kind: "link", label: "Social Media Hover Effect", href: "/ui/socialMediaHoverEffect", icon: <FaCircleDot />},
    ],
  },
];

function isGroupActive(group: NavGroup, pathname: string) {
  return group.items.some(
    (x) => pathname === x.href || pathname.startsWith(x.href + "/"),
  );
}

export default function SidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

    const [open, setOpen] = useState<Record<string, boolean>>(() => {
    const init: Record<string, boolean> = {};
    for (const item of nav) {
      if (item.kind === "group") {
        init[item.id] = isGroupActive(item, pathname);
      }
    }
    return init;
  });

  const toggleGroup = (id: string) =>
    setOpen((p) => ({ ...p, [id]: !p[id] }));

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <aside
        className={`sidebar transition-[width] duration-300 ${collapsed ? "w-16" : "w-64"}`}
      >
        <div className="h-14 px-3 flex items-center justify-between border-b border-gray-200 dark:border-gray-700">
          {!collapsed && (
            <div className="font-semibold">
              Menu
            </div>
          )}

          {!collapsed && <ThemeToggle />}

          <button
            type="button"
            onClick={() => setCollapsed((v) => !v)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            aria-label="Toggle sidebar"
          >
            <IoMenu className="w-6 h-6" />
          </button>
        </div>

        <nav className="p-2 space-y-1">
          {nav.map((item) => {
            if (item.kind === "link") {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center rounded-lg px-3 py-2 transition-colors ${collapsed ? "justify-center" : "gap-3"} ${active ? "sidebar-link-active" : "sidebar-link"}`}
                >
                  <span className="text-xl">{item.icon}</span>
                  {!collapsed && <span className="truncate">{item.label}</span>}
                </Link>
              );
            }

            // group
            const groupActive = isGroupActive(item, pathname);
            const isOpen = !!open[item.id];

            return (
              <div key={item.id}>
                <button
                  type="button"
                  onClick={() => toggleGroup(item.id)}
                  className={`w-full flex items-center rounded-lg px-3 py-2 transition-colors ${collapsed ? "justify-center" : "justify-between"} ${groupActive ? "sidebar-group-active" : "sidebar-link"}`}
                  aria-expanded={isOpen}
                >
                  <span
                    className={
                      collapsed ? "text-xl" : "flex items-center gap-3"
                    }
                  >
                    <span className="text-xl">{item.icon}</span>
                    {!collapsed && (
                      <span className="truncate">{item.label}</span>
                    )}
                  </span>

                  {!collapsed && (
                    <span
                      className={
                        isOpen
                          ? "rotate-180 transition-transform"
                          : "transition-transform"
                      }
                    >
                      ▾
                    </span>
                  )}
                </button>

                {/* Subitems: show only when sidebar is not collapsed */}
                {!collapsed && (
                  <div
                    className={[
                      "overflow-hidden transition-[max-height] duration-300",
                      isOpen ? "max-h-96" : "max-h-0",
                    ].join(" ")}
                  >
                    <div className="mt-1 space-y-1 pl-4">
                      {item.items.map((sub) => {
                        const active = pathname === sub.href;

                        return (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${active ? "sidebar-sub-active" : "sidebar-sub-link"}`}
                          >
                            <span className="text-base">{sub.icon}</span>
                            <span className="truncate">{sub.label}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 overflow-y-auto p-6 main-content">
        <div className="max-w-4xl">{children}</div>
      </main>
    </div>
  );
}
