// Sample data for study materials
const studyMaterials = {
    it: [
        { name: "Operating systems by Sister Goretti", link: "ict/os.pdf" },
        { name: "Computational mathematics by sister Goretti", link: "ict/mathematics.pdf" },
        { name: "Computer Application II by Mr. Owinyi", link: "ict/application.pdf" },
        { name: "Communication skills by mr. Osundwa", link: "ict/com.pdf" },
        { name: "C programming by mr Chris", link: "ict/c.pdf" },
        { name: "computer maintainance and support", link: "ict/maintain.pdf" },
        { name: "ICT", link: "ict/it.pdf" }, 
    ],
    
    fnb: [
        { name: "Nutrition", link: "food/nutrition.pdf" },
        { name: "production", link: "food/production.pdf" },
        { name: "ICT", link: "ict/it.pdf" },
    ],
    scr: [
       
        { name: "ICT", link: "ict/it.pdf" },
         { name: "Communication skills by mr. Osundwa", link: "ict/com.pdf" },
    ],
    
     acc: [
        { name: "Financing accounting", link: "acc/fa.pdf" },
        { name: "Enterprenuership", link: "acc/ee.pdf" },
        { name: "ICT", link: "ict/it.pdf" },
        { name: "Business law", link: "acc/ba.pdf" },
         { name: "Communication skills by mr. Osundwa", link: "ict/com.pdf" },
         
    ], 
    
};

// Function to load study materials based on subject
function loadMaterials(subject) {
    const materialList = document.getElementById("material-list");
    materialList.innerHTML = ""; // Clear previous content

    if (studyMaterials[subject]) {
        studyMaterials[subject].forEach((material) => {
            const link = document.createElement("a");
            link.href = material.link;
            link.textContent = material.name;
            link.classList.add("material-link");
            materialList.appendChild(link);
        });
    } else {
        materialList.innerHTML = "<p>No study materials available for this subject.</p>";
    }
}
