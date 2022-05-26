const names = ["JALE", "ALİ", "MAHMUT", "MANSUR KÜRŞAD", "GAMZE", "MİRAÇ", "YÜCEL", "KUBİLAY", "HAYATİ", "BEDRİYE MÜGE", "BİRSEN", "SERDAL", "BÜNYAMİN", "ÖZGÜR", "FERDİ", "REYHAN", "İLHAN", "GÜLŞAH", "NALAN", "SEMİH", "ERGÜN", "FATİH", "ŞENAY", "SERKAN", "EMRE", "BAHATTİN", "IRAZCA", "HATİCE", "BARIŞ", "REZAN", "FATİH", "FUAT", "GÖKHAN", "ORHAN", "MEHMET", "EVREN", "OKTAY", "HARUN", "YAVUZ", "PINAR", "MEHMET", "UMUT", "MESUDE", "HÜSEYİN CAHİT", "HAŞİM ONUR", "EYYUP SABRİ", "MUSTAFA", "MUSTAFA", "UFUK", "AHMET ALİ", "MEDİHA", "HASAN", "KAMİL", "NEBİ", "ÖZCAN", "NAGİHAN", "CEREN", "SERKAN", "HASAN", "YUSUF KENAN", "ÇETİN", "TARKAN", "MERAL LEMAN", "ERGÜN", "KENAN AHMET", "URAL", "YAHYA", "BENGÜ", "FATİH NAZMİ", "DİLEK", "MEHMET", "TUFAN AKIN"]
const surnames = ["ŞEN", "KANDEMİR", "ÇEVİK", "ERKURAN", "TÜTEN", "ÖZTÜRK", "YÜZBAŞIOĞLU", "VURAL", "YÜCEL", "SÖNMEZ", "ERTEKİN", "DEDE", "UYANIK", "ASLAN", "AKBULUT", "ORHON", "UZ", "YAVUZ", "ERDEM", "KULAÇ", "KAYA", "SELVİ", "AKPINAR", "ABACIOĞLU", "ÇAY", "IŞIK", "ÖZER", "ÖZDEMİR", "ÖZTÜRK", "TAHTACI", "BÜYÜKCAM", "KULAKSIZ", "AKSEL", "EROĞLU", "KARAKUM", "DAL", "ÖCAL", "AYHAN", "YİĞİT", "YARBİL", "CANACANKATAN", "GÜMÜŞAY"]
const specialities = ["Frontend", "Backend", "FullStack"]
const roles = ["Senior", "Junior", "Intern", "Manager", "CEO"]

function generateRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

const selected = [];
const times = {
    "Intern": 8,
    "CEO": 1
}
for (let i = 0; i <= 100; i++) {
    let v = roles[Math.floor(Math.random() * roles.length)];
    while (selected.filter(x => x === v).length >= times[v]) v = roles[Math.floor(Math.random() * roles.length)];
    selected.push(v)
}

let i = 0;

const generateRandomUser = () => {
    i++;
    return {
        age: Math.floor(Math.random() * 30 + 20), name: names[generateRandomIndex(names)],
        lastName: surnames[generateRandomIndex(surnames)], speciality: specialities[generateRandomIndex(specialities)],
        role: selected[i]
    }
}

const getUsers = () => {
    const userCount = 100
    const users = []
    for (let i = 0; i < userCount; i++) {
        users.push(generateRandomUser())
    }
    return users

    //* ✓ Yapıldı. Problem: Kullanıcılar, sayfanın üstündeki arrayleri kullanarak random 100 kişi oluşturulsun. Yukarıdaki kapalı kod bloğu kullanılabilir.
    //* ✓ Yapıldı. Problem: Random oluşturulan kullanıcılarda maksimum 8 tanesi stajer ve sadece 1 tanesi CEO olacak şekilde kodu düzenleyelim.
}


//* ✓ Yapıldı. Ekstra task: Tüm problemler çözüldü ise projeyi React'a çevirelim.
