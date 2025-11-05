import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TypographySmall } from "@/components/ui/typography";
import { PenLine, Plus } from "lucide-react";

export default function ProfileDetails() {
    return (
        <div className="space-y-4">
                <Card className="p-3">
                    <CardContent className="px-3">
                        <TypographySmall className="text-muted-foreground">Personal Details</TypographySmall>

                        <div className="mt-4">
                            <TypographySmall>Full Name:</TypographySmall> <span className="text-muted-foreground">Lorem ipsum</span> <br />
                            <TypographySmall>Gender:</TypographySmall> <span className="text-muted-foreground">Female</span> <br />
                            <TypographySmall>Date of Birth:</TypographySmall> <span className="text-muted-foreground">March 14, 1987</span> <br />
                            <TypographySmall>Age:</TypographySmall> <span className="text-muted-foreground">38 years old</span> <br />
                            <TypographySmall>Occupation:</TypographySmall> <span className="text-muted-foreground">Homemaker</span> <br />
                            <TypographySmall>Marital Status:</TypographySmall> <span className="text-muted-foreground">Married</span> <br />
                            <TypographySmall>Contact Number:</TypographySmall> <span className="text-muted-foreground">+63 917 456 7890</span> <br />
                            <TypographySmall>Email Address:</TypographySmall> <span className="text-muted-foreground">loremipsum@example.com</span> <br />
                        </div>
                    </CardContent>
                </Card>

                <Card className="p-3">
                    <CardContent className="px-3">
                        <TypographySmall className="text-muted-foreground">Address</TypographySmall>

                        <div className="mt-4">
                            <TypographySmall>Province:</TypographySmall> <span className="text-muted-foreground">Lorem ipsum</span> <br />
                            <TypographySmall>City/Municipality:</TypographySmall> <span className="text-muted-foreground">Lorem ipsum</span> <br />
                            <TypographySmall>Barangay:</TypographySmall> <span className="text-muted-foreground">Lorem ipsum</span> <br />
                            <TypographySmall>Street:</TypographySmall> <span className="text-muted-foreground">Lorem ipsum</span> <br />
                            <TypographySmall>Subdivision/Village:</TypographySmall> <span className="text-muted-foreground">Lorem ipsum</span> <br />
                            <TypographySmall>House/Block/Lot No.:</TypographySmall> <span className="text-muted-foreground">Lorem ipsum</span> <br />
                        </div>
                    </CardContent>
                </Card>

                <Card className="p-3 relative">
                    <CardContent className="px-3">
                        <Button variant="ghost" className="absolute top-1.5 right-1.5"><Plus /> Add Child</Button>
                        <TypographySmall className="text-muted-foreground">Children</TypographySmall>

                        <div className="mt-4">
                            <div className="relative">
                                <Button variant="ghost" size="icon" className="size-7 absolute top-1 right-1"><PenLine /></Button>
                                <TypographySmall>Name:</TypographySmall> <span className="text-muted-foreground">Lorem ipsum</span> <br />
                                <TypographySmall>Date of Birth:</TypographySmall> <span className="text-muted-foreground">Lorem ipsum</span> <br />
                                <TypographySmall>Age:</TypographySmall> <span className="text-muted-foreground">2 years old</span> <br />
                            </div>
                            <div className="my-1 border-b border-border"></div>
                            <div className="relative">
                                <Button variant="ghost" size="icon" className="size-7 absolute top-1 right-1"><PenLine /></Button>
                                <TypographySmall>Name:</TypographySmall> <span className="text-muted-foreground">Lorem ipsum</span> <br />
                                <TypographySmall>Date of Birth:</TypographySmall> <span className="text-muted-foreground">Lorem ipsum</span> <br />
                                <TypographySmall>Age:</TypographySmall> <span className="text-muted-foreground">2 years old</span> <br />
                            </div>
                            <div className="my-1 border-b border-border"></div>
                            <div className="relative">
                                <Button variant="ghost" size="icon" className="size-7 absolute top-1 right-1"><PenLine /></Button>
                                <TypographySmall>Name:</TypographySmall> <span className="text-muted-foreground">Lorem ipsum</span> <br />
                                <TypographySmall>Date of Birth:</TypographySmall> <span className="text-muted-foreground">Lorem ipsum</span> <br />
                                <TypographySmall>Age:</TypographySmall> <span className="text-muted-foreground">2 years old</span> <br />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
    )
}