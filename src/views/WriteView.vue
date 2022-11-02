
<template>
    <div>
        <el-form label-width="100px" style="max-width: 460px">
            <el-form-item label="Title">
                <el-input type="text" v-model="title"></el-input>
            </el-form-item>
            <el-form-item label="Content">
                <el-input type="textarea" rows="10" v-model="content"></el-input>
            </el-form-item>
        </el-form> 
    </div>

    <br>
    <el-button @click="goBack">Back</el-button>
    <el-button @click="writeArticle">저장</el-button>
</template>

<script>
import apiBoard from "@/api/board";


export default {
    data(){
        return {
            title: "",
            content: "",
        }
    },

    methods: {
        goBack(){
            this.$router.go(-1);
        },

        writeArticle(){
            if(!this.title || !this.content){
                this.$message.error("제목과 본문을 작성해주세요")
                return;
            }
        
        apiBoard
            .postArticle(0, this.title, this.content)
            .then((response)=>{
                console.log(response);
                this.$router.push({path: "/"});
            })
            .catch((e)=>{
                console.log(e);
                this.$message.error("게시물 작성 중 에러가 발생했습니다.");
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
