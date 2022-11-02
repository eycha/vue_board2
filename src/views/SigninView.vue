<template>
  <div>
    <el-form label-width="100px" style="max-width: 460px">
      <el-form-item label="email">
        <el-input type="text" v-model="loginForm.email"></el-input>
      </el-form-item>    
      <el-form-item label="password">
        <el-input type="text" v-model="loginForm.password"></el-input>
      </el-form-item>
      <br>
      <el-button type="success" @click="goBack">Back</el-button>
      <el-button type="success" @click="logIn">Login</el-button>
      <el-button type="success" @click="signUp">SignUp</el-button>    
    </el-form>
  </div>
</template>

<script>
import apiBoard from "@/api/board";


export default {
    data(){
        return {
          loginForm:{
            email: "",
            password: "",
          }
        }
    },

    methods: {
        goBack(){
            this.$router.go(-1);
        },

        logIn(){
            if(!this.loginForm.email || !this.loginForm.password){
                this.$message.error("계정과 패스워드를 입력해주세요")
                return;
            }
        
        apiBoard
            .insignIn(this.loginForm.email, this.loginForm.password)
            .then((response)=>{
              if(response.data.resultCode !== 0){
                this.$message.error(response.data.errorMsg);
                return;
              }
                console.log(response);
                this.$router.push({path: "/auth/login"});
                this.$router.push({path: "/Home"});
            })
            .catch((e)=>{
                console.log(e);
                this.$message.error("로그인 중 에러가 발생했습니다.");
            })
        },

        signUp(){
          this.$router.push({path: "/auth/signup"})
        }

        }
    
}
</script>



<style scoped>
.left-button {
    float: left;
    padding: 30px 0;
}
.right-button {
    float: right;
    padding: 3px 0;
}
</style>
