/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	env: {
		ENTRY_POINT_ADDRESS: "0xA7ADB3EB913429052208d6C7BBCc65dCA2d96C4f",
		ACCOUNT_FACTORY_ADDRESS: "0x580F3F30Fc36FB0346eB3Ee73942dcA8021f43e6",
	},
};

module.exports = nextConfig;
