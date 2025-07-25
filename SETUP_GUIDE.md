# Claude Code GitHub Actions Setup Guide

## ✅ What's Already Done

1. **Repository Created**: https://github.com/andylizf/claude-code-actions-demo
2. **Workflow Configured**: `.github/workflows/claude.yml` is ready
3. **API Key Added**: `ANTHROPIC_API_KEY` is in repository secrets
4. **Project Guidelines**: `CLAUDE.md` defines coding standards
5. **Example Code**: `src/example.js` has issues for Claude to fix

## 🔧 What You Need to Do

### Step 1: Install Claude GitHub App (REQUIRED)

1. Go to: https://github.com/apps/claude
2. Click "Install" or "Configure"
3. Select your repository: `andylizf/claude-code-actions-demo`
4. Grant these permissions:
   - Read access to code
   - Write access to issues and pull requests
   - Read access to pull requests

### Step 2: Test Claude

Create an issue with one of these examples:

```
Title: Fix security vulnerability
Body: @claude fix the SQL injection vulnerability in src/example.js
```

```
Title: Add email validation
Body: @claude implement a function to validate email addresses following best practices
```

```
Title: Improve code quality
Body: @claude review src/example.js and create a PR with improvements following our CLAUDE.md guidelines
```

## 🎯 How It Works

1. You mention `@claude` in an issue or PR
2. GitHub triggers the workflow
3. Claude analyzes your request and code
4. Claude creates a PR with the changes
5. You review and merge

## 💡 Pro Tips

- Be specific in your requests
- Reference file paths when possible
- Claude follows the rules in `CLAUDE.md`
- Check the Actions tab to see Claude working

## 🔗 Important Links

- **Install App**: https://github.com/apps/claude
- **Your Repo**: https://github.com/andylizf/claude-code-actions-demo
- **Actions**: https://github.com/andylizf/claude-code-actions-demo/actions
- **Official Docs**: https://docs.anthropic.com/en/docs/claude-code/github-actions 