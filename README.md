# Opera Auto Enable Audio

This is a simple Opera/Chrome extension that automatically unmutes any tab when it finishes loading — regardless of whether the tab is currently playing audio.

It mimics the behavior of clicking the mute/unmute icon on the browser tab, but automatically and instantly.



## Features

- Automatically unmutes any muted tab as soon as it finishes loading.
- Works even if the tab isn't yet playing audio.
- Lightweight and background-only (no UI, no popup).
- Works on all websites (YouTube, Spotify, etc.)

## How It Works

The background service worker listens to tab updates. When a tab finishes loading (`changeInfo.status === "complete"`), the script checks if it's muted using the `tab.mutedInfo.muted` property.

If so, it uses:

```js
chrome.tabs.update(tabId, { muted: false });
