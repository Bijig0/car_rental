const toyotaLandcruiser202212 = new Proxy({"src":"/_astro/toyota-landcruiser-2022-12.CUAIwrqT.webp","width":2880,"height":1400,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/a61403/Desktop/car_rental/src/images/listing/toyota-landcruiser-2022/toyota-landcruiser-2022-12.webp";
							}
							
							return target[name];
						}
					});

export { toyotaLandcruiser202212 as default };
