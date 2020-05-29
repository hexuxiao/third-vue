<template>
  <li @mouseenter="hide(true)" @mouseleave="hide(false)" :class='myclass'>
    <label>
      <input type="checkbox" v-model="ischeak"/>
      <span>{{todo.content}}</span>
    </label>
    <button class="btn btn-danger" v-show="isshow" @click='deleteOne'>删除</button>
  </li>
</template>

<script type="text/ecmascript-6">
export default {
    props:{
        todo:Object,
        deleteTodo:Function,
        index:Number,
        updataOne:Function
    },
    computed: {
        ischeak:{
            get(){
                return this.todo.isOver
            },
            set(val){
                this.updataOne(this.index,val)
            }
        }
    },
    data(){
        return {
            isshow:false,
            myclass:'leave',
        }
    },
    methods: {
        hide(flag){
            if(flag){
                this.isshow = true;
                this.myclass='enter'
            }else{
                this.isshow = false
                this.myclass='leave'
            }
        },
        deleteOne(index){
            this.deleteTodo(this.index)
        }
    },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  /* float: left; */
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  /* display: none; */
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
.enter{
    background-color: #aaa;
}
.leave{
    background-color: #fff;
}
</style>
