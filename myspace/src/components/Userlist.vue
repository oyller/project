<template>
    <Content_Base>
        <div @click="check(u)" class="card" v-for="u in r" :key="u.id">
            <div class="card-body">
                <div class="row">
                    <div class="col-1 img-field">
                        <img class="img-fluid" :src="u.photo">
                    </div>
                    <div class="col-11">
                        <div class="username">name:{{ u.username }}</div>
                        <div class="follower-count">fans:{{ u.followerCount }}</div>
                    </div>
                </div>
            </div>
        </div>
    </Content_Base>
</template>
   
<script>
import Content_Base from '../utils/Content_Base.vue';
import { ref } from 'vue';
import $ from 'jquery';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
    name: 'Userlist_view',
    components: {
        Content_Base,
    },
    setup() {
        let r = ref([]);
        const store = useStore();
        const router = useRouter();
        $.ajax({
            url: "https://app165.acapp.acwing.com.cn/myspace/userlist/",
            type: "GET",
            success(resp) {
                r.value = resp;
            },
        });
        const check = (object) => {
            if (!store.state.user.is_login) {
                router.push({ path: '/login' });
                return;
            }
            router.push({ name: 'UserProfile_view', params: { userId: object.id } });
        };
        return {
            r,
            check,
        };
    }

}
</script>
  
<style scoped>
.img-fluid {
    border-radius: 50%;
}

.card {
    margin-bottom: 20px;
}

.card:hover {
    box-shadow: 2px 2px 10px lightgrey;
    cursor: pointer;
}

.username {
    font-weight: bold;
    height: 50%;
}

.follower-count {
    height: 50%;
    color: graay;
    font-size: 12px;
}

.img-fleld {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>
  