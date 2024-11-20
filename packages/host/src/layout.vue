<template>
    <el-container class="container">
      <el-aside class="aside">
        <div class="head">
          <div>
            <h2>Heal Pros</h2>
          </div>
        </div>

        <el-menu>
          <el-menu-item-group>
            <el-menu-item index="/">
                <router-link to="/">Home</router-link>
            </el-menu-item>
            <el-menu-item index="/order">
                <router-link to="/order">Order</router-link>
            </el-menu-item>
            <el-menu-item index="/administration">
                <router-link to="/administration">Administration</router-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-menu>
      </el-aside>
      <main>
        <slot></slot>
      </main>
    </el-container>
</template>

<style scoped>
    main {
        width: 100%;
    }
</style>
