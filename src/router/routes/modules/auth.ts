import { RouteConfigEx, LayoutType, ModuleRouteConfig } from '@/router/types';

import { createAsyncComponent } from '@/common/factory/AsyncComponentFactory';
import { PAGE_LAYOUT_COMPONENT } from '@/router/constant';
import { RoleEnum } from '@/enums/roleEnum';

const prefix = '/auth';

const layout: LayoutType = {
  component: PAGE_LAYOUT_COMPONENT,
  meta: {
    title: '权限测试页',
  },
};

const routes: RouteConfigEx[] = [
  {
    path: '/role',
    name: 'RoleAuth',
    meta: {
      title: '基于角色',
    },
    children: [
      {
        path: '/page',
        name: 'PageAuth',
        component: () => createAsyncComponent(import('@/views/examples/auth/role/PageAuth.vue')),
        meta: {
          title: '页面权限',
        },
      },
      {
        path: '/btn',
        name: '按钮权限',
        component: () => createAsyncComponent(import('@/views/examples/auth/role/BtnAuth.vue')),
        meta: {
          title: '按钮权限',
        },
      },
      {
        path: '/test1',
        name: '测试权限1',
        component: () => createAsyncComponent(import('@/views/examples/auth/AuthTest1.vue')),
        meta: {
          title: 'Admin角色可见',
          roles: [RoleEnum.ADMIN],
        },
      },
      {
        path: '/test2',
        name: '测试权限2',
        component: () => createAsyncComponent(import('@/views/examples/auth/AuthTest2.vue')),
        meta: {
          title: 'Normal角色可见',
          roles: [RoleEnum.NORMAL],
        },
      },
    ],
  },
  {
    path: '/back',
    name: 'BackAuth',
    component: () => createAsyncComponent(import('@/views/dashboard/welcome/index.vue')),
    meta: {
      title: '基于后台',
    },
  },
];

export default {
  routes: routes,
  prefix,
  layout,
} as ModuleRouteConfig;