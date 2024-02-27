const toyotaLandcruiser202214 = new Proxy({"src":"/_astro/toyota-landcruiser-2022-14.WdfJUsXh.jpg","width":2880,"height":1400,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/a61403/Desktop/car_rental/src/images/listing/toyota-landcruiser-2022/toyota-landcruiser-2022-14.jpg";
							}
							
							return target[name];
						}
					});

export { toyotaLandcruiser202214 as default };
