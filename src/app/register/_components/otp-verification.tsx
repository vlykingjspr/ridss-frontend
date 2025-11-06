import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TypographySmall } from "@/components/ui/typography";
import Link from "next/link";

export default function OPTVerification() {
    return (
        <div className="text-center flex flex-col">
            <TypographySmall>One-Time Password</TypographySmall>
            <div className="flex gap-3 justify-center my-4">
                <Input className="border size-9 p-0 text-center" />
                <Input className="border size-9 p-0 text-center" />
                <Input className="border size-9 p-0 text-center" />
                <Input className="border size-9 p-0 text-center" />
                <Input className="border size-9 p-0 text-center" />
            </div>
            <TypographySmall className="text-muted-foreground font-normal">Please enter the one-time password sent to your phone.</TypographySmall>
            
            <Link href="?type=parent&verification=success&details=true">
                <Button className="w-50 mx-auto mt-5">Verify</Button>
            </Link>
        </div>
    )
}