AOS.init();

function populateCities() {
    var stateSelect = document.getElementById("state");
    var citySelect = document.getElementById("city");
    var selectedState = stateSelect.value;
    citySelect.innerHTML = ""; // Clear existing options

    // Add default placeholder option for city
    var defaultOption = document.createElement("option");
    defaultOption.text = "Select City";
    defaultOption.disabled = true;
    defaultOption.selected = true;
    citySelect.add(defaultOption);

    if (selectedState === "Andhra Pradesh") {
        var cities = ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool", "Rajahmundry", "Tirupati", "Kakinada", "Kadapa", "Anantapur", "Eluru", "Vizianagaram"];
        cities.forEach(function (city) {
            var option = document.createElement("option");
            option.text = city;
            citySelect.add(option);
        });
    } else if (selectedState === "Arunachal Pradesh") {
        var cities = ["Itanagar", "Naharlagun", "Tawang", "Pasighat", "Ziro", "Bomdila"];
        cities.forEach(function (city) {
            var option = document.createElement("option");
            option.text = city;
            citySelect.add(option);
        });
    } else if (selectedState === "Assam") {
        var cities = ["Guwahati", "Silchar", "Dibrugarh", "Jorhat", "Nagaon", "Tinsukia", "Tezpur", "Goalpara", "Sivasagar", "Bongaigaon"];
        cities.forEach(function (city) {
            var option = document.createElement("option");
            option.text = city;
            citySelect.add(option);
        });
    }
    else if (selectedState === "Bihar") {
        var cities = ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Purnia", "Darbhanga", "Bihar Sharif", "Arrah", "Begusarai", "Katihar"];
        cities.forEach(function (city) {
            var option = document.createElement("option");
            option.text = city;
            citySelect.add(option);
        });
    } else if (selectedState === "Chhattisgarh") {
        var cities = ["Raipur", "Bhilai", "Bilaspur", "Korba", "Raigarh", "Durg", "Rajnandgaon", "Jagdalpur", "Ambikapur", "Chirmiri"];
        cities.forEach(function (city) {
            var option = document.createElement("option");
            option.text = city;
            citySelect.add(option);
        });
    } else if (selectedState === "Goa") {
        var cities = ["Panaji", "Margao", "Vasco da Gama", "Ponda", "Mapusa", "Bicholim", "Curchorem", "Sanquelim", "Canacona", "Quepem"];
        cities.forEach(function (city) {
            var option = document.createElement("option");
            option.text = city;
            citySelect.add(option);
        });
    } else if (selectedState === "Gujarat") {
        var cities = ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar", "Junagadh", "Gandhinagar", "Nadiad", "Anand"];
        cities.forEach(function (city) {
            var option = document.createElement("option");
            option.text = city;
            citySelect.add(option);
        });
    } else if (selectedState === "Haryana") {
        var cities = ["Faridabad", "Gurgaon", "Panipat", "Ambala", "Yamunanagar", "Rohtak", "Hisar", "Karnal", "Sonipat", "Panchkula"];
        cities.forEach(function (city) {
            var option = document.createElement("option");
            option.text = city;
            citySelect.add(option);
        });
    } else if (selectedState === "Himachal Pradesh") {
        var cities = ["Shimla", "Mandi", "Solan", "Dharamshala", "Kullu", "Chamba", "Nahan", "Una", "Bilaspur", "Hamirpur"];
        cities.forEach(function (city) {
            var option = document.createElement("option");
            option.text = city;
            citySelect.add(option);
        });
    } else if (selectedState === "Jharkhand") {
        var cities = ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Deoghar", "Hazaribagh", "Giridih", "Ramgarh", "Medininagar", "Chirkunda"];
        cities.forEach(function (city) {
            var option = document.createElement("option");
            option.text = city;
            citySelect.add(option);
        });
    } else if (selectedState === "Karnataka") {
        var cities = ["Bangalore", "Mysore", "Hubli", "Mangalore", "Belgaum", "Gulbarga", "Davanagere", "Bellary", "Bijapur", "Shimoga"];
        cities.forEach(function (city) {
            var option = document.createElement("option");
            option.text = city;
            citySelect.add(option);
        });
    } else if (selectedState === "Kerala") {
        var cities = ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Kollam", "Alappuzha", "Kannur", "Kottayam", "Palakkad", "Manjeri"];
        cities.forEach(function (city) {
            var option = document.createElement("option");
            option.text = city;
            citySelect.add(option);
        });
    } else if (selectedState === "Madhya Pradesh") {
        var cities = ["Indore", "Bhopal", "Jabalpur", "Gwalior", "Ujjain", "Sagar", "Dewas", "Satna", "Ratlam", "Rewa"];
        cities.forEach(function (city) {
            var option = document.createElement("option");
            option.text = city;
            citySelect.add(option);
        });
    } else if (selectedState === "Maharashtra") {
        var cities = ["Mumbai", "Pune", "Nagpur", "Thane", "Nashik", "Aurangabad", "Solapur", "Amravati", "Malegaon", "Kolhapur"];
        cities.forEach(function (city) {
            var option = document.createElement("option");
            option.text = city;
            citySelect.add(option);
        });
    } else if (selectedState === "Manipur") {
        var cities = ["Imphal", "Thoubal", "Bishnupur", "Churachandpur", "Kakching", "Ukhrul", "Jiribam", "Kangpokpi", "Senapati", "Tamenglong"];
        cities.forEach(function (city) {
            var option = document.createElement("option");
            option.text = city;
            citySelect.add(option);
        });
    } else if (selectedState === "Meghalaya") {
        var cities = ["Shillong", "Tura", "Nongstoin", "Jowai", "Baghmara", "Williamnagar", "Nongpoh", "Resubelpara", "Khliehriat", "Mairang"];
        cities.forEach(function (city) {
            var option = document.createElement("option");
            option.text = city;
            citySelect.add(option);
        });
    } else if (selectedState === "Mizoram") {
        var cities = ["Aizawl", "Lunglei", "Saiha", "Champhai", "Serchhip", "Kolasib", "Lawngtlai", "Saitual", "Khawzawl", "Hnahthial"];
        cities.forEach(function (city) {
            var option = document.createElement("option");
            option.text = city;
            citySelect.add(option);
        });
    } else if (selectedState === "Nagaland") {
        var cities = ["Kohima", "Dimapur", "Mokokchung", "Tuensang", "Wokha", "Zunheboto", "Phek", "Mon", "Chumukedima", "Longleng"];
        cities.forEach(function (city) {
            var option = document.createElement("option");
            option.text = city;
            citySelect.add(option);
        });
    } else if (selectedState === "Odisha") {
        var cities = ["Bhubaneswar", "Cuttack", "Rourkela", "Berhampur", "Sambalpur", "Puri", "Balasore", "Bhadrak", "Baripada", "Brahmapur"];
        cities.forEach(function (city) {
            var option = document.createElement("option");
            option.text = city;
            citySelect.add(option);
        });
    } else if (selectedState === "Punjab") {
        var cities = ["Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Bathinda", "Hoshiarpur", "Mohali", "Pathankot", "Moga", "Batala"];
        cities.forEach(function (city) {
            var option = document.createElement("option");
            option.text = city;
            citySelect.add(option);
        });
    } else if (selectedState === "Rajasthan") {
        var cities = ["Jaipur", "Jodhpur", "Udaipur", "Ajmer", "Kota", "Bikaner", "Alwar", "Sikar", "Pali", "Sri Ganganagar"];
        cities.forEach(function (city) {
            var option = document.createElement("option");
            option.text = city;
            citySelect.add(option);
        });
    } else if (selectedState === "Sikkim") {
        var cities = ["Gangtok", "Namchi", "Mangan", "Gyalshing", "Ravangla", "Rangpo", "Soreng", "Singtam", "Jorethang", "Rhenock"];
        cities.forEach(function (city) {
            var option = document.createElement("option");
            option.text = city;
            citySelect.add(option);
        });
    } else if (selectedState === "Tamil Nadu") {
        var cities = ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tirunelveli", "Tiruppur", "Vellore", "Thoothukudi", "Thanjavur"];
        cities.forEach(function (city) {
            var option = document.createElement("option");
            option.text = city;
            citySelect.add(option);
        });
    } else if (selectedState === "Telangana") {
        var cities = ["Hyderabad", "Warangal", "Nizamabad", "Khammam", "Karimnagar", "Ramagundam", "Mahbubnagar", "Nalgonda", "Adilabad", "Suryapet"];
        cities.forEach(function (city) {
            var option = document.createElement("option");
            option.text = city;
            citySelect.add(option);
        });
    } else if (selectedState === "Tripura") {
        var cities = ["Agartala", "Dharmanagar", "Kailasahar", "Udaipur", "Belonia", "Ambassa", "Santirbazar", "Khowai", "Kamalpur", "Sonamura"];
        cities.forEach(function (city) {
            var option = document.createElement("option");
            option.text = city;
            citySelect.add(option);
        });
    } else if (selectedState === "Uttar Pradesh") {
        var cities = ["Lucknow", "Kanpur", "Ghaziabad", "Agra", "Varanasi", "Meerut", "Prayagraj", "Bareilly", "Aligarh", "Moradabad"];
        cities.forEach(function (city) {
            var option = document.createElement("option");
            option.text = city;
            citySelect.add(option);
        });
    } else if (selectedState === "Uttarakhand") {
        var cities = ["Dehradun", "Haridwar", "Roorkee", "Haldwani", "Rudrapur", "Kashipur", "Rishikesh", "Pithoragarh", "Ramnagar", "Manglaur"];
        cities.forEach(function (city) {
            var option = document.createElement("option");
            option.text = city;
            citySelect.add(option);
        });
    } else if (selectedState === "West Bengal") {
        var cities = ["Kolkata", "Asansol", "Siliguri", "Durgapur", "Bardhaman", "English Bazar", "Baharampur", "Habra", "Kharagpur", "Shantipur"];
        cities.forEach(function (city) {
            var option = document.createElement("option");
            option.text = city;
            citySelect.add(option);
        });
    }
}

function updateStreamOptions() {
    var courseSelect = document.getElementById("course");
    var streamSelect = document.getElementById("stream");

    // Remove all existing options
    streamSelect.innerHTML = '<option selected disabled>Select Stream</option>';

    // Check the selected course and populate the stream options accordingly
    if (courseSelect.value === "mba") {
        var streams = [
            "Marketing",
            "Finance",
            "Human Resources",
            "Business Analytics (Dual Specialization)"
        ];

        streams.forEach(function (stream) {
            var option = document.createElement("option");
            if (stream.includes("Dual Specialization")) {
                option.text = stream.replace(/(d)(\S*)(s)(\S*)/, function (match, p1, p2, p3, p4) {
                    return p1.toUpperCase() + p2.toLowerCase() + p3.toUpperCase() + p4.toLowerCase();
                });
            } else {
                option.text = stream.charAt(0).toUpperCase() + stream.slice(1).toLowerCase(); // Capitalize first letter
            }
            streamSelect.add(option);
        });
    }
    // Add other courses and their respective streams here
}

