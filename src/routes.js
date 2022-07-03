import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

//links
const Links = React.lazy(() => import('./views/pages/links/Links'))

//login
const Login = React.lazy(() => import('./views/pages/login/Login'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const routes = [
  { path: '/', exact: true, name: 'خانه' },
  { path: '/dashboard', name: 'داشبورد', element: Dashboard },
  { path: '/links', name: 'لینک ها', element: Links },
  { path: '/login', name: 'ورود', element: Login },
]

export default routes
