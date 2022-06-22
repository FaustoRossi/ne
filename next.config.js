/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	eslint: {
		ignoreDuringBuilds: true,
	},
	images: {
		domains: ["imdb-api.com"],
	},
};

module.exports = nextConfig;
