const toyotaSupra20191 = new Proxy({"src":"/_astro/toyota-supra-2019-1.GP0Di1E7.jpg","width":2880,"height":1400,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/a61403/Desktop/car_rental/src/images/listing/toyota-supra-2019/toyota-supra-2019-1.jpg";
							}
							
							return target[name];
						}
					});

export { toyotaSupra20191 as default };
