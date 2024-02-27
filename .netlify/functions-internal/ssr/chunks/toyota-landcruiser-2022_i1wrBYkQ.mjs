const toyotaLandcruiser2022 = new Proxy({"src":"/_astro/toyota-landcruiser-2022.DWCtTIQ2.png","width":1460,"height":780,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/a61403/Desktop/car_rental/src/images/car-cards/toyota-landcruiser-2022.png";
							}
							
							return target[name];
						}
					});

export { toyotaLandcruiser2022 as default };
