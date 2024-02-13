import {createContext, useContext} from "react";

const initialState = {
    usersList: [],
    isLoading: false,
    deleteUserMock: (userId) => {},
    isUserInfoVisible: false,
    selectedUser: null,
    showUserInfo: (userInfo) => {},
    closeUserProfile: () => {},
}

const UsersContext = createContext(initialState);

const useUsers = () => useContext(UsersContext);

export { UsersContext, useUsers };