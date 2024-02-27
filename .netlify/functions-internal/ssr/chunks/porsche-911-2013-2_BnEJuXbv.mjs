const porsche91120132 = new Proxy({"src":"/_astro/porsche-911-2013-2.DqRFepNN.jpg","width":2880,"height":1400,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/a61403/Desktop/car_rental/src/images/listing/porsche-911-2013/porsche-911-2013-2.jpg";
							}
							
							return target[name];
						}
					});

export { porsche91120132 as default };
