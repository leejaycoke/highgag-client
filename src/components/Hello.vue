<script>
import Vue from 'vue'

Vue.component('test', {
  template: '#manage-template'
})
</script>

<template id="manage-template">
  <div>
    <h1>Manage Posts</h1>
    <div class="list-group">
      <a href="#" class="list-group-item clearfix">
        <span class="pull-right">
          <button class="btn btn-xs btn-info">
            <span class="glyphicon glyphicon-edit"></span>
          </button>
          <button class="btn btn-xs btn-warning">
            <span class="glyphicon glyphicon-trash"></span>
          </button>
        </span>
      </a>
    </div>
  </div>
</template>
