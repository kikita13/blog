import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UserDto } from "./dtos/user-dto";
import { User, UsersState } from "./models/users-state";


export const fetchUsers = createAsyncThunk<User[]>(
    'users/fetchUsers',
    async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data: UserDto[] = await response.json();

        return data.map(userDto => ({
            ...userDto,
            address: {
                ...userDto.address,
                geo: {
                    lat: +userDto.address.geo.lat,
                    lng: +userDto.address.geo.lng,
                },
            }
        }));
    }
);

const initialState: UsersState = {
    users: [],
    status: null,
    error: null
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        clearUsers(state, action) {
            state.users = [];
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.status = 'Загрузка...';
            state.error = null;
        });
        builder.addCase(fetchUsers.fulfilled, (state, {payload: users}) => {
            state.status = "Ответ получен";
            state.error = null;
            state.users = users;
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.status = 'Ошибка';
        });
    }
});

export const {clearUsers} = usersSlice.actions;

export const usersReducer = usersSlice.reducer;