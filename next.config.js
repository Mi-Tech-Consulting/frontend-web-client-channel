/** @type {import('next').NextConfig} */


var devconfig;
try {

  devconfig = require('./dev.next.config.js')

} catch (ex) {

}


const nextConfig = {
  ...(devconfig ? devconfig : {}),
  basePath: '/channel',
  crossOrigin: 'use-credentials',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com'
      },
      {
        protocol: 'https',
        hostname: 'avatar.vercel.sh'
      }
    ]
  }
};

module.exports = nextConfig;
