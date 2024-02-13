import {
  DashboardOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  PictureOutlined,
  GiftOutlined,
  ShopOutlined,
  UsergroupAddOutlined,
  MailOutlined,
  SettingOutlined,
  MobileOutlined,
  FileTextOutlined,
  ContainerOutlined,
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig';

const dashBoardNavTree = [
  {
    key: 'commons',
    path: `${APP_PREFIX_PATH}/commons`,
    title: 'Основные',
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: [
      {
        key: 'commons-dashboard',
        path: `${APP_PREFIX_PATH}/commons/dashboard`,
        title: 'Дашборд',
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'commons-planner',
        path: `${APP_PREFIX_PATH}/commons/planner`,
        title: 'Планировщик',
        icon: ContainerOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'commons-catalog',
        path: `${APP_PREFIX_PATH}/commons/catalog`,
        title: 'Каталог',
        icon: ShoppingCartOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'commons-catalog-productList',
            path: `${APP_PREFIX_PATH}/commons/catalog/product-list`,
            title: 'Товары',
            icon: '',
            breadcrumb: false,
            submenu: [],
          },
          {
            key: 'commons-catalog-category',
            path: `${APP_PREFIX_PATH}/commons/catalog/category`,
            title: 'Категории',
            icon: '',
            breadcrumb: false,
            submenu: [],
          },
          {
            key: 'commons-catalog-collection',
            path: `${APP_PREFIX_PATH}/commons/catalog/collection`,
            title: 'Коллекции',
            icon: '',
            breadcrumb: false,
            submenu: [],
          },
          {
            key: 'commons-catalog-combo',
            path: `${APP_PREFIX_PATH}/commons/catalog/combo`,
            title: 'Комбо',
            icon: '',
            breadcrumb: false,
            submenu: [],
          },
        ],
      },
      {
        key: 'commons-orders',
        path: `${APP_PREFIX_PATH}/commons/orders`,
        title: 'Заказы',
        icon: ShoppingOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'commons-clients',
        path: `${APP_PREFIX_PATH}/commons/clients`,
        title: 'Клиенты',
        icon: UserOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'commons-clients-list',
            path: `${APP_PREFIX_PATH}/commons/clients/list`,
            title: 'Список клиентов',
            icon: '',
            breadcrumb: false,
            submenu: [],
          },
          {
            key: 'commons-clients-groups',
            path: `${APP_PREFIX_PATH}/commons/clients/groups`,
            title: 'Группы клиентов',
            icon: '',
            breadcrumb: false,
            submenu: [],
          },
        ],
      },
      {
        key: 'commons-banners',
        path: `${APP_PREFIX_PATH}/commons/banners`,
        title: 'Баннеры',
        icon: PictureOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'commons-promo',
        path: `${APP_PREFIX_PATH}/commons/promo`,
        title: 'Промокоды',
        icon: GiftOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'commons-shop',
        path: `${APP_PREFIX_PATH}/commons/shop`,
        title: 'Оффлайн точки',
        icon: ShopOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'commons-address',
            path: `${APP_PREFIX_PATH}/commons/address`,
            title: 'Адреса',
            icon: '',
            breadcrumb: false,
            submenu: [],
          },
          {
            key: 'commons-season',
            path: `${APP_PREFIX_PATH}/commons/season`,
            title: 'Геосезоны',
            icon: '',
            breadcrumb: false,
            submenu: [],
          },
        ],
      },
      {
        key: 'commons-employees',
        path: `${APP_PREFIX_PATH}/commons/employees`,
        title: 'Сотрудники',
        icon: UsergroupAddOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'commons-mail',
        path: `${APP_PREFIX_PATH}/commons/mail`,
        title: 'Рассылка',
        icon: MailOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];

const systemsNavTree = [
  {
    key: 'systems',
    path: `${APP_PREFIX_PATH}/systems`,
    title: 'Системные',
    icon: '',
    breadcrumb: false,
    submenu: [
      {
        key: 'settings',
        path: `${APP_PREFIX_PATH}/settings`,
        title: 'Настройки',
        icon: SettingOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'mobile',
        path: `${APP_PREFIX_PATH}/mobile`,
        title: 'Мобильное приложение',
        icon: MobileOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'logs',
        path: `${APP_PREFIX_PATH}/logs`,
        title: 'Логи',
        icon: FileTextOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];

const navigationConfig = [...dashBoardNavTree, ...systemsNavTree];

export default navigationConfig;