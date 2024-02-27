const porsche91120134 = new Proxy({"src":"/_astro/porsche-911-2013-4.rq3iQLH-.jpg","width":2880,"height":1400,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/a61403/Desktop/car_rental/src/images/listing/porsche-911-2013/porsche-911-2013-4.jpg";
							}
							
							return target[name];
						}
					});

export { porsche91120134 as default };
