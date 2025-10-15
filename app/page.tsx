import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <Card
        className="w-full max-w-md mx-auto mt-10 p-4"
      >
        <CardContent
          className="flex justify-center"
        >
          <Link href="/dashboard">
            <Button>Ir para o Dashboard</Button>
          </Link>
        </CardContent>
      </Card>
    </>
  )
}