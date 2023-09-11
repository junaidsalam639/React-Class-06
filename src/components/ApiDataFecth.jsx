import React, { useState } from 'react'

const ApiDataFecth = [
    {
       id : 1,
       title : 'ApiDataFecth',
       desc : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi voluptatem quas a, consequuntur quidem illo consequatur delectus quos aut repellat magnam harum quod sequi, libero laudantium. Quisquam consectetur ducimus corporis!',
       image : 'https://plus.unsplash.com/premium_photo-1673263587227-afde886b59e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        id : 2,
        title : 'ApiDataFecth',
        desc : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi voluptatem quas a, consequuntur quidem illo consequatur delectus quos aut repellat magnam harum quod sequi, libero laudantium. Quisquam consectetur ducimus corporis!',
        image : 'https://images.unsplash.com/photo-1685113872064-de4180a0ea93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
     },
     {
        id : 3,
        title : 'ApiDataFecth',
        desc : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi voluptatem quas a, consequuntur quidem illo consequatur delectus quos aut repellat magnam harum quod sequi, libero laudantium. Quisquam consectetur ducimus corporis!',
        image : 'https://plus.unsplash.com/premium_photo-1672743593021-86baaab96274?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
     },
     {
        id : 4,
        title : 'ApiDataFecth',
        desc : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi voluptatem quas a, consequuntur quidem illo consequatur delectus quos aut repellat magnam harum quod sequi, libero laudantium. Quisquam consectetur ducimus corporis!',
        image : 'https://images.unsplash.com/photo-1688118935892-b40fbf3b5e69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
     },
     {
        id : 5,
        title : 'ApiDataFecth',
        desc : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi voluptatem quas a, consequuntur quidem illo consequatur delectus quos aut repellat magnam harum quod sequi, libero laudantium. Quisquam consectetur ducimus corporis!',
        image : 'https://plus.unsplash.com/premium_photo-1666264200967-f73b234ee61d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
     },
     {
        id : 6,
        title : 'ApiDataFecth',
        desc : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi voluptatem quas a, consequuntur quidem illo consequatur delectus quos aut repellat magnam harum quod sequi, libero laudantium. Quisquam consectetur ducimus corporis!',
        image : 'https://media.istockphoto.com/id/1367899893/photo/multi-racial-diverse-group-of-people-working-with-paperwork-on-a-board-room-table-at-a.webp?b=1&s=170667a&w=0&k=20&c=rHlHdT9X7YPPayW9OjAObixgQnAwu_lgt_5gcN_IE2c='
     },
     {
        id : 7,
        title : 'ApiDataFecth',
        desc : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi voluptatem quas a, consequuntur quidem illo consequatur delectus quos aut repellat magnam harum quod sequi, libero laudantium. Quisquam consectetur ducimus corporis!',
        image : 'https://media.istockphoto.com/id/1471837160/photo/hand-of-human-holding-green-earth-with-the-icon-of-environment-for-esg-co2-and-net-zero-world.webp?b=1&s=170667a&w=0&k=20&c=lYW1te4NcVnzKaXrXA11VGfMstA03VqFpoX7dIMpZIs='
     },
     {
        id : 8,
        title : 'ApiDataFecth',
        desc : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi voluptatem quas a, consequuntur quidem illo consequatur delectus quos aut repellat magnam harum quod sequi, libero laudantium. Quisquam consectetur ducimus corporis!',
        image : 'https://media.istockphoto.com/id/1390560381/photo/multi-ethnic-business-people-having-business-meeting.webp?b=1&s=170667a&w=0&k=20&c=N4ujDidHMqPo1Ys9Iehqz_Rb6lEgufhAUsQKyUwZb-M='
     },
     {
        id : 9,
        title : 'ApiDataFecth',
        desc : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi voluptatem quas a, consequuntur quidem illo consequatur delectus quos aut repellat magnam harum quod sequi, libero laudantium. Quisquam consectetur ducimus corporis!',
        image : 'https://media.istockphoto.com/id/1502427930/photo/shelves-with-medicaments-in-pharmacy.webp?b=1&s=170667a&w=0&k=20&c=o_Z5iki_MLxAgrFt_ML_uaaKL2fLNHLPzhAQQLVCnt0='
     },
     {
        id : 10,
        title : 'ApiDataFecth',
        desc : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi voluptatem quas a, consequuntur quidem illo consequatur delectus quos aut repellat magnam harum quod sequi, libero laudantium. Quisquam consectetur ducimus corporis!',
        image : 'https://media.istockphoto.com/id/1462151129/photo/prevent-global-warming-girl-planting-a-small-tree.webp?b=1&s=170667a&w=0&k=20&c=0a4uYpwm9LNRVsxIVG50_cvBylNbVLKKdDUx7lj6Msw='
     },
]

export default ApiDataFecth
