let url = "http://universities.hipolabs.com/search?country=India"; // Base URL for India

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let state = document.querySelector("input").value;
    console.log(state);

    let colArr = await getCollege(state);
    show(colArr);
});

function show(colArr) {
    let list = document.querySelector("#list");
    list.innerText = "";
    for (let col of colArr) {
        console.log(col.name);

        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getCollege(state) {
    try {
        let res = await axios.get(url); // Fetch all universities in India
        return res.data.filter(col => col["state-province"] === state); // Filter by state
    } catch (error) {
        console.log("Error", error);
        return [];
    }
}
