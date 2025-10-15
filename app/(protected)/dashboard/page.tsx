import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";


export default function Dashboard() {
    return (
        <>
            <Card
                className="w-full max-w-md mx-auto mt-10 p-4"
            >
                <CardHeader>
                    <CardTitle>Controle de Boletos</CardTitle>
                </CardHeader>
                <CardContent
                    className="flex justify-center"
                >
                    <Button>Adicionar Boleto</Button>
                </CardContent>
            </Card>
        </>
    )
}