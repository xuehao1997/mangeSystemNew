const Home = () => import(/* webpackChunkName: "group-foo" */ 'views/home')
const User = () => import(/* webpackChunkName: "group-foo" */ 'views/user')
const Shop = () => import(/* webpackChunkName: "group-foo" */ 'views/shop')
const Food = () => import(/* webpackChunkName: "group-foo" */ 'views/food')
const ShopAdd = () => import(/* webpackChunkName: "group-foo" */ 'views/shop_add')
const FoodAdd = () => import(/* webpackChunkName: "group-foo" */ 'views/food_add')
const Set = () => import(/* webpackChunkName: "group-foo" */ 'views/set')
const Explain = () => import(/* webpackChunkName: "group-foo" */ 'views/explain')
const Login = () => import(/* webpackChunkName: "group-foo" */ 'views/login')
const Register = () => import(/* webpackChunkName: "group-foo" */ 'views/register')
const Chart = () => import(/* webpackChunkName: "group-foo" */ 'views/chart')
const Edit = () => import(/* webpackChunkName: "group-foo" */ 'views/edit')
const Error = () => import(/* webpackChunkName: "group-foo" */ 'views/error')
const ShopModify = () => import(/* webpackChunkName: "group-foo" */ 'views/shop_modify')

export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      name: 'Home'
    }
  },
  {
    path: '/user',
    component: User,
    meta: {
      name: 'User'
    } 
  },
  {
    path: '/shop',
    component: Shop,
    meta: {
      name: 'Shop'
    } 
  },
  {
    path: '/food',
    component: Food,
    meta: {
      name: 'Food'
    } 
  },
  {
    path: '/shop_add',
    component: ShopAdd,
    meta: {
      name: 'ShopAdd'
    } 
  },
  {
    path: '/shop_modify',
    component: ShopModify,
    name: 'shop_modify',
    meta: {
      name: 'ShopModify'
    } 
  },
  {
    path: '/food_add',
    component: FoodAdd,
    meta: {
      name: 'FoodAdd'
    } 
  },
  {
    path: '/chart',
    component: Chart,
    meta: {
      name: 'Chart'
    } 
  },
  {
    path: '/edit',
    component: Edit,
    meta: {
      name: 'Edit'
    } 
  },
  {
    path: '/set',
    component: Set,
    meta: {
      name: 'Set'
    } 
  },
  {
    path: '/explain',
    component: Explain,
    meta: {
      name: 'Explain'
    } 
  },
  {
    path: '/login',
    component: Login,
    meta: {
      name: 'Login'
    } 
  },
  {
    path: '/register',
    component: Register,
    meta: {
      name: 'Register'
    } 
  },
  {
    path: '*',
    component: Error,
    meta: {
      name: 'Error'
    }
  }
]