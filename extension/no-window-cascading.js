chrome.windows.onCreated.addListener(function(new_window) {
  chrome.windows.update(new_window.id, {left:0, top:0});
});
