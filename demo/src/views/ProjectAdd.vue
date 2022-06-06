<template>
  <div class="main">
    <!-- 表单区域 -->
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
      <el-form-item class="title"><div>项目信息</div></el-form-item>
      <!-- 项目名称 -->
      <div>
        <el-form-item label="项目名称" prop="name" label-width="150px">
          <el-input v-model="ruleForm.name" size="small"></el-input>
        </el-form-item>
      </div>
      <el-form-item class="title"><div>详细信息</div></el-form-item>
      <div>
        <el-form-item label="送审类别" prop="type" label-width="150px">
          <el-radio-group v-model="ruleForm.type" @change="getType">
            <el-radio :label="item.typename" :value="item.type" v-for="item in type" :key="item.type"></el-radio>
          </el-radio-group>
        </el-form-item>
      </div>
      <el-row>
        <el-col :span="12">
          <div>
            <el-form-item label="送审金额" prop="money" label-width="150px"> <el-input-number v-model="ruleForm.money" :min="0" size="small"> </el-input-number> <span>（万元）</span> </el-form-item>
          </div>
        </el-col>
        <el-col :span="12">
          <div>
            <el-form-item label="评审年度" prop="year" label-width="150px">
              <el-date-picker v-model="ruleForm.year" type="year" placeholder="选择年" size="small" value-format="yyyy"></el-date-picker>
            </el-form-item>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <div>
            <el-form-item label="所属区域" prop="area" label-width="150px">
              <el-cascader :options="cityList" v-model="ruleForm.area" :props="{ value: 'citycode', label: 'cityname' }" @change="getCityCode" ref='cascader'></el-cascader>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="12">
          <div>
            <el-form-item label="审核单位" prop="check" label-width="150px">
              {{ this.Auditlist.dwcnname }}
            </el-form-item>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <div>
            <el-form-item label="建设单位" prop="construction" label-width="150px">
              <el-input v-model="ruleForm.construction" size="small"> </el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="12">
          <div>
            <el-form-item label="建设单位地址" prop="constructionArea" label-width="150px">
              <el-input v-model="ruleForm.constructionArea" size="small"> </el-input>
            </el-form-item>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <div>
            <el-form-item label="项目联系人" prop="person" label-width="150px">
              <el-input v-model="ruleForm.person" size="small"> </el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="12">
          <div>
            <el-form-item label="联系人手机号码" prop="personTel" label-width="150px">
              <el-input v-model="ruleForm.personTel" size="small" maxlength="11"> </el-input>
            </el-form-item>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <div>
            <el-form-item label="报价开始时间" prop="start" label-width="150px">
              <el-date-picker v-model="ruleForm.start" type="datetime" placeholder="选择日期时间" size="small" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="12">
          <div>
            <el-form-item label="报价结束时间" prop="end" label-width="150px">
              <el-date-picker v-model="ruleForm.end" type="datetime" placeholder="选择日期时间" size="small" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker>
            </el-form-item>
          </div>
        </el-col>
      </el-row>
      <div>
        <el-form-item label="报价需提交资料说明" prop="desc" class="textarea" label-width="150px">
          <el-input type="textarea" v-model="ruleForm.desc" size="small"></el-input>
        </el-form-item>
      </div>
      <el-row>
        <el-col :span="24">
          <div>
            <el-form-item class="btn">
              <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
              <el-button type="warning">暂存</el-button>
              <el-button type="info" @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </div>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import request from '../utlis/request'
