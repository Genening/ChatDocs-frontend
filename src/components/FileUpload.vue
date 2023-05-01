<template>
    <input type="file" ref="fileInput" display="none" @change="uploadFile"/>
</template>
  
  <script lang="ts" setup>
  import axios from 'axios';
  import { ref } from 'vue';
  
  const fileInput = ref<HTMLInputElement | null>(null);
  
  const uploadFile = async () => {
    if (!fileInput.value?.files?.length) return;
  
    const file = fileInput.value.files[0];
    const formData = new FormData();
    formData.append('file', file, encodeURIComponent(file.name));
  
    try {
      const response = await axios.post<string>('http://localhost:3000/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

// 选择文件
const chooseFile = () => {
  if (fileInput.value) {
    fileInput.value.click();
  }
};

defineExpose({
  chooseFile,
});
</script>
  