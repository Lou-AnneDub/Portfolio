document.addEventListener("DOMContentLoaded", function () { 

        // Burger menu
    const burgerMenu = document.querySelector('.burger-menu');
    const navList = document.querySelector('nav ul');
    
    burgerMenu.addEventListener('click', function () {
        navList.classList.toggle('show');
    });

        //Récupère les données du fichier json pour les afficher dans la page projet
    d3.json('data.json')
        .then(function (data){
            //Récupère l'id situé dans l'url
            let url = new URL(window.location.href);
            let urlParams = new URLSearchParams(url.search);
            let id = urlParams.get('id');

            console.log('Id =',id);

            if (data[id]) {
                d3.select('.preview')
                    .selectAll('img')
                    .data(data[id].Img)
                    .join('img')
                    .attr('class','previewImg')
                    .attr('src', function (d) { return 'img/' + d ; })
                    .attr('alt', "Voir l'image ");

                d3.select('.title h1').text(data[id].Title);

                d3.select('#date i').text(data[id].Date);

                d3.select('#lienProjet')
                    .attr('href', function (d) { return data[id].Lien1;})
                    .attr('target', '_blank');

                if (data[id].Lien2) {
                    // Crée le lien "bonus" seulement s'il existe
                    d3.select('#lienBonus')
                        .attr('href', data[id].Lien2)
                        .text('Lien Bonus');
                } else {
                    // S'il n'existe pas, cache le lien "bonus"
                    d3.select('#lienBonus').style('display', 'none');
                }

                d3.select('#description').text(data[id].Description);

                d3.select('#explication').text(data[id].Text);

                d3.select('#technologie ul')
                    .selectAll('li')
                    .data(data[id].Techno)
                    .join('li')
                    .text(function (d) { return d; });

                d3.select('#context ul')
                    .selectAll('li')
                    .data(data[id].Context)
                    .join('li')
                    .text(function (d) { return d; });
                
                d3.select('#create ul')
                    .selectAll('li')
                    .data(data[id].Create)
                    .join('li')
                    .text(function (d) { return d; });

                d3.select('.mockup')
                    .attr('src', function (d) { return 'img/mockup/' + data[id].Mockup1; })
                    .attr('alt', "Image de l'accueil en mockup du projet de " + data[id].Title);
                    
            } else {
                window.location.replace('erreur404.html');
            }


            //Image preview et Mockup
            var mockupImage = d3.select('.mockup');
            var previewImages = d3.selectAll('.previewImg');

            previewImages.on('click', function () {
                var projectId = urlParams.get('id');
                var clickedImageSrc = d3.select(this).attr('src');
                console.log('Img clicked:', clickedImageSrc);

                // Récupérez la liste des images de prévisualisation à partir des données JSON
                var previewSrcs = data[projectId].Img;

                // Récupérez la liste des mockups à partir des données JSON
                var mockupSrcs = data[projectId].Mockup;
                console.log('mockupSrcs:', mockupSrcs);

                // Trouvez l'index de la preview cliquée dans la liste des images de prévisualisation
                var previewIndex = Array.from(this.parentNode.children).indexOf(this);
                console.log('Preview:', previewIndex);

                // Utilisez cet index pour obtenir la source du mockup correspondant
                var mockupSrc = mockupSrcs[previewIndex];
                console.log('mockup:', mockupSrc);

                // Mettez à jour l'attribut src de l'image du mockup avec la source récupérée
                mockupImage.attr('src', 'img/' + mockupSrc);
            });

        })

        .catch(function (error) {
            console.error('Erreur lors du chargement des données JSON :', error);
            // Redirige l'utilisateur vers la page 404
            window.location.replace('erreur404.html');
        });

});