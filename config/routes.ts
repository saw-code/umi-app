export default [
  {
    path: '/', // если введено localhost:8000/
    redirect: '/app/login', // то перенаправит немедленно на localhost:8000/app/login
  },
  {
    path: '/app',
    component: '@/layouts/Header',
    routes: [
      {
        exact: false, // определяем, должен ли путь быть точным или нет
        path: '/app/login',
        component: '@/pages/Login',
      },
      {
        path: '/app/home',
        component: '@/pages/Home',
      },
    ],
  },
];

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
