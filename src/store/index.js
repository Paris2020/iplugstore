import { createStore } from "vuex"

export default createStore({

    state: {
        products: [
            {
                id: 0,
                title: "iPhone 11",
                price: "8,500.00",
                likes: 0,
                //inStore: true,
                image: "iphone-11-cpo",
            },
            {
                id: 1,
                title: "iPhone 11 Pro Max",
                price: "10,000.00",
                likes: 0,
                //inStore: true,
                image: "iphone-11-pro-max-cpo",
            },
            {
                id: 2,
                title: "iPhone 12",
                price: "10,500.00",
                likes: 0,
                //inStore: true,
                image: "iphone-12-cpo",
            },
            {
                id: 3,
                title: "iPhone 12 Pro Max",
                price: "12,000.00",
                likes: 0,
                //inStore: true,
                image: "iphone-12-pro-max-cpo",
            },
            {
                id: 4,
                title: "iPhone 13",
                price: "13,500.00",
                likes: 0,
                //inStore: true,
                image: "iphone-13-cpo",
            },
            {
                id: 5,
                title: "iPhone 14",
                price: "18,500.00",
                likes: 0,
                //inStore: true,
                image: "iphone-14-cpo",
            },
            {
                id: 6,
                title: "iPhone 14 Pro Max",
                price: "24,500.00",
                likes: 0,
                //inStore: true,
                image: "iphone-14-pro-max-cpo",
            },
            {
                id: 7,
                title: "iPhone X",
                price: "6,900.00",
                likes: 0,
                //inStore: true,
                image: "iphone-x-cpo",
            },
            {
                id: 8,
                title: "iPhone XS",
                price: "8,000.00",
                likes: 0,
                //inStore: true,
                image: "iphone-xs-cpo",
            },
        ]
    },
    getters: {
        getCounts: state => {
            state.products.forEach(product => {
                return product.likes
            })
            //return state.count
        }
    },
    mutations: {
        incrementCount: (state, product) => {
            state.products[product].likes++;
            //state.count++
        },
    },
})