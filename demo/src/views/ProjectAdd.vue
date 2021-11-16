<template>
  <div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-light">项目信息</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-light">项目名称</div>
        </el-col>
        <el-col :span="20">
          <div class="grid-content bg-purple">
            <el-input v-model="ruleForm.name"></el-input>
          </div>
        </el-col>
        <el-col :span="24"><div class="grid-content bg-purple-light">详细信息</div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light">送审类别</div></el-col>
        <el-col :span="20">
          <div class="grid-content bg-purple">
            <el-radio-group v-model="ruleForm.resource">
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
        <el-col :span="8"> <div class="grid-content bg-purple"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light">评审年度</div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light">所属地区</div></el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <el-input v-model="ruleForm.name"> </el-input>
          </div>
        </el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light">审核单位</div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light">建设单位</div></el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <el-input v-model="ruleForm.name"> </el-input>
          </div>
        </el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light">建设单位地址</div></el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <el-input v-model="ruleForm.name"> </el-input>
          </div>
        </el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light">项目联系人</div></el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <el-input v-model="ruleForm.name"> </el-input>
          </div>
        </el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light">联系人手机号码</div></el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <el-input v-model="ruleForm.name"> </el-input>
          </div>
        </el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light">报价开始时间</div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light">报价结束时间</div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light">报价需提交资料说明</div></el-col>
        <el-col :span="20"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="24"
          ><div class="grid-content bg-purple"><el-button>提交</el-button><el-button>暂存</el-button><el-button>取消</el-button></div></el-col
        >
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
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
        ],
        region: [{ required: true, message: '请选择活动区域', trigger: 'change' }],
        date1: [
          {
            type: 'date',
            required: true,
            message: '请选择日期',
            trigger: 'change',
          },
        ],
        date2: [
          {
            type: 'date',
            required: true,
            message: '请选择时间',
            trigger: 'change',
          },
        ],
        type: [
          {
            type: 'array',
            required: true,
            message: '请至少选择一个活动性质',
            trigger: 'change',
          },
        ],
        resource: [{ required: true, message: '请选择活动资源', trigger: 'change' }],
        desc: [{ required: true, message: '请填写活动形式', trigger: 'blur' }],
      },
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
  // border-radius: 4px;
  height: 50px;
}

.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  min-height: 50px;
  border: 1px solid #000;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
