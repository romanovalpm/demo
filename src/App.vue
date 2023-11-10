<script setup lang="ts">
import {RouterLink, RouterView, useRouter} from 'vue-router';

const router = useRouter();
</script>

<template>
    <header>
        <div class="header__wrapper">
            <nav class="card">
                <RouterLink
                    v-for="(link, index) in router.options.routes"
                    :key="index"
                    class="button"
                    :to="link.path"
                >{{ link.name }}</RouterLink>
            </nav>
        </div>
    </header>

    <main>
        <div class="main__wrapper">
            <div class="main__content card">
                <RouterView />
            </div>
            <div class="main__profile">
                <div class="profile__info card">
                    <div class="profile__image card"></div>
                    <div class="header">
                        Надежда Романова
                    </div>
                    <div class="subheader">
                        Веб-разработчик
                    </div>
                    <div>
                        Санкт-Петербург, Россия
                    </div>
                </div>
                <div class="profile__contacts card">
                    <a class="telegram" href="https://telegram.me/romanovalpm" target="_blank"></a>
                    <a class="github" href="https://github.com/romanovalpm" target="_blank"></a>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
nav {
    min-height: 70px;
    display: flex;
    gap: var(--base-gap);
    align-items: center;
    justify-content: flex-end;
    margin-top: var(--base-margin);
}

.main__wrapper {
    display: flex;
    justify-content: space-between;
    gap: var(--base-gap);
}

.main__content {
    flex-grow: 1;
}

.main__profile {
    min-width: 360px;
}

.profile__image {
    background-image: url("../public/profile-image.jpg");
    background-size: cover;
    background-position: center;
    height: 400px;
    width: 100%;
}

.profile__contacts {
    display: flex;
    gap: var(--base-gap);
}

.telegram, .github {
    width: 50px;
    height: 50px;
    border-radius: var(--base-border-radius);
    background-size: cover;
    background-position: center;
}

.telegram {
    background-image: url("../public/telegram.png");
}

.github {
    background-color: #cccccc;
    background-image: url("../public/github.png");
}
</style>
