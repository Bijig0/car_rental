const landRoverVelar20177 = new Proxy({"src":"/_astro/land-rover-velar-2017-7.C9PwYUqY.jpg","width":2880,"height":1400,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/a61403/Desktop/car_rental/src/images/listing/land-rover-velar-2017/land-rover-velar-2017-7.jpg";
							}
							
							return target[name];
						}
					});

export { landRoverVelar20177 as default };
