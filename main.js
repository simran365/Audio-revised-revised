function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Qo7mLuGII/model.json", modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results)
{
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById('Dog');
        img1 = document.getElementById('Cat');
        img2 = document.getElementById('Lion');
        img3 = document.getElementById('Cow');

        if (results[0].label == "Barking") {
            img.src = 'https://i.gifer.com/4OuC.gif';
            img1.src = 'https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2018/06/cat-217679.jpg?h=c4ed616d&itok=3qHaqQ56.png';
            img2.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Lion_%28Panthera_leo%29_male_6y.jpg/200px-Lion_%28Panthera_leo%29_male_6y.jpg';
            img3.src = 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Cow_female_black_white.jpg';
        } else if (results[0].label == "Meowing") {
            img.src = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=640:*';
            img1.src = 'https://i.pinimg.com/originals/3c/31/ef/3c31efc42b6e4ce96afa55099dfbba25.gif';
            img2.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Lion_%28Panthera_leo%29_male_6y.jpg/200px-Lion_%28Panthera_leo%29_male_6y.jpg';
            img3.src = 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Cow_female_black_white.jpg';
        } else if (results[0].label == "Roaring") {
            img.src = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=640:*';
            img1.src = 'https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2018/06/cat-217679.jpg?h=c4ed616d&itok=3qHaqQ56';
            img2.src = 'https://zoogif.com/wp-content/uploads/2022/01/happy-lion-gif.gif';
            img3.src = 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Cow_female_black_white.jpg';
        }else{
            img.src = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=640:*';
            img1.src = 'https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2018/06/cat-217679.jpg?h=c4ed616d&itok=3qHaqQ56';
            img2.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Lion_%28Panthera_leo%29_male_6y.jpg/200px-Lion_%28Panthera_leo%29_male_6y.jpg';
            img3.src = 'https://media.tenor.com/wujQi8X6cDsAAAAC/dancing-cow.gif';
        }
    }
}
    
       