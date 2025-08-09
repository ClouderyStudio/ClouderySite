"use client"

import Link from "next/link"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
  } from "@/components/ui/navigation-menu"

  const servers: { title: string; href: string; description: string }[] = [
    {
      title: "竹像素",
      href: "https://zhuxs.cn",
      description:
        "一个互通的、最新版本的纯净MC服务器。",
    },
    {
      title: "悦灵工坊",
      href: "#",
      description:
        "(即将推出)一个 NeoForge 模组服务器。",
    }
  ]

export function Navigate() {
  return (
      <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
        <Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold lg:inline-block">
          Cloudery
        </span>
      </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>云术</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="#"
                  >
                    <Icons.logo className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                        云术工作室官网
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      也就是本站,作为用户的指引和信息提供网站。
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="https://doc.cldery.com" title="文档站">
                里面是我们的文档。
              </ListItem>
              <ListItem href="https://x8.pw" title="导航站">
                包含了我们的所有项目。
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>MC服务器</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {servers.map((server) => (
                <ListItem
                  key={server.title}
                  title={server.title}
                  href={server.href}
                >
                  {server.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
