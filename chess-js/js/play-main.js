var NIZ_FIGURA = ["top", "konj", "lovac", "dama", "kralj", "pesak"];

class Figura {
	constructor(x, y, tip, boja) {
		this.x = x;
		this.y = y;
		this.tip = tip;
		this.boja = boja;
	}
}

class Tabla {
	constructor() {
		this.figura = [];
		for (let i = 0; i < 8; i++) {
			for (let j = 0; j < 8; j++) {
				this.figura.push(new Figura(i, j, null, null));
			}
		}
	}

	deo(x, y) {
		for (let i = 0; i < this.figura.length; i++) {
			if (this.figura[i].x === x && this.figura[i].y === y) {
				return true;
			}
		}
		return false;
	}

	getFigura(x, y) {
		for (let i = 0; i < this.figura.length; i++) {
			if (this.figura[i].x === x && this.figura[i].y === y) {
				return this.figura[i];
			}
		}
		return null;
	}

	setFigura(x, y, figura) {
		for (let i = 0; i < this.figura.length; i++) {
			if (this.figura[i].x === x && this.figura[i].y === y) {
				this.figura[i] = figura;
			}
		}
	}
}
/*
class Pesak extends Figura {
	constructor(x, y, tip, boja) {
		super(x, y, tip, boja);
		this.pozicija = true;
	}

	proveri_potez(novo_x, novo_y) {
		const pomeraj_x = novo_x - this.x;
		const pomeraj_y = novo_y - this.y;
		const pomeraj_x1 = Math.abs(pomeraj_x);
		const pomeraj_y1 = Math.abs(pomeraj_y);
		const tabla = new Tabla();

		if (novo_x < 1 || novo_x > 8 || novo_y < 1 || novo_y > 8) {
			return false;
		}

		if (this.boja === "bela_figura") {

			if (pomeraj_x === 0 && pomeraj_y === 1) {
				return !tabla.deo(novo_x, novo_y);
			}

			else if (
				this.pozicija &&
				pomeraj_x === 0 &&
				pomeraj_y === 2 &&
				pomeraj_x1 === 0 &&
				!tabla.deo(this.x, this.y + 1) &&
				!tabla.deo(this.x, this.y + 2)
			) {
				this.pozicija = false;
				return !tabla.deo(novo_x, novo_y);
			}
			else if (
				pomeraj_x1 === 1 &&
				pomeraj_y === 1 &&
				tabla.deo(novo_x, novo_y) &&
				tabla.getFigura(novo_x, novo_y).boja !== this.boja &&
				pomeraj_x === 0
			) {
				return true;
			}
		} else {

			if (pomeraj_x === 0 && pomeraj_y === -1) {
				return !tabla.deo(novo_x, novo_y);
			} else if (
				this.pozicija &&
				pomeraj_x === 0 &&
				pomeraj_y === -2 &&
				pomeraj_x1 === 0 &&
				!tabla.deo(this.x, this.y - 1) &&
				!tabla.deo(this.x, this.y - 2)
			) {
				this.pozicija = false;
				return !tabla.deo(novo_x, novo_y);
			} else if (
				pomeraj_x1 === 1 &&
				pomeraj_y === -1 &&
				tabla.deo(novo_x, novo_y) &&
				tabla.getFigura(novo_x, novo_y).boja !== this.boja &&
				pomeraj_x === 0
			) {
				return true;
			}
		}

		return false;
	}

	proveri_putanju(nova_x, nova_y) {
		const pomeraj_x = nova_x - this.x;
		const pomeraj_y = nova_y - this.y;
		const pomeraj_x1 = Math.abs(pomeraj_x);
		const pomeraj_y1 = Math.abs(pomeraj_y);
		const tabla = new Tabla();
		let cilj_x = this.x;
		let cilj_y = this.y;

		if (pomeraj_y > 0) {
			cilj_y++;
		} else if (pomeraj_y < 0) {
			cilj_y--;
		}

		while (cilj_x !== nova_x) {
			if (pomeraj_x1 === 1 && pomeraj_y1 === 1) {
				if (
					(this.boja === "bela_figura" && pomeraj_y1 === -1) ||
					(this.boja === "crni_figura" && pomeraj_y1 === 1)
				) {
					if (tabla.deo(cilj_x, cilj_y)) {
						return true;
					}
				}
			}
			if (tabla.deo(cilj_x, cilj_y)) {
				return false;
			}
			if (pomeraj_x > 0) {
				cilj_x++;
			} else if (pomeraj_x < 0) {
				cilj_x--;
			}
		}
		return true;
	}
}

 */

class Pesak extends Figura {
	constructor(x, y, tip, boja) {
		super(x, y, tip, boja);
	}

