import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TypographyLarge, TypographySmall } from "@/components/ui/typography";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
    searchParams: Promise<{ child: string }>
}
export default async function Page({ searchParams }: Props) {
    const sp = await searchParams
    const child = sp.child

    return (
        <div className="p-4">
            <TypographyLarge>QR Code</TypographyLarge>

            <div className="mt-6" hidden={!child}>
                <TypographyLarge className="text-center">{child}</TypographyLarge>

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

                <div className="px-4 fl ex items-center hidden">
                    <Button variant="outline" className="!px-6"><ChevronLeft /> Previous </Button>
                    <Button variant="outline" className="ml-auto !px-6">Next <ChevronRight />  </Button>
                </div>
            </div>

            <div className="mt-6" hidden={!!child}>
                <Card className="p-0 gap-0 cursor-pointer border-none shadow-none bg-primary/5 divide-y divide-primary/10">
                    <Link href="/mother/qr_code?child=John Doe" className="rounded-t-[inherit]">
                        <div className="flex items-center p-3 hover:bg-primary/15 rounded-t-[inherit] transition-colors">
                            <TypographySmall className="text-base">Jon Doe</TypographySmall>
                            <Button variant="ghost" className="h-7 ml-auto pointer-events-none !p-0">
                                <div className="text-muted-foreground">
                                    View QR Code
                                </div>
                                <ChevronRight />
                            </Button>
                        </div>
                    </Link>
                    <Link href="/mother/qr_code?child=Anna Doe" className="rounded-b-[inherit]">
                        <div className="flex items-center p-3 hover:bg-primary/15 rounded-b-[inherit] transition-colors">
                            <TypographySmall className="text-base">Ann Doe</TypographySmall>
                            <Button variant="ghost" className="h-7 ml-auto pointer-events-none !p-0">
                                <div className="text-muted-foreground">
                                    View QR Code
                                </div>
                                <ChevronRight />
                            </Button>
                        </div>
                    </Link>
                </Card>
            </div>

            <div className="px-12" hidden={!child}>
                <Link href="/mother/qr_code" className="w-full flex">
                    <Button variant="outline" className="!px-6 w-full"><ChevronLeft /> Back </Button>
                </Link>
            </div>
        </div>
    )
}