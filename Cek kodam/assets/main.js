    function sukiKocak() {
      var nama = document
        .forms["negro"]["nama"].value;
       const khodam = [
         'Amba',
         'gojo satoru',
         'kuda negro',
         'laba laba sunda',
         'Daffa',
         'MewingWotabul',
         'Sukiliar' ,
         'Shiroko Bugil' ,
         'Botol kecap' ,
         'Atmosfer Bumi' ,
         'Jawa suki' ,
         'Rahmat Fushiguro' ,
         'Mas Herman Penjaga Toleransi Beragama' ,
         'Jamin merdu' 
         ];
       const arr = khodam[Math.floor(Math.random() * khodam.length)];
      if (nama !== "") {
        alert(`Nama: ${nama}
Khodam: ${arr}`);
        return false; 
      }
      alert("Nama harus diisi kocak");
      return false;
    }