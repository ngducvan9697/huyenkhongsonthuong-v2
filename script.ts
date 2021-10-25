setTimeout(() => {
  let preloader: HTMLElement = document.querySelector(".preload")!;

  if (preloader) {
    preloader.classList.add("close");
  }
}, 500);

let categoryButton: HTMLDivElement =
  document.querySelector(".category-toogle")!;

if (categoryButton) {
  categoryButton.addEventListener("click", () => {
    let parent = categoryButton.parentElement;

    if (parent) {
      parent.classList.toggle("show");
    }
  });
}
