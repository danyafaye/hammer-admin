import React, {useEffect, useState} from 'react';
import {UsersContext} from "./UsersContext";
import axios from "axios";
import {API_BASE_URL} from "../../constants/ApiConstant";
import {message} from "antd";

const UsersProvider = ({children}) => {
    const [usersList, setUsersList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isUserInfoVisible, setIsUserInfoVisible] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const showUserInfo = (userInfo) => {
        setIsUserInfoVisible(true);
        setSelectedUser(userInfo);
    }

    const closeUserProfile = () => {
        setIsUserInfoVisible(false);
        setSelectedUser(null);
    };

    const setUsers = async () => {
        try {
            setIsLoading(true)
            const {data} = await axios.get(
                    `${API_BASE_URL}/users`,
            );
            setUsersList(data)
        } catch (e) {
            throw e
        } finally {
            setIsLoading(false)
        }
    }

    const deleteUserMock = (userId) => {
        setUsersList(usersList.filter(it => it.id !== userId));
        message.success({
            content: `Удален пользователь ${userId}`,
            duration: 2,
        });
    }

    useEffect(()=>{
        void setUsers();
    },[])

    return (
        <UsersContext.Provider value={{
            usersList,
            isLoading,
            deleteUserMock,
            isUserInfoVisible,
            selectedUser,
            showUserInfo,
            closeUserProfile,
        }}>
            {children}
        </UsersContext.Provider>
    );
};

export {UsersProvider};