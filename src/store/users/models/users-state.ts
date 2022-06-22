
export interface Geo {
    lat: number,
    lng: number
};

export interface Company {
    name: string,
    catchPhrase: string,
    bs: string
};

export interface Address {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
};

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