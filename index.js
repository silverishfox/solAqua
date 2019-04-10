// const imagemin = require('imagemin');
// const imageminMozjpeg = require('imagemin-mozjpeg');

// (async() => {
//   try{
//   	const files = await imagemin(
//       ['/*.jpg'],
//       'optJpg',
//       {plugins: [imageminMozjpeg({quality: 50})]}
//   );
//   console.log(files);
// }
// catch(e){
// 	console.log('Catch an error: ', e);
// }
// })();
const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');

(async () => {
    await imagemin(['build/images/solarenergy/se/*.jpg'], 'imagesmin', {
        use: [
            imageminMozjpeg()
        ]
    });

    console.log('Images optimized');
})();

(async () => {
    await imagemin(['build/images/*/*.png'], 'imagesmin', {
        plugins: [
            imageminPngquant()
        ]
    });

    console.log('Images optimized');
})();
