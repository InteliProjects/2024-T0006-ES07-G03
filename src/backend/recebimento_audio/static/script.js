const amqp = require('amqplib');
        const fs = require('fs');
        let capturing = false;
        let mediaRecorder;
        let audioChunks = [];

        document.getElementById('toggleCapture').addEventListener('click', function() {
            if (!capturing) {
                navigator.mediaDevices.getUserMedia({ audio: true })
                    .then(stream => {
                        mediaRecorder = new MediaRecorder(stream);
                        audioChunks = [];

                        mediaRecorder.ondataavailable = event => {
                            audioChunks.push(event.data);
                        };

                        mediaRecorder.onstop = () => {
                            const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
                            const audioUrl = URL.createObjectURL(audioBlob);

                            // Cria um elemento de áudio e adiciona ao chat container
                            const messageDiv = document.createElement('div');
                            messageDiv.classList.add('message', 'user-message');
                            const audioElement = document.createElement('audio');
                            audioElement.src = audioUrl;
                            audioElement.controls = true;
                            messageDiv.appendChild(audioElement);
                            document.getElementById('chatContainer').appendChild(messageDiv);

                            // Envia automaticamente o áudio após a gravação
                            enviarAudio(audioBlob);

                            document.getElementById('toggleCapture').textContent = 'Iniciar Captura';
                            document.getElementById('toggleCapture').classList.remove('recording');
                            capturing = false;
                        };

                        mediaRecorder.start();
                        capturing = true;
                        this.textContent = 'Parar Captura';
                        this.classList.add('recording');
                    }).catch(err => {
                        console.error('Erro ao acessar o microfone:', err);
                    });
            } else {
                mediaRecorder.stop();
            }
        });

        function enviarAudio(audioBlob) {
            const formData = new FormData();
            formData.append('audio', audioBlob, 'audio.wav');
            fetch('/upload', {
                method: 'POST',
                body: formData,
            }).then(response => {
                if (response.ok) {
                    console.log('Áudio enviado com sucesso!');
                    // adicionar a resposta da API ao chat
                } else {
                    console.error('Erro ao enviar áudio:', response);
                }
            }).catch(err => {
                console.error('Erro ao enviar áudio:', err);
            });
        }
    