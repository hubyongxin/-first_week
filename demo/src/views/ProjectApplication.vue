<template>
  <div>
    <el-button @click="goAdd">添加</el-button>
    <el-table :data="tableData" border style="width: 100%; max-height: 90%vh">
      <el-table-column prop="name" label="项目信息" sortable width="180">
      </el-table-column>
      <el-table-column
        prop="amount"
        label="送审金额（万元）"
        sortable
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="typename"
        label="送审类别"
        sortable
        width="180"
      ></el-table-column>
      <el-table-column
        prop="construct_dwname"
        label="建设单位"
        sortable
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="pro_lxr"
        label="联系人信息"
        width="180"
      ></el-table-column>
      <el-table-column
        prop="price_starttime"
        label="报价时间范围"
        width="180"
      ></el-table-column>
      <el-table-column prop="shbj" label="审核状态" width="180">
      </el-table-column>
      <el-table-column prop="isend" label="评审状态"></el-table-column>

      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >查看</el-button
          >
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5, 10, 20, 40]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableData.length"
    >
    </el-pagination>
  </div>
</template>

<script>
import request from "../utlis/request";
export default {
  data() {
    return {
      tableData: [],
      all: "",
      currentPage: 1,
      pagesize: 10,
    };
  },
  created() {
    this.getList();
  },
  computed() {},
  methods: {
    //获取列表
    async getList() {
      const res = await request.get(
        "/demandresponse/demander/demand/list.json",
        {
          params: {
            pageindex: 1,
            //    sortname: addtime,
            //    sortorder: desc,
            pagesize: 10,
            //    business: financial-review
          },
        }
      );
      console.log(res);
      this.tableData = res.data.rows;
    },
    //添加事件
    goAdd() {
      this.$router.push("/projectadd");
    },
    // 初始页currentPage、初始每页数据数pagesize和数据data
    handleSizeChange: function (size) {
      this.pagesize = size;
      console.log(this.pagesize); //每页下拉显示数据
    },
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage;
      console.log(this.currentPage); //点击第几页
    },
  },
};
</script>

<style lang="less" scoped>
</style>