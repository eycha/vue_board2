<template>
  <div>
    <el-form label-width="100px" style="max-width: 460px">
      <el-form-item label="city">
        <el-input type="text" v-model="signupForm.city"></el-input>
      </el-form-item>
      <el-form-item label="email">
        <el-input type="text" v-model="signupForm.email"></el-input>
      </el-form-item>
      <el-form-item label="name">
        <el-input type="text" v-model="signupForm.name"></el-input>
      </el-form-item>
      <el-form-item label="password(8~10)">
        <el-input type="text" v-model="signupForm.password"></el-input>
      </el-form-item>
      <el-form-item label="street">
        <el-input type="text" v-model="signupForm.street"></el-input>
      </el-form-item>
      <el-form-item label="zipcode">
        <el-input type="text" v-model="signupForm.zipcode"></el-input>
      </el-form-item>
    </el-form>
    <br>
      <el-button type="success" @click="goBack">Back</el-button>
      <el-button type="success" @click="addAcount">Add</el-button>
  </div>
</template>

<script>
import apiBoard from "@/api/board";


export default {
    data(){
        return {
          signupForm:{
            city: "",
            email: "",
            name: "",
            password: "",
            street: "",
            zipcode: "",
          }
        }
    },

    mothod: {
        goBack(){
            this.$router.go(-1);
        },

        addAcount(){
            if(!this.signupForm.city || !this.signupForm.email || !this.signupForm.name || !this.signupForm.password || !this.signupForm.street || !this.signupForm.zipcode){
                this.$message.error("내용을 작성해 주세요")
                return;
            }
        
        apiBoard
            .addSignup(this.signupForm.city, this.signupForm.email, this.signupForm.name, this.signupForm.password, this.signupForm.street, this.signupForm.zipcode)
            .then((response)=>{
                console.log(response);
                this.$router.push({path: "/auth/signup"});
                this.$router.push({path: "/auth/login"});
            })
            .catch((e)=>{
                console.log(e);
                this.$message.error("회원가입 중 에러가 발생했습니다.");
            })
        },

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
