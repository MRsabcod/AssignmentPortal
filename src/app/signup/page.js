'use client'
import axios from 'axios'
import Swal from 'sweetalert2'
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
import Signup from "./components/Signup.jsx"
// import Signupa from "./components/signup"

export default function SignupPage() {
  const handleLogout=async()=>{
    try {
      const response = await axios.post('http://localhost:3001/users/logout', {
          withCredentials: true // This is important to include cookies in the request
      });

      console.log('Verify response:', response.data);
  } catch (error) {
      console.error('Verify error:', error);
  }
    // setIsLoading(true)
}
const handleSignup=(e)=>{
  e.preventDefault()
  try {


    axios({

      method: 'put',

      url: `/users/login`,

      data: {

        email,
        password,
        username
       



      }

    })

      .then(response => {
        // console.log(response.data.token)
        // localStorage.setItem('authToken', response.data.token);
        // localStorage.setItem('userId', response.data.userId);
        // localStorage.setItem('username', response.data.username);
        // loginAndUpdate({username:response.data.username,userToken:response.data.token})
        Swal.fire({
          title: "LOGIN SUCCESSFUL",
          text: "You are Registered!",
          icon: "success",

        }).then((result) => {
          if (result['isConfirmed']) {
            navigate('/')
          }
        })


      })

      .catch(error =>
      Swal.fire({
        title: `${error}`,
        icon: "error",

      }).then((result) => {
        if (result['isConfirmed']) {
          navigate('/')
        }
      })
);


  }
  catch (e) {
    console.error(e)

  }
}
  return (
    (<>s
      <form className="flex min-h-screen items-center justify-center bg-background" onSubmit={handleSignup}>
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

          <Button type="submit" className="w-full"  >
          {/* {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )} */}
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
    </form>
    </>)
  );
}

