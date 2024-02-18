import { Authority } from '@/shared/security/authority';

const DemoComponent = () => import('@/user/demo.vue');

export default [
  {
    path: '/demo',
    name: 'Demo Component',
    component: DemoComponent,
    meta: { authorities: [Authority.ADMIN] },
  },
];
