<template>
  <div class="highgag">
    <table border="1" width="750px" align="center">
      <thead>
        <th width="50">번호</th>
        <th width="500">제목</th>
        <th width="100">작성자</th>
        <th width="100">작성일</th>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td><a href="#">테스트 제목</a></td>
          <td>이주현</td>
          <td>2017-03-17 21:22</td>
        </tr>
        <tr>
          <td>1</td>
          <td><a href="#">테스트 제목</a></td>
          <td>이주현</td>
          <td>2017-03-17 21:22</td>
        </tr>
        <tr>
          <td>1</td>
          <td><a href="#">테스트 제목</a></td>
          <td>이주현</td>
          <td>2017-03-17 21:22</td>
        </tr>
        <tr>
          <td>1</td>
          <td><a href="#">테스트 제목</a></td>
          <td>이주현</td>
          <td>2017-03-17 21:22</td>
        </tr>
        <tr>
          <td>1</td>
          <td><a href="#">테스트 제목</a></td>
          <td>이주현</td>
          <td>2017-03-17 21:22</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'highgag',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted: function () {
    console.log('Hello from parent')
  }
}
</script>
