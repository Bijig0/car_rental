const landRoverVelar2017Main = new Proxy({"src":"/_astro/land-rover-velar-2017-main.DNjmUFob.jpg","width":2880,"height":1400,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/a61403/Desktop/car_rental/src/images/listing/land-rover-velar-2017/land-rover-velar-2017-main.jpg";
							}
							
							return target[name];
						}
					});

export { landRoverVelar2017Main as default };
