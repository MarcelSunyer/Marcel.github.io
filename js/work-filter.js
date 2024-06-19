const projects = [
    {
      name: "Project Name 1",
      role: "Illustration",
      imgSrc: "images/Alien_Extraction.jpg",
      category: "illustration",
      description: `This is a description for Project Name 1.`,
      tasks: `Task 1<br>Task 2<br>Task 3`,
      media: [
        { type: 'mp4', src: "images/projects/Code/Marcel Sunyer/Cutscenes.mp4", description: "Cutscenes" },
        { type: 'mp4', src: "images/projects/Code/Marcel Sunyer/Dialogue System.mp4", description: "Dialogue System" },
      ],
      social: {
        twitter: "",
        linkedin: "https://www.linkedin.com/in/marcel-sunyer-28910a133/",
        github: "https://github.com/MarcelSunyer",
        portfolio: "https://marcelsunyer.github.io/Marcel.github.io/",
        artstation: "",
        itchio: "https://marcelsunyer.itch.io/"
      }
    },
  ];
  
  const projectContainer = document.getElementById("project-container");
  
  projects.forEach((project) => {
    const card = document.createElement("div");
    card.classList.add("column-four", "filterDiv", project.category);
    card.innerHTML = `
      <div class="our-team" onclick="showPopup(${JSON.stringify(project).replace(/"/g, '&quot;')})">
        <div class="pic">
          <img src="${project.imgSrc}">
        </div>
        <div class="team-content">
          <h3 class="title">${project.name}</h3>
          <span class="post">${project.role}</span>
        </div>
      </div>
    `;
    projectContainer.appendChild(card);
  });
  
  filterSelection("all");
  
  function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
      w3RemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) {
        w3AddClass(x[i], "show");
      }
    }
  }
  
  function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
      }
    }
  }
  
  function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
  }
  
  function showPopup(project) {
    document.getElementById("popup-name").innerText = project.name;
    document.getElementById("popup-role").innerText = project.role;
    document.getElementById("popup-description").innerHTML = project.description.replace(/\\n/g, "<br>");
    document.getElementById("popup-tasks").innerHTML = project.tasks;
    document.getElementById("popup-img").src = project.imgSrc;
  
    document.getElementById("popup-social-icons").innerHTML = `
      <div class="social-icons">
        <a href="${project.social.linkedin || "#"}" target="_blank" class="${project.social.linkedin ? "" : "disabled"}"><i class="fab fa-linkedin"></i></a>
        <a href="${project.social.github || "#"}" target="_blank" class="${project.social.github ? "" : "disabled"}"><i class="fab fa-github"></i></a>
        <a href="${project.social.itchio || "#"}" target="_blank" class="${project.social.itchio ? "" : "disabled"}"><i class="fab fa-itch-io"></i></a>
        <a href="${project.social.portfolio || "#"}" target="_blank" class="${project.social.portfolio ? "" : "disabled"}"><i class="fas fa-user"></i></a>
      </div>
    `;
  
    const galleryContainer = document.getElementById("popup-gallery");
    galleryContainer.innerHTML = "";
    if (project.media && project.media.length > 0) {
      project.media.forEach((item) => {
        let mediaElement = document.createElement("div");
        mediaElement.classList.add("media-item");
        if (item.type === 'image') {
          mediaElement.innerHTML = `<img src="${item.src}" alt="${item.description}"><p>${item.description}</p>`;
        } else if (item.type === 'video') {
          mediaElement.innerHTML = `<video width="100%" controls><source src="${item.src}" type="video/mp4">Your browser does not support the video tag.</video><p>${item.description}</p>`;
        }
        galleryContainer.appendChild(mediaElement);
      });
    }
  
    // Calcular la posición del visor en la página
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const popupHeight = document.querySelector(".popup-content").offsetHeight;
    const topPosition = scrollTop + (windowHeight / 2) - (popupHeight / 2);
  
    // Ajustar la posición del popup dinámicamente
    const popup = document.getElementById("popup");
    popup.style.top = `${topPosition}px`;
    popup.style.display = "block";
  }
  
  function closePopup() {
    document.getElementById("popup").style.display = "none";
  }
  
  window.onclick = function (event) {
    var popup = document.getElementById("popup");
    if (event.target == popup) {
      popup.style.display = "none";
    }
  }