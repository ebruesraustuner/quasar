import { RouteRecordRaw } from 'vue-router';
import Example from 'pages/ExamplePage.vue'
import Cards from 'pages/CardsExamples.vue'
import Form from 'pages/SimpleForm.vue'
import Tables from 'pages/TablesExamples.vue'
import Buttons from 'pages/ButtonsExamples.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: '/Example',
        component: Example,
      },
      {
        path: '/Cards',
        component: Cards,
      },
      {
        path: '/Form',
        component: Form,
      },
      {
        path: '/Tables',
        component: Tables,
      },
      {
        path: '/Buttons',
        component: Buttons,
      }
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
