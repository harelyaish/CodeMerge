cask "codemerge" do
  version "1.1.1"
  sha256 "d6489dddb821a32d3c945b06320e720309aac29f3d34a9b4a20cdfc7b68567d0"

  url "https://github.com/harelyaish/CodeMerge/releases/download/v#{version}/CodeMerge.zip"
  name "CodeMerge"
  desc "Menu-bar utility for macOS: app launcher, window splitting, screenshots, clipboard history, and more"
  homepage "https://harelyaish.gumroad.com/l/codemerge"

  depends_on macos: :ventura

  app "CodeMerge.app"

  zap trash: [
    "~/Library/Preferences/com.harelyaish.ClaudeUsageNotch.plist",
  ]
end
