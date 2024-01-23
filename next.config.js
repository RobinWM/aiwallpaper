/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'gpts-works.s3.us-west-1.amazonaws.com',
      'trysai.s3.us-west-1.amazonaws.com',
      'robinawstest001.s3.ap-southeast-1.amazonaws.com',
    ],
  },
}

module.exports = nextConfig
