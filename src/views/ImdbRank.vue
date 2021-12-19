<template>
<div>

  <ul>
    <li v-for="(item,index) in rankList" :key="index">
      <el-card :data="item" style="width: 1150px;margin: 0 auto">

        <el-button @click="getDetails(item.asin)" style="font-style: italic;font-size: 20px" type="text">{{item.title}}</el-button>
        <span style="font-size:20px;float: right;color:gold">{{index+1}}  </span><br>
        <span>Director: {{item.directorsName}}</span>
        <span style="font-size: 16px;color: red">{{item.imdbScore}}</span>
        <div style="float: right">
          <el-button type="text" @click="getComments(item.asin)">查看评价</el-button>
        </div>
      </el-card>
    </li>
  </ul>
<v-details
    :detailsVisible.sync="detailsVisible"
    :movieImage.sync="movieImage"
    :movieDetails.sync="movieDetails"
></v-details>
  <v-comment
      :commentVisible.sync="commentVisible"
      :commentList.sync="commentList"
  ></v-comment>
</div>
</template>

<script>
import {getImdbRank} from "../api/mysql/MiscSearch";
import vDetails from "../components/DetailsDialog";
import vComment from "../components/CommentDialog";
import {getByAsin} from "../api/mysql/MovieSearch";
export default {
  name: "imdb榜单",
  data(){
    return{
      rankList:[],
      commentVisible:false,
      detailsVisible:false,
      movieImage:{'url':""},
      movieDetails:{
        'dateTime':{
          'year':'','month':'','day':''
        }
      },
      commentList:[]
    }
  },
  components:{
    vDetails,
    vComment
  },
  methods:{
    getComments(asin){
              console.log(asin)
              getByAsin(asin).then(
                  response=>{
                    this.movieDetails=response.data
                    this.movieImage.url=response.data.moviePic
                    this.movieDetails.actorsName=this.movieDetails.actorsName.replace('$',', ')
                    this.movieDetails.productVersion=this.movieDetails.productVersion.replace('$',', ')
                    this.commentList=this.movieDetails.divReviewEntityList
                    console.log(response.data)
                    console.log(this.commentList)
                  }
              )
      this.commentVisible=true
    },
    getDetails(asin) {
            console.log(asin)
            getByAsin(asin).then(
                response=>{
                  this.movieDetails=response.data
                  this.movieImage.url=response.data.moviePic
                  this.movieDetails.actorsName=this.movieDetails.actorsName.replace('$',', ')
                  this.movieDetails.productVersion=this.movieDetails.productVersion.replace('$',', ')
                  this.commentList=this.movieDetails.divReviewEntityList
                  console.log(response.data)
                  console.log(this.commentList)
                }
            )
      this.detailsVisible=true
    },
  },
  created() {
    getImdbRank().then(
        response=>{
          this.rankList=response.data;
          console.log(this.rankList)
          for(let i=0;i<100;i++) {
            this.rankList[i].actorsName=this.rankList[i].actorsName.replace('$', ',')
            this.rankList[i].directorsName=this.rankList[i].directorsName.replace('$', ',')
            if (this.rankList[i].directorsName == "") this.rankList.directorsName = "unknown"
            if (this.rankList[i].actorsName == "") this.rankList.actorsName = 'unknown'
          }
        }
    )
  }
}
</script>

<style scoped>

</style>
