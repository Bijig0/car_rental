const toyotaLandcruiser202213 = new Proxy({"src":"/_astro/toyota-landcruiser-2022-13.DeZtyhHw.webp","width":2880,"height":1400,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/a61403/Desktop/car_rental/src/images/listing/toyota-landcruiser-2022/toyota-landcruiser-2022-13.webp";
							}
							
							return target[name];
						}
					});

export { toyotaLandcruiser202213 as default };
