import { ridsUsers, ridsUserType } from "@/data/users"
import { create } from "zustand";

type AuthUser = {
    selected: ridsUserType | null,
    setSelected: (user: ridsUserType | null) => void;
}

export const useRidsUserStore = create<AuthUser>((set) => ({
    selected: ridsUsers[3],
    setSelected: (user) => set(() => ({
        selected: user
    }))
}))