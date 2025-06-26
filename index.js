document.addEventListener("DOMContentLoaded", () => {
const grid = document.getElementById("grid")

const projects = {
    project1: {
        name: "Top Animes",
        html: "/my-top-animes-homepage/index.html"

    },
    project2: "unknown",
    project3: "unknown",
    project4: "unknown",
    project5: "unknown",
    project6: "unknown",
    project7: "unknown",
    project8: "unknown",
    project9: "unknown",
    project10: "unknown",
    project11: "unknown",
    project12: "unknown",
    project13: "unknown",
    project14: "unknown",
    project15: "unknown",
    project16: "unknown",
    project17: "unknown",
}

for (let project in projects) {
    const name = projects[project].name
    const html = projects[project].html
    const a = document.createElement("a")
    a.href = `${html}`

    a.innerHTML = `<img class="folder-image" src="/closed-folder.png">${name}`

    grid.append(a)
}
})