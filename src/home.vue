<template>
    <div>
        <banner bigImage="https://www.undone.com/media/d/11816/0118_top_build_urban_01.jpg" />
        <div class='access'>
            <accessoresCard :image='image' />
            <accessoresCard :image='image' />
            <accessoresCard :image='image' />
            <accessoresCard :image='image' />
            <accessoresCard :image='image' />
        </div>
        <watchDesc :watchDesc="watchs"/>
    </div>
</template>
<script>
import accessoresCard from 'ud-components/accessores_card.vue'
import banner from 'ud-components/banner.vue'
import watchDesc from 'ud-components/watch_desc.vue'
import 'bootstrap/scss/bootstrap.scss'
export default {
    data() {
        return {
            lookbookImage: ["https://www.undone.com/media/d/15507/U_v8.jpg", "https://www.undone.com/media/d/15507/U_v8.jpg"],
            image: 'https://www.undone.com/media/collection_lists/6956/Ustrap_cordura_blk_nob.png',
            watchs: [
                { 
                    'BigImage' : 'https://www.undone.com/media/d/16211/Maldives_content1.jpg',
                    'MobileImage' : 'https://www.undone.com/media/d/16211/Maldives_content1.jpg',
                    'description' : "ABOUT MALDIVES The Maldives is a geological marvel consisting of 1,192 coral islands that form an archipelago of 26 major atolls stretching like a string of pearls across the Indian Ocean. The highest point of Maldives measuring 2.4m with an average of 1.8m above sea level, Maldives is the lowest and the flattest country in the world. Measuring 820km by 130km, it has a total coastline of 644km with pristine beaches and crystal clear lagoons. Maldives has its own unique language called Dhivehi and has its own alphabet known as Thaana."
                },
                 { 
                    'BigImage' : 'https://www.undone.com/media/d/16211/Maldives_content1.jpg',
                    'MobileImage' : 'https://www.undone.com/media/d/16211/Maldives_content1.jpg',
                    'description' : "ABOUT MALDIVES The Maldives is a geological marvel consisting of 1,192 coral islands that form an archipelago of 26 major atolls stretching like a string of pearls across the Indian Ocean. The highest point of Maldives measuring 2.4m with an average of 1.8m above sea level, Maldives is the lowest and the flattest country in the world. Measuring 820km by 130km, it has a total coastline of 644km with pristine beaches and crystal clear lagoons. Maldives has its own unique language called Dhivehi and has its own alphabet known as Thaana."
                },
                 { 
                    'BigImage' : 'https://www.undone.com/media/d/16211/Maldives_content1.jpg',
                    'MobileImage' : 'https://www.undone.com/media/d/16211/Maldives_content1.jpg',
                    'description' : "ABOUT MALDIVES The Maldives is a geological marvel consisting of 1,192 coral islands that form an archipelago of 26 major atolls stretching like a string of pearls across the Indian Ocean. The highest point of Maldives measuring 2.4m with an average of 1.8m above sea level, Maldives is the lowest and the flattest country in the world. Measuring 820km by 130km, it has a total coastline of 644km with pristine beaches and crystal clear lagoons. Maldives has its own unique language called Dhivehi and has its own alphabet known as Thaana."
                },
                 { 
                    'BigImage' : 'https://www.undone.com/media/d/16211/Maldives_content1.jpg',
                    'MobileImage' : 'https://www.undone.com/media/d/16211/Maldives_content1.jpg',
                    'description' : "ABOUT MALDIVES The Maldives is a geological marvel consisting of 1,192 coral islands that form an archipelago of 26 major atolls stretching like a string of pearls across the Indian Ocean. The highest point of Maldives measuring 2.4m with an average of 1.8m above sea level, Maldives is the lowest and the flattest country in the world. Measuring 820km by 130km, it has a total coastline of 644km with pristine beaches and crystal clear lagoons. Maldives has its own unique language called Dhivehi and has its own alphabet known as Thaana."
                }
            ]
        }
    },
    components:{
        accessoresCard,
        banner,
        watchDesc
    }
}
</script>
<style>
    .access{
        display: flex;
        justify-content: center;
    }
</style>


