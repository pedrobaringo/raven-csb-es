Hooks.once("init", function() {
    console.log("Initializing Raven module")

    game.settings.register("raven-csb-es", "firstTimeStart", {
       name: "Forzar mensaje de Bienvenida",
        hint: "Si marcas esta casilla te aparecerá el mensaje de bienvenida en el chat la próxima vez que entres.",
        scope: "client",
        config: true,
        default: false,
        type: Boolean
    })
})

Hooks.once("ready", function() {
	let buttonId=Date.now();
	let buttonId2=Date.now()+2;
	let mensbienv='<h1>Bienvenido al módulo de Raven</h1>';
	let mensimpfirst='<p>Importa los compendios para empezar a usar el módulo</p><button id='+buttonId2+' style= "font-family: Darktown;">Importa los Compendios</button>';
	let mensimpact='<p>Se ha actualizado el módulo desde la última vez que lo usaste. Importa los compendios para tener la última versión de las Templates de actores y objetos.</p><button id='+buttonId2+' style= "font-family: Darktown;">Importa los Compendios</button>'
	let mensrecordtut='<p>Si quieres más información sobre el uso de éste módulo:</p><button id='+buttonId+' style= "font-family: Darktown;">Ve al Tutorial</button>';
	
	let forzarbienvenida=game.settings.get("raven-csb-es", "firstTimeStart");
	let forzarmensaje;
	console.log(forzarmensaje);
	if (forzarbienvenida==true) {
		forzarmensaje=true;
	}
	let versactual=game.modules.get("raven-csb-es").version;
	let userisGM=game.user.isGM;
	if (userisGM) {
		if(!game.user.getFlag("raven-csb-es", "welcomeMessage") || forzarmensaje==true) {
			let msg=mensbienv+mensimpfirst+mensrecordtut;
			ChatMessage.create({
        		speaker: {alias:"Lord Poe Corvus"},
        		content: msg,
				whisper : ChatMessage.getWhisperRecipients(game.user.name)
			}).then(() => {
				setTimeout(() => {
				function openInNewTab(url) {
					const win = window.open(url, '_blank');
					win.focus();
				}
				const button = document.getElementById(buttonId);
				if (button) {
					button.addEventListener("click",function () {
						openInNewTab('https://github.com/pedrobaringo/raven-csb-es')
					});
				}
				const button2 = document.getElementById(buttonId2);
				if (button2) {
					button2.addEventListener("click",function () {
						let collection2 = game.packs.get("raven-csb-es.actores");
						let folderident2=''
						if (game.folders.getName("Actor Templates")) {
							folderident2=game.folders.getName("Actor Templates").id;
						}
						let docs2 =  collection2.importAll({folderId: folderident2, folderName: "Actor Templates", keepId: true});
						game.user.setFlag("raven-csb-es", "welcomeMessage", true);
						game.user.setFlag("raven-csb-es", "lastVersion", game.modules.get("raven-csb-es").version);
					});
				}
				}, 100);
			});
			game.settings.set("raven-csb-es", "firstTimeStart", false);
		} else if (versactual!=game.user.getFlag("raven-csb-es", "lastVersion")) {
			let msg=mensbienv+mensimpact+mensrecordtut;
			ChatMessage.create({
					speaker: {alias:"Lord Poe Corvus"},
					content: msg,
			   whisper : ChatMessage.getWhisperRecipients(game.user.name)
			}).then(() => {
				setTimeout(() => {
				function openInNewTab(url) {
					const win = window.open(url, '_blank');
					win.focus();
				}
				const button = document.getElementById(buttonId);
				if (button) {
					button.addEventListener("click",function () {
						openInNewTab('https://github.com/pedrobaringo/raven-csb-es')
					});
				}
				const button2 = document.getElementById(buttonId2);
				if (button2) {
					button2.addEventListener("click",function () {
						let collection2 = game.packs.get("raven-csb-es.actores");
						let folderident2=''
						if (game.folders.getName("Actor Templates")) {
							folderident2=game.folders.getName("Actor Templates").id;
						}
						let docs2 =  collection2.importAll({folderId: folderident2, folderName: "Actor Templates", keepId: true});
						game.user.setFlag("raven-csb-es", "lastVersion", game.modules.get("raven-csb-es").version);
					});
				}
				}, 500);
			});
		}
	} else if (!game.user.getFlag("raven-csb-es", "welcomeMessage") || forzarmensaje==true) {
		let msg = mensbienv+mensrecordtut;
		ChatMessage.create({
        		speaker: {alias:"Lord Poe Corvus"},
        		content: msg,
				whisper : ChatMessage.getWhisperRecipients(game.user.name)
		}).then(() => {
			setTimeout(() => {
			function openInNewTab(url) {
				const win = window.open(url, '_blank');
				win.focus();
			}
			const button = document.getElementById(buttonId);
			if (button) {
				button.addEventListener("click",function () {
					openInNewTab('https://github.com/pedrobaringo/raven-csb-es');
				});
			}
			}, 100);
		});
		game.user.setFlag("raven-csb-es", "welcomeMessage", true);
		game.settings.set("raven-csb-es", "firstTimeStart", false);
	}
})