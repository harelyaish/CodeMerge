<p align="center">
  <a href="https://harelyaish.github.io/CodeMerge/"><img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/docs/assets/site-banner.svg" alt="Try CodeMerge live in your browser — harelyaish.github.io/CodeMerge" width="100%"></a>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/banner.png" alt="CodeMerge — the menu-bar utility for macOS" width="100%">
</p>

<p align="center">
  <img src="https://readme-typing-svg.demolab.com/?font=Fira+Code&size=18&pause=1800&color=FF6B35&center=true&vCenter=true&width=600&lines=One+menu+bar.+A+dozen+tools.;Screenshots%2C+clipboard%2C+timers%2C+weather...;Custom+window+layouts%2C+one+shortcut+away.;%245+once.+No+subscription.+Ever." alt="Typing SVG">
</p>

<p align="center">
  <img src="https://img.shields.io/github/downloads/harelyaish/CodeMerge/total?style=flat-square&label=downloads&color=FF6B35">
  <img src="https://img.shields.io/badge/macOS-13%2B-black?style=flat-square&logo=apple">
  <img src="https://img.shields.io/badge/license-personal%20use-lightgrey?style=flat-square">
  <img src="https://img.shields.io/github/v/release/harelyaish/CodeMerge?style=flat-square&color=FF6B35">
  <a href="https://github.com/harelyaish"><img src="https://img.shields.io/badge/follow-%40harelyaish-black?style=flat-square&logo=github"></a>
  <a href="https://www.paypal.com/paypalme/HarelYaish"><img src="https://img.shields.io/badge/tip-PayPal-00457C?style=flat-square&logo=paypal&logoColor=white"></a>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/docs/assets/terminal-hero.svg" alt="CodeMerge in a terminal — the app logo, a dozen tools, $5 once" width="100%">
</p>

**CodeMerge** is a macOS menu-bar utility that bundles a dozen small daily-use tools into one dropdown, so you stop juggling separate apps (and their separate Dock icons, keyboard shortcuts, and menu bars) for things you do constantly. Everything lives behind a single icon in your menu bar — click it, or use a global keyboard shortcut, and it's there.

Free to try for 30 days, full features. $5 once, for life — no subscription, no recurring charge.

