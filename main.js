function zepic() {
    console.log("no")
    Webcam.snap(function (data_uri) {
        var output = "<img id='picture' src='" + data_uri + "'>"
        document.getElementById("result").innerHTML = output;
    })
}
console.log(ml5.version + "version")
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/CVlQ3iSbv/model.json", modelLoaded);

function modelLoaded() {
    console.log("modelLoaded");
}

function identifiers() {
    var img = document.getElementById("output");
    classifier.classify(img, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("obj").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}
//$('#help').click(function(){ $('#imgupload').trigger('click'); });    
