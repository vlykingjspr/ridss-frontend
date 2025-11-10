import {
    ReceiptText,
    LayoutDashboard,
    type LucideIcon,
    CalendarDays,
    ClipboardCheck,
    ChartColumnBig,
    ClipboardList,
    Logs,
    ClipboardClock,
    User2,
    Bell,
    ClipboardPenLine,
    PillBottle,
    Warehouse,
    Building,
    MessageSquareText,
    FileText,
    Layers,
    QrCode,
} from "lucide-react";

export interface NavSubItem {
    title: string;
    url: string;
    icon?: LucideIcon;
    comingSoon?: boolean;
    newTab?: boolean;
    isNew?: boolean;
}

export interface NavMainItem {
    title: string;
    url: string;
    id: string;
    icon?: LucideIcon;
    subItems?: NavSubItem[];
    comingSoon?: boolean;
    newTab?: boolean;
    isNew?: boolean;
}

export interface NavGroup {
    id: number;
    label?: string;
    items: NavMainItem[];
}

export const sidebarItems: NavGroup[] = [
    {
        id: 1,
        label: "Mobile - Mother",
        items: [
            {
                id: "/mother/dashboard",
                title: "Dashboard",
                url: "/mother/dashboard",
                icon: LayoutDashboard,
            },
            // {
            //     id: "/mother/registration",
            //     title: "Registration",
            //     url: "/mother/registration",
            //     icon: ClipboardPenLine,
            // },
            {
                id: "/mother/my-schedule",
                title: "My Schedule",
                url: "/mother/my-schedule",
                icon: CalendarDays,
            },
            {
                id: "/mother/history",
                title: "Immunization History",
                url: "/mother/history",
                icon: ClipboardClock,
            },
            {
                id: "/mother/qr_code",
                title: "QR Code",
                url: "/mother/qr_code",
                icon: QrCode,
            },
            {
                id: "/mother/profile",
                title: "Profile",
                url: "/mother/profile",
                icon: User2,
            },
            {
                id: "/mother/notification",
                title: "Notifications",
                url: "/mother/notification",
                icon: Bell,
            }
            
        ],
    },
    {
        id: 2,
        label: "BHW - Staff",
        items: [
            {
                id: "/bhw-staff/dashboard",
                title: "Dashboard",
                url: "/bhw-staff/dashboard",
                icon: LayoutDashboard,
            },
            // {
            //     id: "/bhw-staff/registration",
            //     title: "Registration",
            //     url: "/bhw-staff/registration?tab=all",
            //     icon: ClipboardPenLine,
            // },
            {
                id: "/bhw-staff/vaccination",
                title: "Vaccination",
                url: "/bhw-staff/vaccination?tab=attendance",
                icon: PillBottle,
            },
            {
                id: "/bhw-staff/schedule",
                title: "Schedule",
                url: "/bhw-staff/schedule",
                icon: CalendarDays,
            },
            {
                id: "/bhw-staff/inventory",
                title: "Inventory",
                url: "/bhw-staff/inventory?tab=stocks",
                icon: Warehouse,
            },
            // {
            //     id: "/bhw-staff/records",
            //     title: "Records",
            //     url: "/bhw-staff/records",
            //     icon: ClipboardList,
            // },
            {
                id: "/bhw-staff/records",
                title: "Barangay Records",
                url: "/bhw-staff/records?tab=registered",
                icon: ClipboardList,
            },
            {
                id: "/bhw-staff/notification-log",
                title: "Notification",
                url: "/bhw-staff/notification-log",
                icon: Bell,
            }
            
        ],
    },
    {
        id: 3,
        label: "BHW - Head",
        items: [
            {
                id: "/bhw-head/dashboard",
                title: "Dashboard",
                url: "/bhw-head/dashboard",
                icon: LayoutDashboard,
            },
            {
                id: "/bhw-head/vaccine",
                title: "Vaccine",
                url: "/bhw-head/vaccine?tab=inventory",
                icon: PillBottle,
            },
            {
                id: "/bhw-head/immunization",
                title: "Immunization",
                url: "/bhw-head/immunization?tab=verification",
                icon: ClipboardCheck,
            },
            {
                id: "/bhw-head/records",
                title: "Barangay Records",
                url: "/bhw-head/records?tab=registered",
                icon: ClipboardList,
            },
            // {
            //     id: "/bhw-head/reports",
            //     title: "Reports",
            //     url: "/bhw-head/reports",
            //     icon: ChartColumnBig,
            // },
            {
                id: "/bhw-head/logs",
                title: "Logs",
                url: "/bhw-head/logs",
                icon: Logs,
            },
            // {
            //     id: "/bhw-head/barangay-data",
            //     title: "Baranggay Data",
            //     url: "/bhw-head/barangay-data",
            //     icon: Building,
            // },
            {
                id: "/bhw-head/notification-log",
                title: "Notification",
                url: "/bhw-head/notification-log",
                icon: Bell,
            },
            // {
            //     id: "/bhw-head/vaccine-approval",
            //     title: "Vaccine Approval",
            //     url: "/bhw-head/vaccine-approval",
            //     icon: PillBottle,
            // },
            // {
            //     id: "/bhw-head/inventory",
            //     title: "Inventory",
            //     url: "/bhw-head/inventory",
            //     icon: Warehouse,
            // },
            // {
            //     id: "/bhw-head/approval-logs",
            //     title: "Approval Logs",
            //     url: "/bhw-head/approval-logs",
            //     icon: ListChecks,
            // },
                
        ],
    },
    {
        id: 4,
        label: "CHO - Staff",
        items: [
            {
                id: "/cho-staff/dashboard",
                title: "Dashboard",
                url: "/cho-staff/dashboard",
                icon: LayoutDashboard,
            },
            {
                id: "/cho-staff/vaccine",
                title: "Vaccine",
                url: "/cho-staff/vaccine?tab=inventory",
                icon: PillBottle,
            },
            // {
            //     id: "/cho-staff/request-queue",
            //     title: "Request Queue",
            //     url: "/cho-staff/request-queue",
            //     icon: Layers,
            // },
            // {
            //     id: "/cho-staff/issuance",
            //     title: "Issuance Processing",
            //     url: "/cho-staff/issuance",
            //     icon: FileText,
            // },
            {
                id: "/cho-staff/immunization",
                title: "Immunization",
                url: "/cho-staff/immunization?tab=verify",
                icon: ClipboardCheck,
            },
            {
                id: "/cho-staff/reports",
                title: "Reports",
                url: "/cho-staff/reports",
                icon: ChartColumnBig,
            },
            {
                id: "/cho-staff/notifications",
                title: "Notifications",
                url: "/cho-staff/notifications",
                icon: Bell,
            },
            // {
            //     id: "/cho-staff/messaging",
            //     title: "Messages",
            //     url: "/cho-staff/messaging",
            //     icon: MessageSquareText,
            // },
            // {
            //     id: "/cho-staff/validation",
            //     title: "Validation",
            //     url: "/cho-staff/validation",
            //     icon: ClipboardCheck,
            // }
            
        ],
    },
    {
        id: 5,
        label: "CHO - Head",
        items: [
            {
                id: "/cho-head/dashboard",
                title: "Dashboard",
                url: "/cho-head/dashboard",
                icon: LayoutDashboard,
            },
            {
                id: "/cho-head/vaccine",
                title: "Vaccine",
                url: "/cho-head/vaccine?tab=inventory",
                icon: PillBottle,
            },
            // {
            //     id: "/cho-head/vaccine-approval",
            //     title: "Vaccine Approval",
            //     url: "/cho-head/vaccine-approval",
            //     icon: ReceiptText,
            // },
            {
                id: "/cho-head/data-verification",
                title: "Data Verification",
                url: "/cho-head/data-verification",
                icon: ClipboardCheck,
            },
            {
                id: "/cho-head/city-reports",
                title: "City Reports",
                url: "/cho-head/city-reports",
                icon: ChartColumnBig,
            },
            // {
            //     id: "/cho-head/inventory-oversight",
            //     title: "Inventory Oversight",
            //     url: "/cho-head/inventory-oversight",
            //     icon: Warehouse,
            // },
            {
                id: "/cho-head/user-management",
                title: "Users",
                url: "/cho-head/user-management",
                icon: ClipboardList,
            },
            {
                id: "/cho-head/barangay",
                title: "Barangay",
                url: "/cho-head/barangay",
                icon: ClipboardList,
            },
            {
                id: "/cho-head/audit-logs",
                title: "Audit Logs",
                url: "/cho-head/audit-logs",
                icon: Logs,
            }
            
        ],
    },
];
