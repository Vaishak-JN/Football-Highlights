// call function when page load
window.onload=football;

function football(){
    fetch("https://www.scorebat.com/video-api/v3/")
    .then(res=>res.json())
    .then(data=>{
        // for champions league data
        // Champions league has 8 groups from A-H
        // So consider for each group
        data.response.forEach(ele => {
            // for group A
            if(ele.competition==="CHAMPIONS LEAGUE: Group stage, Group A"){
                const ucl=document.querySelector(".ucl");
                const box=document.createElement("div");
                box.setAttribute("class","box")
                const title=document.createElement("h3");
                title.innerText=ele.title;
                ucl.appendChild(box)
                box.innerHTML=ele.videos[0].embed
                box.append(title)
            }
            // for group B
            if(ele.competition==="CHAMPIONS LEAGUE: Group stage, Group B"){
                const ucl=document.querySelector(".ucl");
                const box=document.createElement("div");
                box.setAttribute("class","box")
                const title=document.createElement("h3");
                title.innerText=ele.title;
                ucl.appendChild(box)
                box.innerHTML=ele.videos[0].embed
                box.append(title)
            }
            // for group C
            if(ele.competition==="CHAMPIONS LEAGUE: Group stage, Group C"){
                const ucl=document.querySelector(".ucl");
                const box=document.createElement("div");
                box.setAttribute("class","box")
                const title=document.createElement("h3");
                title.innerText=ele.title;
                ucl.appendChild(box)
                box.innerHTML=ele.videos[0].embed
                box.append(title)
            }
            // for group D
            if(ele.competition==="CHAMPIONS LEAGUE: Group stage, Group D"){
                const ucl=document.querySelector(".ucl");
                const box=document.createElement("div");
                box.setAttribute("class","box")
                const title=document.createElement("h3");
                title.innerText=ele.title;
                ucl.appendChild(box)
                box.innerHTML=ele.videos[0].embed
                box.append(title)
            }
            // for group E
            if(ele.competition==="CHAMPIONS LEAGUE: Group stage, Group E"){
                const ucl=document.querySelector(".ucl");
                const box=document.createElement("div");
                box.setAttribute("class","box")
                const title=document.createElement("h3");
                title.innerText=ele.title;
                ucl.appendChild(box)
                box.innerHTML=ele.videos[0].embed
                box.append(title)
            }
            // for group F
            if(ele.competition==="CHAMPIONS LEAGUE: Group stage, Group F"){
                const ucl=document.querySelector(".ucl");
                const box=document.createElement("div");
                box.setAttribute("class","box")
                const title=document.createElement("h3");
                title.innerText=ele.title;
                ucl.appendChild(box)
                box.innerHTML=ele.videos[0].embed
                box.append(title)
            }
            // // for group G
            if(ele.competition==="CHAMPIONS LEAGUE: Group stage, Group G"){
                const ucl=document.querySelector(".ucl");
                const box=document.createElement("div");
                box.setAttribute("class","box")
                const title=document.createElement("h3");
                title.innerText=ele.title;
                ucl.appendChild(box)
                box.innerHTML=ele.videos[0].embed
                box.append(title)
            }
            // for group H
            if(ele.competition==="CHAMPIONS LEAGUE: Group stage, Group H"){
                const ucl=document.querySelector(".ucl");
                const box=document.createElement("div");
                box.setAttribute("class","box")
                const title=document.createElement("h3");
                title.innerText=ele.title;
                ucl.appendChild(box)
                box.innerHTML=ele.videos[0].embed
                box.append(title)
            }
            
        });
        // for EPL
        data.response.forEach(ele => {
            if(ele.competition==="ENGLAND: Premier League"){
                const epl=document.querySelector(".epl");
                const box=document.createElement("div");
                box.setAttribute("class","box");
                const title=document.createElement("h3");
                title.innerText=ele.title;
                epl.appendChild(box)
                box.innerHTML=ele.videos[0].embed
                box.append(title)
            }
        });
        // for Laliga
        data.response.forEach(ele => {
            if(ele.competition==="SPAIN: La Liga"){
                const laliga=document.querySelector(".laliga");
                const box=document.createElement("div");
                box.setAttribute("class","box")
                const title=document.createElement("h3");
                title.innerText=ele.title;
                laliga.appendChild(box)
                box.innerHTML=ele.videos[0].embed
                box.append(title)
            }
        });
        // for bundesliga
        data.response.forEach(ele => {
            if(ele.competition==="GERMANY: Bundesliga"){
                const bundlga=document.querySelector(".bundlga");
                const box=document.createElement("div");
                box.setAttribute("class","box")
                const title=document.createElement("h3");
                title.innerText=ele.title;
                bundlga.appendChild(box)
                box.innerHTML=ele.videos[0].embed
                box.append(title)
            }
        });
        // for serie A
        data.response.forEach(ele => {
            if(ele.competition==="ITALY: Serie A"){
                const serieA=document.querySelector(".serieA");
                const box=document.createElement("div");
                box.setAttribute("class","box")
                const title=document.createElement("h3");
                title.innerText=ele.title;
                serieA.appendChild(box)
                box.innerHTML=ele.videos[0].embed
                box.append(title)
            }
        });
        // for europa league
        // data.response.forEach(ele => {
        //     if(ele.competition===""){
        //         const container=document.querySelector(".container");
        //         const box=document.createElement("div");
        //         box.setAttribute("class","box")
                // const title=document.createElement("h3");
                // title.innerText=ele.title;
        //         container.appendChild(box)
        //         box.innerHTML=ele.videos[0].embed
                // box.append(title)
        //     }
        // });
        // for french league
        data.response.forEach(ele => {
            if(ele.competition==="FRANCE: Ligue 1"){
                const ligue1=document.querySelector(".ligue-1");
                const box=document.createElement("div");
                box.setAttribute("class","box")
                const title=document.createElement("h3");
                title.innerText=ele.title;
                ligue1.appendChild(box)
                box.innerHTML=ele.videos[0].embed
                box.append(title)
            }
        });
        // for efl
        data.response.forEach(ele => {
            if(ele.competition==="ENGLAND: League Cup"){
                const efl=document.querySelector(".efl");
                const box=document.createElement("div");
                box.setAttribute("class","box")
                const title=document.createElement("h3");
                title.innerText=ele.title;
                efl.appendChild(box)
                box.innerHTML=ele.videos[0].embed
                box.append(title)
            }
        });
        // if video content is not available
        // remove league logo and container space
        if(document.querySelector(".ucl").innerHTML==""){
            document.getElementById("ucl").style.display="none";
            document.querySelector(".ucl-li").style.display="none"
            document.querySelector(".ucl").style.display="none"
        }
        if(document.querySelector(".epl").innerHTML==""){
            document.getElementById("epl").style.display="none";
            document.querySelector(".epl-li").style.display="none"
            document.querySelector(".epl").style.display="none"
        }
        if(document.querySelector(".laliga").innerHTML==""){
            document.getElementById("laliga").style.display="none";
            document.querySelector(".laliga-li").style.display="none"
            document.querySelector(".laliga").style.display="none"
        }
        if(document.querySelector(".bundlga").innerHTML==""){
            document.getElementById("bundlga").style.display="none";
            document.querySelector(".bundlga-li").style.display="none"
            document.querySelector(".bundlga").style.display="none"
        }
        if(document.querySelector(".serieA").innerHTML==""){
            document.getElementById("serieA").style.display="none";
            document.querySelector(".serieA-li").style.display="none"
            document.querySelector(".serieA").style.display="none"
        }
        if(document.querySelector(".ligue-1").innerHTML==""){
            document.getElementById("ligue-1").style.display="none";
            document.querySelector(".ligue-1-li").style.display="none"
            document.querySelector(".ligue-1").style.display="none"
        }
        if(document.querySelector(".efl").innerHTML==""){
            document.getElementById("efl").style.display="none";
            document.querySelector(".efl-li").style.display="none"
            document.querySelector(".efl").style.display="none"
        }
    }).catch(err=>console.log(err,"ERROR"))
}
