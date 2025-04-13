# Matt's Focus Mode

This Chrome extension helps you stay focused by allowing access only to specific websites like Gemini, Calendar, Tasks, and Google Accounts. Perfect for when you need to get things done without distractions! 🚀

> [!IMPORTANT]
> Does not work with Youtube but it breaks it enough that I wont want to use it anymore

## How to Install and Use

This extension is not on the Chrome Web Store and must be loaded manually in Developer Mode.

1.  **Open Chrome Extensions:** Navigate to `chrome://extensions` in your Chrome browser.
2.  **Enable Developer Mode:** Find the "Developer mode" toggle switch (usually in the top-right corner) and turn it **on**.
3.  **Load the Extension:**
    *   Click the "Load unpacked" button.
    *   In the file dialog that appears, navigate to the folder where you saved these extension files (the folder containing `manifest.json`, `background.js`, etc. - likely `c:\Users\matt_\projects\chrome_focus_mode`).
    *   Select the folder itself (don't go inside it) and click "Select Folder".
4.  **Verify:** The "Google Services Whitelist" extension should now appear in your list of extensions and be enabled by default.

While the extension is enabled, you will only be able to access the allowed Google sites listed above. Attempts to navigate to other websites will result in a "This site can’t be reached" or similar error page.

## How to Disable or Remove

1.  **Open Chrome Extensions:** Navigate to `chrome://extensions`.
2.  **Find the Extension:** Locate the "Google Services Whitelist" card.
3.  **Disable:** To temporarily turn off the blocking, simply toggle the switch on the extension card to the **off** position.
4.  **Remove:** To completely remove the extension, click the "Remove" button on the extension card and confirm.

## Troubleshooting

*   **Allowed sites look broken?** Some Google services rely on other Google domains (like `ssl.gstatic.com` or `apis.google.com`) for resources like images or scripts. The current rules include `ssl.gstatic.com`, but if you encounter issues, you might need to:
    1.  Open the browser's Developer Tools (F12).
    2.  Go to the "Network" tab.
    3.  Try loading the problematic page.
    4.  Look for requests that are blocked (often shown in red).
    5.  Identify the domain being blocked.
    6.  Edit the `rules/ruleset_1.json` file, add the necessary domain to the `requestDomains` list, save the file, and reload the extension via the `chrome://extensions` page (click the reload icon on the extension card).
*   **Need to allow another site?** Edit `rules/ruleset_1.json` and add the domain to the `requestDomains` list in the first rule, then reload the extension.
