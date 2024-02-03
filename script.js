function changeMainImage(thumbnail) {
    // Remove the 'selected-thumbnail' class from all thumbnails
    var thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(function (item) {
        item.classList.remove('selected-thumbnail');
    });

    // Add the 'selected-thumbnail' class to the clicked thumbnail
    thumbnail.classList.add('selected-thumbnail');

    // Change the main image source
    document.getElementById("mainImage").src = thumbnail.src;
}
// Set c

function setColor(element, color) {
    // Remove 'selected' class from all color options
    var colorOptions = document.querySelectorAll('.color-option');
    colorOptions.forEach(function (option) {
        option.classList.remove('selected');
    });

    // Add 'selected' class to the clicked color option
    element.classList.add('selected');

    // Apply the selected color to the container or perform any other actions as needed
    var display = document.querySelector('.color-selector');
    display.style.borderColor = color; // Set border color to selected color
}


document.addEventListener('click', function (event) {
    var isColorOption = event.target.classList.contains('color-option');
    
    if (!isColorOption) {
        // Clicked outside color options
        return false;
    }
    
    // Add 'selected' class to the clicked color option
    var selectedColorElement = document.querySelector('.color-option.selected');
    if (selectedColorElement) {
        selectedColorElement.classList.remove('selected');
    }

    event.target.classList.add('selected');

    // Apply the selected color to the container or perform any other actions as needed
    var display = document.querySelector('.color-selector');
    display.style.borderColor = event.target.style.backgroundColor; // Set border color to selected color
});


const plus= document.querySelector(".plus"),
minus= document.querySelector(".minus"),
num=document.querySelector(".num");

let a=1;

plus.addEventListener("click",() => {
    a++;
    a= (a <12)? "0" +a :a;
    num.innerText=a;

    console.log("a");
});


minus.addEventListener("click",() => {
    if(a>1){
    a--;
    a= (a <10)? "0" +a :a;
    num.innerText=a;;

    }
});


function incrementQuantity() {
    let num = document.querySelector(".num");
    let a = parseInt(num.innerText);
    if (a < 10) {
        a++;
        a = (a < 10) ? "0" + a : a;
        num.innerText = a;
    }
}

function decrementQuantity() {
    let num = document.querySelector(".num");
    let a = parseInt(num.innerText);
    if (a > 1) {
        a--;
        a = (a < 10) ? "0" + a : a;
        num.innerText = a;
    }
}

function setColor(element, color) {
    // Remove 'selected' class from all color options
    var colorOptions = document.querySelectorAll('.color-option');
    colorOptions.forEach(function (option) {
        option.classList.remove('selected');
    });

    // Add 'selected' class to the clicked color option
    element.classList.add('selected');

    // Apply the selected color to the container or perform any other actions as needed
    var display = document.querySelector('.color-selector');
    display.style.borderColor = color; // Set border color to selected color
}

function addToCart() {
    // Get selected product details
    var selectedColorElement = document.querySelector('.color-option.selected');
    var selectedColor = selectedColorElement ? selectedColorElement.style.backgroundColor : null;
    if (!selectedColor) {
        alert('Please select a color.');
        return;
    }



    var colorLabel = getColorLabel(selectedColor);

    // Get the selected radio button
    var selectedRadioButton = document.querySelector('input[name="size"]:checked');

    // Check if a radio button is selected
    if (selectedRadioButton) {
        // Get the label using the 'for' attribute
        var labelForRadioButton = document.querySelector('label[for="' + selectedRadioButton.id + '"]');
        var selectedSizeLabel = labelForRadioButton ? 'Selected Size: ' + labelForRadioButton.textContent : null;

        // Display selected color and size below the "Add to Cart" button
        var selectedColorLabel = document.getElementById('selectedColorLabel');
        var selectedSizeLabelElement = document.getElementById('selectedSizeLabel');
        selectedColorLabel.textContent = colorLabel ? `Selected color: ${colorLabel}` : 'No color selected';
        selectedSizeLabelElement.textContent = selectedSizeLabel || 'No size selected';
    } else {
        alert('Please select a size.');
    }
}

function getColorLabel(color) {
    switch (color) {
        case 'rgb(255, 87, 51)': // #ff5733
            return 'Red';
        case 'rgb(51, 255, 87)': // #33ff57
            return 'Green';
        case 'rgb(87, 51, 255)': // #5733ff
            return 'Blue';
        case 'rgb(255, 51, 230)': // #ff33e6
            return 'Pink';
        default:
            return null;
    }
}


    
