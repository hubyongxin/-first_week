<template>
  <div>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm">
  <el-form-item label="活动名称" prop="name">
     <el-input v-model="ruleForm.name" size="small" ></el-input>
  </el-form-item>

  <el-form-item label="送审类别" prop="type">
    <el-radio-group v-model="ruleForm.type">
      <el-radio label="概算"></el-radio>
      <el-radio label="预算"></el-radio>
      <el-radio label="标底"></el-radio>
      <el-radio label="结算"></el-radio>
      <el-radio label="决算"></el-radio>
      <el-radio label="其他"></el-radio>
    </el-radio-group>
  </el-form-item>

  <el-form-item label="送审金额" prop="money">
     <el-input-number v-model="ruleForm.money" :min="0" size="small"></el-input-number> <span>（万元）</span>
  </el-form-item>

  <el-form-item label="评审年度" prop="year">
      <el-date-picker v-model="ruleForm.year" type="year" placeholder="选择年" size="small" value-format="yyyy"></el-date-picker>
  </el-form-item>

  <el-form-item label="所属区域" prop="area">
      <!-- <el-select v-model="ruleForm.area" placeholder="请选择区域" size="small">
        <el-option :label="item.cityname" :value="item.citycode" v-for="item in cityList " :key ="item.citycode"></el-option>
      
    </el-select> -->
  <el-cascader v-model="this.cityList.citycode" :options="cityList"></el-cascader>


  </el-form-item>

    <el-form-item label="建设单位" prop="construction">
      <el-input v-model="ruleForm.construction" size="small"> </el-input>
  </el-form-item>

    <el-form-item label="建设单位地址" prop="constructionArea">
      <el-input v-model="ruleForm.constructionArea" size="small"> </el-input>
  </el-form-item>

    <el-form-item label="项目联系人" prop="person">
     <el-input v-model="ruleForm.person" size="small"> </el-input>
  </el-form-item>

    <el-form-item label="联系人手机号码" prop="personTel">
    <el-input v-model="ruleForm.personTel" size="small"> </el-input>
  </el-form-item>

    <el-form-item label="报价开始时间" prop="start">
      <el-date-picker v-model="ruleForm.start" type="datetime" placeholder="选择日期时间" size="small" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker>
  </el-form-item>

    <el-form-item label="报价结束时间" prop="end">
      <el-date-picker v-model="ruleForm.end" type="datetime" placeholder="选择日期时间" size="small" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker>
  </el-form-item>

    <el-form-item label="报价需提交资料说明" prop="desc">
    <el-input type="textarea" v-model="ruleForm.desc" size="small"></el-input>
  </el-form-item>

  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
  </div>
</template>

<script>
import request from "../utlis/request";
import qs from 'qs'
  export default {
    data() {
      return {
        ruleForm: {
          name:"",
          type:"",
          money:"",
          year:"",
          area:'',
          construction:"",
          constructionArea:"",
          person:"",
          personTel:"",
          start:"",
          end:"",
          desc:"",
          
      },
       cityname:[],
      //城市列表数据
       cityList:[],
      
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
          ],
          desc: [
            { required: true, message: '报价需提交资料说明', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
     async submitForm() {

      try {
        let params = {
        rowguid :'',
        proguid :'',
        type : '01',
        typename :'概算', 
        amount : this.ruleForm.money,
        review_year : this.ruleForm.year,
        citycode : 130101,
        cityname : '石家庄市-市辖区',
        shdwcode : 'E0000011323',
        shdwname : '中心1',
        construct_dwname: this.ruleForm.construction,
        construct_address : this.ruleForm.constructionArea,
        pro_lxr : this.ruleForm.person,
        pro_tel : this.ruleForm.personTel,
        price_starttime : this.ruleForm.start,
        price_endtime : this.ruleForm.end,
        reason : this.ruleForm.desc,
        isend : '',
        isinvoice :'',
        name : this.ruleForm.name,
        shbj :'1',
        adduserid :'',
        addusername :'',
        adddwcode :'',
        adddwname :'',
        shyj :'',
        scbj :'',
        addtime :'',
        sfzhongbiao:'',
        isptsyf:'',
        fileguid:'5b296090-1d4f-4fc1-8db4-40a62be8438e'

       }
       const res = await request.post("/demandresponse/demander/demand/edit.json",qs.stringify(params))
       console.log(res);
      } catch (error) {
        console.log(error,'系统错误');
      }


      
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },

      //获取城市列表
     async getCityList(){
        try {
           const res = await request.get("/demandresponse/sys/general/citylist.json")
           this.cityList = res.data.tdata
           console.log(this.cityList);
        } catch (error) {
          console.log(error, '系统接口错误')
        }
        
      }
    },
    created() {
      this.getCityList()
    },
  }
</script>

<style>

</style>