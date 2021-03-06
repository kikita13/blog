import { User } from "../models/users-state";
import {Address} from '../models/users-address'

interface GeoDto {
    lat: string,
    lng: string
}

interface AddressDto extends Omit<Address, 'geo'> {
    geo: GeoDto;
}

export interface UserDto extends Omit<User, 'address'> {
    address: AddressDto;
}
