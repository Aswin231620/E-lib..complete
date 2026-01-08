"use client";

import Image from "next/image";
import { notFound } from "next/navigation";
import { books } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Book, Download } from "lucide-react";

export default function BookDetailPage({ params }: { params: { id: string } }) {
  const book = books.find((b) => b.id === params.id);

  if (!book) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
        <div className="md:col-span-1">
          <div className="sticky top-24">
            <div className="relative aspect-[3/4] w-full max-w-sm mx-auto rounded-lg overflow-hidden shadow-xl">
              <Image
                src={book.coverImage}
                alt={`Cover of ${book.title}`}
                fill
                className="object-cover"
                data-ai-hint={book.imageHint}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
             <div className="mt-6 flex flex-col space-y-3">
                <Button size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  <Book className="mr-2 h-5 w-5" />
                  Read Online
                </Button>
                <Button size="lg" variant="outline" className="w-full">
                  <Download className="mr-2 h-5 w-5" />
                  Download
                </Button>
              </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <h1 className="font-headline text-4xl lg:text-5xl font-bold tracking-tight">{book.title}</h1>
          <p className="mt-2 text-xl text-muted-foreground">by {book.author}</p>
          
          <div className="flex flex-wrap gap-2 mt-4">
            <Badge variant="secondary">{book.category.name}</Badge>
            <Badge variant="secondary">{book.subject}</Badge>
            <Badge variant="secondary">{book.publicationYear}</Badge>
            <Badge variant="secondary">{book.language}</Badge>
             <Badge variant="secondary">{book.academicLevel}</Badge>
          </div>

          <div className="mt-8 prose max-w-none text-foreground/80">
            <h2 className="font-headline text-2xl font-semibold mb-2">Description</h2>
            <p className="text-lg leading-relaxed">{book.description}</p>
          </div>

           <div className="mt-8 border-t pt-8">
            <h3 className="font-headline text-2xl font-semibold mb-4">Catalog Details</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 pr-4 font-medium text-muted-foreground">Title</td>
                    <td className="py-3">{book.title}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 pr-4 font-medium text-muted-foreground">Author</td>
                    <td className="py-3">{book.author}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 pr-4 font-medium text-muted-foreground">Publication Year</td>
                    <td className="py-3">{book.publicationYear}</td>
                  </tr>
                   <tr className="border-b">
                    <td className="py-3 pr-4 font-medium text-muted-foreground">Category</td>
                    <td className="py-3">{book.category.name}</td>
                  </tr>
                   <tr className="border-b">
                    <td className="py-3 pr-4 font-medium text-muted-foreground">Subject</td>
                    <td className="py-3">{book.subject}</td>
                  </tr>
                   <tr>
                    <td className="py-3 pr-4 font-medium text-muted-foreground">Language</td>
                    <td className="py-3">{book.language}</td>
                  </tr>
                </tbody>
              </table>
            </div>
           </div>
        </div>
      </div>
    </div>
  );
}
