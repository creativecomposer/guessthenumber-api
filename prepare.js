const isProd = process.env.NODE_ENV === 'production';

if (!isProd) {
  console.log('Installing husky');
  require('husky').install('src/.husky');
} else {
  console.log('Environment is production. Do not install husky');
}
