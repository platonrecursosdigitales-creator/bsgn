const https = require('https');
const fs = require('fs');

https.get('https://bsgn-one.vercel.app/', (res) => {
  let html = '';
  res.on('data', d => html += d);
  res.on('end', () => {
    const scriptMatch = html.match(/<script type="module" crossorigin src="(\/assets\/index-[^"]+\.js)"><\/script>/);
    if(scriptMatch) {
      const scriptUrl = 'https://bsgn-one.vercel.app' + scriptMatch[1];
      https.get(scriptUrl, (res2) => {
        let js = '';
        res2.on('data', d => js += d);
        res2.on('end', () => {
          const area3 = js.match(/\/assets\/area3-[^"]+\.png/);
          const area4 = js.match(/\/assets\/area4-[^"]+\.png/);
          const area5 = js.match(/\/assets\/area5-[^"]+\.png/);
          
          if(area3) {
            https.get('https://bsgn-one.vercel.app' + area3[0], (imgRes) => {
              imgRes.pipe(fs.createWriteStream('src/assets/area3.png'));
              console.log('Downloaded area3.png');
            });
          }
          if(area4) {
            https.get('https://bsgn-one.vercel.app' + area4[0], (imgRes) => {
              imgRes.pipe(fs.createWriteStream('src/assets/area4.png'));
              console.log('Downloaded area4.png');
            });
          }
          if(area5) {
            https.get('https://bsgn-one.vercel.app' + area5[0], (imgRes) => {
              imgRes.pipe(fs.createWriteStream('src/assets/area5.png'));
              console.log('Downloaded area5.png');
            });
          }
        });
      });
    } else {
      console.log('No script match found');
    }
  });
});
