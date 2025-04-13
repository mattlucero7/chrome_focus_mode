// background.js (minimal for DNR)
console.log("Matt Focus Mode Extension Service Worker Started.");

// ill keep this for now, not working for yt yet
chrome.declarativeNetRequest.getEnabledRulesets(ids => {
  console.log("Enabled DNR rulesets:", ids);
});
