// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
  
// };

// module.exports = {
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/,
//       issuer: {
//         test: /\.(js|ts)x?$/,
//       },
//       use: ["@svgr/webpack"],
//     });
//     return config;
//   },
// };


// module.exports={
// webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/,
//       use: [
//         {
//           loader: '@svgr/webpack',
//           issuer: /\.[jt]sx?$/,
//           options: {
//             prettier: false,
//             svgo: true,
//             svgoConfig: {
//               // plugins: [
//               //   {
//               //     name: 'removeViewBox',
//               //     active: false,
//               //   },
//               // ],
//               plugins: [
//                 {
//                   name: 'preset-default',
//                   params:{
//                     override:{
//                       removeViewBox: false
//                     }
//                   }
//                 },
//               ],
//             },
//             titleProp: true,
//           },
//         },
//         'url-loader',
//       ],
//     });

//     return config;
//   },
// };

module.exports = {
	images: {
		domains: ['courses-top.ru']
	},
	webpack(config, options) {
		config.module.rules.push({
			loader: '@svgr/webpack',
			options: {
				prettier: false,
				svgo: true,
				svgoConfig: {
					plugins: [{ removeViewBox: false }],
				},
				titleProp: true,
			},
			test: /\.svg$/,
		});

		return config;
	},
};