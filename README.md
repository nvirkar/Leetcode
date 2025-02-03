# Leetcode

#### This repository contains leetcode solutions.

#### I have created a bashs file named "open.sh" which allows you to search for a specific LeetCode problem in your local directory and open all matching files in VS Code. It recursively scans through files and finds the ones containing your search term.

# 📜 How It Works

- The script takes a search string (e.g., leetcode-118) as an argument.

- It recursively searches all files (except .git and node_modules folders).

- If a match is found, it opens the file in VS Code.

- If no matches are found, it notifies the user.

# 🚀 Usage

## 1️⃣ Give execute permissions to the script (only needed once):

`chmod +x open.sh`

## 2️⃣ Run the script with your search query:

`./open.sh "leetcode-118"`

## 3️⃣ Example Output:

`Opening in VS Code: ./Easy/pascalTriangle.js`

This means the script found "leetcode-118" in "pascalTriangle.js" and opened it in VS Code.
