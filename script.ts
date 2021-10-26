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

function attachToggleClassForElement(
  objectAttach: string,
  objectDestination: string,
  affectClass: string
) {
  let element: HTMLElement = document.querySelector(objectAttach)!;

  if (element) {
    element.addEventListener("click", () => {
      let destination: HTMLElement = document.querySelector(objectDestination)!;

      if (destination) {
        destination.classList.toggle(affectClass);
      }
    });
  }
}

attachToggleClassForElement(".category-toogle", ".category-dropdown", "show");
attachToggleClassForElement(".mail-icon", ".newsletter-container", "show");
attachToggleClassForElement(
  ".close-contact-form",
  ".newsletter-container",
  "show"
);
