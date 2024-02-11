const placesToVisit = [

    {
        "title" : "Andhra Pradesh",
        "poster" : "https://www.theindiatourism.com/images/Destination-Andhra-Pradesh.jpg",
        "placeList" : ["Visakhapatnam", "Tirupati", "Vijayawada", "Anantapur", "Srikalahasti"],
    },

    {
        "title" : "Arunachal Pradesh",
        "poster" : "https://www.theindiatourism.com/images/tourism-arunachal-pradesh.jpg",
        "placeList" : ["Tawang", "Itanagar", "Bomdila", "Bhalukpong", "Pasighat"]
    },
    {
        "title" : "Assam",
        "poster" : "https://www.theindiatourism.com/images/Top-destination-Assam.jpg",
        "placeList" : ["Guwahati", "Jorhat", "Tezpur", "Dibrugarh", "Sivasagar"]
    },
    {
        "title" : "Bihar",
        "poster" : "https://www.theindiatourism.com/images/Bihar-tourist.jpg",
        "placeList" : ["Gaya", "Nalanda", "Munger", "Patna", "Sonepur Fair"],
    },
    {
        "title" : "Chhattisgarh",
        "poster" : "https://www.theindiatourism.com/images/Destination-Chhattisgarh.jpg",
        "placeList" : ["Raipur", "Bilaspur", "Jagdalpur", "Dongargarh", "Ratanpur"],
    },
    {
        "title" : "Gujarat",
        "poster" : "https://www.theindiatourism.com/images/Gujarat-destination.jpg",
        "placeList" : ["Ahmedabad", "Vadodara", "Rajkot", "Porbandar", "Gandhinagar"],
    },
    {
        "title" : "Haryana",
        "poster" : "https://www.theindiatourism.com/images/Haryana-destination.jpg",
        "placeList" : ["Gurugram", "Kurukshetra", "Panchkula", "Faridabad", "Chandigarh"],
    },
    {
        "title" : "Himachal Pradesh",
        "poster" : "https://www.theindiatourism.com/images/Himachal-Pradesh-tours.jpg",
        "placeList" : ["Manali", "Shimla", "Kullu", "Kasauli", "Kufri"],
    },
    {
        "title" : "Jammu and Kashmir",
        "poster" : "https://www.theindiatourism.com/images/Jammu-and-Kashmir.jpg",
        "placeList" : ["Srinagar", "Gulmarg", "Leh and Ladakh", "Amarnath", "Vaishnodevi"],
    },
    {
        "title" : "Jharkhand",
        "poster" : "https://www.theindiatourism.com/images/Jharkhand-tours.jpg",
        "placeList" : ["Ranchi", "Jamshedpur", "Giridih", "Sahibganj", "Palamu"],
    },
    {
        "title" : "Karnataka",
        "poster" : "https://www.theindiatourism.com/images/Destination-Karnataka.jpg",
        "placeList" :  ["Bangalore", "Hampi", "Mysore", "Mangalore", "Badami"],
    },
    {
        "title" : "Kerala",
        "poster" : "https://www.theindiatourism.com/images/Destination-kerala.jpg",
        "placeList" :   ["Alleppey", "Wayanad", "Cochin", "Munnar", "Kumarakom"],
    },
    {
        "title" : "Madhya Pradesh",
        "poster" : "https://www.theindiatourism.com/images/madhya-pradesh.jpg",
        "placeList" :   ["Bhopal", "Gwalior", "Khajuraho", "Ujjain", "Orchha"],
    },
    {
        "title" : "Maharashtra",
        "poster" : "https://www.theindiatourism.com/images/Maharashtra-tour.jpg",
        "placeList" :   ["Mumbai", "Aurangabad", "Alibag", "Pune", "Nashik"],
    },
    {
        "title" : "Nagaland",
        "poster" : "https://www.theindiatourism.com/images/Nagaland-Tourist.jpg",
        "placeList" :   ["Dimapur", "Kohima", "Mokokchung", "Benreu", "Kachari"],
    },
    {
        "title" : "Odisha",
        "poster" : "https://www.theindiatourism.com/images/Odisha-tourism.jpg",
        "placeList" :   ["Cuttack", "Puri", "Konark", "Bargarh", "Bhubaneshwar"],
    },
    {
        "title" : "Punjab",
        "poster" : "https://www.theindiatourism.com/images/Punjab-tourist.jpg",
        "placeList" :   ["Amritsar", "Pathankot", "Jalandhar", "Ludhiana", "Bhatinda"],
    },
    {
        "title" : "Rajasthan",
        "poster" : "https://www.theindiatourism.com/images/rajasthan-destination.jpg",
        "placeList" :   ["Jaipur", "Jaisalmer", "Udaipur", "Jodhpur", "Mount Abu"],
    },
    {
        "title" : "Sikkim",
        "poster" : "https://www.theindiatourism.com/images/Sikkim-tourist.jpg",
        "placeList" :   ["Yuksom", "Lachung", "Pelling", "Ravangla", "Gangtok"],
    },
    {
        "title" : "Tamil Nadu",
        "poster" : "https://www.theindiatourism.com/images/Tamilnadu-tourism.jpg",
        "placeList" :   ["Chennai", "Mahabalipuram", "Kanyakumari", "Madurai", "Ooty"],
    },
    {
        "title" : "Tripura",
        "poster" : "https://www.theindiatourism.com/images/tripura-tours.jpg",
        "placeList" : ["Agartala", "Kumarghat", "Deotamura", "Dumboor", "Neermahal"],
    },
    {
        "title" : "Uttar Pradesh",
        "poster" : "https://www.theindiatourism.com/images/Uttar-Pradesh-tours.jpg",
        "placeList" :   ["Agra", "Lucknow", "Varanasi", "Allahabad", "Mathura"],
    },
    {
        "title" : "Uttarakhand",
        "poster" : "https://www.theindiatourism.com/images/destination-uttarakhand.jpg",
        "placeList" :   ["Rishikesh", "Nainital", "Mussoorie", "Haridwar", "Kedarnath"],
    },
    {
        "title" : "West Bengal",
        "poster" : "https://www.theindiatourism.com/images/West-Bengal-tour.jpg",
        "placeList" :   ["Kolkata", "Darjeeling", "Bankura", "Siliguri", "Murshidabad"],
    },
    {
        "title" : "Manipur",
        "poster" : "https://www.theindiatourism.com/images/Manipur-tour.jpg",
        "placeList" :   ["Imphal", "Bishnupur", "Chandel", "Tamenglong", "Churachandpur"],
    },
    {
        "title" : "Meghalaya",
        "poster" : "https://www.theindiatourism.com/images/Meghalaya-tourist.jpg",
        "placeList" :   ["Shillong", "Cherrapunji", "Jowai", "Baghmara", "Nongpoh"],
    },
    {
        "title" : "Mizoram",
        "poster" : "https://www.theindiatourism.com/images/Mizoram-tourist.jpg",
        "placeList" :   ["Aizawl", "Champhai", "Lunglei", "Serchhip", "Thenzawl"],
    },
    {
        "title" : "Telangan",
        "poster" : "https://www.theindiatourism.com/images/Destination-Telangana.jpg",
        "placeList" :   ["Hyderabad", "Warangal", "Medak", "Nizamabad", "Khammam"],
    },

]

module.exports = placesToVisit
