<template>
  <div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-row>
        <el-col :span="24" class="big_title">
          <div class="grid-content bg-purple-light">项目信息</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-light">项目名称</div>
        </el-col>
        <el-col :span="20">
          <div class="grid-content bg-purple">
            <el-input v-model="ruleForm.name" size="small"></el-input>
          </div>
        </el-col>
        <el-col :span="24">
          <div class="grid-content bg-purple-light">详细信息</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-light">送审类别</div>
        </el-col>
        <el-col :span="20">
          <div class="grid-content bg-purple">
            <el-radio-group v-model="ruleForm.type">
              <el-radio label="概算"></el-radio>
              <el-radio label="预算"></el-radio>
              <el-radio label="标底"></el-radio>
              <el-radio label="结算"></el-radio>
              <el-radio label="决算"></el-radio>
              <el-radio label="其他"></el-radio>
            </el-radio-group>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-light">送审金额</div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <el-input-number v-model="ruleForm.money" :min="0" size="small"> </el-input-number>
            <span>（万元）</span>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-light">评审年度</div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <el-date-picker v-model="ruleForm.year" type="year" placeholder="选择年" size="small"> </el-date-picker>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-light">所属地区</div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <el-select v-model="ruleForm.area" placeholder="请选择活动区域" size="small">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-light">审核单位</div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-light">建设单位</div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <el-input v-model="ruleForm.construction" size="small"> </el-input>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-light">建设单位地址</div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <el-input v-model="ruleForm.constructionArea" size="small"> </el-input>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-light">
            <div>项目联系人</div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <el-input v-model="ruleForm.person" size="small"> </el-input>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-light">联系人手机号码</div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <el-input v-model="ruleForm.personTel" size="small"> </el-input>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-light">报价开始时间</div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <el-date-picker v-model="ruleForm.start" type="datetime" placeholder="选择日期时间" size="small"> </el-date-picker>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-light">报价结束时间</div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <el-date-picker v-model="ruleForm.end" type="datetime" placeholder="选择日期时间" size="small"> </el-date-picker>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-light">报价需提交资料说明</div>
        </el-col>
        <el-col :span="20">
          <div class="grid-content bg-purple">
            <el-input type="textarea" v-model="ruleForm.desc" size="small"> </el-input>
          </div>
        </el-col>
        <el-col :span="24">
          <div class="grid-content bg-purple">
            <div>
              <el-button>提交</el-button>
              <el-button>暂存</el-button>
              <el-button>取消</el-button>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        name: '',
        type: '',
        money: '',
        year: '',
        area: '',
        construction: '',
        constructionArea: '',
        person: '',
        personTel: '',
        start: '',
        end: '',
        desc: '',
      },
      rules: {},
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
  },
}
</script>

<style lang="less" scoped>
.el-row {
  margin: 30px auto;
  width: 70%;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  height: 40px;
}

.bg-purple {
  height: 40px;
  background: #d3dce6;
  .el-input {
    height: 40px;
  }
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  display: flex;
  height: 40px;
  border: 1px solid gray;
  align-items: center;
  justify-content: center;
  .el-input {
    width: 98%;
    top: 3px;
  }
  .el-input-number {
    width: 81%;
  }
  .el-select {
    width: 98%;
  }
}
</style>
