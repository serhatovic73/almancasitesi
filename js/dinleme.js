document.getElementById('metnigoster').addEventListener('click', function() {
    // Transcript div'ini görünür hale getir
    const transcriptElement = document.getElementById('metin');
        // Metin görünüyorsa gizle, gizliyse göster
        if (transcriptElement.style.display === 'none' || transcriptElement.style.display === '') {
          transcriptElement.style.display = 'block'; // Göster
        } else {
          transcriptElement.style.display = 'none'; // Gizle
        }
  });
  document.getElementById('metnigoster2').addEventListener('click', function() {
    // Transcript div'ini görünür hale getir
    const transcriptElement = document.getElementById('metin2');
      // Metin görünüyorsa gizle, gizliyse göster
      if (transcriptElement.style.display === 'none' || transcriptElement.style.display === '') {
        transcriptElement.style.display = 'block'; // Göster
      } else {
        transcriptElement.style.display = 'none'; // Gizle
      }
  });

  const audio = document.getElementById('audio');
  const playPauseButton = document.getElementById('playPause');
  const rewindButton = document.getElementById('rewind');
  const forwardButton = document.getElementById('forward');
  const progressBar = document.getElementById('progressBar');
  const currentTimeDisplay = document.getElementById('currentTime');
  const totalTimeDisplay = document.getElementById('totalTime');
  const volumeControl = document.getElementById('volumeControl');

  let isPlaying = false;

  // Oynatma ve durdurma fonksiyonu
  playPauseButton.addEventListener('click', () => {
    if (isPlaying) {
      audio.pause();
      playPauseButton.textContent = '▶️';
    } else {
      audio.play();
      playPauseButton.textContent = '⏸️';
    }
    isPlaying = !isPlaying;
  });

  // Geri sarma fonksiyonu
  rewindButton.addEventListener('click', () => {
    audio.currentTime -= 5; // 5 saniye geri sar
  });

  // İleri atlama fonksiyonu
  forwardButton.addEventListener('click', () => {
    audio.currentTime += 5; // 5 saniye ileri sar
  });

  // İlerleme çubuğunu güncelle
  audio.addEventListener('timeupdate', () => {
    progressBar.value = (audio.currentTime / audio.duration) * 100;
    updateCurrentTime();
  });

  // İlerleme çubuğuna tıklama ile ses süresini güncelle
  progressBar.addEventListener('input', () => {
    audio.currentTime = (progressBar.value / 100) * audio.duration;
  });

  // Toplam süreyi göster
  audio.addEventListener('loadedmetadata', () => {
    totalTimeDisplay.textContent = formatTime(audio.duration);
  });

  // Ses kontrolü
  volumeControl.addEventListener('input', () => {
    audio.volume = volumeControl.value;
  });

  // Zamanı formatlama (dakika:saniye)
  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  }

  // Geçerli zamanı güncelle
  function updateCurrentTime() {
    currentTimeDisplay.textContent = formatTime(audio.currentTime);
  }

  /*yavaslatma kismi */

  const audio2 = document.getElementById('audio'); // Audio elementini seç

  // Yavaşlatma butonunu oluştur
  const slowButton = document.createElement('button');
  slowButton.textContent = '⏬';

  
  // Hızlandırma butonunu oluştur
  const speedUpButton = document.createElement('button');
  speedUpButton.textContent = '⏫';
  
  // Yavaşlatma işlevi: 0.1 oranında hız düşür
  slowButton.addEventListener('click', () => {
      if (audio2.playbackRate > 0.2) { // Çok düşük hızın önüne geçmek için kontrol
          audio2.playbackRate -= 0.1;
      }
      console.log(`Mevcut hız: ${audio2.playbackRate.toFixed(1)}x`);
  });
  
  // Hızlandırma işlevi: 0.1 oranında hız artır
  speedUpButton.addEventListener('click', () => {
      if (audio.playbackRate < 3.0) { // Çok yüksek hızın önüne geçmek için kontrol
          audio.playbackRate += 0.1;
      }
      console.log(`Mevcut hız: ${audio2.playbackRate.toFixed(1)}x`);
  });
  
  // Butonları dinleme kontrol grubuna ekle
  const kontrolGrubu = document.getElementById('dinlemekontrol');
  kontrolGrubu.appendChild(slowButton);
  kontrolGrubu.appendChild(speedUpButton);


