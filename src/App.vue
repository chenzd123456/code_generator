<template>
  <div>
    <el-container class="fullscreen">
      <el-main>
        <el-row>
          <el-col>
            <el-button @click="handleClick">gen</el-button>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="height: 100%">
          <el-col :span="8"><CodeEditor language="yaml" v-model="meta" /></el-col>
          <el-col :span="8"><CodeEditor language="twig" v-model="template" /></el-col>
          <el-col :span="8">
            <CodeEditor language="javascript" :readOnly="true" v-model="code" />
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import nunjucks from 'nunjucks'
import yaml from 'js-yaml'
import CodeEditor from '@/components/CodeEditor.vue'
// const input = reactive({ meta: '', template: '' })
const meta = ref('')
const template = ref('')
const code = ref('')
// const code = computed(() => {
//   console.log(yaml.load(meta.value))
//   console.log(template.value)
//   const text = nunjucks.renderString(template.value, yaml.load(meta.value))
//   console.log(text)
//   return text
// })
const handleClick = () => {
  const meta_data = yaml.load(meta.value)
  console.log(JSON.stringify(meta_data))
  console.log(template.value)
  const text = nunjucks.renderString(template.value, meta_data)
  console.log(text)
  code.value = text
}
</script>

<style scoped></style>
