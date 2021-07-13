function upDate(previewPic){
    // console.log(previewPic.src)
    // console.log(previewPic.alt)
    document.getElementById('bg-img').src = previewPic.src;
    document.getElementById('display-photo').style.backgroundImage = "url('"+previewPic.src+"')";
    document.getElementById('demo-details').style.display = "none";
    document.getElementById('photo-heading').style.display = "block";
    document.getElementById('photo-heading').innerHTML = previewPic.alt;
    var heading = previewPic.alt;
    if (heading === "Morocco, Mountainous Country of Western North Africa"){
        document.getElementById('display-photo').style.border = "4px solid #E46F44";
    }
    else if (heading === "Cuba, An Island Country in the Caribbean"){
        document.getElementById('display-photo').style.border = "4px solid #FFDB70";
    }
    else if (heading === "South Africa, Encounter With The Wildlife"){
        document.getElementById('display-photo').style.border = "4px solid #2A6D3A";
    }
    else if (heading === "Iceland, The Most Incredible Island To Visit"){
        document.getElementById('display-photo').style.border = "4px solid #04566E";
    }
    else if (heading === "Turkey, A Bridge Between Europe And Asia"){
        document.getElementById('display-photo').style.border = "4px solid #AF6E5C";
    }
    else{
        document.getElementById('display-photo').style.border = "4px solid #891F11";
    }
}
function unDo(){
    document.getElementById('bg-img').src = "images/uk-travel-blog-awr-1.jpg";
    document.getElementById('display-photo').style.backgroundImage = "url('images/uk-travel-blog-awr-1.jpg')";
    document.getElementById('demo-details').style.display = "block";
    document.getElementById('photo-heading').style.display = "none";
    document.getElementById('display-photo').style.border = "4px solid black";
}
