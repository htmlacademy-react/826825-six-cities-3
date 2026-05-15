export type UserData = null | {
    id: number;
    email: string;
    token: string;
    avatarUrl: string;
    isPro: boolean;
};

export type HeaderUserData = {
    id: number;
    email: string;
    token: string;
};
