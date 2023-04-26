export default [
  {
    path: '/login',
    component: '@/pages/Login',
    layout: false, // сделает макет по умолчанию не отображаемым на странице входа.
  },
  {
    path: '/',
    name: 'home', // свойства определяют, как домашняя страница будет отображаться в боковом меню.
    icon: 'home', // свойства определяют, как домашняя страница будет отображаться в боковом меню. Ant Design предоставляет значок
    component: '@/pages/Home',
  },
  {
    path: '/customers',
    name: 'customers',
    icon: 'user',
    component: '@/pages/Customers',
  },
  {
    path: '/opportunities',
    name: 'opportunities',
    icon: 'AccountBook',
    component: '@/pages/Opportunities',
  },
  {
    path: '/reports',
    name: 'reports',
    icon: 'BarChartOutlined',
    component: '@/pages/Reports',
  },
  {
    path: '/opportunity/:id',
    component: '@/pages/OpportunityDetail',
  },
  {
    path: '/workflow',
    name: 'workflow',
    access: 'canAdmin',
    icon: 'DeploymentUnitOutlined',
    component: '@/pages/Workflow',
  },
];

// export default [
//   {
//     path: '/', // если введено localhost:8000/
//     redirect: '/app/login', // то перенаправит немедленно на localhost:8000/app/login
//   },
//   {
//     path: '/app',
//     component: '@/layouts/Header',
//     routes: [
//       {
//         exact: false, // определяем, должен ли путь быть точным или нет
//         path: '/app/login',
//         component: '@/pages/Login',
//       },
//       {
//         path: '/app/home',
//         component: '@/pages/Home',
//       },
//     ],
//   },
// ];

// export default [
//   {
//     path: '/',
//     component: '@/layouts/Header', // основной макет
//     routes: [
//       { path: '/login', component: '@/pages/Login' },
//       { path: '/home', component: '@/pages/Home' },
//     ],
//   },
// ];

// до внесения изменений
// export default [
//   {
//     path: '/',
//     component: '@/pages/Login',
//   },
//   {
//     path: '/home',
//     component: '@/pages/Home',
//   },
// ];
