chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "myPluginContextMenu",
      title: "My Plugin Option",
      contexts: ["selection"]
    });
  });
  
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "myPluginContextMenu") {
      // 在这里实现右键菜单选项的功能
      console.log("Selected text: " + info.selectionText);
    }
  });