	proveri_potez(novo_x, novo_y) {
		var pomeraj_x = novo_x - this.x;
		var pomeraj_y = novo_y - this.y;

		if (pomeraj_x!=pomeraj_y)
			return true;
		else if((pomeraj_x > 0) || (pomeraj_x < 0))
			return true;

		return false;

	}

	proveri_putanju(novo_x, novo_y) {
		var pomeraj_x = this.x - novo_x;
		var pomeraj_y = this.y + novo_y;

		var i = parseInt(this.x);
		var j = parseInt(this.y);
		var pera = true;

		for (;;) {
			if(this.boja == "bela_figura"){

				if(this.y == 2 && novo_y == 4 && this.x == novo_x){
					$(".polje_div").each(function() {
						if ($(this).attr("data-pozicija_x") == novo_x && $(this).attr("data-pozicija_y") == novo_y) {
							if ($(this).hasClass("crna_figura") || $(this).hasClass("bela_figura")) {
								pera = false;
								return false;
							}
						}
					});
					if(pera==false) break;
					else return true;
				}
				else if(this.y == novo_y-1 && this.x == novo_x){

					$(".polje_div").each(function() {
						if ($(this).attr("data-pozicija_x") == novo_x && $(this).attr("data-pozicija_y") == novo_y) {
							if ($(this).hasClass("crna_figura") || $(this).hasClass("bela_figura")) {
								pera = false;
								return false;
							}
						}
					});
					if(pera==false) break;
					else return true;
				}
				else if(this.y == novo_y-1 && this.x-1 == novo_x){
					$(".polje_div").each(function() {
						if ($(this).attr("data-pozicija_x") == novo_x && $(this).attr("data-pozicija_y") == novo_y) {
							if ($(this).hasClass("crna_figura")) {
								console.log("mera");
								pera = false;
								return false;
							}
						}
					});
					if(pera==true) break;
					else return true;
				}
				else if(this.y == novo_y-1 && this.x == novo_x-1){
					$(".polje_div").each(function() {
						if ($(this).attr("data-pozicija_x") == novo_x && $(this).attr("data-pozicija_y") == novo_y) {
							if ($(this).hasClass("crna_figura")) {
								pera = false;
								return false;
							}
						}
					});
					if(pera==true) break;
					else return true;
				}
				else {
					return false;
				}
			} else if(this.boja == "crna_figura"){

				if(this.y == 7 && novo_y == 5 && this.x == novo_x){

					$(".polje_div").each(function() {
						if ($(this).attr("data-pozicija_x") == novo_x && $(this).attr("data-pozicija_y") == novo_y) {
							if ($(this).hasClass("crna_figura")) {
								pera = false;
								return false;
							}
						}
					});
					if(pera==false) break;
					else return true;
				}
				else if(this.y-1 == novo_y && this.x == novo_x){
					$(".polje_div").each(function() {
						if ($(this).attr("data-pozicija_x") == novo_x && $(this).attr("data-pozicija_y") == novo_y) {
							if ($(this).hasClass("bela_figura")) {
								pera = false;
								return false;
							}
						}
					});
					if(pera==false) break;
					else return true;
				}
				else if(this.y-1 == novo_y && this.x-1 == novo_x){
					$(".polje_div").each(function() {
						if ($(this).attr("data-pozicija_x") == novo_x && $(this).attr("data-pozicija_y") == novo_y) {
							if ($(this).hasClass("crna_figura")) {
								pera = false;
								return false;
							}
						}
					});
					if(pera==false) break;
					else return true;
				}
				else if(this.y-1 == novo_y && this.x == novo_x-1){
					$(".polje_div").each(function() {
						if ($(this).attr("data-pozicija_x") == novo_x && $(this).attr("data-pozicija_y") == novo_y) {
							if ($(this).hasClass("crna_figura")) {
								pera = false;
								return false;
							}
						}
					});
					if(pera==false) break;
					else return true;
				}
				else return false;
			}

		}
		return false;
	}
}



class Lovac extends Figura {
	constructor(x, y, tip, boja) {
		super(x, y, tip, boja);
	}

	proveri_potez(novo_x, novo_y) {
		var pomeraj_x = novo_x - this.x;
		var pomeraj_y = novo_y - this.y;

		if (Math.abs(pomeraj_x) == Math.abs(pomeraj_y)) return true;

		return false;
	}

