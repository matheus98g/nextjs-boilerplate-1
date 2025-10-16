import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SignInButton, SignOutButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <Card className="w-full max-w-md mx-auto mt-10 p-4">
        <CardContent className="flex justify-center">
          <SignedOut>
            <div className="flex justify-center gap-2">
              <SignInButton>
                <Button>Entrar</Button>
              </SignInButton>
              <SignUpButton>
                <Button>Cadastrar</Button>
              </SignUpButton>
            </div>
          </SignedOut>
          <SignedIn>
            <div className="flex flex-col items-center gap-4">
              <span className="text-lg font-medium">Você já está autenticado!</span>
              <div className="flex items-center gap-3">
                <UserButton />
                <SignOutButton>
                  <Button>Sair</Button>
                </SignOutButton>
              </div>
            </div>
          </SignedIn>
        </CardContent>
      </Card>
    </>
  );
}