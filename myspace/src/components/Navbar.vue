<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid  fa">
            <router-link class="navbar-brand" :to="{ path: '/' }">MySpace</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" :to="{ path: '/' }">首页</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ path: '/userlist' }">好友列表</router-link>
                    </li>
                </ul>
            </div>
            <div class="collapse navbar-collapse right_move" id="navbarNav" v-if="!store.state.user.is_login">
                <ul class="navbar-nav w">
                    <li class="nav-item le">
                        <router-link class="nav-link" :to="{ path: '/login' }">登录</router-link>
                    </li>
                    <li class="nav-item ri">
                        <router-link class="nav-link" :to="{ path: '/register' }">注册</router-link>
                    </li>
                </ul>
            </div>
            <div class="collapse navbar-collapse right_move" id="navbarNav" v-else>
                <ul class="navbar-nav w">
                    <li class="nav-item le">
                        <router-link class="nav-link"
                            :to="{ name: 'UserProfile_view', params: { userId: $store.state.user.id } }">{{
                                store.state.user.username }}</router-link>
                    </li>
                    <li class="nav-item ri">
                        <a class="nav-link" style="cursor: pointer" @click="logout">退出</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
   
<script>
import { useStore } from 'vuex';

export default {
    name: 'Navbar_view',
    setup() {
        const store = useStore();
        const logout = () => {
            store.commit('logout');
        }

        return {
            store,
            logout,
        }

    }
}
</script>
  
<style scoped>
.right_move {
    flex: 0.07;
    justify-content: space-around;
}
</style>
  




