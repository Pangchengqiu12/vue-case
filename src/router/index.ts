import { createRouter, createWebHistory } from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
const pages = import.meta.glob('../views/**/page.js', {
  eager: true,
  import: 'default',
});
const views = import.meta.glob('../views/**/index.vue');
const routes = Object.entries(pages).map(([path, meta]: [string, RouteMeta]) => {
  const comp = path.replace('page.js', 'index.vue');
  path = path.replace('../views', '').replace('/page.js', '') || '/';
  const name = path.split('/').filter(Boolean).join('-') || 'index';
  return {
    path,
    name: name,
    component: views[comp],
    meta,
    children: [],
  };
});
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return { top: 0 };
  },
});
router.beforeEach(async (to, from) => {
  NProgress.start();
  // ...
  // 返回 false 以取消导航
  return true;
});
router.afterEach(() => {
  NProgress.done();
});
export default router;
