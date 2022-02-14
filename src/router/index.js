import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Cadastro from "../views/Cadastro.vue"
import Caixa from "../views/Caixa.vue"
import ML from "../views/ML.vue"
import Fornecedor from "../components/Fornecedor.vue"
import Produto from "../components/Produto.vue"
import Estoque from "../components/Estoque.vue"


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/cadastro",
    name: "Cadastro",
    component: Cadastro
  },
  {
    path: "/cadastro/fornecedor",
    name: "Fornecedor",
    component: Fornecedor
  },
  {
    path: "/cadastro/produto",
    name: "Produto",
    component: Produto
  },
  {
    path: "/cadastro/estoque",
    name: "Estoque",
    component: Estoque
  },
  {
    path: "/caixa",
    name: "Caixa",
    component: Caixa
  },
  {
    path: "/ml",
    name: "ML",
    component: ML
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
