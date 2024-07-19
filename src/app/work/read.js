const fs = require('fs').promises;
const path = require('path');

async function getAllFiles(dirPath) {
    let files = [];

    const entries = await fs.readdir(dirPath, { recursive: true, withFileTypes: true });
    for (const entry of entries) {
        if (!(entry.isDirectory())) {
            let path = entry.parentPath + '/' + entry.name;
            files.push(path);
        }
    }
    return files;
}

async function getFileStats(files) {
    const fileStatsPromises = files.map(async (file) => {
        const stats = await fs.stat(file);
        return {
            file,
            mtime: stats.mtime,
        };
    });

    return Promise.all(fileStatsPromises);
}

export default async function sortFilesByDate(dirPath) {
    try {
        const files = await getAllFiles(dirPath);
        const fileStats = await getFileStats(files);

        fileStats.sort((a, b) => b.mtime - a.mtime);

        return fileStats.map((stat) => stat.file);
    } catch (err) {
        console.error('Error:', err);
    }
}
