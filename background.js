// background.js (minimal for DNR)
console.log("Google Whitelist Extension Service Worker Started.");

// Optional: Log installed rules on startup (for debugging)
chrome.declarativeNetRequest.getEnabledRulesets(ids => {
  console.log("Enabled DNR rulesets:", ids);
});
