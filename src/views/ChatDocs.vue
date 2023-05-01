<template>
    <div class="w-[100vw] h-[100%] flex flex-row">
        <div class="w-[20%] h-auto bg-gray bg-opacity-25 p-[16px] flex flex-col gap-[20px]">
            <div class="flex flex-row  h-[48px]  bg-blue bg-opacity-50 cursor-pointer justify-between items-center px-[16px] rounded-[4px]">
                <span class="text-size-[16px]">读取新文档</span>
                <iconpark-icon class="text-size-[24px]" name="add-four" />
            </div>
            <div class="flex flex-col gap-[10px]">
                <HistoryDoc 
                    v-for="(doc, index) in docs" 
                    :key="index" 
                    :doc="doc"
                    @click="switchActiveDoc(index)"
                />
            </div>
        </div>
        <div class="w-[80%] h-auto bg-white bg-opacity-50 flex justify-center">
            <ChatWindow :active-doc="activeDoc" />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import HistoryDoc from '../components/HistoryDoc.vue';
import ChatWindow from '../components/ChatWindow.vue';

type File = {
    name: string;
    url: string;
    type: string;
    size: string;
}

interface Doc {
    name: string;
    content: File [];
};

const docs = ref<Doc []>([
    {
        name: '文档1',
        content: [
            {
                name: '文件1',
                url: 'https://www.baidu.com',
                type: 'pdf',
                size: '1.2MB',
            },
            {
                name: '文件2',
                url: 'https://www.baidu.com',
                type: 'pdf',
                size: '1.2MB',
            },
            {
                name: '文件3',
                url: 'https://www.baidu.com',
                type: 'pdf',
                size: '1.2MB',
            },
        ]
    },
    {
        name: '文档2',
        content: [
            {
                name: '文件1',
                url: 'https://www.baidu.com',
                type: 'pdf',
                size: '1.2MB',
            },
            {
                name: '文件2',
                url: 'https://www.baidu.com',
                type: 'pdf',
                size: '1.2MB',
            },
            {
                name: '文件3',
                url: 'https://www.baidu.com',
                type: 'pdf',
                size: '1.2MB',
            },
        ]
    },
]);

const activeIndex = ref(0);
const activeDoc = ref(docs.value[activeIndex.value]);
function switchActiveDoc(index: number) {
    activeIndex.value = index;
    activeDoc.value = docs.value[activeIndex.value];
}

</script>