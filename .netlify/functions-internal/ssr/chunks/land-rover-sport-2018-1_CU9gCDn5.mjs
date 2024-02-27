const landRoverSport20181 = new Proxy({"src":"/_astro/land-rover-sport-2018-1.C6toRwMC.jpg","width":2880,"height":1400,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/a61403/Desktop/car_rental/src/images/listing/land-rover-sport-2018/land-rover-sport-2018-1.jpg";
							}
							
							return target[name];
						}
					});

export { landRoverSport20181 as default };
