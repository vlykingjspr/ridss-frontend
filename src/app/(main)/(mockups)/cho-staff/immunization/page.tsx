import { TypographyLarge } from "@/components/ui/typography";
import ImmunizationTab from "./_components/tabs";
import Verification from "./_components/verification";

interface Props {
    searchParams: Promise<{ tab: 'verify' | 'summary' }>
}
export default async function Immunization({ searchParams }: Props) {
    const sp = await searchParams
    const tab = sp.tab

    return (
        <div className="">
            <TypographyLarge>Immunization</TypographyLarge>

            <div className="mt-6">
                <div className="">
                    <ImmunizationTab tab={tab} />
                </div>

                {tab === 'verify' && (<Verification />)}
            </div>
        </div>
    )
}