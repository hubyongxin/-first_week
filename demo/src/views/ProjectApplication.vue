<template>
  <div>
    <div id="view-content">
      <div>
        <!-- 搜索框区域 -->
        <div class="my-search">
          <el-form>
            <el-radio-group v-model="form.btnval" size="small">
              <el-radio-button label="">全部</el-radio-button>
              <el-radio-button label="0">未截止报名</el-radio-button>
              <el-radio-button label="1">已截止报名</el-radio-button>
            </el-radio-group>
            <el-select v-model="form.typeval" placeholder="类别" size="small">
              <el-option :label="item.name" :value="item.value" v-for="item in typeList" :key="item.value"></el-option>
            </el-select>
            <el-input v-model="form.name" placeholder="项目名称" size="small"></el-input>
            <span>
              <el-button type="primary" icon="el-icon-search" size="small" @click="select">查询</el-button>
              <el-button type="success" size="small" @click="goAdd"><i class="el-icon-plus el-icon--left"></i>添加</el-button>
            </span>
          </el-form>
        </div>
        <!-- 信息列表区域 -->
        <div class="list">
          <el-table :data="tableData" style="width: 100%" height="800">
            <el-table-column fixed prop="name ,proguid" label="项目信息" width="204">
              <template slot-scope="scope">
                <div>
                  <el-button type="text">{{ scope.row.name }}</el-button>
                </div>
                <div>{{ scope.row.proguid }}</div>
              </template>
            </el-table-column>
            <el-table-column prop="amount" label="送审金额（万元）" width="135"> </el-table-column>
            <el-table-column prop="typename" label="送审类别" width="162"> </el-table-column>
            <el-table-column prop="construct_dwname" label="建设单位" width="162"> </el-table-column>
            <el-table-column prop="pro_lxr ,pro_tel" label="联系人信息" width="162">
              <template slot-scope="scope">
                <div>{{ scope.row.pro_lxr }}</div>
                <div>{{ scope.row.pro_tel }}</div>
              </template>
            </el-table-column>
            <el-table-column prop="price_starttime , price_endtime" label="报价时间范围" width="244">
              <template slot-scope="scope">
                <div>{{ scope.row.price_starttime }}</div>
                <div>{{ scope.row.price_endtime }}</div>
              </template>
            </el-table-column>
            <el-table-column prop="shbj" label="审核状态" width="119">
              <template slot-scope="scope">
                <el-tag type="primary" v-if="scope.row.shbj == '审核中'">{{ scope.row.shbj }}</el-tag>
                <el-tag type="success" v-if="scope.row.shbj == '通过'">{{ scope.row.shbj }}</el-tag>
                <el-tag type="info" v-if="scope.row.shbj == '仅暂存'">{{ scope.row.shbj }}</el-tag>
              </template>
            </el-table-column>
            <el-table-column label="评审状态" prop="isend" width="119">
              <template slot-scope="scope">
                <el-tag type="warning" v-if="scope.row.isend == '未评定'">{{ scope.row.isend }}</el-tag>
                <el-tag type="success" v-if="scope.row.isend == '已评定'">{{ scope.row.isend }}</el-tag>
              </template>
            </el-table-column>

            <el-table-column fixed="right" label="操作">
              <template slot-scope="scope">
                <el-button type="text" size="small" @click="getDetail(scope.row.proguid)">详情</el-button>
                <el-button type="text" size="small" @click="getEdit(scope.row.proguid)">编辑</el-button>
                <!-- <el-button type="text" size="small" @click="showEditDialog(scope.row.proguid)">编辑</el-button> -->
                <el-button type="text" size="small" @click="removeProjectById(scope.row.proguid)">删除</el-button>
                <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small" v-if="scope.row.isend == '待审核'">查看结果</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <!-- 分页区域 -->
        <div class="page">
          <el-pagination background layout=" total,prev, pager, next" :total="this.listTotal" :page-size="this.pageSize" :current-page="this.currentPage" @current-change="handleCurrentChange"> </el-pagination>
        </div>
      </div>
    </div>

    <!--  编辑区域 -->
    <el-dialog title="项目信息编辑" :visible.sync="editDialogVisible" @close="editDialogClosed">
      <el-form :model="ruleForm" ref="editFormRef" >
        <!-- 活动名称 -->
        <div>
          <el-form-item label="项目名称" prop="name" label-width="150px">
            <el-input v-model="ruleForm.name" size="small"></el-input>
          </el-form-item>
        </div>

        <div>
           <el-form-item label="送审类别" prop="type" label-width="150px">
          <el-radio-group v-model="ruleForm.typename" @change="getType">
            <el-radio :label="item.typename" :value="item.type" v-for="item in type" :key="item.type"></el-radio>
          </el-radio-group>
        </el-form-item>
        </div>
        <el-row>
          <el-col :span="12">
            <div>
              <el-form-item label="送审金额" prop="money" label-width="150px"> <el-input-number v-model="ruleForm.amount" :min="0" size="small"> </el-input-number> <span>（万元）</span> </el-form-item>
            </div>
          </el-col>
          <el-col :span="12">
            <div>
              <el-form-item label="评审年度" prop="year" label-width="150px">
                <el-date-picker v-model="ruleForm.review_year" type="year" placeholder="选择年" size="small" value-format="yyyy"></el-date-picker>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div>
              <el-form-item label="所属区域" prop="area" label-width="150px">
                <el-cascader :options="this.cityList" v-model="ruleForm.cityname" ref='cascader' :props="{ value: 'citycode', label: 'cityname' }" clearable @change="getCityCode"></el-cascader>
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
                <el-input v-model="ruleForm.construct_dwname" size="small"> </el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="12">
            <div>
              <el-form-item label="建设单位地址" prop="constructionArea" label-width="150px">
                <el-input v-model="ruleForm.construct_address" size="small"> </el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div>
              <el-form-item label="项目联系人" prop="person" label-width="150px">
                <el-input v-model="ruleForm.pro_lxr" size="small"> </el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="12">
            <div>
              <el-form-item label="联系人手机号码" prop="personTel" label-width="150px">
                <el-input v-model="ruleForm.pro_tel" size="small"> </el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div>
              <el-form-item label="报价开始时间" prop="start" label-width="150px">
                <el-date-picker v-model="ruleForm.price_starttime" type="datetime" placeholder="选择日期时间" size="small" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="12">
            <div>
              <el-form-item label="报价结束时间" prop="end" label-width="150px">
                <el-date-picker v-model="ruleForm.price_endtime" type="datetime" placeholder="选择日期时间" size="small" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <div>
          <el-form-item label="报价需提交资料说明" prop="desc" class="textarea" label-width="150px">
            <el-input type="textarea" v-model="ruleForm.reason" size="small"></el-input>
          </el-form-item>
        </div>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editProject">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import request from '../utlis/request'
