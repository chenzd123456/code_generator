<template>
  <div ref="editor_ref" class="max-height editor"></div>
</template>

<script setup>
import { onMounted, onUpdated, ref } from 'vue'
import * as monaco from 'monaco-editor'

const editor_ref = ref()

const props = defineProps({
  language: {},
  readOnly: {
    default: false
  }
})

const model = defineModel()

let editor = {}

onMounted(() => {
  initEditor()
})

onUpdated(() => {
  if (editor.getValue() !== model.value) {
    editor.setValue(model.value)
  }
})

const initEditor = () => {
  editor = monaco.editor.create(editor_ref.value, {
    value: model.value,
    language: props.language,
    minimap: {
      enabled: false,
      maxColumn: 300 // 设置缩略图的最大宽度，如果需要更小，你可以降低这个数字。
    },
    readOnly: props.readOnly
    // automaticLayout: true
  })

  editor.onDidChangeModelContent(() => {
    model.value = editor.getValue()
  })
}
</script>

<style scoped>
.editor {
  border: 1px solid black;
}
</style>
