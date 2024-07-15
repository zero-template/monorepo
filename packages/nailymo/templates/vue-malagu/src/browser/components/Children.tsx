import { Component, Vue } from "vue-facing-decorator";

@Component({
  render() {
    return <div>This Component will be auto import by unplugin-vue-components</div>;
  },
})
export default class Children extends Vue {}
