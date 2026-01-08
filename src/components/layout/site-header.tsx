"use client";

import Link from "next/link";
import {
  BookOpen,
  User,
  LogIn,
  UserPlus,
  PanelLeft,
  LayoutGrid,
  Download,
  Settings,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "Browse", icon: Search },
  { href: "/categories", label: "Categories", icon: LayoutGrid },
  { href: "/downloads", label: "My Downloads", icon: Download },
  { href: "/admin", label: "Admin Panel", icon: Settings },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center">
        <div className="mr-6 hidden md:flex">
          <Link href="/" className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block font-headline text-foreground">
              E-Library
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-1 text-sm font-medium">
          {navLinks.map(link => (
            <Button key={link.href} variant="ghost" asChild className="text-muted-foreground hover:bg-accent hover:text-accent-foreground">
              <Link
                href={link.href}
              >
                <link.icon className="mr-2 h-4 w-4" />
                {link.label}
              </Link>
            </Button>
          ))}
        </nav>
        
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <PanelLeft className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
             <Link href="/" className="flex items-center space-x-2 mb-6">
                <BookOpen className="h-6 w-6 text-primary" />
                <span className="font-bold font-headline">E-Library</span>
              </Link>
              <div className="flex flex-col space-y-2">
              {navLinks.map(link => (
                 <Button key={link.href} variant="ghost" asChild className="text-muted-foreground hover:bg-accent hover:text-accent-foreground justify-start">
                    <Link
                      href={link.href}
                      className="text-lg"
                    >
                       <link.icon className="mr-2 h-4 w-4" />
                      {link.label}
                    </Link>
                 </Button>
              ))}
              </div>
          </SheetContent>
        </Sheet>
        
        <div className="flex flex-1 items-center justify-end space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
                <span className="sr-only">User Menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/login">
                  <LogIn className="mr-2 h-4 w-4" />
                  <span>Login</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/register">
                  <UserPlus className="mr-2 h-4 w-4" />
                  <span>Register</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
