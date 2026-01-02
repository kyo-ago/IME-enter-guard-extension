# IME Enter Guard

<p align="center">
  <img src="icons/icon128.png" alt="IME Enter Guard" width="128" height="128">
</p>

<p align="center">
  <strong>IME変換確定時の誤送信を防止するChrome拡張機能</strong><br>
  Prevents accidental form submission when pressing Enter to confirm IME conversion
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#installation">Installation</a> •
  <a href="#how-it-works">How It Works</a> •
  <a href="#supported-languages">Languages</a> •
  <a href="#privacy">Privacy</a>
</p>

---

## The Problem / 問題

When using an IME (Input Method Editor) for Japanese, Chinese, or Korean input, pressing Enter to confirm character conversion often triggers form submission on web applications like chat apps, causing messages to be sent prematurely.

日本語入力でEnterキーを押して漢字変換を確定すると、チャットアプリなどで意図せずメッセージが送信されてしまう問題があります。

## The Solution / 解決策

IME Enter Guard detects IME composition state and blocks the Enter key event from propagating to web applications, allowing you to confirm conversions naturally.

IME Enter Guardは変換中の状態を検出し、Enterキーのイベント伝播をブロックすることで、自然に変換を確定できるようにします。

## Features

- Works on all websites automatically
- Zero configuration required
- Lightweight (~1KB)
- No data collection
- Open source

## Installation

### Chrome Web Store
[Install from Chrome Web Store](https://chrome.google.com/webstore/detail/ime-enter-guard/fnlaeanklgpfabpnigjclmhegafolnnj)

### Manual Installation (Developer Mode)
1. Download or clone this repository
2. Open `chrome://extensions/` in Chrome
3. Enable "Developer mode"
4. Click "Load unpacked" and select this directory

## How It Works

```javascript
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && e.isComposing) {
    const target = e.target;
    if (target.tagName === 'TEXTAREA' ||
        (target.tagName === 'INPUT' && target.type === 'text')) {
      e.stopPropagation();
    }
  }
}, true);
```

The extension:
1. Listens for `keydown` events in the capture phase
2. Checks if Enter is pressed during IME composition (`isComposing === true`)
3. Stops event propagation for textarea and text input fields
4. Does NOT call `preventDefault()`, allowing IME to complete normally

## Supported Languages

| Language | Locale |
|----------|--------|
| English | en |
| 日本語 | ja |
| 简体中文 | zh_CN |
| 繁體中文 | zh_TW |
| 한국어 | ko |

## Supported Input Fields

- `<textarea>`
- `<input type="text">`

## Privacy

This extension:
- Does NOT collect any data
- Does NOT make any network requests
- Does NOT require special permissions
- Works entirely locally

See [PRIVACY_POLICY.md](PRIVACY_POLICY.md) for details.

## Development

### File Structure
```
├── manifest.json      # Extension manifest (v3)
├── content.js         # Content script
├── icons/             # Extension icons
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
└── _locales/          # Internationalization
    ├── en/
    ├── ja/
    ├── zh_CN/
    ├── zh_TW/
    └── ko/
```

### Build
```bash
zip -r ime-enter-guard.zip manifest.json content.js icons/*.png _locales/
```

## License

MIT

## Contributing

Issues and Pull Requests are welcome!
