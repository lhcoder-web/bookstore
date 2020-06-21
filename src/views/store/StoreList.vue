<template>
  <div class="book-list-wrapper">
    <detail-title :title="title"
                  :showShelf="true"
                  @back="back"
                  ref="title"></detail-title>
    <scroll class="book-list-scroll-wrapper"
            :top="42"
            :bottom='48'
            @onScroll="onScroll"
            ref="scroll">
  <!-- :data='value' value的值是通过(value,index)的遍历获取的 就是v-for中的第一个参数item 的值赋给了data -->
      <featured :data="value" :titleText="titleText ? titleText : getCategoryText(key)" 
      :btnText="''" v-for="(value, key, index) in list" :key="index"></featured>
    </scroll>
  </div>
</template>

<script>
  import DetailTitle from '@/components/detail/DetaiTitle'
  import Scroll from '@/components/common/Scroll'
  //精选的组件 因为是相同的样式 直接遍历数据即可
  import Featured from '@/components/home/Featured'
  import { realPx } from '@/utils/utils'
  import { list } from '@/network/index'
  import { categoryList, categoryText } from '@/utils/store'

  export default {
    components: {
      DetailTitle,
      Scroll,
      Featured
    },
    computed: {
      title() {
          if (this.list) {
            return this.total
          } else {
            return null
          }    
      },
    },
    data() {
      return {
        list: null,
        total:null,
        num:null,
      }
    },
    methods: {
      getCategoryText(key) {
        return `${categoryText(categoryList[key], this)}(${this.list[key].length})`
      },
      back() {
        this.$router.go(-1)
      },
      onScroll(offsetY) {
        if (offsetY > realPx(42)) {
          this.$refs.title.showShadow()
        } else {
          this.$refs.title.hideShadow()
        }
      },
      getList() {
        //获取所有的信息，通过query获取传递来的参数。
        //如果传递的是学科参数，就把当前学科的数据赋值给list 如果是关键字，就匹配书名，将匹配到的书赋值给list
        //最后将list数据传递给Featured精选组件 进行遍历
        //获取数据
        list().then(response => {
          // 所有书籍的信息
          // console.log(response);
          //list存放了所有的分类学科(key值是所有的学科，value是所有的书籍内容)每个分类学科包含了该学科所有的书籍
          this.list = response.data.data
          // console.log(this.list);Biomedicine: Array(14),BusinessandManagement: Array(16),...
          //搜索的url的query
          const category = this.$route.query.category
          const keyword = this.$route.query.keyword
          //总共书籍数量
          // this.total = response.data.total;
          if (response.data.data[category] && response.data.data[category].length) {
              this.total =  '共' + response.data.data[category].length  + '本图书';
          } else {
              this.total = '搜索结果';
          }
          if (category) {
            //查找出跟url上的category相同的学科 然后取出当前学科分类的所有数据
            //Object.keys方法 将数组的 key值组合成数组，返回这个数组(取出所有的学科名)
            const key = Object.keys(this.list).filter(item => item === category)[0]
            const data = this.list[key]
            this.list = {}
            this.list[key] = data
          } else if (keyword) {
            //Object.keys方法 将数组的 key值组合成数组，返回这个数组
            //this.list的key是所有学科，学科里的数组的fileName是所有书名 遍历所有书名匹配关键字 返回匹配成功的学科名
            Object.keys(this.list).filter(key => {
              this.list[key] = this.list[key].filter(book => book.fileName.indexOf(keyword) >= 0)
              //最后返回有数据的学科 没有数据的不返回
              return this.list[key].length > 0
            })
          }
        })
      }
    },
    created() {
      this.getList()
      this.titleText = this.$route.query.categoryText;
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../assets/style/global";

  .book-list-wrapper {
    width: 100%;
    height: 100%;
    background: white;
  }
</style>
