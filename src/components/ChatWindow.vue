<template>
    <div class="w-[80%] h-auto">
        <div class="h-[5%] flex items-center">
            <span class="text-size-[16px]"> {{ props.activeDoc.name }} </span>
        </div>
        <div class="h-[85%] bg-gray dark:bg-white dark:bg-opacity-15 bg-opacity-5 rounded-[4px] px-[8px] flex flex-col gap-[10px]">
            <div class="flex flex-row gap-[5px]">
                <iconpark-icon class="w-[32px] h-[32px] rounded-full p-[8px] bg-white dark:bg-blue dark:bg-opacity-75 text-black dark:text-white text-size-[24px]" name="robot" />
                <div class="bg-blue dark:bg-white dark:bg-opacity-50 bg-opacity-25 rounded-r-[8px] rounded-lb-[8px] px-[16px] py-[4px] flex items-center">
                    <span class="text-size-[16px] text-gray dark:text-white"> {{ props.activeDoc.name }} </span>
                </div>
            </div>
            <div
                v-show="msgList.length > 0" 
                v-for="(msg,index) in msgList"
                :key="index" 
                class="flex flex-row gap-[5px]"
            >
                <iconpark-icon class="w-[32px] h-[32px] rounded-full p-[8px] bg-white  dark:bg-blue dark:bg-opacity-75 text-blue text-size-[24px]" name="user-business" />
                <div
                    class="bg-white bg-opacity-50 rounded-r-[8px] rounded-lb-[8px] px-[16px] py-[4px] flex items-center">
                    <span class="text-size-[16px] text-gray"> {{ msg }} </span>
                </div>
            </div>
        </div>
        <div class="h-[10%] flex flex-row justify-center items-center">
            <div class="h-[48px] w-[100%] bg-white dark:bg-blue dark:bg-opacity-50 bg-opacity-80 rounded-[8px] border-gray border flex flex-row justify-center items-center px-[4px]">
                <input 
                    v-model="content" 
                    type="text" 
                    class="w-[95%] h-[48px] px-[8px] text-size-[16px] outline-none bg-transparent border-none rounded-[8px]"
                    @keydown.enter="sendMsg"
                >
                <iconpark-icon 
                    class="w-[32px] h-[32px] text-size-[24px] text-gray dark:text-white rounded-full p-[4px] bg-blue  dark:bg-gray dark:bg-opacity-75 bg-opacity-25 cursor-pointer" 
                    name="send"
                    @click="sendMsg"
                />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const props = defineProps({
    activeDoc: {
        type: Object,
        required: true,
    }}
);

const msgList = ref<string []>([]);

const content = ref<string>("");
function sendMsg() {
    if (content.value) {
        msgList.value.push(content.value);
        content.value = "";
    };
}
</script>