<template>
    <div class="card">
        <div class="card-body">
            <div class="col-3">
                <form @submit.prevent="login">
                    <div class="mb-3">
                        <label for="username" class="form-label">用户名:</label>
                        <input v-model="username" type="text" class="form-control" id="username">
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">密码:</label>
                        <input v-model="password" type="password" class="form-control" id="password">
                    </div>
                    <button type="submit" class="btn btn-primary">登录</button>
                </form>
            </div>
        </div>
    </div>
</template>
   
<script>

import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';


export default {
    name: 'Login_view',
    components: {

    },
    setup() {
        const store = useStore();
        const router = useRouter();
        let username = ref('');
        let password = ref('');

        const login = () => {
            store.dispatch("login", {
                username: username.value,
                password: password.value,
                success() {
                    router.push({ name: 'UserProfile_view', params: { userId: store.state.user.id } });
                },
                error() {

                }
            })
        };

        return {
            username,
            password,
            login,

        }
    }
}
</script>
  
<style scoped>
.card-body {
    display: flex;
    flex-direction: column;
    align-items: center;
}

button {
    width: 100%;
}

.card {
    margin-top: 30px;
    margin-left: 100px;
    margin-right: 100px;
}
</style>
  