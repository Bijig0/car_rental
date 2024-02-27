const toyotaSupra2019 = new Proxy({"src":"/_astro/toyota-supra-2019.BM_sfPeT.png","width":1460,"height":780,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/a61403/Desktop/car_rental/src/images/car-cards/toyota-supra-2019.png";
							}
							
							return target[name];
						}
					});

export { toyotaSupra2019 as default };
