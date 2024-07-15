// eslint-disable-next-line ts/ban-ts-comment
// @ts-expect-error
import { createRouter, createWebHistory } from 'vue-router/auto'

export const router = createRouter({
  history: createWebHistory(),
})
