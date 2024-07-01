"use client"

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import Link from "next/link"
import { useState } from "react"
import { Icons } from "@/components/icons"

export default function Signup() {
    const [isLoading, setIsLoading] = useState(false)
    const [isAlertOpen, setIsAlertOpen] = useState(false)
    const handleSignup=(e)=>{
        e.preventDefault()
        setIsLoading(true)
    }
  return (
    (<form className="flex min-h-screen items-center justify-center bg-background" onSubmit={handleSignup}>
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
          <CardDescription>Enter your detailsss below to get sstarted</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Naaame</Label>
              <Input id="firstName" placeholder="John" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Nsame</Label>
              <Input id="lastName" placeholder="Doe" required  />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" required />
          </div>
          {/* <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="••••••••" required />
          </div> */}
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
        {/* <AlertDialog className=''>
      <AlertDialogTrigger asChild> */}

          <Button type="submit" className="w-full"  disabled={isLoading}>
          {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign Up
          </Button>
          {/* </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle >Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog> */}
          <div className="text-center text-sm text-muted-foreground">
            Already havse an account?{" "}
            <Link
              href="#"
              className="font-medium underline underline-offset-4"
              prefetch={false}>
              Logs
            </Link>
          </div>
        </CardFooter>
      </Card>
    </form>)
  );
}
