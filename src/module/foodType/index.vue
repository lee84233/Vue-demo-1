<template>
  <div class="home-page">
    <div class="weui-navbar">
        <!-- <div class="weui-navbar__item weui-bar__item_on">
            选项一
        </div>
        <div class="weui-navbar__item">
            选项二
        </div>
        <div class="weui-navbar__item">
            选项三
        </div> -->
        <router-link v-for="food in foodType" tag="div" :to="food.url" active-class="weui-bar__item_on" class="weui-navbar__item" :key="food.id">{{food.name}}</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      foodType: [
        {
          name: '炒菜',
          url: 'chao',
          id: 0
        },
        {
          name: '炖菜',
          url: 'dun',
          id: 1
        },
        {
          name: '汤',
          url: 'tang',
          id: 2
        }
      ]
    };
  }
};
</script>
