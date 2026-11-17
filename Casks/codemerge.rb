cask "codemerge" do
  version "1.3.4"
  sha256 "b1bb5c35cf4ac9aa3c4b7ae0dc60158ad8a5ec22f3a0fb90e36e4e6f6569007a"

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
