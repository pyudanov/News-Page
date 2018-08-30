$(document).ready(function () {
    nytUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=Los+Angeles&sort=newest&api-key=406d1de9c90e4103989f78fa1dd5af6e`
    fetch(nytUrl)
        .then(function (data) {
            return data.json()
        })

        // snippets with hyperlinks
        .then(function (data) {
            // for (let i = 0; i<data.response.docs.length; i++)        
            // $('#headers').append(`<a href = "${data.response.docs[i].web_url}"> <li>${data.response.docs[i].snippet}</li></a><br>`) 

            // headlines with hyperlink    
            for (let k = 0; k < data.response.docs.length; k++)
                $('#text').append(`<a href = "${data.response.docs[k].web_url}"><li>${data.response.docs[k].headline.main}</li></a><br><br>`)


            //shows all url under multimedia folder

            for (let t = 0; t < data.response.docs.length; t++) {

                for (let m = 0; m < data.response.docs[t].multimedia.length; m++) {
                    if (data.response.docs[t].multimedia[m].legacy.xlarge) {
                        $('#url').append(`<li> <img src = "https://nytimes.com/${data.response.docs[t].multimedia[m].legacy.xlarge}"></li>`)
                    }
                }
            }
        })


})




