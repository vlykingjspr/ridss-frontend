import { Label } from "@/components/ui/label";
import MultipleSelector, { Option } from "@/components/ui/multiselect";

const frameworks: Option[] = [
    {
        value: "bcg",
        label: "BCG",
    },
    {
        value: "pentavalent",
        label: "Pentavalent",
    },
    {
        value: "hepa_b",
        label: "Hepatitis B",
    },
    {
        value: "opv",
        label: "OPV",
    },
    {
        value: "ipv",
        label: "IPV",
    },
];

export default function Component() {
    return (
        <div className="*:not-first:mt-2">
            <Label>Select Vaccine</Label>
            <MultipleSelector
                commandProps={{
                    label: "Select frameworks",
                }}
                defaultOptions={frameworks}
                placeholder="Select frameworks"
                emptyIndicator={<p className="text-center text-sm">No results found</p>}
                className="rounded-sm"
            />
        </div>
    );
}
