// UI for Admin
import Home from '../pages/admin/Home';
import Products from '../pages/admin/Products';
import Accounts from '../pages/admin/Accounts';
import Orders from '../pages/admin/Orders';
import Settings from '../pages/admin/Settings';
import News from '../pages/admin/News';
import Comments from '../pages/admin/Comments';
import DefaultLayout from '../layouts/Userlayout/DefaultLayout';
import HomePage from '../pages/user/HomePage';
import ProductDetails from '../pages/user/ProductDetails';
import SearchPage from '../components/Search';

const publicRoutes = [];

const privateRoutes = [];

const userRoutes = [
    {
        path: '/',
        component: HomePage,
        layout: DefaultLayout,
    },

    {
        path: '/details',
        component: ProductDetails,
        layout: DefaultLayout,
    },

    {
        path: '/search',
        component: SearchPage,
        layout: DefaultLayout,
    },
];

const adminRoutes = [
    { path: '/admin', component: Home, layout: 'admin' }, // overview
    { path: '/admin/accounts', component: Accounts, layout: 'admin' }, // ql tai khoan
    { path: '/admin/orders', component: Orders, layout: 'admin' }, // ql don hang (quan he khachhang-sanpham)
    { path: '/admin/products', component: Products, layout: 'admin' }, // ql san pham
    { path: '/admin/settings', component: Settings, layout: 'admin' }, // ql trang chu, thong tin lien he,...
    { path: '/admin/news', component: News, layout: 'admin' }, // ql tin tuc, tu khoa, mo ta tieu de
    { path: '/admin/comments', component: Comments, layout: 'admin' }, // ql binh luan danh gia
];
export { publicRoutes, privateRoutes, adminRoutes, userRoutes };
