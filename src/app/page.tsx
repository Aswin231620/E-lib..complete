"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Search, Star, Filter, Grid, List } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { books, categories } from "@/lib/data";
import { Book as BookType, Category as CategoryType } from "@/lib/types";

function BookCard({ book }: { book: BookType }) {
  return (
    <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
      <Link href={`/books/${book.id}`} className="block">
        <CardHeader className="p-0 relative">
          <div className="absolute top-2 left-2">
            <Badge>
              <Star className="mr-1 h-3 w-3" /> Featured
            </Badge>
          </div>
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={book.coverImage}
              alt={`Cover of ${book.title}`}
              fill
              className="object-cover"
              data-ai-hint={book.imageHint}
            />
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <p className="text-xs text-primary font-medium uppercase tracking-wider">{book.category.name}</p>
          <CardTitle className="font-headline text-lg mt-1 mb-2">{book.title}</CardTitle>
        </CardContent>
      </Link>
      <CardFooter className="p-4 pt-0 text-sm text-muted-foreground flex justify-between">
        <span>{book.author}</span>
      </CardFooter>
    </Card>
  );
}

function CategoryFilter() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center text-lg">
          <Filter className="mr-2 h-4 w-4" /> Categories
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {categories.map((category) => (
          <div key={category.id} className="flex items-center space-x-2">
            <Checkbox id={category.id} />
            <label
              htmlFor={category.id}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex-1"
            >
              {category.name}
            </label>
            <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">
              {books.filter(b => b.category.id === category.id).length}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default function BrowsePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [view, setView] = useState("grid");

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <div className="relative w-full max-w-lg">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search books..."
              className="w-full pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <Select defaultValue="newest">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="title">Title</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex items-center bg-secondary rounded-md p-1">
               <Button variant={view === 'grid' ? "default" : "ghost"} size="icon" onClick={() => setView('grid')}>
                 <Grid className="h-5 w-5"/>
               </Button>
                <Button variant={view === 'list' ? "default" : "ghost"} size="icon" onClick={() => setView('list')}>
                 <List className="h-5 w-5"/>
               </Button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              <CategoryFilter />
            </div>
          </aside>
          <main className="lg:col-span-3">
             <div className="flex items-center mb-4">
                <span className="text-sm text-muted-foreground">Showing {books.length} books</span>
                <div className="ml-4 flex items-center gap-2">
                   <Badge variant="outline" className="pl-2">
                     Computer Science <button className="ml-1 text-muted-foreground hover:text-foreground">&times;</button>
                   </Badge>
                   <Button variant="ghost" size="sm" className="text-primary hover:text-primary">Clear all</Button>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {books.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
