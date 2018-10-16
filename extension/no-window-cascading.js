chrome.windows.onCreated.addListener(function(w) {
  // Cascading offset in pixels.
  var offset = 10

  // Filter out popups, devtools, minimized, maximized, fullscreen.
  if (w.type == "normal" && w.state == "normal")
    chrome.windows.update(w.id, {left: w.left - offset, top: w.top - offset});
});
