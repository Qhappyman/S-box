<template>
    <div class="contain"
        v-bind:class="{ active: isActive}"
    >
        <div class="top">
            S-box使用条款和隐私协议
            <span><svg t="1588305156140" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3886" width="16" height="16"><path d="M559.786667 512l314.026666-314.026667c13.653333-13.653333 13.653333-34.133333 0-47.786666-13.653333-13.653333-34.133333-13.653333-47.786666 0L512 464.213333 197.973333 150.186667c-13.653333-13.653333-34.133333-13.653333-47.786666 0-13.653333 13.653333-13.653333 34.133333 0 47.786666l314.026666 314.026667-314.026666 314.026667c-13.653333 13.653333-13.653333 34.133333 0 47.786666 13.653333 13.653333 34.133333 13.653333 47.786666 0l314.026667-314.026666 314.026667 314.026666c13.653333 13.653333 34.133333 13.653333 47.786666 0 13.653333-13.653333 13.653333-34.133333 0-47.786666L559.786667 512z" p-id="3887"></path></svg></span>   <!--在欢迎界面有时，跳到欢迎界面-->
        </div>
        <div class="content">
            【审慎阅读】您在申请注册流程中点击同意前，应当认真阅读以下协议。请您务必审慎阅读、充分理解协议中相关条款内容，其中包括：<br>

1、与您约定免除或限制责任的条款；<br>

2、与您约定法律适用和管辖的条款；<br>

3、其他以粗体下划线标识的重要条款。<br>

如您对协议有任何疑问，可向平台客服咨询。<br>

【特别提示】当您按照注册页面提示填写信息、阅读并同意协议且完成全部注册程序后，即表示您已充分阅读、理解并接受协议的全部内容。如您因平台服务与淘宝发生争议的，适用《淘宝平台服务协议》处理。如您在使用平台服务过程中与其他用户发生争议的，依您与其他用户达成的协议处理。

阅读协议的过程中，如果您不同意相关协议或其中任何条款约定，您应立即停止注册程序。<br>

淘宝平台服务协议<br>

隐私权政策<br>

法律声明<br>

支付宝及客户端服务协议<br>

如您对协议有任何疑问，可向平台客服咨询。<br>
        </div>
        <div class="bottom">
            <div @click="argeeProtocol" class="argee">同意协议并继续</div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            isActive:false
        }
    },
    methods: {
        argeeProtocol(){
            this.isActive = true;
        }
    }
}
</script>

<style lang="less" scoped>
.contain{
    width: 650px;
    height: 450px;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    border: 5px solid rgba(0, 0, 0, .12);
    position: fixed;
    top: 10%;
    left: 28%;
    z-index: 1000;
    line-height: 35px;
    .top{
        height: 25px;
        border-bottom: 1px solid #F1F1F1;
        background-color: #F3F3F3;
        font-weight: 600;
        span{
            display: inline-block;
            float: right;
        }
    }
    .content{
        overflow: scroll;
        height: 350px;
        padding-top: 10px;
    }
    .bottom{
        height: 80px;
        div{
            height: 40px;
            width: 150px;
            text-align: center;
            background-color: #FF4001;
            line-height: 40px;
            margin: auto;
            margin-top: 10px;
            border-radius: 5px;
            color: white;
        }
        .argee:hover{
            cursor: pointer;
        }
    }
}
.contain.active{
    display: none;
}
</style>