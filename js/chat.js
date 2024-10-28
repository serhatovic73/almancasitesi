document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Formun gönderilmesini engelle
  
    // Kullanıcıdan gelen bilgileri al
    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;
  
    // Yorumları listelemek için bir div oluştur
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');
    commentDiv.innerHTML = `<strong>${name}</strong>: ${comment}`;
  
    // Yorumları listeleme alanına ekle
    document.getElementById('commentsList').appendChild(commentDiv);
  
    // Formu temizle
    document.getElementById('commentForm').reset();
  });
  