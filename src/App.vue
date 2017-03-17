<template>
<div id="app">
  <br>
  <br>
  <table border="1" align="center" width="1000px" height="60px" valign="middle">
    <tr align="center">
      <td width="200"><img src="/static/welcome.gif" width="200" height="93"></td>
      <td width="200"><router-link :to="'highgag'">하이개그</router-link></td>
      <td width="200"><router-link :to="'humor'">고급유머</router-link></td>
      <td width="200"><router-link :to="'nodap'">부장님배꼽</router-link></td>
      <td width="200"><router-link :to="'guest'">방명록</router-link></td>
    </tr>
    <tr>
      <td valign="top" style="background-color: skyblue">
        <!-- 로그인 영역 -->
        <table>
          <tr>
            <td>
              <input type="text"><br>
              <input type="password">
            </td>
          </tr>
          <tr>
            <td>
              <input type="button" value="로그인">
              <input type="button" value="회원가입">
            </td>
          </tr>
        </table>
        
      </td>
      <td colspan="4" style="padding:15px">
        <router-view></router-view>
      </td>
    </tr>
  </table>
</div>
</template>
<script>
export default {
  name: 'app'
}
</script>
<style>
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
