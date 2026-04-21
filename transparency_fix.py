import os
import re

directory = "/Users/mac/Documents/ephad/src/components/sections"

replacements = {
    # Let the base structural layer reveal the global background completely in dark mode
    r"dark:bg-\[var\(--dm-base\)*\]": "dark:bg-transparent",
    # Allow sections to be semi-transparent frosted glass
    r"dark:bg-\[var\(--dm-section\)*\]": "dark:bg-[var(--dm-section)]/40 dark:backdrop-blur-3xl",
    # Allow elevated elements to be slightly transparent glass
    r"dark:bg-\[var\(--dm-elevated\)*\]": "dark:bg-[var(--dm-elevated)]/60 dark:backdrop-blur-2xl",
}

for root, _, files in os.walk(directory):
    for file in files:
        if file.endswith(".tsx"):
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
