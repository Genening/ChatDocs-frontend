<template>
    <div>
        <div 
            class="flex flex-row h-[48px] justify-between items-center px-[16px] rounded-[4px] cursor-pointer bg-white"
        >
            <span class="w-[80%]">{{ props.doc.name }}</span>
            <iconpark-icon 
                class="text-size-[24px] cursor-pointer" 
                name="more-three"
                @click="detailShow = !detailShow"
            />
        </div>
        <div 
            v-show="detailShow"
            class="flex flex-row justify-start gap-[20px] flex-wrap items-center px-[16px] py-[8px] rounded-b-[4px] bg-white bg-opacity-50"
        >
            <div
                v-for="file in props.doc.content"
                :key="file.name"
                class="flex flex-col justify-center items-center gap-[5px] bg-white px-[8px] py-[4px] rounded-[4px]"
            >
                <iconpark-icon class="text-size-[24px] text-gray" name="doc-detail" />
                <span class="text-size-[11px] text-gray"> {{ file.name }} </span>
            </div>
            <div class="w-[40px] h-[40px] bg-white rounded-[4px] flex justify-center items-center cursor-pointer">
                <iconpark-icon class="text-size-[24px]" name="add-four" />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const props = defineProps({
    doc: {
        type: Object,
        required: true,
    }}
);

const detailShow = ref(false);
</script>