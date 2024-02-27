const landRoverVelar2017 = new Proxy({"src":"/_astro/land-rover-velar-2017.D8eLW4To.png","width":1460,"height":780,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/a61403/Desktop/car_rental/src/images/car-cards/land-rover-velar-2017.png";
							}
							
							return target[name];
						}
					});

export { landRoverVelar2017 as default };
