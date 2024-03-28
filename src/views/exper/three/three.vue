<template>
  <div id="exp"></div>
</template>

<script setup>
import { onMounted, h, render } from 'vue';
import { initJsPsych } from 'jspsych';
import { jsPsychHtmlKeyboardResponse, jsPsychFullscreen, jsPsychSurveyHtmlForm } from '@/utils/jspsych/plugin_all_in_one.js';
import core from './core.vue';

import renderInfo from "@/utils/renderInfo";

import inst_total from '../instruction/total.vue';
import inst_part1 from '../instruction/part1.vue';
import inst_part2 from '../instruction/part2.vue';
import inst_part1_prac from '../instruction/part1_prac.vue';
import inst_part1_form from '../instruction/part1_form.vue';

const jsPsych = initJsPsych({
  display_element: "exp",
  on_finish() {
    // jsPsych.data.get().localSave("csv", `${new Date().getTime()}.csv`);
    jsPsych.DOM_container.innerText = "实验已结束，感谢您的参与";
  }
});

const fixation = {
  type: jsPsychHtmlKeyboardResponse,
  choices: "NO_KEYS",
  stimulus: "<div style='font-size: 100px;'>+</div>",
  trial_duration: 100
}

const rest = {
  type: jsPsychHtmlKeyboardResponse,
  choices: " ",
  stimulus: "<div style='font-size: 32px;'>你可以休息一分钟！</div><div style='margin: 45px 0 0 0; font-size: 20px;'>（你也可以按空格键继续实验）</div>"
}

const trial1 = {
  type: jsPsychHtmlKeyboardResponse,
  choices: ["NO_KEYS"],
  stimulus: "<div id='box'></div>",
  on_load: () => {
    const start_time = performance.now();
    render(h(core, {
      initHeight: 0.4,
      onEndClick: (e) => {
        render(null, document.querySelector("#box"));
        jsPsych.finishTrial({ resp: e, start_time: start_time });
      }
    }), document.querySelector("#box"));
  }
}

const timeline = [{
  timeline: [{
    type: jsPsychHtmlKeyboardResponse,
    choices: "NO_KEYS",
    stimulus: () => {
      return "请用本地浏览器打开";
    }
  }],
  conditional_function: () => {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/micromessenger/i) == "micromessenger") {
      return true;
    } else {
      return false;
    }
  }
}];

timeline.push({
  type: jsPsychFullscreen,
  fullscreen_mode: true,
  message: '<p style="margin: 0 0 53px 0;">欢迎参加本实验，请点击下方按钮进入全屏状态。</p>',
  button_label: "全屏进入实验"
});

timeline.push({
  type: jsPsychHtmlKeyboardResponse,
  choices: [" "],
  stimulus: "<div id='box'></div>",
  on_load() {
    render(h(inst_total), document.querySelector("#box"));
  }
});

timeline.push({
  type: jsPsychHtmlKeyboardResponse,
  choices: [" "],
  stimulus: "<div id='box'></div>",
  on_load() {
    render(h(inst_part1), document.querySelector("#box"));
  }
});

timeline.push({
  type: jsPsychHtmlKeyboardResponse,
  choices: [" "],
  stimulus: "<div id='box'></div>",
  on_load() {
    render(h(inst_part1_prac), document.querySelector("#box"));
  }
}, fixation, trial1);

timeline.push({
  type: jsPsychHtmlKeyboardResponse,
  choices: [" "],
  stimulus: "<div id='box'></div>",
  on_load() {
    render(h(inst_part1_form), document.querySelector("#box"));
  }
});

let block_id = 1;
let trial_id = 0;
timeline.push({
  timeline: [{
    timeline: [fixation, trial1],
    loop_function() {
      trial_id += 1;
      if (trial_id < 26) {
        return true;
      }
      return false;
    }
  }, rest],
  conditional_function() {
    return true;
  },
  loop_function() {
    block_id += 1;
    trial_id = 0;
    if (block_id <= 4) {
      return true;
    }
    return false;
  }
});

timeline.push({
  type: jsPsychHtmlKeyboardResponse,
  choices: [" "],
  stimulus: "<div id='box'></div>",
  on_load() {
    render(h(inst_part2), document.querySelector("#box"));
  }
});

const info = {};
timeline.push({
  type: jsPsychSurveyHtmlForm,
  html() {
    return renderInfo([{
      size: 4,
      type: "text",
      name: "age",
      required: true,
      prefix: "您的年龄是"
    },
    {
      type: "radio",
      name: "gender",
      required: true,
      choose: ["男", "女"],
      align: "col",
      prefix: "您的性别是"
    },
    {
      type: "radio",
      name: "education",
      required: true,
      choose: ["小学", "中学", "中专", "大专", "本科", "硕士及以上"],
      align: "col",
      prefix: "您的最高学历"
    },
    {
      type: "radio",
      name: "phoneLicense",
      required: true,
      choose: ["是", "否"],
      align: "col",
      prefix: "您是否使用过智能手机？"
    },
    {
      size: 8,
      type: "text",
      name: "usePhoneTime",
      required: true,
      prefix: "您的机龄是多久？"
    }]);
  },
  button_label: "继续",
  on_finish(data) {
    Object.keys(data.response).forEach((v, i) => {
      info[v] = data.response[v];
    });
  }
});

timeline.push({
  type: jsPsychFullscreen,
  fullscreen_mode: false,
});

onMounted(() => {
  jsPsych.run(timeline);
});
</script>

<style scoped>
#exp {
  min-width: 500px;
  height: auto;
}
</style>