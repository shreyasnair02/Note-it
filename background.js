// chrome.commands.onCommand.addListener((command) => {
//   if (command === "open_notes") {
//     // Open the extension popup
//     chrome.action.setPopup({ popup: "html/popup.html" });
//     console.log("html/popup.html");
//   }
// });

// chrome.action.onClicked.addListener((tab) => {
//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     func: contentScriptFunc,
//     args: ["action"],
//   });
// });

// function contentScriptFunc(name) {
//   alert(`"${name}" executed`);
// }

// // This callback WILL NOT be called for "_execute_action"
// chrome.commands.onCommand.addListener((command) => {
//   console.log(`Command "${command}" called`);
// });
