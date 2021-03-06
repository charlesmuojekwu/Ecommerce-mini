module.exports = [
    {
        path: '/',
        name: 'products.index',
        component: () => import('./routes/Products/Index.vue')
    },
    {
        path: '/product/:slug',
        name: 'product.show',
        component: () => import('./routes/Products/Show.vue')
    },
    {
        path: '/checkout',
        name: 'order.checkout',
        component: () => import('./routes/Order/Checkout.vue')
    },
    {
        path: '/summary',
        name: 'order.summary',
        component: () => import('./routes/Order/Summary.vue')
    }
]