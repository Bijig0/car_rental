const toyotaLandcruiser20221 = new Proxy({"src":"/_astro/toyota-landcruiser-2022-1.CRjWM5kB.webp","width":2880,"height":1400,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/a61403/Desktop/car_rental/src/images/listing/toyota-landcruiser-2022/toyota-landcruiser-2022-1.webp";
							}
							
							return target[name];
						}
					});

export { toyotaLandcruiser20221 as default };