import qs from 'qs'
export default {
  data() {
    return {
      form: {
        btnval: '',
        name: '',
        typeval: '',
      },
      typeList: [
        { name: '概算', value: '01' },
        { name: '预算', value: '02' },
        { name: '标底', value: '03' },
        { name: '结算', value: '04' },
        { name: '决算', value: '05' },
        { name: '变更', value: '06' },
        { name: '其他', value: '07' },
      ],

        type: [
        { type: '01', typename: '概算' },
        { type: '02', typename: '预算' },
        { type: '03', typename: '标底' },
        { type: '04', typename: '结算' },
        { type: '05', typename: '决算' },
        { type: '06', typename: '变更' },
        { type: '07', typename: '其他' },
      ],
      //列表数据
      tableData: [],
      //分页总条数
      listTotal: 0,
      //每页显示数据
      pageSize: 20,
      //显示当前页
      currentPage: 1,
      //项目详情
      projectDetail: [],
      //城市列表
      cityList: [],

      //审核单位
      Auditlist: {},

      editDialogVisible: false,
      ruleForm: {},
      // rules: {
      //   name: [{ required: true, message: '请输入项目名称', trigger: 'blur' }],
      //   desc: [{ required: true, message: '请输入报价资料说明', trigger: 'blur' }],
      //   type: [{ required: true, message: '请选择送审类别', trigger: 'change' }],
      //   // year: [{ type: 'date', required: true, message: '请选择年份', trigger: 'change' }],
      //   area: [{ required: true, message: '请选择活动区域', trigger: 'change' }],
      //   construction: [{ required: true, message: '请输入建设单位', trigger: 'blur' }],
      //   constructionArea: [{ required: true, message: '请输入建设单位地址', trigger: 'blur' }],
      //   person: [{ required: true, message: '请输入项目联系人', trigger: 'blur' }],
      //   personTel: [
      //     { required: true, message: '请输入联系人手机号码', trigger: 'blur' },
      //     { pattern: /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/, message: '请输入合法手机号/电话号', trigger: 'blur' },
      //   ],
      // },
    }
  },
  methods: {
    //页数变化
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage
      this.getList()
    },

    //获取列表
    async getList() {
      const res = await request.get('/demandresponse/demander/demand/list.json', {
        params: {
          pageindex: this.currentPage,
          sortname: 'addtime',
          sortorder: 'desc',
          pagesize: 20,
          business: 'financial-review',
        },
      })
      res.data.rows.map(function (val) {
        if (val.shbj == 0) {
          val.shbj = '仅暂存'
        } else if (val.shbj == 1) {
          val.shbj = '待审核'
        } else if (val.shbj == 2) {
          val.shbj = '退回'
        } else if (val.shbj == 3) {
          val.shbj = '审核中'
        } else if (val.shbj == 9) {
          val.shbj = '通过'
        }
      })
      res.data.rows.map(function (val) {
        if (val.isend == 1) {
          val.isend = '已评定'
        } else if (val.isend == 0) {
          val.isend = '未评定'
        }
      })

      console.log(res)
      this.tableData = res.data.rows
      this.listTotal = res.data.total
    },
    async removeProjectById(proguid) {
      try {
        //弹框询问是否删除
        const confirmResult = await this.$confirm('删除后无法撤销，确认删除操作？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        }).catch((err) => {
          return err
        })
        //用户确认删除，则返回值为字符串confirm
        //用户取消删除，则返回值为字符串cancel
        // console.log(confirmResult);
        if (confirmResult === 'cancel') {
          return this.$message.info('取消删除')
        }
        let params = { proguid }
        const res = await request.post('/demandresponse/demander/demand/del.json', qs.stringify(params))
        if (res.data.code == 'v') {
          this.getList()
          return this.$message.success('删除成功！')
        } else {
          this.$message.error('删除失败！')
        }
      } catch (error) {
        console.log(error, '系统错误')
      }
    },
    //详情
    async getDetail(proguid) {
      try {
        this.$router.push({ path: `/projectdetail/${proguid}` })
      } catch (error) {
        console.log(error, '系统接口异常，请稍后重试')
      }
    },

       //编辑
    async getEdit(proguid) {
      try {
        this.$router.push({ path: `/projectedit/${proguid}` })
      } catch (error) {
        console.log(error, '系统接口异常，请稍后重试')
      }
    },
    //查询
    async select() {
      try {
        const res = await request.get('/demandresponse/demander/demand/list.json', {
          params: {
            title: this.form.name,
            business: 'financial-review',
            pageindex: this.currentPage,
            sortname: 'addtime',
            sortorder: 'desc',
            pagesize: 20,
            isend: this.form.btnval,
            type: this.form.typeval,
            startime: '',
            endtime: '',
          },
        })
        res.data.rows.map(function (val) {
          if (val.shbj == 0) {
            val.shbj = '仅暂存'
          } else if (val.shbj == 1) {
            val.shbj = '待审核'
          } else if (val.shbj == 2) {
            val.shbj = '退回'
          } else if (val.shbj == 3) {
            val.shbj = '审核中'
          } else if (val.shbj == 9) {
            val.shbj = '通过'
          }
        })

        res.data.rows.map(function (val) {
          if (val.isend == 1) {
            val.isend = '已评定'
          } else if (val.isend == 0) {
            val.isend = '未评定'
          }
        })
        console.log(res)
        this.tableData = res.data.rows
        this.listTotal = res.data.rows.total
      } catch (error) {
        console.log(error, '系统接口异常，请稍后重试')
      }
    },

    //去添加页面
    goAdd() {
      this.$router.push('/projectadd')
    },

    //获取编辑内容
    async showEditDialog(proguid) {
      const res = await request.get('/demandresponse/demander/demand/detail.json', {
        params: {
          proguid,
        },
      })
      this.ruleForm = res.data.tdata
      this.editDialogVisible = true
    },
     //过滤送审类别
     async getType(val) {
      let a = this.type.filter(function (item) {
        return item.typename == val
      })
      this.ruleForm.type = a.type
      console.log(a);
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
        const res = await request.get('/demandresponse/demander/demand/getshdw.json', {
          params: {
            citycode: this.ruleForm.cityname[1],
          },
        }) 
        this.Auditlist = res.data.tdata
        console.log(this.Auditlist);
        
      } catch (error) {
        console.log(error, '系统接口错误!!!')
      }
    },
    //编辑
    editProject() {
      this.$refs.editFormRef.validate(async (valid) => {
        let params = this.ruleForm
        if (!valid) return
        //编辑项目信息请求
        const res = await request.post('/demandresponse/demander/demand/edit.json', qs.stringify(params))
        console.log(res)
        if (res.data.code != 'v') {
          return this.$message.error('修改失败！')
        }
        this.$message.success('修改成功！')
        // 隐藏对话框
        this.editDialogVisible = false
        //重新获取用表数据
        this.getList()
      })
    },
    editDialogClosed() {
      //对话框关闭后自动重置
      this.$refs.editFormRef.resetFields()
    },
  },
  created() {
    this.getList()
    this.getCityList()
    this.getCityCode()
  },
}
</script>

<style lang="less" scoped>
#view-content {
  // position: absolute;
  // left: 200px;
  // top: 50px;
  // right: 0;
  // bottom: 0;
  // padding: 10px;
  // overflow: auto;
}
.my-search {
  display: flex;
  .el-select {
    width: 144px;
    margin: 10px;
  }
  .el-input {
    width: 199px;
    margin: 10px 10px 10px 0;
  }
}
.page {
  .el-pagination {
    float: right;
  }
}
.bs {
  display: inline;
}
</style>
