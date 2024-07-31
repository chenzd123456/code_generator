<template>
  <div>
    <el-container class="fullscreen">
      <el-main>
        <el-row :gutter="20" style="height: 100%">
          <el-col :span="8">
            <el-text>Meta</el-text>
            <CodeEditor language="yaml" v-model="meta" />
          </el-col>
          <el-col :span="8">
            <el-text>Template</el-text>
            <CodeEditor language="twig" v-model="template" />
          </el-col>
          <el-col :span="8">
            <el-text>Output</el-text>
            <CodeEditor language="javascript" :readOnly="true" v-model="code" />
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

import CodeEditor from '@/components/CodeEditor.vue'

import { generate } from './utils'

const meta = ref('')
const template = ref('')

const code = computed(() => {
  try {
    console.log(meta.value)
    console.log(template.value)
    return generate(meta.value, template.value)
  } catch (err) {
    console.log(err)
    return ''
  }
})
</script>

<style scoped></style>
