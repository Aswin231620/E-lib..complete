"use client";

import Link from "next/link";
import {
  BookOpen,
  User,
  LogIn,
  UserPlus,
  PanelLeft,
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
  { href: "/", label: "Home" },
  { href: "/admin", label: "Admin Panel" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block font-headline">
              OpenShelf
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              {link.label}
            </Link>
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
                <span className="font-bold font-headline">OpenShelf</span>
              </Link>
              <div className="flex flex-col space-y-3">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-foreground text-foreground/80 text-lg"
                >
                  {link.label}
                </Link>
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
