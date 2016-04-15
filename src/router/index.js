import Vue from 'vue';
import VueRouter from 'vue-router';

/* COMPONENTS */
import Hello from '../components/Hello';

Vue.use(VueRouter);

const router = new VueRouter();

router.map({
  '/': {
    component: Hello,
  },
});

export default router;
