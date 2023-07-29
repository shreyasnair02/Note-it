const key = "notes";
let timeoutID;
const notesInput = document.getElementById("notes");
const loader = document.querySelector(".loader");
const clearBtn = document.querySelector(".footer__btn-clearBtn");
chrome.storage.sync.get(key, function (items) {
  console.log(items);
  if (items[key]) {
    notesInput.value = items[key];
  } else {
    // console.log("doesnt exist");
  }
});

const handleChange = (val) => {
  loader.classList.remove("hidden");
  clearTimeout(timeoutID);
  timeoutID = setTimeout(() => {
    const data = { [key]: val };
    chrome.storage.sync.set(data, function () {
      loader.classList.add("hidden");
    });
  }, 600);
};

notesInput.addEventListener("input", (e) => handleChange(e.target.value));
clearBtn.addEventListener("click", (e) => {
  handleChange("");
  notesInput.value = "";
});
