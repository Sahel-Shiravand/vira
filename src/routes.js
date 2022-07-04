import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

//users
const Users = React.lazy(() => import('./views/pages/users/Users'))
//links
const Links = React.lazy(() => import('./views/pages/links/Links'))
//carts
const Carts = React.lazy(() => import('./views/pages/carts/Carts'))
//login
const Login = React.lazy(() => import('./views/pages/login/Login'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))
//reports
const Reports = React.lazy(() => import('./views/pages/reports/Reports'))
const routes = [
  { path: '/', exact: true, name: 'خانه' },
  { path: '/dashboard', name: 'داشبورد', element: Dashboard },
  { path: '/links', name: 'لینک ها', element: Links },
  { path: '/users', name: 'کاربران', element: Users },
  { path: '/login', name: 'ورود', element: Login },
  { path: '/cart', name: 'ورود', element: Carts},
  { path: '/reports', name: 'گزارش', element: Reports},
]

export default routes
