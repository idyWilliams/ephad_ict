import os
import re

directory = "/Users/mac/Documents/ephad/src"

replacements = {
    r"dark:bg-\[#0d0f1c\]": "dark:bg-[var(--dm-section)]",
    r"dark:bg-\[#090b18\]": "dark:bg-[var(--dm-base)]",
    r"bg-\[#1C1C18\]": "bg-[var(--lm-text-main)]",
    r"dark:text-\[#1C1C18\]": "dark:text-[var(--dm-base)]",
    r"bg-\[#E6E5E0\]": "bg-[var(--lm-section)]",
    r"bg-\[#F4F3EF\]": "bg-[var(--lm-elevated)]",
}

for root, _, files in os.walk(directory):
    for file in files:
        if file.endswith(".tsx") or file.endswith(".ts"):
            filepath = os.path.join(root, file)
            with open(filepath, "r") as f:
                content = f.read()
            
            original_content = content
            for old, new in replacements.items():
                content = re.sub(old, new, content)
            
            if content != original_content:
                with open(filepath, "w") as f:
                    f.write(content)
                print(f"Updated {filepath}")
