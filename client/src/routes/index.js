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
import Cart from '../pages/user/Cart';
import Login from '../pages/user/Login';
import Signup from '../pages/user/Signup';
import UNews from '../pages/user/News';
import Payment from '../pages/user/Payment';
import Address from '../pages/user/Address';
import Guide from '../pages/user/Guide';
import NotFound from '../pages/user/NotFound';
import AboutUs from '../pages/user/AboutUs';
import Resource from '../pages/admin/Resource';
import Account from '../pages/user/Account';
import NewsDetail from "../pages/user/NewsDetail";

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
    path: 'cart',
    component: Cart,
    layout: DefaultLayout,
  },
  {
    path: '/payment',
    component: Payment,
    layout: DefaultLayout,
  },

  {
    path: '/search',
    component: SearchPage,
    layout: DefaultLayout,
  },
  {
    path: '/login',
    component: Login,
    layout: DefaultLayout,
  },

  {
    path: '/signup',
    component: Signup,
    layout: DefaultLayout,
  },

  {
    path: '/news',
    component: UNews,
    layout: DefaultLayout,
  },

  {
    path: '/address',
    component: Address,
    layout: DefaultLayout,
  },

  {
    path: '/shopping-guide',
    component: Guide,
    layout: DefaultLayout,
  },
  {
    path: '/about',
    component: AboutUs,
    layout: DefaultLayout,
  },
  {
    path: '*',
    component: NotFound,
    layout: DefaultLayout,
  },
  {
    path: "/newsdetail",
    component: NewsDetail,
    layout: DefaultLayout,
  },
  {
    path: '/account',
    component: Account,
    layout: DefaultLayout,
  },
  {
    path: "*",
    component: NotFound,
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
  { path: '/admin/resource', component: Resource, layout: 'admin' }, // ql binh luan danh gia
];
export { publicRoutes, privateRoutes, adminRoutes, userRoutes };
