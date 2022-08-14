var p = prompt("PILIH : GAJAH, ORANG, SEMUT");

var comp = prompt("");

var hasil = "";

if (p == comp) {
	hasil = "serih";
} else if (p == "gajah") {
	hasil = comp == "orngh" ? "menang" : "kalah";
} else if (p == "orang") {
	hasil = comp == "gajah" ? "kalah" : "menang";
} else if (p == "semut") {
	hasil = comp == "orang" ? "kalah" : "menang";
} else {
	hasil = "kamu memasukan pilihan yang salah";
}

alert("kamu memilih " + p + "dn komputue memilih " + comp + "makah hasilnya kamu " + hasil);
