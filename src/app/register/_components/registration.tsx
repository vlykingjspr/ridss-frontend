"use client"

import Link from "next/link";
import { ParentRegisterForm } from "./parent-registration-form";
import { useSearchParams } from "next/navigation";
import OPTVerification from "./otp-verification";
import ProfileDetails from "./profile-details";

export default function Registration() {
    const searchParam = useSearchParams()
    const otp = searchParam.get('verification')
    const details = searchParam.get('details')

    return (
        <div className="space-y-4">
            {!otp && (<ParentRegisterForm />)}
            {otp === "otp" && (<OPTVerification />)}
            {details && (<ProfileDetails />)}
            {/* <GoogleButton className="w-full" variant="outline" /> */}
            <p className="text-muted-foreground text-center text-xs">
                Already have an account?{" "}
                <Link href="login" className="text-primary">
                    Login
                </Link>
            </p>
        </div>
    );
}
