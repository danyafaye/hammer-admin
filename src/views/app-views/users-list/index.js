import React from 'react';
import {UsersProvider} from "../../../providers/UsersProvider/UsersProvider";
import UsersListView from "./UsersListView";

const UsersList = () => {
    return (
        <UsersProvider>
            <UsersListView/>
        </UsersProvider>
    );
};

export default UsersList;