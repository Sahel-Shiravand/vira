import React from 'react'
import CIcon from '@coreui/icons-react'
import { Translation } from 'react-i18next'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'صفحه اصلی',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'مدیریت لینک ها ',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'ثبت لینک ',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: ' گزارش لینک',
        to: '/base/breadcrumbs',
      },

    ],
  },
  {
    component: CNavGroup,
    name: 'مدیریت کاربر ها',
    to: '/buttons',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'ثبت کاربر',
        to: '/buttons/buttons',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'مدیریت کارت ها',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'ثبت کارت',
        to: '/forms/form-control',
      },
    ],
  },

  {
    component: CNavItem,
    name: 'خروج ',
    to: '/dashboard',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  },
]

export default _nav
