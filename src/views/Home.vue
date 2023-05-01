<template>
<div class="w-[100vw] h-[100%] flex flex-col gap-[20px] items-center dark:bg-black dark:bg-opacity-50 dark:text-white">
    <div class="w-[60%] h-[150px] flex justify-center items-center gap-[10px]">
        <span class="text-size-[32px] font-bold">Chat with any DOCs</span>
        <button class="w-[40px] h-40px bg-transparent border-none cursor-pointer" @click="toggleDark()">
            <iconpark-icon v-show="!isDark" class="text-black text-size-[24px]" name="sun-one" />
            <iconpark-icon v-show="isDark" class="text-white text-size-[20px]" name="moon" />
        </button>
    </div>
    <div class="w-[60%] h-[150px] bg-white dark:bg-blue dark:bg-opacity-50 rounded-[8px] p-[8px] flex flex-col gap-[10px] cursor-pointer">
        <div 
            class="h-[120px] flex flex-col gap-[10px] items-center justify-center bg-blue dark:bg-white dark:bg-opacity-25 bg-opacity-10 rounded-[8px]"
            @click="uploadFileInput.chooseFile()"
        >
            <iconpark-icon class="text-size-[32px]" name="box"></iconpark-icon>
            <span class="text-size-[24px] font-bold">Drop DOC here</span>
            <FileUpload ref="uploadFileInput" />
        </div>
        <div class="flex flex-row justify-between">
            <span 
                class="text-gray text-size-[14px] dark:text-white"
                @click="uploadFileInput.chooseFile()"
            >浏览本地文档</span>
            <span class="text-gray text-size-[14px] dark:text-white">从url中导入文档</span>
        </div>
    </div>
    <div class="w-[60%] flex flex-col p-[8px] bg-white dark:bg-blue dark:bg-opacity-50 rounded-[8px]">
        <span class="text-size-[16px]">历史交流</span>
        <div class="flex flex-1 flex-row p-[8px]">
            <span class="text-gray dark:text-white text-size-[14px]">这里是空的~</span>
        </div>
    </div>
    <div class="w-[60%] h-[300px] flex flex-row justify-between p-[8px] rounded-[8px] bg-gray bg-opacity-25">
        <div class="w-[30%] bg-white dark:bg-blue dark:bg-opacity-50 rounded-[8px] p-[8px]">
            <span class="text-size-[16px] font-bold">For 学生党</span>
            <p class="text-size-[14px] text-gray dark:text-white">作为学生党，你肯定有过这样的经历：在写作业或者准备考试的时候，突然遇到了一个问题，但是你不知道该怎么办。本产品利用生成式AI的能力实现与文档对话能力，可以读取你上传的文档，并根据你的问题提供答案和解决方案，同时还可以帮助你更好地理解文本内容和学科知识。无论是完成作业还是准备考试，都可以帮助你节约时间，提高学习效率。</p>
        </div>
        <div class="w-[30%] bg-white dark:bg-blue dark:bg-opacity-50 rounded-[8px] p-[8px]">
            <span class="text-size-[16px] font-bold">For 上班族</span>
            <p class="text-size-[14px] text-gray dark:text-white">作为上班族，你可能会遇到各种问题，需要快速得到答案或解决方案。这个产品可以读取你上传的文档，并根据你的问题提供准确的答案和解决方案。无论你遇到的问题是关于工作、业务、行业知识等方面，这个产品都可以为你提供及时的帮助。此外，这个产品还可以帮助你更好地理解文本内容和行业知识。它可以根据你的需要提供详细的说明和解释，帮助你更好地掌握工作和行业知识，提高你的工作效率和职业竞争力。</p>
        </div>
        <div class="w-[30%] bg-white dark:bg-blue dark:bg-opacity-50 rounded-[8px] p-[8px]">
            <span class="text-size-[16px] font-bold">For 好奇宝宝</span>
            <p class="text-size-[14px] text-gray dark:text-white">作为一个好奇宝宝，你可能会有各种问题，想要快速得到答案。这个产品可以读取你上传的文档，并根据你的问题提供准确的答案和解决方案。无论你想了解什么主题，这个产品都可以为你提供及时的帮助。它可以根据你的需要提供详细的说明和解释，帮助你更好地掌握知识，满足你的好奇心。</p>
        </div>
    </div>
</div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useDark, useToggle } from '@vueuse/core';
import FileUpload from '../components/FileUpload.vue';

const isDark = useDark();
const toggleDark = useToggle(isDark);

const uploadFileInput = ref();
</script>
