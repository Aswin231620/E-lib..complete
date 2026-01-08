"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { categories } from "@/lib/data";
import { Book, Folder } from "lucide-react";
import Link from "next/link";

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-white">All Categories</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Browse books by their category.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card key={category.id} className="bg-secondary border-secondary transition-all hover:shadow-lg hover:-translate-y-1">
                <Link href={`/?category=${category.id}`}>
                    <CardHeader>
                        <div className="flex items-center gap-4">
                            <Folder className="h-8 w-8 text-primary"/>
                            <div>
                                <CardTitle className="font-headline text-xl">{category.name}</CardTitle>
                                <CardDescription>View Books</CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                </Link>
            </Card>
          ))}
      </div>
    </div>
  );
}
