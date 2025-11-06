"use client"

import { TypographyLarge } from "@/components/ui/typography";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SuccessRegistration() {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/mother/dashboard?fingerprint=true')
        }, 2000)
    }, [])

    return (
        <div className="flex flex-col items-center">
            <div className="p-5 bg-green-50 rounded-full size-fit mb-8">
                <div className="size-20 bg-green-100 flex items-center justify-center rounded-full">
                    <Check className="size-10 text-green-600" />
                </div>
            </div>

            <TypographyLarge className="text-green-600">Successful Registration</TypographyLarge>
        </div>
    )
}