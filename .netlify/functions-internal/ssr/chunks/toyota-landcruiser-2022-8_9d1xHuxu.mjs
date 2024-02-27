const toyotaLandcruiser20228 = new Proxy({"src":"/_astro/toyota-landcruiser-2022-8.BH3oM8ln.jpg","width":2880,"height":1400,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/a61403/Desktop/car_rental/src/images/listing/toyota-landcruiser-2022/toyota-landcruiser-2022-8.jpg";
							}
							
							return target[name];
						}
					});

export { toyotaLandcruiser20228 as default };
