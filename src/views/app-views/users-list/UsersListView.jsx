import React from 'react';
import {useUsers} from "../../../providers/UsersProvider/UsersContext";
import Loading from "../../../components/shared-components/Loading";
import {Button, Card, Table, Tooltip} from "antd";
import AvatarStatus from "../../../components/shared-components/AvatarStatus";
import { useHistory } from "react-router-dom";
import {
    EyeOutlined,
    EditOutlined,
    DeleteOutlined, UserOutlined,
} from '@ant-design/icons';
import UserInfoView from "./UserInfoView";

const UsersListView = () => {
    const {usersList, isLoading, deleteUserMock, showUserInfo} = useUsers();
    const history = useHistory();

    const navigateToSettings = (userInfo) => {
        history.push({
            pathname: '/app/commons/clients/settings',
            state:userInfo,
        })
    }

    const tableColumns = [
        {
            title: 'Пользователь',
            dataIndex: 'name',
            render: (_, record) => (
                <div className="d-flex">
                    <AvatarStatus
                        icon={<UserOutlined />}
                        name={record.name}
                        subTitle={record.email}
                    />
                </div>
            ),
            sorter: {
                compare: (a, b) => {
                    a = a.name.toLowerCase();
                    b = b.name.toLowerCase();
                    return a > b ? -1 : b > a ? 1 : 0;
                },
            },
        },
        {
            title: 'Никнейм',
            dataIndex: 'username',
            sorter: {
                compare: (a, b) => a.username.length - b.username.length,
            },
        },
        {
            title: 'Номер телефона',
            dataIndex: 'phone',
            render: (phone) => <span>{phone} </span>,
            sorter: {
                compare: (a, b) => a.phone.length - b.phone.length,
            },
        },
        {
            title: 'Город',
            dataIndex: ['address', 'city'],
            render: (status) => <span>{status}</span>,
            sorter: {
                compare: (a, b) => {
                    a = a.address.city.toLowerCase();
                    b = b.address.city.toLowerCase();
                    return a > b ? -1 : b > a ? 1 : 0;
                },
            },
        },
        {
            title: '',
            dataIndex: 'actions',
            render: (_, elm) => (
                <div className="text-right">
                    <Tooltip title="Edit">
                        <Button
                            className="mr-2"
                            icon={<EditOutlined />}
                            onClick={() => navigateToSettings(elm)}
                            size="small"
                        />
                    </Tooltip>
                    <Tooltip title="View">
                        <Button
                            type="primary"
                            className="mr-2"
                            icon={<EyeOutlined />}
                            onClick={() => showUserInfo(elm)}
                            size="small"
                        />
                    </Tooltip>
                    <Tooltip title="Delete">
                        <Button
                            danger
                            icon={<DeleteOutlined />}
                            onClick={() => deleteUserMock(elm.id)}
                            size="small"
                        />
                    </Tooltip>
                </div>
            ),
        },
    ]

    const rowKey = (record) => record.id

    return (
        <>
            {isLoading ? <Loading cover="content"/> :
                <Card bodyStyle={{padding: '0px'}}>
                    <Table
                        columns={tableColumns}
                        dataSource={usersList}
                        rowKey={rowKey}
                    />
                    <UserInfoView/>
                </Card>}
        </>
    );
};

export default UsersListView;