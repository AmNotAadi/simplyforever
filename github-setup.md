# GitHub Setup Instructions

## Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Fill in the details:
   - **Repository name**: `simply-forever-website` (or whatever you prefer)
   - **Description**: `Official website for Simply Forever Minecraft server`
   - **Visibility**: Choose Public or Private
   - **Initialize with**: Don't check any boxes (we already have files)
5. Click "Create repository"

## Step 2: Connect Your Local Repository

After creating the repository, GitHub will show you commands. Use these commands in your terminal:

```bash
# Add the remote origin (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/simply-forever-website.git

# Set the main branch (GitHub now uses 'main' by default)
git branch -M main

# Push your code to GitHub
git push -u origin main
```

## Step 3: Enable GitHub Pages (Optional)

If you want to host your website on GitHub Pages:

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click "Save"

Your website will be available at: `https://YOUR_USERNAME.github.io/simply-forever-website`

## Alternative: Use GitHub CLI

If you have GitHub CLI installed, you can create the repository directly from terminal:

```bash
# Install GitHub CLI first if you don't have it
# Then run:
gh repo create simply-forever-website --public --description "Official website for Simply Forever Minecraft server" --source=. --remote=origin --push
```

## Current Status

✅ Git repository initialized
✅ All files committed
⏳ Waiting for GitHub repository creation
⏳ Waiting for remote origin setup
⏳ Waiting for code push

## Files Ready to Push

Your website includes:
- Main pages: index.html, about.html, rules.html, join.html, community.html
- Complete wiki system: wiki.html, wiki-commands.html, wiki-shops.html, wiki-voice-chat.html, wiki-land-claims.html, wiki-quests.html
- Styling: styles.css
- JavaScript: script.js
- Assets: logo.png, favicon.ico, placeholder images
- Documentation: README.md
