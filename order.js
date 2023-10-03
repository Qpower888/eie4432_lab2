function calculatePrice(){
        // 获取选择框的元素
        var selectElement = document.getElementById("floatingSelect");
        // 获取所选项的值
        var selectedValue = selectElement.value;
        if (selectedValue === "bubble")
        {
            var selectedSize = document.querySelector('input[name="options-outlined_A"]:checked');
            if (selectedSize) {
                var sizeType = selectedSize.id;
                var priceElement = document.getElementById("price");
                
                if (sizeType === "small-outlined") {
                    var newPrice = 30;
                    priceElement.textContent = newPrice;
                } else if (sizeType === "medium-outlined") {
                    var newPrice = 50; 
                    priceElement.textContent = newPrice;
                } else if (sizeType === "large-outlined") {
                    var newPrice = 70; 
                    priceElement.textContent = newPrice;
                }
            }
        }

        else if (selectedValue === "iced"){
            var selectedSize = document.querySelector('input[name="options-outlined_A"]:checked');
            if (selectedSize) {
                var sizeType = selectedSize.id;
                var priceElement = document.getElementById("price");
                
                if (sizeType === "small-outlined") {
                    var newPrice = 40;
                    priceElement.textContent = newPrice;
                } else if (sizeType === "medium-outlined") {
                    var newPrice = 60; 
                    priceElement.textContent = newPrice;
                } else if (sizeType === "large-outlined") {
                    var newPrice = 80; 
                    priceElement.textContent = newPrice;
                }
            }
        }
}

//验证表单输入内容
function validateForm() {

    var name = document.getElementById("nameInput").value.trim();
    if (name === "") {
        alert("Please enter your name.");
        return false; 
    }

    var selectedSize = document.querySelector('input[name="options-outlined_A"]:checked');
    var selectElement = document.getElementById("floatingSelect");
    var selectedValue = selectElement.value;
    if (!selectedSize) {
        if (selectedValue === "selectPlease"){
            alert("Please select a drink.");
            return false;
        }
        else{
            alert("Please select a size.");
            return false;
        }
    }
    else if (selectedSize) {
        if(selectedValue === "selectPlease"){
            alert("Please select a drink first.");
            return false;
        }
    }

    var selectedIce = document.querySelector('input[name="options-outlined_B"]:checked');
    if (!selectedIce) {
        alert("Please select Ice level.");
        return false;
    }
    
    var selectedSweetness = document.querySelector('input[name="options-outlined_C"]:checked');
    if (!selectedSweetness) {
        alert("Please select Sweetness.");
        return false;
    }

    return true;
    
}

function placeOrder(event) {
    event.preventDefault(); // Prevent default form submission behavior
    if (validateForm()){
        alert("Order placed successfully! Thank you for your order.");
        var name = document.getElementById("nameInput").value.trim();
        var selectElement = document.getElementById("floatingSelect");
        var selectedValue = selectElement.value;

        var orderData = [name, selectedValue];
        var selectedSize = document.querySelector('input[name="options-outlined_A"]:checked');
        var selectedIce = document.querySelector('input[name="options-outlined_B"]:checked');
        var selectedSweetness = document.querySelector('input[name="options-outlined_C"]:checked');
        if (selectedSize) {
            orderData.push(selectedSize.id);
        }
        if (selectedIce) {
            orderData.push(selectedIce.id);
        }
        if (selectedSweetness) {
            orderData.push(selectedSweetness.id);
        }

        //存储
        localStorage.setItem("orders", JSON.stringify(orderData));
    }   
}        