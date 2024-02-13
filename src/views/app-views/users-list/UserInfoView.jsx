import React from 'react';
import { Drawer, Divider } from 'antd';
import {
    MobileOutlined,
    MailOutlined,
    UserOutlined,
    CompassOutlined,
    RadarChartOutlined,
} from '@ant-design/icons';
import {useUsers} from "../../../providers/UsersProvider/UsersContext";

const UserInfoView = () => {
    const {isUserInfoVisible, closeUserProfile, selectedUser} = useUsers();
    return (
        <Drawer
            width={300}
            placement="right"
            closable={false}
            onClose={closeUserProfile}
            visible={isUserInfoVisible}
        >
            <div className="text-center mt-3">
                <h3 className="mt-2 mb-0">{selectedUser?.name}</h3>
            </div>
            <Divider dashed />
            <div className="">
                <h6 className="text-muted text-uppercase mb-3">
                    Данные пользователя
                </h6>
                <p>
                    <UserOutlined />
                    <span className="ml-3 text-dark">id: {selectedUser?.id}</span>
                </p>
                <p>
                    <RadarChartOutlined />
                    <span className="ml-3 text-dark">
              Сайт: <a>{selectedUser?.website}</a>
            </span>
                </p>
            </div>
            <div className="mt-5">
                <h6 className="text-muted text-uppercase mb-3">Контакты</h6>
                <p>
                    <MobileOutlined />
                    <span className="ml-3 text-dark">{selectedUser?.phone}</span>
                </p>
                <p>
                    <MailOutlined />
                    <span className="ml-3 text-dark">
              {selectedUser?.email ? selectedUser?.email : '-'}
            </span>
                </p>
                <p>
                    <CompassOutlined />
                    <span className="ml-3 text-dark">
              {selectedUser?.address.city}, {selectedUser?.address.street}
            </span>
                </p>
            </div>
            <div className="mt-5">
                <h6 className="text-muted text-uppercase mb-3">
                    О компании
                </h6>
                <p>
                    Название: <b>{selectedUser?.company.name}</b>
                </p>
                <p>
                    Слоган: <b>{selectedUser?.company.catchPhrase}</b>
                </p>
                <p>
                    Вид деятельности: <b>{selectedUser?.company.bs}</b>
                </p>
            </div>
        </Drawer>
    );
};

export default UserInfoView;