const skillsContent = document.querySelector('.skills-content')


const skillSet = {
    "Programming Languages": {
        "Java": 95,
        "Python": 70,
        "C": 80,
        "C++": 100,
        "HTML": 90,
        "CSS": 75,
        "JavaScript": 60,
        "Oracle SQL": 90
    },
    "Tools, Frameworks and Technologies": {
        "SpringBoot": 100,
        "Hibernate": 80,
        "Node.js": 45,
        "Express.js": 30,
        "Containerization (Docker)": 80,
        "Splunk": 95
    },
    "Conceptuals/Courses": {
        "Object Oriented Programming": 100, 
        "Data-Structures": 100,
        "Algorithms": 85,
        "Operating System": 70,
        "Machine Learning": 50,
        "Information Retrieval": 50,
        "Recommender Systems": 50,
        "Neural Networks": 30        
    }
}


for (let heading in skillSet){
    //create heading element and append to mainDiv
    const h4Element = document.createElement("h4");
    h4Element.innerText = heading;
    skillsContent.append(h4Element);


    //append items in column counts of 3 
    let itemcount = 0 ;
    let mainDiv = null;
    for (let item in skillSet[heading]){

        if(itemcount==0){
            mainDiv = document.createElement("div");
            mainDiv.classList.add("col-lg-6");
            mainDiv.setAttribute("data-aos", "fade-right");
            skillsContent.append(mainDiv);
        }
        
        //create progress class
        const progressDiv = document.createElement("div");
        progressDiv.classList.add("progress")
        const progressInnerHTML  = `<span class="skill">${item} <i class="val">${skillSet[heading][item]}%</i></span>
        <div class="progress-bar-wrap">
            <div class="progress-bar" role="progressbar" aria-valuenow="${skillSet[heading][item]}" aria-valuemin="0" aria-valuemax="100"></div>
        </div>`;
        progressDiv.innerHTML = progressInnerHTML;
        mainDiv.append(progressDiv);

        itemcount++;
        if(itemcount==3){
            itemcount = 0;
        };
    }
}
