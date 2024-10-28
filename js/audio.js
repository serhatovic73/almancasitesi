/* ses fonksiyonu*/

    // Her bir ses ve metin örneği için bir fonksiyon tanımlayalım
    function initializeAudioHighlight(audioId, textContainerId) {
        const audio = document.getElementById(audioId);
        const words = document.querySelectorAll(`#${textContainerId} .word`);
    
        audio.ontimeupdate = function () {
            const currentTime = audio.currentTime;
  
            words.forEach(word => {
                const start = parseFloat(word.getAttribute('data-begin'));
                const duration = parseFloat(word.getAttribute('data-dur'));
                const end = start + duration; // Kelimenin son zamanı
                
                if (currentTime >= start && currentTime) {
                    word.classList.add('highlight');
                } else {
                    word.classList.remove('highlight');
                }
            });
        };
    }
  
    // İlk örneği başlat
    initializeAudioHighlight('audio', 'textContainer');
  
  
    /*Tiklanip okunan kelimeler */
    const words2 = document.querySelectorAll('.word');
      
    words2.forEach(word => {
        word.addEventListener('click', function() {
            const begin = parseFloat(this.getAttribute('data-begin'));
            const dur = parseFloat(this.getAttribute('data-dur'));
            const end = begin + dur;
  
            // Sesli okuma için yeni bir ses nesnesi oluştur
            const utterance = new SpeechSynthesisUtterance(this.innerText);
            utterance.lang = 'de-DE'; // Almanca dil ayarı
            utterance.onstart = () => {
                this.classList.add('playing');
                this.style.backgroundColor = '#d0f0c0'; // Oynarken arka plan rengi
            };
            utterance.onend = () => {
                this.classList.remove('playing');
                this.style.backgroundColor = ''; // Arka plan rengini eski haline döndür
            };
            
            // Sesli okuma başlat
            speechSynthesis.speak(utterance);
        });
    });