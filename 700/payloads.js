//------BIG THANKS TO SISTRO FOR THIS !!!!!--------

var LoadedMSG = "Payload Carregado!";

var getPayload = function(payload, onLoadEndCallback) {
  var req = new XMLHttpRequest();
  req.open('GET', payload);
  req.send();
  req.responseType = "arraybuffer";
  req.onload = function (event) {
      if (onLoadEndCallback) onLoadEndCallback(req, event);
  };
}

var sendPayload = function(url, data, onLoadEndCallback) {
  var req = new XMLHttpRequest();
  req.open("POST", url, true);
  req.send(data);

  req.onload = function (event) {
      if (onLoadEndCallback) onLoadEndCallback(req, event);
  };
}

//Load payloads with GoldHEN

function Loadpayloadlocal(PLfile){ //Loading Payload via Payload Param.
    var PS4IP = "127.0.0.1";

	// First do an initial check to see if the BinLoader server is running, ready or busy.
	var req = new XMLHttpRequest();
    if (PS4IP == "127.0.0.1") {
      req.open("POST", `http://${PS4IP}:9090/status`);
    } else {
      req.open("GET", `http://${PS4IP}:9090/status`);
    }
		req.send();
		req.onerror = function(){
			console.log("Servidor BinLoader não está rodando, tentando carregar o payload online...");
            Loadpayloadonline(PLfile);
			return;
		};
		req.onload = function(){
			var responseJson = JSON.parse(req.responseText);
			if (responseJson.status=="ready"){
		    getPayload(PLfile, function (req) {
				if ((req.status === 200 || req.status === 304) && req.response) {
				    //Sending bins via IP POST Method
                    sendPayload(`http://${PS4IP}:9090`, req.response, function (req) {
                        if (req.status === 200) {
                            //alert("Payload sent !");
                        }else{
                            console.log('Payload não enviado, tentando carregar o payload online...');
                            setTimeout(() => {
                                Loadpayloadonline(PLfile);
                            }, 3000); // 3 seconds delay
                            return;
                        }
                    })
                }
			});
			} else {
				alert("Não é possível carregar o Payload porque o Servidor BinLoader está ocupado");//<<If server is busy, alert message.
				return;
		  }
	  };
  }

//--------------------------------------------------

//------Payloads--------

// Load Payloads with exploit

function Loadpayloadonline(PLfile) {
    window.payload_path = PLfile;
    // If we have access to toogle_payload from lapse.js, use it
    if (typeof window.toogle_payload === 'function') {
        window.toogle_payload(PLfile);
    } else {
        console.log('Payload definido para carregar após o exploit: ' + PLfile);
    }
}

// PSFree Fix

function load_PSFreeFix(){
    const Confirmation = confirm("Tem certeza de que deseja carregar o payload do PSFree Fix?");
    if (Confirmation) {
        // First try local loading through GoldHen
        Loadpayloadlocal("./payloads/ps4-psfree-fix.bin");
        
        // Also show loading message
        if (document.getElementById('log')) {
            awaitpl();
            LoadedMSG = "Payload do PSFree Fix Carregado!";
        }
    }
}

// App2USB - Transfer Apps to USB
function load_app2usb(){
    const Confirmation = confirm("Carregar payload App2USB? Isso permite transferir aplicativos para armazenamento USB.");
    if (Confirmation) {
        Loadpayloadlocal("./payloads/app2usb.bin");
        if (document.getElementById('log')) {
            awaitpl();
            LoadedMSG = "Payload App2USB Carregado!";
        }
    }
}

// AppCache Install
function load_appcache_install(){
    const Confirmation = confirm("Carregar payload AppCache Install?");
    if (Confirmation) {
        Loadpayloadlocal("./payloads/appcache-install.bin");
        if (document.getElementById('log')) {
            awaitpl();
            LoadedMSG = "Payload AppCache Install Carregado!";
        }
    }
}

// Backup
function load_backup(){
    const Confirmation = confirm("Carregar payload Backup? Isso fará backup dos dados do seu sistema.");
    if (Confirmation) {
        Loadpayloadlocal("./payloads/backup.bin");
        if (document.getElementById('log')) {
            awaitpl();
            LoadedMSG = "Payload Backup Carregado!";
        }
    }
}

