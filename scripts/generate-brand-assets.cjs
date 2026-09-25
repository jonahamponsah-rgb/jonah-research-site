const fs = require('node:fs');
const { createRequire } = require('node:module');
const sharp = createRequire(require.resolve('next/package.json'))('sharp');
(async () => {
  const icon = fs.readFileSync('app/icon.svg');
  await sharp(icon).resize(180, 180).png().toFile('app/apple-icon.png');
  const png = await sharp(icon).resize(48, 48).png().toBuffer();
  const header = Buffer.alloc(22);
  header.writeUInt16LE(1, 2); header.writeUInt16LE(1, 4);
  header[6] = 48; header[7] = 48; header.writeUInt16LE(1, 10); header.writeUInt16LE(32, 12);
  header.writeUInt32LE(png.length, 14); header.writeUInt32LE(22, 18);
  fs.writeFileSync('app/favicon.ico', Buffer.concat([header, png]));
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
    <rect width="1200" height="630" fill="#f7f4ee"/>
    <path d="M70 70H1130" stroke="#805c30" stroke-width="3"/>
    <text x="70" y="139" font-family="Georgia,serif" font-size="44" fill="#25231f">JA<tspan fill="#805c30">.</tspan></text>
    <text x="70" y="235" font-family="Georgia,serif" font-size="65" fill="#25231f">Jonah Kwesi Amponsah, PhD</text>
    <text x="73" y="310" font-family="Arial,sans-serif" font-size="25" fill="#666158">Statistician · Machine Learning Researcher</text>
    <text x="73" y="350" font-family="Arial,sans-serif" font-size="25" fill="#666158">Implementation Scientist</text>
    <text x="73" y="443" font-family="Georgia,serif" font-size="36" fill="#805c30">Methods. Implementation. Impact.</text>
    <path d="M70 510H1130" stroke="#ded7cb"/>
    <text x="73" y="559" font-family="Arial,sans-serif" font-size="22" fill="#666158">jonahamponsah.com</text>
  </svg>`;
  await sharp(Buffer.from(svg)).png().toFile('public/social/jonah-amponsah.png');
})();
