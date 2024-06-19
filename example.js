document.addEventListener("DOMContentLoaded", function() {
    d3.csv("data/purchase_orders.csv").then(function(data) {
        var ul = d3.select("#orders");

        data.forEach(function(d) {
            ul.append("li")
              .text(`${d.customerName} - Order ID: ${d.orderId} - Purchase Amount: ${d.purchaseAmount}`);
        });
    }).catch(function(error) {
        console.error("Error loading the CSV file:", error);
    });
});
