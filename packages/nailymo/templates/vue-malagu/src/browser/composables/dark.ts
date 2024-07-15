// these APIs are auto-imported from @vueuse/core
export const isDark = useDark();
export const toggleDark = useToggle(isDark);
export const preferredDark = usePreferredDark();

(() => {
  if (isDark.value) {
    document.body.style.backgroundColor = "#121212";
    document.body.style.color = "#fff";
  } else {
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#121212";
  }
})();
