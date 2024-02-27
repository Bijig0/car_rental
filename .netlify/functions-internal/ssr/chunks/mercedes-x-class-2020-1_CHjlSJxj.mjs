const mercedesXClass20201 = new Proxy({"src":"/_astro/mercedes-x-class-2020-1.V5KixptO.jpg","width":2880,"height":1400,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/a61403/Desktop/car_rental/src/images/listing/mercedes-x-class-2020/mercedes-x-class-2020-1.jpg";
							}
							
							return target[name];
						}
					});

export { mercedesXClass20201 as default };
