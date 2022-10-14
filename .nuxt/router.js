import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _582a6ee8 = () => interopDefault(import('../pages/create.vue' /* webpackChunkName: "pages/create" */))
const _2908848a = () => interopDefault(import('../pages/delete.vue' /* webpackChunkName: "pages/delete" */))
const _5ac5347a = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _f66dff62 = () => interopDefault(import('../pages/refound.vue' /* webpackChunkName: "pages/refound" */))
const _74d6c56e = () => interopDefault(import('../pages/table.vue' /* webpackChunkName: "pages/table" */))
const _12adfd1e = () => interopDefault(import('../pages/table/index.vue' /* webpackChunkName: "pages/table/index" */))
const _70aab1d9 = () => interopDefault(import('../pages/update.vue' /* webpackChunkName: "pages/update" */))
const _8988df1c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/create",
    component: _582a6ee8,
    name: "create"
  }, {
    path: "/delete",
    component: _2908848a,
    name: "delete"
  }, {
    path: "/inspire",
    component: _5ac5347a,
    name: "inspire"
  }, {
    path: "/refound",
    component: _f66dff62,
    name: "refound"
  }, {
    path: "/table",
    component: _74d6c56e,
    children: [{
      path: "",
      component: _12adfd1e,
      name: "table"
    }]
  }, {
    path: "/update",
    component: _70aab1d9,
    name: "update"
  }, {
    path: "/",
    component: _8988df1c,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
