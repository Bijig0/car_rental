const toyotaLandcruiser20229 = new Proxy({"src":"/_astro/toyota-landcruiser-2022-9.DjL9jkMG.jpg","width":2880,"height":1400,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/a61403/Desktop/car_rental/src/images/listing/toyota-landcruiser-2022/toyota-landcruiser-2022-9.jpg";
							}
							
							return target[name];
						}
					});

export { toyotaLandcruiser20229 as default };
