export const users = [
    {
        id: "1",
        name: "Arham Khan",
        username: "Aarhamkhnz",
        email: "hello@arhamkhnz.com",
        avatar: "/avatars/arhamkhnz.png",
        role: "administrator",
    },
    {
        id: "2",
        name: "Ammar Khan",
        username: "ammarkhnz",
        email: "hello@ammarkhnz.com",
        avatar: "",
        role: "admin",
    },
];

export const ridsUsers: ridsUserType[] = [
    {
        id: 2,
        name: 'John Doe',
        username: 'johndoe',
        email: 'john.doe@gmail.com',
        role: 'bhw-staff'
    },
    {
        id: 3,
        name: 'Anton Lorem',
        username: 'antonlorem',
        email: 'anton.lorem@gmail.com',
        role: 'bhw-head'
    },
    {
        id: 4,
        name: 'Anna Rose',
        username: 'annarose',
        email: 'anna.rose@gmail.com',
        role: 'cho-staff'
    },
    {
        id: 5,
        name: 'Mark Doe',
        username: 'markdoe',
        email: 'mark.doe@gmail.com',
        role: 'cho-head'
    },
    {
        id: 1,
        name: 'Maria Clara',
        username: 'mariaclara',
        email: 'maria.clara@gmail.com',
        role: 'mother'
    },
]

export type ridsUserType = {
    id: number;
    name: string;
    username: string;
    email: string;
    role: string;
}

export const rootUser = users[0];
