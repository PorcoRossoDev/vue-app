import fs from 'fs';
import path from 'path';

const __dirname = path.resolve(); // vì dùng ESM
const dbDir = path.join(__dirname, 'db');

const data = {};

fs.readdirSync(dbDir).forEach(file => {
  const content = fs.readFileSync(path.join(dbDir, file), 'utf-8');
  const key = path.basename(file, '.json');
  data[key] = JSON.parse(content);
});

fs.writeFileSync('db-combined.json', JSON.stringify(data, null, 2));
