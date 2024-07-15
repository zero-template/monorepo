import type { RouteLocationNormalized } from "unplugin-vue-router";
import { Component, Setup, Vue } from "vue-facing-decorator";
import Children from "../components/Children";

@Component({
  render() {
    return (
      <div>
        <h2>hello home! You can visit /home to view this page!</h2>
        <Children />
      </div>
    );
  },
})
export default class HomeView extends Vue {
  // Auto injects the router and use use
  @Setup(() => useRoute())
  private route: RouteLocationNormalized;

  mounted() {
    console.log(`Current route: ${this.route.path}`);
    console.log(`Dark mode: ${isDark.value}`);
    console.log("HomeView mounted");
  }
}
