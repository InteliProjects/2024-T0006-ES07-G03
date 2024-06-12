function uploadAudio(){

    var fileInput = document.getElementById('audioFile');
    if (!fileInput.files.length) {
        window.alert('Por favor, selecione um arquivo antes de fazer o upload.');
        return; // Sai da função se nenhum arquivo for selecionado
    }
    var file = fileInput.files[0];

    var formData = new FormData();
    formData.append("file", file);
    
    
    document.getElementById('loading').style.display = 'block';


    fetch('http://localhost:2000/transcribe', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('loading').style.display = 'none';
        const formattedResponse = `Transcript: ${data.transcript}<br>` +
        `Confidence: ${data.confidence}<br>` +
        `Audio Duration: ${data.audio_duration_seconds} seconds`;
        document.getElementById('response').innerHTML = formattedResponse;
    })
    .catch((error) => {
        console.error('Error:', error);
        document.getElementById('response').innerHTML = "Algo deu errado verifique se o arquivo esta certo! Lembre que apenas .mp3 e .opus são aceitos"
        document.getElementById('loading').style.display = 'none';
    });


}


