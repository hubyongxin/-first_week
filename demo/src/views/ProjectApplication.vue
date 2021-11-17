<template>
  <div id="view-content">
    <div>
      <!-- 搜索框区域 -->
      <div class="my-search">
        <el-form>
          <el-radio-group v-model="form.labelPosition" size="small">
            <el-radio-button label="left">全部</el-radio-button>
            <el-radio-button label="right">未截止报名</el-radio-button>
            <el-radio-button label="top">已截止报名</el-radio-button>
          </el-radio-group>
          <el-select v-model="form.region" placeholder="类别" size="small">
            <el-option
              :label="item.name"
              :value="item.value"
              v-for="item in typeList"
              :key="item.id"
            ></el-option>
          </el-select>
          <el-input
            v-model="form.name"
            placeholder="项目名称"
            size="small"
          ></el-input>
          <span>
            <el-button type="primary" icon="el-icon-search" size="small"
              >查询</el-button
            >
            <el-button type="primary" size="small" @click="goAdd"
              ><i class="el-icon-upload el-icon--left"></i>添加</el-button
            >
          </span>
        </el-form>
      </div>
      <!-- 信息列表区域 -->
      <div class="list">
        <el-table :data="tableData" style="width: 100%" height="780">
          <el-table-column fixed prop="name" label="项目信息" width="204">
          </el-table-column>
          <el-table-column prop="amount" label="送审金额（万元）" width="135">
          </el-table-column>
          <el-table-column prop="typename" label="送审类别" width="162">
          </el-table-column>
          <el-table-column prop="construct_dwname" label="建设单位" width="162">
          </el-table-column>
          <el-table-column prop="pro_lxr" label="联系人信息" width="162">
          </el-table-column>
          <el-table-column
            prop="price_starttime"
            label="报价时间范围"
            width="244"
          >
          </el-table-column>
          <el-table-column prop="shbj" label="审核状态" width="119">
          </el-table-column>
          <el-table-column prop="isend" label="评审状态" width="119">
          </el-table-column>
          <el-table-column fixed="right" label="操作">
            <template slot-scope="scope">
              <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">详情</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!-- 分页区域 -->
      <div class="page">
        <el-pagination background layout=" total,prev, pager, next" :total="this.listTotal" :page-size='this.pageSize' :current-page="this.currentPage"
          @current-change="handleCurrentChange">
  </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import request from "../utlis/request";
export default {
  data() {
    return {
      form: {
        labelPosition: "right",
        region: "",
        name: "",
      },
      typeList: [
        { id: "1", name: "概算", value: "概算" },
        { id: "2", name: "预算", value: "预算" },
        { id: "3", name: "标底", value: "标底" },
        { id: "4", name: "结算", value: "结算" },
        { id: "5", name: "变更", value: "变更" },
        { id: "6", name: "其他", value: "其他" },
      ],
      //列表数据
      tableData: [],
      //分页总条数
      listTotal:0,
      //每页显示数据
      pageSize:20,
      //显示当前页
      currentPage:1

    };
  },
  methods: {
    //页数变化
    handleCurrentChange(currentPage){
        this.currentPage = currentPage
        this.getList()
    },

    //获取列表
    async getList() {
      const res = await request.get(
        "/demandresponse/demander/demand/list.json",
        {
          params: {
            pageindex: this.currentPage,
            // sortname: addtime,
            // sortorder: desc,
            pagesize: 20,
            // business: financial-review
          },
        }
      );
      		res.data.rows.map(function (val) {
              if (val.isend == 0) {
                val.isend = '未审核'
              } 
               else {
                val.isend = '已评定'
              }
            })

      // console.log(res);
      this.tableData = res.data.rows;
      this.listTotal = res.data.total
    },

    
    //添加页面
    goAdd() {
      this.$router.push("/projectadd");
    },


  },
  created() {
   
    this.getList();

    
  },
};
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
.page{
 .el-pagination{
   float:right
 }
}
</style>