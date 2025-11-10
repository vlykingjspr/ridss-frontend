import { TypographyLarge } from "@/components/ui/typography";
import BarangayRecordsTab from "./_components/tabs";
import Registered from "./_components/registered";
import PendingRegistration from "./_components/pending-registration";

interface Props {
    searchParams: Promise<{ tab: 'registered' | 'pending' }>
}
export default async function Page({ searchParams }: Props) {
    const sp = await searchParams    
    const tab = sp.tab

    return (
        <div className="min-h-[calc(100vh-6rem)]">
            <TypographyLarge>Records</TypographyLarge>

            <div className="mt-6">
                <div className="mb-4">
                    <BarangayRecordsTab tab={tab} />
                </div>

                {tab === 'registered' && (<Registered />)}
                {tab === 'pending' && (<PendingRegistration />)}
            </div>
        </div>
    )
}