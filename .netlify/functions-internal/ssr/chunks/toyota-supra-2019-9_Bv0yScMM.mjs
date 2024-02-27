const toyotaSupra20199 = new Proxy({"src":"/_astro/toyota-supra-2019-9.CXC4_z7N.jpg","width":2880,"height":1400,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/a61403/Desktop/car_rental/src/images/listing/toyota-supra-2019/toyota-supra-2019-9.jpg";
							}
							
							return target[name];
						}
					});

export { toyotaSupra20199 as default };