[![Buy CodeMerge — $5](https://img.shields.io/badge/Buy_CodeMerge-%245_lifetime-FF6B35?style=for-the-badge)](https://harelyaish.gumroad.com/l/codemerge)
[![Download latest release](https://img.shields.io/badge/Download-latest_release-black?style=for-the-badge&logo=apple)](https://github.com/harelyaish/CodeMerge/releases/latest)
[![Website](https://img.shields.io/badge/Website-try_it_live-FF6B35?style=for-the-badge&logo=safari&logoColor=white)](https://harelyaish.github.io/CodeMerge/)

## Contents

[Gallery](#gallery) · [Install](#install) · [If macOS won't open the app](#if-macos-wont-open-the-app) · [After installing](#after-installing) · [Every feature, explained](#every-feature-explained) · [Settings](#settings-in-brief) · [Permissions](#permissions-it-may-ask-you-for) · [Updates](#updates) · [FAQ](#faq) · [Support](#support) · [License](#license) · [Uninstalling](#uninstalling) · [Changelog](#changelog)

## Gallery

<p align="center">
  <img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/gallery/cm-promo.png" alt="CodeMerge — $5 once, no subscription" width="100%">
</p>
<p align="center">
  <img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/gallery/cm-themes.png" alt="Light and dark themes" width="100%">
</p>
<p align="center">
  <img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/gallery/cm-icon-wall.png" alt="One menu bar, a dozen tools" width="100%">
</p>

## Install

Paste this into Terminal and press Return:

```bash
curl -fsSL https://raw.githubusercontent.com/harelyaish/CodeMerge/main/install.sh | bash
```

That downloads the app, installs it to `/Applications`, and opens it — no extra "this app is from an unidentified developer" step needed, since it never goes through a browser download. **This is the recommended way to install** — it's the only method that skips macOS's blocking dialog entirely.

### Prefer not to use Terminal?

[Download the zip directly](https://github.com/harelyaish/CodeMerge/releases/latest/download/CodeMerge.zip), unzip it, and drag `CodeMerge.app` to Applications. Because this went through a browser, macOS marks the file "quarantined" and will refuse to open it the first time — see **[If macOS won't open the app](#if-macos-wont-open-the-app)** below for the exact steps.

### Prefer Homebrew?

```bash
brew tap harelyaish/codemerge https://github.com/harelyaish/CodeMerge
brew install --cask codemerge
```

Homebrew's download is also quarantined by macOS the same way a browser download is, so the first launch needs the same steps below.

## If macOS won't open the app

This only affects the **zip download** and **Homebrew** install methods (the curl command above skips it entirely). It's standard macOS behavior for any app that isn't distributed through the App Store or an Apple-notarized installer — it isn't specific to CodeMerge, and it isn't a sign anything is wrong with the download.

1. Try **right-click (or Control-click) the app → Open**. On some macOS versions this shows a dialog with an **Open** button — click it and you're done, permanently, for this copy of the app.
2. If that shows a blocking dialog instead (only "Move to Trash" and "Done", no way to open it), go to **System Settings → Privacy & Security**, scroll down to the **Security** section, and look for a line saying *"CodeMerge.app was blocked to protect your Mac"* with an **Open Anyway** button next to it. Click it, authenticate if asked, then try opening the app again — one more confirmation dialog appears, this time with a real **Open** button.

Either way, this is a one-time step per copy of the app — once you've approved it, every future launch (Dock, Spotlight, login items) works normally with no warnings.

## After installing

CodeMerge lives in your menu bar — click its icon to open the dropdown, or right-click it for quick actions (Lock Screen, Settings, and — once your trial ends — buying a license). You get full access for 30 days; after that, [buy a lifetime license for $5](https://harelyaish.gumroad.com/l/codemerge) and paste the key Gumroad emails you into **Settings → License**.

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=rect&color=0:1a1a1a,100:FF6B35&height=3&section=header" width="100%">
</p>

## Every feature, explained

The grid in the middle of the dropdown holds these tools — Settings → Main Window controls which ones show and in what order:

| Icon | Feature | What it does |
|---|---|---|
| <img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/icons/screenshot-full.png" width="28"> | Screenshot (full screen) | Captures the whole screen straight to the clipboard, and keeps a copy in Recent Captures (unless you've turned that off in Settings → Screenshots). |
| <img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/icons/screenshot-area.png" width="28"> | Screenshot (select area) | Same as above, but you drag to select a region first, using macOS's own native selection tool. |
| <img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/icons/eject.png" width="28"> | Eject disks | Unmounts every ejectable external volume at once. If any refuse (e.g. a file is still open on them), it tells you which ones and why. |
| <img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/icons/clean-keyboard.png" width="28"> | Clean keyboard | Puts up a full-screen overlay that blocks every keystroke, so you can wipe your keyboard without triggering anything — your trackpad or mouse still work, so you can click to end it (or use the shortcut you assigned it). |
| <img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/icons/quit-all.png" width="28"> | Quit all apps | Quits every other running app in one click. Never quits CodeMerge itself. |
| <img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/icons/clipboard.png" width="28"> | Clipboard history | Keeps your last 200 copied items with search, and lets you pin snippets you reuse. Click any one to copy it again. |
| <img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/icons/file-shelf.png" width="28"> | File shelf | A temporary drag-and-drop holding tray for files, images, or videos — drag something in, it stays for 5 minutes or until it hits 100 MB (whichever comes first), and you can preview it (Quick Look), send it by AirDrop, or drag it back out into any other app or folder. Large PNGs are compressed automatically when that makes them smaller. |
| <img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/icons/prevent-sleep.png" width="28"> | Prevent sleep | Toggles keeping your Mac awake on/off, the same idea as `caffeinate` — the icon fills in solid while it's active. |
| <img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/icons/window-split.png" width="28"> | Window split / Custom layouts | Cycles the frontmost window through split layouts (half-screen, quarters, or a full custom grid you design), or full-screen. In Custom Layout mode you can drag windows between grid cells in a live preview; windows that don't fit the current grid wait in a small overflow tray until you assign them a spot. |
| <img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/icons/now-playing.png" width="28"> | Now Playing | Shows what's currently playing in Music or Spotify, with cover art, a live seekable progress bar, and play/pause/skip and volume controls (Music and Spotify volume, not your system volume). For Music you can also add to Library or a playlist, and when nothing is playing, click the Music icon for Shuffle All, Favorites, Playlists and Genres. |
| <img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/icons/timer.png" width="28"> | Timer | Start as many simultaneous countdowns as you want, each with its own label — the nearest one counts down live on the menu-bar icon itself, so you don't need the dropdown open to track it. |
| <img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/icons/color-picker.png" width="28"> | Color picker | Turns your cursor into an eyedropper — click any pixel on your screen and its hex color code is copied to your clipboard. |
| <img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/icons/command-palette.png" width="28"> | Command palette | Search and run commands you've saved yourself — a shell command, an AppleScript, a URL to open, or **Plain Text** to just copy something to your clipboard (handy for canned replies or text you paste often). Add and edit these in Settings → Command Palette. |
| <img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/icons/screen-recording.png" width="28"> | Screen recording | Starts a screen recording with a small floating pause/stop control that stays on top; finished recordings land in Recent Captures, same as screenshots. |
| <img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/icons/weather.png" width="28"> | Weather | Shows current conditions — temperature, feels-like, high/low, humidity, wind — for your location, worked out from your IP address (no location permission prompt, no GPS). |
| <img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/icons/quick-note.png" width="28"> | Quick Note | One scratch note that's still exactly as you left it the next time you open the dropdown — good for something you need to jot down for a minute, not a full notes app. |
| <img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/icons/lock-screen.png" width="28"> | Lock Screen | Locks your Mac straight to the login screen, one click. |
| <img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/icons/converter.png" width="28"> | Converter | Converts length, weight, and temperature entirely offline, plus currency using live exchange rates that refresh periodically and are cached so it still works if you're briefly offline. |
| <img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/icons/image-resizer.png" width="28"> | Image Resizer | Drop in a picture and make the file smaller — pick Light, Medium or Max compression and it re-saves it as a JPEG at the same dimensions, then tells you the real size before and after. |
| <img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/icons/random-generator.png" width="28"> | Random Generator | Numbers, dice, coin flip, a Yes/No answer, and more — one click each. |
| <img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/icons/audio-output.png" width="28"> | Audio Output | See every speaker, headphone and AirPlay output your Mac knows about and switch between them with one click. |
| <img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/icons/text-grab.png" width="28"> | Text Grab | Select any area of the screen and the text in it (OCR) is copied to your clipboard. Needs Screen Recording permission. |
| <img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/icons/kill-port.png" width="28"> | Kill Process on Port | Type a port number (3000, 8080, 5173…) and whatever is blocking it is terminated instantly. |

### The action row (bottom of the dropdown)

| Icon | What it does |
|---|---|
| <img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/icons/settings.png" width="28"> Settings | Opens the Settings window, right where you'd expect it, anchored to the menu-bar icon. |
| <img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/icons/theme-switch.png" width="28"> <img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/icons/theme-dark.png" width="28"> Light / Dark switch | Flips the whole dropdown between your chosen Light theme and your chosen Dark theme — the sun shows in light mode, the moon in dark. Pick one theme for each in Settings → Appearance (Default, Midnight, Forest, Sunset, Monochrome or the frosted Mirror). |
| <img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/icons/hide-desktop.png" width="28"> Hide desktop icons & Dock | One click covers every icon and widget on your desktop and auto-hides the Dock, so you get a clean screen for a screenshot or screen share — click again (or use the same switch in Settings → General) to bring everything back. |
| <img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/icons/power.png" width="28"> Quit CodeMerge | Quits the app itself. |

### Settings, in brief

Open Settings from the <img src="https://raw.githubusercontent.com/harelyaish/CodeMerge/main/icons/settings.png" width="18" valign="middle"> icon or by right-clicking the menu-bar icon:

- **Main Window** — choose exactly which icons/stats show in the dropdown, and drag to reorder them.
- **Appearance** — choose one Light and one Dark theme (six each: Default, Midnight, Forest, Sunset, Monochrome, Mirror), previewed live; the sun/moon button in the dropdown switches between them.
- **Keyboard Shortcuts** — assign a system-wide keyboard shortcut to almost any feature (opening the dropdown, screenshots, window split, lock screen, and more), so you never need to click the menu bar at all for the things you use most.
- **Command Palette** — add, edit, and reorder your own saved commands (shell/AppleScript/URL/plain-text).
- **License** — see your trial status, or enter the license key Gumroad emails you after purchase.
- **General** — launch-at-login, the desktop/Dock declutter toggle, and update checking.

CodeMerge also launches automatically at login (if you leave that on) and has no Dock icon — it behaves purely as a background menu-bar utility.

### Permissions it may ask you for

Nothing is requested up front. Each permission below is only asked for the first time you actually use the one feature that needs it:

| Feature | Permission | Where to check/change it |
|---|---|---|
| Screenshots, screen recording | Screen Recording | System Settings → Privacy & Security → Screen & System Audio Recording |
| Clean Keyboard, global keyboard shortcuts, Lock Screen | Accessibility | System Settings → Privacy & Security → Accessibility |
| Text Grab | Screen Recording | System Settings → Privacy & Security → Screen & System Audio Recording |
| Now Playing controls | Automation (Music, Spotify) | Prompted automatically the first time you use it |
| Window split / Custom Layouts | Accessibility | System Settings → Privacy & Security → Accessibility |

CPU temperature and the desktop/Dock declutter feature need **no permission at all**.

### What talks to the network

Almost nothing in CodeMerge does. Two features make plain HTTPS calls, neither needing any account or API key: **Weather** (`ipapi.co` for your approximate location from your IP, `api.open-meteo.com` for the forecast) and the **currency converter** (`api.frankfurter.app`, which republishes European Central Bank exchange rates). Nothing else talks to the network, and no credentials of yours are ever read or sent anywhere.

## Updates

CodeMerge checks for updates itself — **Settings → General → Check for Updates…** — no need to reinstall from here.

## Requirements

macOS 13 (Ventura) or later, Apple Silicon or Intel.

## FAQ

**Why does macOS say it's from an "unidentified developer"?**
CodeMerge isn't distributed through the App Store or Apple's notarization service, so any copy that goes through a browser download gets flagged the same way any indie app without an Apple Developer account would be. It isn't a sign anything is wrong with the app — see [If macOS won't open the app](#if-macos-wont-open-the-app) above for the one-time fix, or use the curl install, which skips it entirely.

**Does it work on Apple Silicon and Intel Macs?**
Yes, one universal build covers both.

**Is my data sent anywhere?**
No, aside from two plain HTTPS calls with no account or API key involved — see [What talks to the network](#what-talks-to-the-network) above. Everything else (clipboard history, screenshots, notes, timers, settings) stays on your Mac.

**What if I want a refund?**
Contact Gumroad support from your purchase receipt email — refunds are handled through Gumroad, not this repo.

**Can I use my license on more than one Mac?**
The license is personal and non-transferable, but nothing technical stops you from using it on your own multiple Macs — it isn't hardware-locked.

## Support

Found a bug or have a question? [Open an issue](https://github.com/harelyaish/CodeMerge/issues) on this repo.

Already bought a license and want to support development further? [Leave a tip via PayPal](https://www.paypal.com/paypalme/HarelYaish) — entirely optional, separate from the $5 purchase.

## License

Buying a license key grants you a personal, non-transferable right to install and run the compiled app. It's closed-source and proprietary — the license doesn't grant any right to redistribute, resell, or reverse-engineer it.

## Uninstalling

Drag `CodeMerge.app` from `/Applications` to the Trash, then remove its saved settings:

```bash
rm -f ~/Library/Preferences/com.harelyaish.ClaudeUsageNotch.plist
```

(Installed via Homebrew? `brew uninstall --cask codemerge` does both steps for you.)

## Changelog

### 1.1.1

- Themes: separate Light and Dark groups (Default, Midnight, Forest, Sunset, Monochrome, Mirror in each), a sun/moon quick switch in the main window, frosted-glass panels, and controls that follow the theme.
- Now Playing: real-time progress bar, and Shuffle All / Favorites / Playlists / Genres / Open Music in the playing menu.
- Spotify: fixed layout flicker and honest Resume feedback.

### 1.1.0

- New tools: Image Resizer, Random Generator, Audio Output, Text Grab and Kill Process on Port.
- Clipboard history: 200 items, search, pinned snippets.
- File shelf: AirDrop button and automatic compression of large PNGs.
- Now Playing: cover art, seekable real-time progress bar, Music and Spotify volume, Music library/playlist actions, and Music/Spotify launchers when nothing is playing.
- Global shortcuts for the new tools.

See the [Releases page](https://github.com/harelyaish/CodeMerge/releases) for every version.
