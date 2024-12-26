document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const nama = document.getElementById('name').value;
    const kopi = document.getElementById('coffee').value;
  
    const pesanan = {
      nama,
      kopi
    };
  
    const pesananData = JSON.parse(localStorage.getItem('pesanan')) || [];
    pesananData.push(pesanan);
    localStorage.setItem('pesanan', JSON.stringify(pesananData));
  
    alert('Pemesanan berhasil!');
  });
  const tampilkanPesanan = () => {
    const pesananData = JSON.parse(localStorage.getItem('pesanan'));
    if (pesananData) {
      const html = pesananData.map((pesanan, index) => {
        return `
          <p>Pemesanan ${index + 1}:</p>
          <p>Nama: ${pesanan.nama}</p>
          <p>Kopi: ${pesanan.kopi}</p>
        `;
      }).join('');
      document.getElementById('pesanan').innerHTML = html;
    }
  };
  
  tampilkanPesanan();
  