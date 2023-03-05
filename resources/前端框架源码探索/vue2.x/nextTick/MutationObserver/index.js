let counter = 1;

const observer = new MutationObserver(function (mutationRecords, observer) {
  console.log(mutationRecords, observer);
  document.querySelector("#app").innerHTML = counter.toString();
});
const textNode = document.createTextNode(String(counter));
observer.observe(textNode, {
  characterData: true,
});

const timerFunc = () => {
  counter = (counter + 1) % 2;
  textNode.data = String(counter);
};

document.querySelector("#btn").addEventListener("click", () => {
  timerFunc();
});
