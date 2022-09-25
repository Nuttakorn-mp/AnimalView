<template>
    <div class="blank">
    <p class="header-name">Animal name</p>
    <p class="header-name" style="left: 80px; top: -5px">
      <img src="../assets/original.png" style="width: 269px" />
    </p>
      <div class="table">
        <div class="search">
          <input type="text" v-model="searchInput" placeholder="Search..." class="box-search" />
          <!-- <span class="search-header">icon</span> -->
          <span class="icon">
            <img src="../assets/icon/magnify.svg" alt="">
          </span>
          
          
        </div>
        <div class="element-name">
          <button class="modify" @click="goToModify()">Modify</button>

          <div class="result-search">
            <ScrollView orientation="vertical" scrollBarIndicatorVisible=false>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
          </ScrollView>
            
            <div v-for="item in filteredAndSorted" :key="item.englishName">
                <mouse-in>
                  <article class="in-article-card" @click="goToPage(item.englishName, item._id, item.thaiName)">
                    {{item.englishName}}
                  </article>
                </mouse-in>
                <div class="data"></div>
            </div>
            
          </div>
        </div>
        <!-- <div class="test">{{this.animalNameGet}} <div>----{{this.animalGet}}</div></div> -->
      </div>
    </div>
</template>

<script>
import Vue from 'vue';

Vue.use(ScrollView);

export default {
  name: "notfound",
  components:{},
  data: () => {
    return {};
  },
  computed: {},
  methods: {},
  created(){}
};
</script>
<style scoped>
.blank {
  top: 0;
  left: 0;
  right: 0;
  position: absolute;
  display: flex;
  height: 100%;
  /* width: 100%; */
  /* height: 700px; */
  
  background-color: white;
  /* background-color: #f0ffff; */
  /* background: #f8f8f8; */
}
</style>