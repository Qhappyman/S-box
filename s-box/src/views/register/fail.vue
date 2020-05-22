<template>
    <div class="contain">
        <header>S-box, Welcome to use</header>
        <div class="jump">
            <div class="title">Activate failly</div>
            <div class="choose">
                <el-button type="primary" class="button" @click="previous">Return to the previous page</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        previous() {
            window.history.back();
        }
    }
}
</script>

<style lang="less" scoped>
.contain{
    width: 100%;
    header{
        width: 100%;
        height: 100px;
        text-align: center;
        font-size: 45px;
        line-height: 100px;
        border-bottom: 1px solid rgb(194, 185, 185);
        color: #409EFF;
    }
    .jump{
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
        width: 30%;
        height: 250px;
        margin: auto;
        margin-top: 70px;
        .title{
            height: 50px;
            font-size: 25px;
            text-align: center;
            line-height: 50px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, .12);
            background-color:#F5F5F5;
        }
        .choose{
            height: 250px;
            text-align: center;
            margin-top: 25px;
            .button{
                width: 80%;
                margin-top: 40px;
            }
        }
    }
}
</style>