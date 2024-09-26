    function cekKhodam(event) {
      event.preventDefault();

      let name = $('#nama').val();
      if (name === "") {
        alert("NAMANYA DIISI WOI!!");
      } else {
        const status = ["isi", "kosong"];
        const randomStatus = Math.floor(Math.random() * status.length);

        if (randomStatus === 0) {
          const khodam = [
            'Amba',
            'Gojo Satoru',
            'Kuda Negro',
            'Laba Laba Sunda',
            'Daffa',
            'Mewing Wotabul',
            'Sukiliar',
            'Shiroko Bugil',
            'Botol Kecap',
            'Atmosfer Bumi',
            'Jawa Suki',
            'Rahmat Fushiguro',
            'Mas Herman Penjaga Toleransi Beragama',
            'Jamin Merdu'
          ];
          const randomKhodam = Math.floor(Math.random() * khodam.length);
          $('#result').html(`${name.toUpperCase()} • ${khodam[randomKhodam].toUpperCase()}`);
        } else {
          $('#result').html(`${name.toUpperCase()} • KOSONG 😂`);
        }

        $('#nama').val('');
      }
    }

    $(document).ready(function() {
      $('#btnNama').click(cekKhodam);
    });