	/*
	 * Metoda proverava da li se neka figura nalazi na putu
	 */
	proveri_putanju(novo_x, novo_y) {
		var pomeraj_x = this.x - novo_x;
		var pomeraj_y = this.y - novo_y;

		var i = parseInt(this.x);
		var j = parseInt(this.y);
		var ne_sadrzi_figuru = true;

		for (;;) {
			if (pomeraj_x < 0) i = i + 1;
			else i = i - 1;

			if (pomeraj_y < 0) j = j + 1;
			else j = j - 1;

			if (i == novo_x) break;

			$(".polje_div").each(function() {
				if ($(this).attr("data-pozicija_x") == i && $(this).attr("data-pozicija_y") == j) {
					if ($(this).hasClass("crna_figura") || $(this).hasClass("bela_figura")) {
						// postoji figura na polju
						ne_sadrzi_figuru = false;
					}

					return;
				}
			});

			if (!ne_sadrzi_figuru) break;
		}

		return ne_sadrzi_figuru;
	}

}
class Top extends Figura {
	constructor(x, y, tip, boja) {
		super(x, y, tip, boja);
	}

	proveri_potez(novo_x, novo_y) {
		var pomeraj_x = novo_x - this.x;
		var pomeraj_y = novo_y - this.y;

		if (pomeraj_x === 0 && pomeraj_y !== 0) return true;
		if (pomeraj_x !== 0 && pomeraj_y === 0) return true;

		return false;
	}

	proveri_putanju(novo_x, novo_y) {
		const pomeraj_x = novo_x - this.x;
		const pomeraj_y = novo_y - this.y;
		let i = parseInt(this.x);
		let j = parseInt(this.y);
		let ne_sadrzi_figuru = true;

		const pozicija_x = pomeraj_x === 0 ? 0 : (pomeraj_x > 0 ? 1 : -1);
		const pozicja_y = pomeraj_y === 0 ? 0 : (pomeraj_y > 0 ? 1 : -1);

		while (i != novo_x || j != novo_y) {
			i += pozicija_x;
			j += pozicja_y;
			$(".polje_div").each(function () {
				if ($(this).attr("data-pozicija_x") == i && $(this).attr("data-pozicija_y") == j) {
					if ($(this).hasClass("crna_figura") || $(this).hasClass("bela_figura")) {
						if (!(i == novo_x && j == novo_y)) {
							ne_sadrzi_figuru = false;
						}
					}
					return;
				}
			});
			if (!ne_sadrzi_figuru) break;
		}
		return ne_sadrzi_figuru;
	}
}

	class Konj extends Figura {
	constructor(x, y, tip, boja) {
		super(x, y, tip, boja);
	}

	proveri_potez(novo_x, novo_y) {
		var pomeraj_x = novo_x - this.x;
		var pomeraj_y = novo_y - this.y;
		var kretanje1=1;
		var kretanje2=2;
		if ((Math.abs(pomeraj_x)==kretanje1)&&(Math.abs(pomeraj_y)==kretanje2) ||
			(Math.abs(pomeraj_x)==kretanje2)&&(Math.abs(pomeraj_y)==kretanje1)) return true;

		return false;
	}
	proveri_putanju() {
		return true
	}

}

class Kralj extends Figura {
	constructor(x, y, tip, boja) {
		super(x, y, tip, boja);
	}

	proveri_potez(novo_x, novo_y) {
		var pomeraj_x = Math.abs(novo_x - this.x);
		var pomeraj_y = Math.abs(novo_y - this.y);
     	if ((pomeraj_x <= 1 && pomeraj_y === 0) ||
			(pomeraj_x === 0 && pomeraj_y <= 1) ||
			(pomeraj_x <= 1 && pomeraj_y <= 1)) {
			return true;
		}

		return false;
	}

	proveri_putanju() {
		return true;
	}
}
class Dama extends Figura {
	constructor(x, y, tip, boja) {
		super(x, y, tip, boja);
	}

	proveri_potez(novo_x, novo_y) {
		const pomeraj_x = novo_x - this.x;
		const pomeraj_y = novo_y - this.y;

		if( pomeraj_x == 0 || pomeraj_y == 0) return true;
		else if(Math.abs(pomeraj_x) == Math.abs(pomeraj_y)) return true;

		return false;
	}