// Disable Updates
function load_disable_updates(){
    const Confirmation = confirm("Carregar payload Disable Updates? Isso bloqueará as atualizações do sistema.");
    if (Confirmation) {
        Loadpayloadlocal("./payloads/disable-updates.bin");
        if (document.getElementById('log')) {
            awaitpl();
            LoadedMSG = "Payload Disable Updates Carregado!";
        }
    }
}

// Enable Updates
function load_enable_updates(){
    const Confirmation = confirm("Carregar payload Enable Updates? Isso permitirá as atualizações do sistema.");
    if (Confirmation) {
        Loadpayloadlocal("./payloads/enable-updates.bin");
        if (document.getElementById('log')) {
            awaitpl();
            LoadedMSG = "Payload Enable Updates Carregado!";
        }
    }
}

// FTP Server
function load_ftp(){
    const Confirmation = confirm("Carregar payload FTP Server? Isso iniciará um servidor FTP no seu PS4.");
    if (Confirmation) {
        Loadpayloadlocal("./payloads/ftp.bin");
        if (document.getElementById('log')) {
            awaitpl();
            LoadedMSG = "Payload FTP Server Carregado!";
        }
    }
}

// History Blocker
function load_history_blocker(){
    const Confirmation = confirm("Carregar payload History Blocker? Isso bloqueará o rastreamento do histórico do navegador.");
    if (Confirmation) {
        Loadpayloadlocal("./payloads/history-blocker.bin");
        if (document.getElementById('log')) {
            awaitpl();
            LoadedMSG = "Payload History Blocker Carregado!";
        }
    }
}

// PS4 Debug
function load_ps4debug(){
    const Confirmation = confirm("Carregar payload PS4Debug? Isso habilita recursos de depuração.");
    if (Confirmation) {
        Loadpayloadlocal("./payloads/ps4debug.bin");
        if (document.getElementById('log')) {
            awaitpl();
            LoadedMSG = "Payload PS4Debug Carregado!";
        }
    }
}

// PUP Decrypt
function load_pup_decrypt(){
    const Confirmation = confirm("Carregar payload PUP Decrypt? Isso permite descriptografar arquivos de atualização do PS4.");
    if (Confirmation) {
        Loadpayloadlocal("./payloads/pup-decrypt.bin");
        if (document.getElementById('log')) {
            awaitpl();
            LoadedMSG = "Payload PUP Decrypt Carregado!";
        }
    }
}

// Restore
function load_restore(){
    const Confirmation = confirm("Carregar payload Restore? Isso irá restaurar os dados do seu sistema.");
    if (Confirmation) {
        Loadpayloadlocal("./payloads/restore.bin");
        if (document.getElementById('log')) {
            awaitpl();
            LoadedMSG = "Payload Restore Carregado!";
        }
    }
}

// RIF Renamer
function load_rif_renamer(){
    const Confirmation = confirm("Carregar payload RIF Renamer? Esta ferramenta gerencia arquivos de licença.");
    if (Confirmation) {
        Loadpayloadlocal("./payloads/rif-renamer.bin");
        if (document.getElementById('log')) {
            awaitpl();
            LoadedMSG = "Payload RIF Renamer Carregado!";
        }
    }
}

// WebRTE
function load_webrte(){
    const Confirmation = confirm("Carregar payload WebRTE? Isso habilita recursos de edição em tempo real.");
    if (Confirmation) {
        Loadpayloadlocal("./payloads/WebRTE_900.bin");
        if (document.getElementById('log')) {
            awaitpl();
            LoadedMSG = "Payload WebRTE Carregado!";
        }
    }
}

// Make all functions globally available
window.load_PSFreeFix = load_PSFreeFix;
window.load_app2usb = load_app2usb;
window.load_appcache_install = load_appcache_install;
window.load_backup = load_backup;
window.load_disable_updates = load_disable_updates;
window.load_enable_updates = load_enable_updates;
window.load_ftp = load_ftp;
window.load_history_blocker = load_history_blocker;
window.load_ps4debug = load_ps4debug;
window.load_pup_decrypt = load_pup_decrypt;
window.load_restore = load_restore;
window.load_rif_renamer = load_rif_renamer;
window.load_webrte = load_webrte;
