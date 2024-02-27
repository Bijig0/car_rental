const porsche9112013 = new Proxy({"src":"/_astro/porsche-911-2013.CHqqmDun.png","width":1460,"height":780,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/a61403/Desktop/car_rental/src/images/car-cards/porsche-911-2013.png";
							}
							
							return target[name];
						}
					});

export { porsche9112013 as default };
