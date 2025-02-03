#!/bin/bash

# Check if input is provided
if [ -z "$1" ]; then
    echo "Usage: $0 <search_string>"
    exit 1
fi

search_string="$1"

# Find files containing the search string (case-insensitive, whole word)
file_paths=$(grep -irlw --exclude-dir={.git,node_modules} "$search_string" . 2>/dev/null)

# Check if any file is found
if [ -z "$file_paths" ]; then
    echo "No matching files found containing '$search_string'"
    exit 1
fi

# Open each matching file in VS Code
while IFS= read -r file; do
    echo "Opening in VS Code: $file"
    code "$file"  # Opens file in VS Code
done <<< "$file_paths"