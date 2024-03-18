import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator, cilChart,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop, cilListRich,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar, cilTags, cilTask,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Thống kê',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    // badge: {
    //   color: 'danger',
    //   text: 'NEW',
    // },
  },
  {
    component: CNavTitle,
    name: 'Sản phẩm',
  },
  {
    component: CNavItem,
    name: 'Danh sách sản phẩm',
    to: '/product/list',
    icon: <CIcon icon={cilListRich} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Báo cáo sản phẩm',
    to: '/product/dashboard',
    icon: <CIcon icon={cilChart} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Danh mục sản phẩm',
    to: '/product/category',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Hóa đơn',
  },
  {
    component: CNavItem,
    name: 'Danh sách đơn hàng',
    to: '/order',
    icon: <CIcon icon={cilTask} customClassName="nav-icon" />
  },
  {
    component: CNavItem,
    name: 'Thông báo',
    to: '/buttons',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    badge: {
      color: 'success',
      text: 'NEW',
    },
  },
  {
    component: CNavGroup,
    name: 'Báo cáo đơn hàng',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Form Control',
        to: '/forms/form-control',
      }
    ],
  },
  {
    component: CNavGroup,
    name: 'Icons',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'CoreUI Free',
        to: '/icons/coreui-icons',
        badge: {
          color: 'success',
          text: 'NEW',
        },
      },
      {
        component: CNavItem,
        name: 'CoreUI Flags',
        to: '/icons/flags',
      },
      {
        component: CNavItem,
        name: 'CoreUI Brands',
        to: '/icons/brands',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Notifications',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Alerts',
        to: '/notifications/alerts',
      },
      {
        component: CNavItem,
        name: 'Badges',
        to: '/notifications/badges',
      },
      {
        component: CNavItem,
        name: 'Modal',
        to: '/notifications/modals',
      },
      {
        component: CNavItem,
        name: 'Toasts',
        to: '/notifications/toasts',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Widgets',
    to: '/widgets',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Quản trị',
  },
  {
    component: CNavGroup,
    name: 'Hệ thống',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "Tạo tài khoản",
        to: '/management/create',
      },
      {
        component: CNavItem,
        name: 'Danh sách tài khoản',
        to: '/management/list',
      },
      {
        component: CNavItem,
        name: 'Logo',
        to: '/management/logo',
      },
      {
        component: CNavItem,
        name: 'Ngân hàng',
        to: '/management/payment',
      },
    ],
  }
]

export default _nav
