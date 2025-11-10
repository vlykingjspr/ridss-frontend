import { Button } from "@/components/ui/button";
import { TypographyLarge } from "@/components/ui/typography";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Page() {
    return (
        <div className="p-4">
            <div className="">
                <TypographyLarge className="text-center">Jon Doe's QR Code</TypographyLarge>

                <div className="flex items-center justify-center py-5">
                    <div className="border border-border rounded-lg shadow-xs">
                        <Image
                            width={250}
                            height={250}
                            className="size-full"
                            src="/dummy_qr.png"
                            alt="qr code of child"
                        />
                    </div>
                </div>

                <div className="px-4 flex items-center">
                    <Button variant="outline" className="!px-6"><ChevronLeft /> Previous </Button>
                    <Button variant="outline" className="ml-auto !px-6">Next <ChevronRight />  </Button>
                </div>
            </div>
        </div>
    )
}