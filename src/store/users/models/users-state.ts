import { Address } from "./users-address";
import { Geo } from "./users-geo";

export interface User {
    id: number,
    name: string,
    username: string,
    email: string,
    address: Address,
    geo: Geo,
    phone: string,
    website: string,
};

export interface UsersState {
    users: User[],
    status: (string | null),
    error: (string | null),
};