# [Your Extension Name] 🎨

![Manifest Version](https://img.shields.io/badge/Manifest-V3-blue)
![License](https://img.shields.io/badge/License-MIT-green)
![Status](https://img.shields.io/badge/Status-Active_Development-orange)

A lightweight and fast Google Chrome extension that allows users to pick colors from any web page.

> **Note:** Currently, this extension supports **Hexadecimal (#xxxxxx)** color format extraction only.

## ✨ Features

- **Eye Dropper Tool:** Activate a magnifier to select any pixel on a webpage.
- **Instant Hex Copy:** Automatically copies the selected Hex code (e.g., `#FF5733`) to your clipboard.
- **Minimalist UI:** No bloat, just a simple color picker.
- **Privacy Focused:** Runs locally in your browser.

## 🚀 Installation (Developer Mode)

Since this extension is in development and not yet on the Chrome Web Store, you can install it manually:

1.  **Clone this repository** to your local machine:
    ```bash
    git clone [https://github.com/](https://github.com/)[your-username]/[repo-name].git
    ```
2.  Open Google Chrome and navigate to:
    `chrome://extensions/`
3.  Toggle **Developer mode** in the top right corner.
4.  Click **Load unpacked** in the top left.
5.  Select the folder where you cloned this repository.
6.  The extension should now appear in your browser toolbar!

## 🛠 Usage

1.  Navigate to any website.
2.  Click the extension icon in the Chrome toolbar.
3.  Click the **"Pick Color"** button.
4.  Hover over the element you want to inspect.
5.  Click to capture the color.
6.  The Hex code (e.g., `#FFFFFF`) is now copied to your clipboard!

[Image of color picker interface usage]
## 🔮 Roadmap

We are actively working on improving the extension. Future updates will include:

- [ ] Support for **RGB** (e.g., `rgb(255, 0, 0)`) format.
- [ ] Support for **HSL** format.
- [ ] Color history/Recent picks.
- [ ] Keyboard shortcuts.
- [ ] Dark mode support for the popup UI.

## 📂 Project Structure

```text
.
├── manifest.json      # Extension configuration (Manifest V3)
├── popup.html         # The extension popup interface
├── popup.js           # Logic for the popup interactions
├── popup.css          # Styling for the popup
├── background.js      # Service worker (if applicable)
├── content.js         # Script injected into webpages
└── icons/             # Icon files (16, 48, 128px)
