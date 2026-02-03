#!/usr/bin/env node

/**
 * Build script for cangjie-dev skill
 * Compiles documentation into AGENTS.md
 */

const fs = require('fs');
const path = require('path');

const SKILL_DIR = path.join(__dirname, '..', 'skills', 'cangjie-dev');
const DOCS_DIR = path.join(SKILL_DIR, 'docs');
const SKILL_FILE = path.join(SKILL_DIR, 'SKILL.md');
const OUTPUT_FILE = path.join(SKILL_DIR, 'AGENTS.md');

/**
 * Read all markdown files from a directory recursively
 */
function readMarkdownFiles(dir, basePath = '') {
    const files = [];

    if (!fs.existsSync(dir)) {
        return files;
    }

    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        const relativePath = path.join(basePath, entry.name);

        if (entry.isDirectory()) {
            files.push(...readMarkdownFiles(fullPath, relativePath));
        } else if (entry.name.endsWith('.md')) {
            files.push({
                path: relativePath,
                content: fs.readFileSync(fullPath, 'utf-8')
            });
        }
    }

    return files;
}

/**
 * Generate table of contents
 */
function generateTOC(sections) {
    let toc = '## Table of Contents\n\n';

    for (const section of sections) {
        const anchor = section.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        toc += `- [${section.title}](#${anchor})\n`;
    }

    return toc + '\n';
}

/**
 * Build AGENTS.md from SKILL.md and docs
 */
function build() {
    console.log('Building AGENTS.md...\n');

    // Read SKILL.md
    if (!fs.existsSync(SKILL_FILE)) {
        console.error('Error: SKILL.md not found');
        process.exit(1);
    }

    const skillContent = fs.readFileSync(SKILL_FILE, 'utf-8');

    // Read documentation files
    const sections = [
        { title: 'Syntax Reference', dir: 'syntax' },
        { title: 'Standard Library API', dir: 'stdlib' },
        { title: 'Tools Guide', dir: 'tools' },
        { title: 'Examples', dir: 'examples' }
    ];

    let output = skillContent;
    output += '\n\n---\n\n# Extended Documentation\n\n';

    // Generate TOC
    const tocSections = sections.filter(s => {
        const dir = path.join(DOCS_DIR, s.dir);
        return fs.existsSync(dir) && fs.readdirSync(dir).length > 0;
    });

    output += generateTOC(tocSections);

    // Append documentation sections
    for (const section of sections) {
        const sectionDir = path.join(DOCS_DIR, section.dir);
        const files = readMarkdownFiles(sectionDir);

        if (files.length === 0) {
            continue;
        }

        output += `\n## ${section.title}\n\n`;

        // Create index of files
        output += '<details>\n<summary>Click to expand file list</summary>\n\n';
        for (const file of files) {
            output += `- \`${file.path}\`\n`;
        }
        output += '\n</details>\n\n';

        // Include key files (limit to avoid huge output)
        const keyFiles = files.slice(0, 10);
        for (const file of keyFiles) {
            output += `### ${file.path}\n\n`;
            output += file.content + '\n\n';
        }

        if (files.length > 10) {
            output += `*... and ${files.length - 10} more files in docs/${section.dir}/*\n\n`;
        }
    }

    // Write output
    fs.writeFileSync(OUTPUT_FILE, output);

    console.log(`Generated: ${OUTPUT_FILE}`);
    console.log(`Total size: ${(output.length / 1024).toFixed(2)} KB`);
}

// Run build
build();
