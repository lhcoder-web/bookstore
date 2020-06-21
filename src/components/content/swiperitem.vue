<template>
  <div class="win" id="mt">
     <div class="swiper" v-for="(item,index) in data" :key="index" :style="swiperUrl(item)" v-show="index === myindex">
     </div>
    
  </div>
   
</template>

<script>

export default {
    name:'swiperitem',
    // props:{
    //     data:Array
    // },
    data() {
        return {
            myindex:0,
             //轮播图片
            data:[
                require('../../assets/img/swiper/swiper01.jpg'),
                require('../../assets/img/swiper/swiper02.jpg'),
                require('../../assets/img/swiper/swiper03.jpg'),
                require('../../assets/img/swiper/swiper04.jpg'),
            ]
        }
    },
     created(){
          this.swiper();
    },
    methods:{
        swiperUrl(item) {
            return {
                   backgroundImage: 'url('+item+')'
            }
        },
       play() {
           const length = parseInt(this.data.length);
           this.myindex++;
           if(this.myindex === length){
               this.myindex = 0
           }
       },
       swiper() {
           setInterval(this.play,2000)
       }
    }
   
}

</script>

<style>
.win{
    width: 100%;
    overflow: hidden;
    height: 100%;
}
.swiper {
    width: 100%;
    height: 100%;
    background-size: 100%;
}
</style>
