//copied from stackoverflow
function waitForElm(selector) {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver((mutations) => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}

function main(selector) {
  waitForElm(selector).then((elm) => {
    elm.remove();
  });
}

main('header');
main('.nav-links');
main('.s-sidebarwidget');
main('#hot-network-questions');
main('#mb16');
