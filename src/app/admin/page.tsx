"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { books, users } from "@/lib/data";
import { PlusCircle, Edit, Trash2 } from "lucide-react";
import Image from "next/image";

export default function AdminPage() {
  const [isBookDialogOpen, setIsBookDialogOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="font-headline text-3xl font-bold">Admin Panel</h1>
      </div>

      <Tabs defaultValue="books">
        <TabsList className="grid w-full grid-cols-2 md:w-1/2">
          <TabsTrigger value="books">Manage Books</TabsTrigger>
          <TabsTrigger value="users">Manage Users</TabsTrigger>
        </TabsList>
        <TabsContent value="books">
          <div className="mt-6">
            <div className="flex justify-end mb-4">
              <Dialog open={isBookDialogOpen} onOpenChange={setIsBookDialogOpen}>
                <DialogTrigger asChild>
                  <Button>
                    <PlusCircle className="mr-2 h-4 w-4" /> Upload Book
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[625px]">
                  <DialogHeader>
                    <DialogTitle>Add/Edit Book</DialogTitle>
                    <DialogDescription>
                      Fill in the details below to add or edit a book in the
                      library.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="title" className="text-right">
                        Title
                      </Label>
                      <Input id="title" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="author" className="text-right">
                        Author
                      </Label>
                      <Input id="author" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="description" className="text-right">
                        Description
                      </Label>
                      <Textarea id="description" className="col-span-3" />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button
                      variant="outline"
                      onClick={() => setIsBookDialogOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button type="submit">Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[80px]">Cover</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Author</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {books.map((book) => (
                    <TableRow key={book.id}>
                      <TableCell>
                        <Image
                          src={book.coverImage}
                          alt={book.title}
                          width={40}
                          height={60}
                          className="rounded-sm object-cover"
                          data-ai-hint={book.imageHint}
                        />
                      </TableCell>
                      <TableCell className="font-medium">{book.title}</TableCell>
                      <TableCell>{book.author}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon" className="mr-2">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="users">
          <div className="mt-6">
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Member Since</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.role}</TableCell>
                      <TableCell>{user.memberSince}</TableCell>
                      <TableCell className="text-right">
                         <Button variant="ghost" size="icon" className="mr-2">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
