document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("grid")
    
    const projects = {
        project1: {
            name: "Top Three Anime",
            html: "/my-top-animes-homepage/index.html"
        },
        project2: {
            name: "&nbspunknown",
            html: ""
        },
        project3: {
            name: "&nbspunknown",
            html: ""

        },
        project4: {
            name: "&nbspunknown",
            html: ""
        },
        project5: {
            name: "&nbspunknown",
            html: ""
        },
        project6: {
            name: "&nbspunknown",
            html: ""
        },
        project7: {
            name: "&nbspunknown",
            html: ""
        },
        project8: {
            name: "&nbspunknown",
            html: ""
        },
        project9: {
            name: "&nbspunknown",
            html: ""
        },
        project10: {
            name: "&nbspunknown",
            html: ""
        },
        project11: {
            name: "&nbspunknown",
            html: ""
        }
    }

    for (let project in projects) {
        const name = projects[project].name
        const html = projects[project].html
        const a = document.createElement("a")
        a.href = `${html}`

        a.innerHTML = `<img class="folder-image" src="/closed-folder.png">${name}`

        grid.append(a)
    }

    const time = document.getElementById('time')

    function updateTime() {
    const now = new Date()
    const timeString = now.toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    })

    console.log(timeString)

    time.innerHTML = `${timeString}`
}

setInterval(updateTime, 1000)
})

