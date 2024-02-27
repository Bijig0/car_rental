const toyotaSupra2019Main = new Proxy({"src":"/_astro/toyota-supra-2019-main.D3Z0gWCk.jpg","width":2880,"height":1400,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/a61403/Desktop/car_rental/src/images/listing/toyota-supra-2019/toyota-supra-2019-main.jpg";
							}
							
							return target[name];
						}
					});

export { toyotaSupra2019Main as default };
