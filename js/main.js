function myFunction() {
    const lens = document.getElementById("lens");
    const lensImg = document.getElementById("lens-img");
    const foundation = document.getElementById("foundation");
    const foundationImg = document.getElementById("foundation-img");
    const spyglass = document.getElementById("spyglass");
    const spyglassImg = document.getElementById("spyglass-img");
    const camera = document.getElementById("camera");
    const cameraImg = document.getElementById("camera-img");

    if (lens.checked == true) {
        lensImg.style.display = "block";
    } else {
        lensImg.style.display = "none";
    }

    if (lens.checked == true && foundation.checked == true) {
        foundationImg.style.display = "block";
    } else {
        foundationImg.style.display = "none";
    }

    if (lens.checked == true && foundation.checked == true && spyglass.checked == true) {
        spyglassImg.style.display = "block";
    } else {
        spyglassImg.style.display = "none";
    }

    if (lens.checked == true && foundation.checked == true && spyglass.checked == true && camera.checked == true) {
        cameraImg.style.display = "block";
    } else {
        cameraImg.style.display = "none";
    }


    // Images
    if (lens.checked == true && foundation.checked == true) {
        lensImg.style.display = 'none';
    }

    if (lens.checked == true && foundation.checked == true && spyglass.checked == true) {
        lensImg.style.display = 'none';
        foundationImg.style.display = 'none';
    }

    if (lens.checked == true && foundation.checked == true && spyglass.checked == true && camera.checked == true) {
        lensImg.style.display = 'none';
        foundationImg.style.display = 'none';
        spyglassImg.style.display = 'none';
    }
}