import InputGroup from "./input-group/index.js";

// 所有组件的数组
const components = [InputGroup];

// 组件的公开install方法，会在Vue.use()的时候被调用
const install = function (Vue) {
  components.map(component => {
    Vue.component(component.name, component);
  });
};

// 直接引入xkui.min.js时的加载方式
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
export default {
  version: "1.0.5",
  install,
  InputGroup
};