	proveri_putanju(novo_x, novo_y) {
		var pomeraj_x = this.x - novo_x;
		var pomeraj_y = this.y - novo_y;

		var i = parseInt(this.x);
		var j = parseInt(this.y);
		var ne_sadrzi_figuru = true;

		if (pomeraj_x == 0) {
			while (j !== novo_y) {
				if (pomeraj_y < 0) j = j + 1;
				else j = j - 1;
				if (j == novo_y) break;
				$(".polje_div").each(function () {
					if ($(this).attr("data-pozicija_x") == i && $(this).attr("data-pozicija_y") == j) {
						if ($(this).hasClass("crna_figura") || $(this).hasClass("bela_figura")) {
							ne_sadrzi_figuru = false;
						}
						return;
					}
				});

				if (!ne_sadrzi_figuru) break;
			}
		} else if (pomeraj_y == 0) {
			while (i !== novo_x) {
				if (pomeraj_x < 0) i = i + 1;
				else i = i - 1;
				if (i == novo_x) break;
				$(".polje_div").each(function () {
					if ($(this).attr("data-pozicija_x") == i && $(this).attr("data-pozicija_y") == j) {
						if ($(this).hasClass("crna_figura") || $(this).hasClass("bela_figura")) {
							ne_sadrzi_figuru = false;
						}
						return;
					}
				});

				if (!ne_sadrzi_figuru) break;
			}
		} else {
			while (i !== novo_x) {
				if (pomeraj_x < 0) i = i + 1;
				else i = i - 1;

				if (pomeraj_y < 0) j = j + 1;
				else j = j - 1;

				if (i == novo_x) break;

				$(".polje_div").each(function () {
					if ($(this).attr("data-pozicija_x") == i && $(this).attr("data-pozicija_y") == j) {
						if ($(this).hasClass("crna_figura") || $(this).hasClass("bela_figura")) {
							ne_sadrzi_figuru = false;
						}

						return;
					}
				});

				if (!ne_sadrzi_figuru) break;
			}
		}

		return ne_sadrzi_figuru;
	}
}


	$(document).ready(function () {
	var odabrana_figura = null;
	var na_potezu = "bela_figura";

	function ponistavanje_odabira() {
		$(".belo_polje").css("border", "2px solid transparent");
		$(".crno_polje").css("border", "2px solid transparent");
	}

	function prikazi_nedozvoljen_potez() {
		alert("nedozvoljen potez");
		odabrana_figura = null;
		ponistavanje_odabira();
	}

	$(".polje_div").on("click", function () {
		var elem = $(this);

		ponistavanje_odabira();
		elem.parent().css("border", "2px solid red");

		if (odabrana_figura != null) {
			// u prethodnom koraku je odabrana neka figura
			// da li se na polju nalazi figura iste boje
			if (elem.hasClass(odabrana_figura.boja)) {
				// nalazi se figura iste boje
				prikazi_nedozvoljen_potez();
			}
			else if (!odabrana_figura.proveri_potez(elem.attr("data-pozicija_x"), elem.attr("data-pozicija_y"))) {
				// potez nije validan
				prikazi_nedozvoljen_potez();
			}
			else if (!odabrana_figura.proveri_putanju(elem.attr("data-pozicija_x"), elem.attr("data-pozicija_y"))) {
				// figura je na putu
				prikazi_nedozvoljen_potez();
			}
			else {
				// pomeri figuru
				var prethodno_polje = null;

				$(".polje_div").each(function() {
					if ($(this).attr("data-pozicija_x") == odabrana_figura.x && $(this).attr("data-pozicija_y") == odabrana_figura.y) {
						prethodno_polje = $(this);

						return;
					}
				});

				var figura_img = prethodno_polje.find("img");

				prethodno_polje.removeClass(odabrana_figura.boja).removeClass(odabrana_figura.tip);
				figura_img.remove();

				var stara_figura_img = elem.find("img");

				stara_figura_img.remove();
				elem.removeClass().addClass("polje_div");

				elem.append(figura_img);
				elem.addClass(odabrana_figura.boja).addClass(odabrana_figura.tip);


				if (na_potezu == "bela_figura") na_potezu = "crna_figura";
				else na_potezu = "bela_figura";

				odabrana_figura = null;
				ponistavanje_odabira();
			}
		}
		else {
			// nema odabrane figure
			// provera da li na odabranom polju postoji figura
			NIZ_FIGURA.forEach(function (item, index) {
				if (elem.hasClass(item)) {
					// nalazi se figura
					// da li je ta boja na potezu
					if (!elem.hasClass(na_potezu)) {
						alert("nisi na potezu");

						return;
					}

					var poz_x = elem.attr("data-pozicija_x");
					var poz_y = elem.attr("data-pozicija_y");

					switch (item) {
						case "pesak":
							odabrana_figura = new Pesak(poz_x, poz_y, "pesak", na_potezu);
							break;
						case "top":
							odabrana_figura = new Top(poz_x, poz_y, "top", na_potezu);
							break;
						case "konj":
							odabrana_figura = new Konj(poz_x, poz_y, "konj", na_potezu);
							break;
						case "lovac":
							odabrana_figura = new Lovac(poz_x, poz_y, "lovac", na_potezu);
							break;
						case "dama":
							odabrana_figura = new Dama(poz_x, poz_y, "dama", na_potezu);
							break;
						case "kralj":
							odabrana_figura = new Kralj(poz_x, poz_y, "kralj", na_potezu);
							break;
						default:
						//
					}

					return;
				}
			});


		}
	});

});