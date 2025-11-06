import Link from "next/link";

import { Command } from "lucide-react";

import { RegisterForm } from "../(main)/auth/_components/register-form";
import { GoogleButton } from "../(main)/auth/_components/social-auth/google-button";
import Registration from "./_components/registration";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import SuccessRegistration from "./_components/success-registration";

interface Props {
    searchParams?: Promise<{
        type: "parent" | "bhw" | "cho";
        verification?: string;
        details?: string;
        success?: boolean;
    }>;
}

export default async function Register({ searchParams }: Props) {
    const sp = await searchParams;
    const type = sp?.type;
    const details = sp?.details;
    const success = sp?.success;

    return (
        <div className="flex min-h-dvh">
            <div
                className={cn(
                    "bg-background flex w-full justify-center p-8 lg:w-2/3",
                    type !== "parent" && "items-center",
                )}
            >
                <div className={cn("w-full max-w-md space-y-10", type !== "parent" ? "py-10" : "py-8")}>
                    <div className="space-y-4 text-center">
                        {!success && (
                            <div className="font-medium tracking-tight">
                                {type === "bhw"
                                    ? "Barangay Health Worker"
                                    : type === "cho"
                                      ? "City Health Office"
                                      : type === "parent"
                                        ? "Parent"
                                        : "Choose"}{" "}
                                Registration
                            </div>
                        )}
                        <div className="text-muted-foreground mx-auto max-w-xl">
                            {/* Fill in your details below. We promise not to quiz you about your first pet&apos;s name
                            (this time). */}
                            {details && "Fill in details of your children, and your children's father"}
                        </div>
                    </div>
                    {type === "parent" ? (
                        <Registration />
                    ) : type && ['cho', 'bhw'].includes(type) ? (
                        <div className="space-y-4">
                            <RegisterForm />
                            <GoogleButton className="w-full" variant="outline" />
                            <p className="text-muted-foreground text-center text-xs">
                                Already have an account?{" "}
                                <Link href="login" className="text-primary">
                                    Login
                                </Link>
                            </p>
                        </div>
                    ) : (
                        !success && (
                            <div className="grid grid-cols-1 gap-4">
                                <Link href={"?type=parent"} className="w-full">
                                    <Button variant="outline" className="w-full cursor-pointer">
                                        Parent Registration
                                    </Button>
                                </Link>
                                <Link href={"?type=bhw"} className="w-full">
                                    <Button variant="outline" className="w-full cursor-pointer">
                                        Brangay Health Worker Registration
                                    </Button>
                                </Link>
                                <Link href={"?type=cho"} className="w-full">
                                    <Button variant="outline" className="w-full cursor-pointer">
                                        City Health Office Registration
                                    </Button>
                                </Link>

                                <p className="text-muted-foreground text-center text-xs">
                                    Already have an account?{" "}
                                    <Link href="login" className="text-primary">
                                        Login
                                    </Link>
                                </p>
                            </div>
                        )
                    )}
                    {success && <SuccessRegistration />}
                </div>
            </div>

            <div className="bg-primary hidden lg:block lg:w-1/3">
                <div className="flex h-full flex-col items-center justify-center p-12 text-center">
                    <div className="space-y-6">
                        <Command className="text-primary-foreground mx-auto size-12" />
                        <div className="space-y-2">
                            <h1 className="text-primary-foreground text-5xl font-light">Welcome!</h1>
                            <p className="text-primary-foreground/80 text-xl">You&apos;re in the right place.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
