<template>
    <div ref="dom" class="box-layout" @mousemove="moveEvent" @click="clickEvent">
        <div ref="dom1" id="content1"></div>
        <div class="views">
            <div ref="dom2" id="content2"></div>
            <div ref="dom3" id="content2"></div>
            <div ref="dom4" id="content2"></div>
            <div ref="dom5" id="content2"></div>
        </div>
        <div class="bar"><div ref="bar" class="process"></div></div>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import initCanvas from './three_move';

const dom = ref();
const bar = ref();
const dom1 = ref();
const dom2 = ref();
const dom3 = ref();
const dom4 = ref();
const dom5 = ref();

const props = defineProps({
    initHeight: {
        type: Number,
        default: 0.4
    }
});

const { renderer: render1, animate: animate1, setPos: setPos1, stop: stop1 } = initCanvas({
    width: 300,
    height: 600,
    cam_fov: 17
});
const { renderer: render2, animate: animate2, setPos: setPos2, stop: stop2 } = initCanvas({
    width: 400,
    height: 300,
    camer: {
        pos: {
            x: 2,
            y: -2,
            z: 1.8
        },
        rotate: {
            x: Math.PI / 3.5,
            y: Math.PI / 4.7,
            z: Math.PI / 8
        }
    },
    cam_fov: 15
});
const { renderer: render3, animate: animate3, setPos: setPos3, stop: stop3 } = initCanvas({
    width: 400,
    height: 300,
    camer: {
        pos: {
            x: 2,
            y: -2,
            z: 1.8
        },
        rotate: {
            x: Math.PI / 3.5,
            y: Math.PI / 4.7,
            z: Math.PI / 8
        }
    },
    cam_fov: 15
});
const { renderer: render4, animate: animate4, setPos: setPos4, stop: stop4 } = initCanvas({
    width: 400,
    height: 300,
    camer: {
        pos: {
            x: 2,
            y: -2,
            z: 1.8
        },
        rotate: {
            x: Math.PI / 3.5,
            y: Math.PI / 4.7,
            z: Math.PI / 8
        }
    },
    cam_fov: 15
});
const { renderer: render5, animate: animate5, setPos: setPos5, stop: stop5 } = initCanvas({
    width: 400,
    height: 300,
    camer: {
        pos: {
            x: 2,
            y: -2,
            z: 1.8
        },
        rotate: {
            x: Math.PI / 3.5,
            y: Math.PI / 4.7,
            z: Math.PI / 8
        }
    },
    cam_fov: 15
});

const res = [];
const moveEvent = (e) => {
    const height = dom.value.clientHeight;
    const top = dom.value.offsetTop;

    const initPos = 0.02;
    const ratio = (1 - (e.y - top) / height);
    const l = ratio * (0.4 - initPos) + initPos;
    bar.value.style.top = `${600 * (1 - ratio)}px`;
    bar.value.style.height = `${600 * ratio}px`;
    
    const cubeH = l < initPos ? initPos : (l > 1 ? 1 : l);
    res.push([cubeH, performance.now()]);
    setPos2(cubeH);
    setPos3(cubeH);
    setPos4(cubeH);
    setPos5(cubeH);
}

const emits = defineEmits(["endClick"]);
const clickEvent = (e) => {
    emits("endClick", res);
}

onMounted(() => {
    setPos1(props.initHeight);

    dom1.value.appendChild(render1.domElement);
    dom2.value.appendChild(render2.domElement);
    dom3.value.appendChild(render3.domElement);
    dom4.value.appendChild(render4.domElement);
    dom5.value.appendChild(render5.domElement);
    animate1();
    animate2();
    animate3();
    animate4();
    animate5();
});

onUnmounted(() => {
    stop1();
    stop2();
    stop3();
    stop4();
    stop5();
});
</script>

<style scoped>
.box-layout {
    display: flex;
    width: 1200px;
    height: 720px;
    align-items: center;
    justify-content: flex-start;
    user-select: none;
}

.views {
    display: flex;
    width: 800px;
    flex-direction: row;
    flex-wrap: wrap;
}

.bar {
    display: block;
    position: relative;
    width: 32px;
    height: 600px;
    background-color: #e3e3e3;
}
.bar .process {
    display: inline-block;
    position: absolute;
    top: 0;
    left: 25%;
    width: 50%;
    height: 600px;
    background-color: red;
}
</style>