<template>
  <div id='index'>
    <div class="nav">
      <div class="title">免费的在线BMI计算器</div>
      <div class="desc">身体质量指数（Body Mass Index，简称BMI），亦称克托莱指数，是目前国际上最常用的衡量人体胖瘦程度已经是否健康的一个标准。BMI超标了，意味着你必须减肥了。</div>
    </div>
    <div class="main">
      <div class="calculate">
        <div class="calculate_title">免费计算你的身体质量指数(BMI)</div>
        <div class="calculate_value" v-show='calculateValue != ""'>
          <div>
            你的BMI值：{{calculateValue}},身体状态：正常
          </div>
        </div>
        <div class="unit">
          <span class="unit_name">质量单位：</span>
          <span>
            <input type="radio" name='radio_bmi'><span class="names">公制</span>
          </span>
          <span>
            <input type="radio" name='radio_bmi'><span class="names">英制</span>
          </span>
        </div>
        <div class="height">
          <span class="height_name">我的身高：</span>
          <span><input type="text" v-model="height">单位:厘米cm</span>
        </div>
        <div class="weight">
          <span class="weight_name">我的体重：</span>
          <span><input type="text" v-model="weight">单位:千克kg</span>
        </div>
        <div class="standard">
          <span class="standard_name">BMI标准：</span>
          <span>
            <select>
              <option>中国标准</option>
              <option>国际标准</option>
            </select>
          </span>
        </div>

        <button class="button" @click="calculate">计算BMI</button>
      </div>

    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        height:'',
        weight:'',
        calculateValue:'',
        isShow:false
      }
    },
    methods:{
      calculate(){
        let height = this.height/100
        let weight = this.weight
        this.calculateValue = (weight /(Math.pow(height,2))).toFixed(2)
        console.log(this.calculateValue)

      }
    }
  }

</script>
<style lang="scss">
  #index {
    .nav {
      width: 100%;
      background: #b9e6fa;
      .title {
        padding: {
          top: 1rem;
        }
      ;
        font: {
          weight: bolder;
          size: 1.5rem;
        }
      ;
        width: 50%;
        margin: {
          left: 25%;
        }
      ;
      }
      .desc {
        padding: {
          bottom: 2rem;
        }
      ;
        margin: {
          top: .5rem;
        }
      ;
        font: {
          weight: 300;
        }
        width: 50%;
        margin: {
          left: 25%;
        }
      ;
      }
    }
    .main {
      width: 100%;
      .calculate {
        .calculate_title {
          margin: {
            top: 1rem;
          }
        ;
          font: {
            size: 1.2rem;
            weight: 900;
          }
        ;
        }
        .common {
          font: {
            size: 1rem;
            weight: 300;
          }
        ;
        }
        .commonInput {
          width: 10rem;
          height: 1.5rem;
          font: {
            size: 1rem;
          }
        ;
        }
        .unit {
          span {
            .names {
              @extend .common
            }
          }
          margin: {
            top: .5rem
          }
        ;
          .unit_name {
            @extend .common
          }
        }
        .height {
          span {
            input {
              @extend .commonInput
            }
          }
          margin: {
            top: .5rem
          }
        ;
          .height_name {
            @extend .common
          }
        }
        .weight {
          span {
            input {
              @extend .commonInput
            }
          }
          margin: {
            top: .5rem
          }
        ;
          .weight_name {
            @extend .common
          }
        }
        .standard {
          span {
            select {
              @extend .commonInput;
            }
          }
          margin: {
            top: .5rem
          }
        ;
          .standard_name {
            @extend .common
          }
        }
      }
      .button {

        width: 10rem;
        height: 1.8rem;
        font: {
          size: .7rem;
        }
      ;
        margin: {
          top: 1rem;
          left: 2.5rem;
        }
      ;
      }
    }
  }

</style>
