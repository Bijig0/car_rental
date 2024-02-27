const landRoverVelar20175 = new Proxy({"src":"/_astro/land-rover-velar-2017-5.CsTtcEyL.jpg","width":2880,"height":1400,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/a61403/Desktop/car_rental/src/images/listing/land-rover-velar-2017/land-rover-velar-2017-5.jpg";
							}
							
							return target[name];
						}
					});

export { landRoverVelar20175 as default };
