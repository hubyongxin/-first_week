<template>
  <div class="main">
    <!-- 表单区域 -->
    <el-form>
      <el-form-item class="title">
        <div>项目信息</div>
      </el-form-item>
      <!-- 项目名称 -->
      <div>
        <el-form-item label="项目名称：" prop="name" label-width="170px">
          {{ this.detailList.name }}
        </el-form-item>
      </div>
      <el-form-item class="title">
        <div>详细信息</div>
      </el-form-item>
      <div>
        <el-form-item label="送审类别：" prop="type" label-width="170px">
          {{ this.detailList.typename }}
        </el-form-item>
      </div>
      <el-row>
        <el-col :span="12">
          <div>
            <el-form-item label="送审金额：" prop="money" label-width="170px"> {{ this.detailList.amount }} <span>（万元）</span> </el-form-item>
          </div>
        </el-col>
        <el-col :span="12">
          <div>
            <el-form-item label="评审年度：" prop="year" label-width="170px">
              {{ this.detailList.review_year }}
            </el-form-item>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <div>
            <el-form-item label="所属区域：" prop="area" label-width="170px">
              {{ this.detailList.cityname }}
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="12">
          <div>
            <el-form-item label="审核单位：" prop="check" label-width="170px">
              {{ this.detailList.shdwname }}
            </el-form-item>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <div>
            <el-form-item label="建设单位：" prop="construction" label-width="170px">
              {{ this.detailList.construct_dwname }}
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="12">
          <div>
            <el-form-item label="建设单位地址：" prop="constructionArea" label-width="170px">
              {{ this.detailList.construct_address }}
            </el-form-item>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <div>
            <el-form-item label="项目联系人：" prop="person" label-width="170px">
              {{ this.detailList.pro_lxr }}
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="12">
          <div>
            <el-form-item label="联系人手机号码：" prop="personTel" label-width="170px">
              {{ this.detailList.pro_tel }}
            </el-form-item>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <div>
            <el-form-item label="报价开始时间：" prop="start" label-width="170px">
              {{ this.detailList.price_starttime }}
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="12">
          <div>
            <el-form-item label="报价结束时间：" prop="end" label-width="170px">
              {{ this.detailList.price_endtime }}
            </el-form-item>
          </div>
        </el-col>
      </el-row>
      <div>
        <el-form-item label="报价需提交资料说明：" prop="desc" class="textarea" label-width="170px">
          {{ this.detailList.reason }}
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
import request from '../utlis/request'
export default {
  data() {
    return {
      //详情数据列表
      detailList: {},
      //id
      proguid: '',
    }
  },
  methods: {
    //   获取id
    getid() {
      this.proguid = this.$route.params.proguid
      console.log(this.proguid)
    },

    // 获取数据
    async getdel(proguid) {
      try {
        const res = await request.get('/demandresponse/demander/demand/detail.json', {
          params: {
            proguid,
          },
        })
        this.detailList = res.data.tdata
        console.log(this.detailList)
      } catch (error) {
        console.log(error, '系统接口错误')
      }
    },
  },

  created() {
    this.getid()
    this.getdel(this.proguid)
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
