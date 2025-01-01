<template>
    <Content_Base>
        <div class="content">
            <div class="row">
                <div class="col-4">
                    <img class="p" :src="user.photo">
                </div>
                <div class="col-8">
                    <div class="p1">name:{{ user.username }}</div>
                    <div class="p2">fans:{{ user.followerCount }}</div>
                    <div class="p3">
                        <button type="button" @click="follow" v-if="!user.is_followed"
                            class="btn btn-secondary btn-sm">关注</button>
                        <button type="button" @click="unfollow" v-if="user.is_followed"
                            class="btn btn-secondary btn-sm">取消关注</button>
                    </div>
                </div>

            </div>
        </div>
    </Content_Base>
</template>
   
<script>
import Content_Base from './Content_Base.vue'
import $ from 'jquery'
import { useStore } from 'vuex';

export default {
    name: 'User_read',
    components: {
        Content_Base,
    },
    props: {
        user: {
            type: Object,
            required: true,
        }

    },
    setup(props, context) {
        const store = useStore();

        const follow = () => {
            $.ajax({
                url: "https://app165.acapp.acwing.com.cn/myspace/follow/",
                type: "POST",
                data: {
                    target_id: props.user.id,
                },
                headers: {
                    'Authorization': "Bearer " + store.state.user.access,
                },
                success(resp) {
                    if (resp.result === "success")
                        context.emit('follow');
                }
            })
        };
        const unfollow = () => {
            $.ajax({
                url: "https://app165.acapp.acwing.com.cn/myspace/follow/",
                type: "POST",
                data: {
                    target_id: props.user.id,
                },
                headers: {
                    'Authorization': "Bearer " + store.state.user.access,
                },
                success(resp) {
                    if (resp.result === "success")
                        context.emit('unfollow');
                }
            })
        }
        return {
            follow,
            unfollow,
        }

    }
}
</script>
  
<style scoped>
@media only screen and (max-width: 800px) {
    .p {
        display: none !important;
    }
}

img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
}

.col-8 {
    display: flex;
    box-sizing: border-box;
    justify-content: space-evenly;
    flex-direction: column;
}

.p1 {
    font-family: 'Microsoft YaHei';
    font-size: 15px;
    margin-bottom: 2px;
}

.p2 {
    font-family: Open Sans;
    font-size: 13px;
    margin-bottom: 4px;
}

.p3 {
    font-family: Helvetica Neue;

}
</style>