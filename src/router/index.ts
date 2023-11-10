import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CodeView from '@/views/CodeView.vue';
import SkillsView from '@/views/SkillsView.vue';
import ExperienceView from '@/views/ExperienceView.vue';
import AboutView from '@/views/AboutView.vue';
import ContactsView from '@/views/ContactsView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Главная',
            component: HomeView,
        },
        {
            path: '/code',
            name: 'Примеры кода',
            component: CodeView,
        },
        {
            path: '/skills',
            name: 'Навыки',
            component: SkillsView,
        },
        {
            path: '/experience',
            name: 'Опыт',
            component: ExperienceView,
        },
        {
            path: '/about',
            name: 'Обо мне',
            component: AboutView,
        },
        {
            path: '/contacts',
            name: 'Контакты',
            component: ContactsView,
        },
    ],
});

export default router;
