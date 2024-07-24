import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import PortfolioPage from '@/pages/PortfolioPage.vue'
import AboutPage from '@/pages/AboutPage.vue'
import PricesPage from '@/pages/PricesPage.vue'
import ContactPage from '@/pages/ContactPage.vue'
import PricesDetailsPage from '@/pages/PricesDetailsPage.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'

Vue.use(Router)

export default new Router({
    scrollBehavior() {
        return { x: 0, y: 0 }
    },
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomePage
        },

        {
            path: "/prices_details/:package",
            name: "prices_details",
            component: PricesDetailsPage,
        },
        {
            path: '/prices',
            name: 'prices',
            component: PricesPage
        },
        {
            path: '/contacts',
            name: 'contact',
            component: ContactPage
        },

        {
            path: "/about",
            name: "about",
            component: AboutPage,
        },
        {
            path: '/portfolio*',
            name: 'Portfolio',
            component: PortfolioPage
        },

        {
            path: '/project/:category',
            name: 'portfolio',
            component: PortfolioPage
        },

        {
            path: '/404',
            name: 'NotFound',
            component: NotFoundPage,
        },
        {
            path: '*',
            redirect: '/404'
        },
    ]
})