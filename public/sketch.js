        function setup(){
        
        if('geolocation' in navigator)
        {
            console.log('geolocation available 🤗️');
            navigator.geolocation.getCurrentPosition(async position =>
            {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                document.getElementById('latitude').textContent = lat;
                document.getElementById('longitude').textContent = lon;
                
                var timestamp = Date.now();
                var date = new Date(timestamp);
                var status = 'client';
                document.getElementById('Data').textContent = date;                
                
                const data = {lat,lon,date,status,timestamp};
                console.log(data);
                console.log(date);
                const options = {
                    method: 'POST',
                    headers:{
                        'Content-Type': 'application/json'
                        //'Content-Type': 'application/x-www-form-urlencoder',
                    },
                    body: JSON.stringify(data)
                    
                };
                const response = await fetch('/api',options);
                const servidor = await response.json();
                const atraso = servidor.timestamp - data.timestamp;
                //Resposta para o usuario
                
                document.getElementById('Atraso').textContent = atraso; 
                console.log(servidor.timestamp);
                console.log(servidor.status);
                console.log(servidor.lat);
                console.log(servidor.lon);
                });
                

        }else{
             console.log('geolocation NOT available')
            }
        
      } //setup
