// src/boot/guards.ts
import { Router, RouteLocationNormalized, NavigationGuardNext } from 'vue-router';
import { Store } from 'vuex';
import { StateInterface } from 'src/store/types'; // Adjust path as per your actual setup
import store from 'src/store'; // Adjust path as per your actual setup

export function attachGuards(router: Router) {
  router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    const typedStore = store as Store<StateInterface>;

    const isAuthenticated: boolean = typedStore.getters['auth/isAuthenticated'];
    const user: { role: string } = typedStore.getters['auth/user'];

    if (to.matched.some((record: any) => record.meta.requiresAuth)) {
      if (!isAuthenticated) {
        next({ path: '/login' });
      } else if (to.matched.some((record: any) => record.meta.requiresAdmin)) {
        if (user && user.role !== 'admin') {
          next({ path: '/' });
        } else {
          next();
        }
      } else {
        next();
      }
    } else {
      next();
    }
  });
}
