import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SignInButton, SignOutButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Card className="w-full max-w-md mx-auto mt-10 p-4">
        <CardContent className="flex justify-center">
          <SignedOut>
            <div className="flex justify-center gap-2">
              <SignInButton>
                <Button>Sign In</Button>
              </SignInButton>
              <SignUpButton>
                <Button variant={"secondary"}>Sign Up</Button>
              </SignUpButton>
            </div>
          </SignedOut>
          <SignedIn>
            <div className="flex flex-col items-center gap-4">
              <span className="text-lg font-medium">You are signed in!</span>
              <Link href="/dashboard">
                <Button>Go to Dashboard</Button>
              </Link>
              <div className="flex items-center gap-3">
                <UserButton />
                <ThemeToggle />
                <SignOutButton>
                  <Button variant={"destructive"}>Sign Out</Button>
                </SignOutButton>
              </div>
            </div>
          </SignedIn>
        </CardContent>
      </Card>
    </>
  );
}