import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Dashboard() {
    return (
        <>
            <Card
                className="w-full max-w-md mx-auto mt-10 p-4"
            >
                <CardHeader>
                    <CardTitle>Dashboard</CardTitle>
                </CardHeader>
            </Card>
        </>
    )
}