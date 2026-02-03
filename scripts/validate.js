#!/usr/bin/env node

/**
 * Validate skill structure and content
 */

const fs = require('fs');
const path = require('path');

const SKILL_DIR = path.join(__dirname, '..', 'skills', 'cangjie-dev');

const REQUIRED_FILES = [
    'SKILL.md',
    'metadata.json'
];

const OPTIONAL_FILES = [
    'AGENTS.md',
    'README.md'
];

let hasErrors = false;

function error(msg) {
    console.error(`❌ ${msg}`);
    hasErrors = true;
}

function success(msg) {
    console.log(`✅ ${msg}`);
}

function warning(msg) {
    console.log(`⚠️  ${msg}`);
}

// Check required files
console.log('\nChecking required files...\n');

for (const file of REQUIRED_FILES) {
    const filePath = path.join(SKILL_DIR, file);
    if (fs.existsSync(filePath)) {
        success(`Found: ${file}`);
    } else {
        error(`Missing: ${file}`);
    }
}

// Check optional files
console.log('\nChecking optional files...\n');

for (const file of OPTIONAL_FILES) {
    const filePath = path.join(SKILL_DIR, file);
    if (fs.existsSync(filePath)) {
        success(`Found: ${file}`);
    } else {
        warning(`Missing (optional): ${file}`);
    }
}

// Validate SKILL.md frontmatter
console.log('\nValidating SKILL.md...\n');

const skillPath = path.join(SKILL_DIR, 'SKILL.md');
if (fs.existsSync(skillPath)) {
    const content = fs.readFileSync(skillPath, 'utf-8');

    // Check frontmatter
    if (content.startsWith('---')) {
        const endIndex = content.indexOf('---', 3);
        if (endIndex > 0) {
            const frontmatter = content.substring(3, endIndex);

            if (frontmatter.includes('name:')) {
                success('Frontmatter has "name" field');
            } else {
                error('Frontmatter missing "name" field');
            }

            if (frontmatter.includes('description:')) {
                success('Frontmatter has "description" field');
            } else {
                error('Frontmatter missing "description" field');
            }

            if (frontmatter.includes('license:')) {
                success('Frontmatter has "license" field');
            } else {
                warning('Frontmatter missing "license" field (optional)');
            }
        } else {
            error('Invalid frontmatter format');
        }
    } else {
        error('SKILL.md missing frontmatter');
    }

    // Check content length
    const contentLength = content.length;
    console.log(`\nSKILL.md size: ${(contentLength / 1024).toFixed(2)} KB`);
}

// Validate metadata.json
console.log('\nValidating metadata.json...\n');

const metadataPath = path.join(SKILL_DIR, 'metadata.json');
if (fs.existsSync(metadataPath)) {
    try {
        const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf-8'));

        if (metadata.version) {
            success(`Version: ${metadata.version}`);
        } else {
            error('Missing "version" field');
        }

        if (metadata.abstract) {
            success('Has "abstract" field');
        } else {
            warning('Missing "abstract" field (optional)');
        }
    } catch (e) {
        error(`Invalid JSON: ${e.message}`);
    }
}

// Check docs directory
console.log('\nChecking docs directory...\n');

const docsDir = path.join(SKILL_DIR, 'docs');
if (fs.existsSync(docsDir)) {
    const subdirs = ['syntax', 'stdlib', 'tools', 'examples'];

    for (const subdir of subdirs) {
        const subdirPath = path.join(docsDir, subdir);
        if (fs.existsSync(subdirPath)) {
            const files = fs.readdirSync(subdirPath, { recursive: true })
                .filter(f => f.endsWith('.md'));
            success(`docs/${subdir}: ${files.length} markdown files`);
        } else {
            warning(`docs/${subdir}: directory not found`);
        }
    }
} else {
    warning('docs directory not found');
}

// Summary
console.log('\n' + '='.repeat(50));
if (hasErrors) {
    console.log('\n❌ Validation failed with errors\n');
    process.exit(1);
} else {
    console.log('\n✅ Validation passed\n');
    process.exit(0);
}
