    function suki() {
      const nama = document.getElementById('namaLengkap').value;
      if (!nama) {
        alert("NAMA LU BELUM DIISI KOCAK 😂");
        return false;
      }

      const kodam = khodam(nama);
      document.getElementById('nama').innerHTML = (`
        <p>NAMA : <br>${nama.toUpperCase()}</p>
        <p>KHODAM : <br>${kodam.toUpperCase()}</p>
      `);

      document.getElementById("popup-1").classList.add("active");

      document.getElementById("namaLengkap").value = "";
      return false;
    }

    function closePopup() {
      document.getElementById("popup-1").classList.remove("active");
    }

    function khodam(nama) {
      const khodam = [
        'Amba',
        'Gojo Satoru',
        'Kuda Negro',
        'Laba Laba Sunda',
        'Daffa Suki',
        'Mewing Wotabul',
        'Sukiliar',
        'Shiroko Bugil',
        'Botol Kecap',
        'Atmosfer Bumi',
        'Jawa Suki',
        'Rahmat Fushiguro',
        'Mas Herman Penjaga Toleransi Beragama',
        'Jamin Merdu',
        'Belatung Miskin',
        'Hendrik Darksistem',
        'KOSONG 😂'
      ];

      const index = nama.length % khodam.length;
      return khodam[index];
    }