import qs from 'qs'
export default {
  data() {
    return {
      ruleForm: {
        name: '',
        type: '',
        type2: '',
        money: '',
        year: '',
        area: '',
        check: '',
        construction: '',
        constructionArea: '',
        person: '',
        personTel: '',
        start: '',
        end: '',
        desc: '',
        //所属区域名字
        cityname: '',
      },

      //城市列表数据
      cityList: [],
      type: [
        { type: '01', typename: '概算' },
        { type: '02', typename: '预算' },
        { type: '03', typename: '标底' },
        { type: '04', typename: '结算' },
        { type: '05', typename: '决算' },
        { type: '06', typename: '变更' },
        { type: '07', typename: '其他' },
      ],

      //审核单位
      Auditlist: {},

      rules: {
        name: [{ required: true, message: '请输入项目名称', trigger: 'blur' }],
        desc: [{ required: true, message: '请输入报价资料说明', trigger: 'blur' }],
        type: [{ required: true, message: '请选择送审类别', trigger: 'change' }],
        // year: [{ type: 'date', required: true, message: '请选择年份', trigger: 'change' }],
        area: [{ required: true, message: '请选择活动区域', trigger: 'change' }],
        construction: [{ required: true, message: '请输入建设单位', trigger: 'blur' }],
        constructionArea: [{ required: true, message: '请输入建设单位地址', trigger: 'blur' }],
        person: [{ required: true, message: '请输入项目联系人', trigger: 'blur' }],
        personTel: [
          { required: true, message: '请输入联系人手机号码', trigger: 'blur' },
          { pattern: /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/, message: '请输入合法手机号/电话号', trigger: 'change' },
        ],
      },
    }
  },
  methods: {


    //添加
    async submitForm() {

       this.$refs.ruleForm.validate(async (valid) =>{
         if(valid){
     try {
        let params = {
          rowguid: '',
          proguid: '',
          type: this.ruleForm.type2,
          typename: this.ruleForm.type,
          amount: this.ruleForm.money,
          review_year: this.ruleForm.year,
          citycode: this.ruleForm.area[1],
          cityname: this.ruleForm.cityname,
          shdwcode: this.Auditlist.dwcode,
          shdwname: this.Auditlist.dwcnname,
          construct_dwname: this.ruleForm.construction,
          construct_address: this.ruleForm.constructionArea,
          pro_lxr: this.ruleForm.person,
          pro_tel: this.ruleForm.personTel,
          price_starttime: this.ruleForm.start,
          price_endtime: this.ruleForm.end,
          reason: this.ruleForm.desc,
          isend: '',
          isinvoice: '',
          name: this.ruleForm.name,
          shbj: '1',
          adduserid: '',
          addusername: '',
          adddwcode: '',
          adddwname: '',
          shyj: '',
          scbj: '',
          addtime: '',
          sfzhongbiao: '',
          isptsyf: '',
          fileguid: '31bcdfb8-13f0-4344-9c6d-13e71146332c',
        }
        const res = await request.post('/demandresponse/demander/demand/edit.json', qs.stringify(params))
        console.log(res)
        this.$router.push('/projectapplication')
        return this.$message.success('添加成功')
      } catch (error) {
        console.log(error, '系统错误');
      }
         }

       })



    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },

    //获取城市列表
    async getCityList() {
      try {
        const res = await request.get('/demandresponse/sys/general/citylist.json')
        this.cityList = res.data.tdata
        console.log(this.cityList)
      } catch (error) {
        console.log(error, '系统接口错误')
      }
    },

    //获取审核单位
    async getCityCode() {
      try {
        // this.getcityname()
        const res = await request.get('/demandresponse/demander/demand/getshdw.json', {
          params: {
            citycode: this.ruleForm.area[1],
          },
        })

      //获取cityname
       let b = this.$refs.cascader.getCheckedNodes()
       this.ruleForm.cityname = b[0].parent.label +"-"+ b[0].label
      console.log(this.ruleForm.cityname);
     
        
        this.Auditlist = res.data.tdata
        // console.log(this.Auditlist);
      } catch (error) {
        console.log(error, '系统接口错误!!!')
      }
    },

    //过滤送审类别 
      getType(val) {
      let a = this.type.filter(function (item) {
        return item.typename == val
      })
      this.ruleForm.type2 = a.type
    },
  },

  

  created() {
    this.getCityList()
    this.getCityCode()
  },
}
</script>

<style lang="less" scoped>
.main {
  position: relative;
  top: 20px;
  display: flex;
  justify-content: center;
}
.el-form {
  width: 65%;
  border-top: 1px solid gray;
  border-left: 1px solid gray;
}
.el-form-item {
  height: 41.5px;
  margin: 0px;
  padding: 5px;
  border-bottom: 1px solid gray;
  border-right: 1px solid gray;
}

.textarea {
  height: 55px;
}
.btn {
  height: 55px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
}
.title {
  height: 30px;
  display: flex;
  align-items: center;
  background: #86b9ec;
}
</style>
